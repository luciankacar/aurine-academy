import { useTheme } from "@/contexts/ThemeContext";
import { MockupData } from "@/types/courses";
import { ThumbsUp, MessageSquare, Heart, MessageCircle, Share2, Bookmark, MoreHorizontal, Camera, Video, Calendar } from "lucide-react";
import { useEffect, useState } from "react";

interface MockupPreviewProps {
  data: MockupData;
  className?: string;
}

const MockupPreview = ({ data, className = "" }: MockupPreviewProps) => {
  const { resolvedTheme } = useTheme();
  const isDark = resolvedTheme === "dark";
  const [salonName, setSalonName] = useState("Salon Piękności Aurora");
  
  useEffect(() => {
    const savedProfile = localStorage.getItem("aurine_profile");
    if (savedProfile) {
      try {
        const profile = JSON.parse(savedProfile);
        if (profile.salonName) setSalonName(profile.salonName);
      } catch (e) {}
    }
  }, []);

  const name = data.profileName || salonName;
  
  // Transliterate Polish characters to ASCII for username
  const transliterate = (str: string) => {
    const map: Record<string, string> = {
      'ą': 'a', 'ć': 'c', 'ę': 'e', 'ł': 'l', 'ń': 'n', 
      'ó': 'o', 'ś': 's', 'ź': 'z', 'ż': 'z'
    };
    return str.replace(/[ąćęłńóśźż]/g, char => map[char] || char);
  };
  
  const user = data.username || transliterate(name.toLowerCase()).replace(/\s+/g, '_').replace(/[^a-z0-9_]/g, '').slice(0, 20);

  // Compact Facebook mockup
  if (data.platform === 'facebook') {
    return (
      <div className={`rounded-lg overflow-hidden text-xs ${isDark ? 'bg-[#242526]' : 'bg-white'} shadow-sm border ${isDark ? 'border-neutral-700' : 'border-gray-200'} ${className}`}>
        {(data.variant === 'profile' || data.variant === 'profile-header') ? (
          <>
            {/* Cover */}
            <div className="h-16 bg-gradient-to-r from-pink-400 to-rose-500 relative">
              <div className="absolute -bottom-5 left-3">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-pink-400 to-rose-500 border-2 border-white dark:border-[#242526] flex items-center justify-center text-white font-bold text-sm shadow">
                  {name.charAt(0).toUpperCase()}
                </div>
              </div>
            </div>
            {/* Info */}
            <div className="pt-7 px-3 pb-3">
              <p className={`font-semibold ${isDark ? 'text-white' : 'text-gray-900'}`}>{name}</p>
              <p className={`text-[10px] ${isDark ? 'text-gray-500' : 'text-gray-500'}`}>@{user} · {data.followers || '847'} obserwujących</p>
              <div className="flex gap-1.5 mt-2">
                <button className="flex-1 bg-[#1877F2] text-white px-2 py-1 rounded text-[10px] font-medium flex items-center justify-center gap-1">
                  <ThumbsUp className="w-3 h-3" /> Polub
                </button>
                <button className={`flex-1 px-2 py-1 rounded text-[10px] font-medium ${isDark ? 'bg-[#3A3B3C] text-white' : 'bg-gray-100 text-gray-700'}`}>
                  <MessageSquare className="w-3 h-3 inline mr-1" /> Wiadomość
                </button>
              </div>
              {/* Post box */}
              <div className={`mt-2 p-2 rounded ${isDark ? 'bg-[#3A3B3C]' : 'bg-gray-50'}`}>
                <div className="flex items-center gap-2">
                  <div className="w-6 h-6 rounded-full bg-gradient-to-br from-pink-400 to-rose-500 flex items-center justify-center text-white text-[10px] font-bold">
                    {name.charAt(0)}
                  </div>
                  <div className={`flex-1 py-1 px-2 rounded-full text-[10px] ${isDark ? 'bg-[#242526] text-gray-500' : 'bg-white text-gray-400'}`}>
                    O czym myślisz?
                  </div>
                </div>
                <div className={`flex justify-around mt-2 pt-2 border-t text-[10px] ${isDark ? 'border-[#3E4042] text-gray-400' : 'border-gray-200 text-gray-500'}`}>
                  <span className="flex items-center gap-1"><Video className="w-3 h-3 text-red-500" /> Wideo</span>
                  <span className="flex items-center gap-1"><Camera className="w-3 h-3 text-green-500" /> Zdjęcie</span>
                  <span className="flex items-center gap-1"><Calendar className="w-3 h-3 text-amber-500" /> Event</span>
                </div>
              </div>
            </div>
          </>
        ) : (
          // Post variant
          <>
            <div className="p-2 flex items-center gap-2">
              <div className="w-7 h-7 rounded-full bg-gradient-to-br from-pink-400 to-rose-500 flex items-center justify-center text-white text-[10px] font-bold">
                {name.charAt(0)}
              </div>
              <div className="flex-1">
                <p className={`font-medium text-[11px] ${isDark ? 'text-white' : 'text-gray-900'}`}>{name}</p>
                <p className={`text-[9px] ${isDark ? 'text-gray-500' : 'text-gray-500'}`}>2 godz.</p>
              </div>
            </div>
            {data.postCaption && <p className={`px-2 pb-2 text-[11px] whitespace-pre-line ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>{data.postCaption}</p>}
            <div className={`aspect-video flex items-center justify-center ${isDark ? 'bg-neutral-800' : 'bg-gray-100'}`}>
              <Camera className={`w-6 h-6 ${isDark ? 'text-neutral-600' : 'text-gray-300'}`} />
            </div>
            <div className={`px-2 py-1.5 flex justify-around border-t text-[10px] ${isDark ? 'border-[#3E4042] text-gray-400' : 'border-gray-100 text-gray-500'}`}>
              <span className="flex items-center gap-1"><ThumbsUp className="w-3 h-3" /> {data.postLikes || '24'}</span>
              <span className="flex items-center gap-1"><MessageSquare className="w-3 h-3" /> {data.postComments || '5'}</span>
            </div>
          </>
        )}
        {data.description && <p className={`text-[10px] text-center py-2 px-2 border-t ${isDark ? 'border-neutral-700 text-gray-500' : 'border-gray-100 text-gray-400'}`}>{data.description}</p>}
      </div>
    );
  }

  // Compact Instagram mockup
  const isStory = data.variant === 'story';
  const isReel = data.variant === 'reel';
  
  // Story variant - completely different layout, no outer container
  if (isStory) {
    return (
      <div className={`rounded-lg overflow-hidden text-xs ${isDark ? 'bg-black' : 'bg-white'} shadow-sm border ${isDark ? 'border-neutral-800' : 'border-gray-200'} ${className}`}>
        {/* Story header */}
        <div className={`px-3 py-2 flex items-center gap-2 border-b ${isDark ? 'border-neutral-800' : 'border-gray-100'}`}>
          <div className="w-8 h-8 rounded-full bg-gradient-to-br from-pink-400 via-rose-500 to-orange-400 p-0.5">
            <div className={`w-full h-full rounded-full ${isDark ? 'bg-black' : 'bg-white'} flex items-center justify-center`}>
              <div className="w-full h-full rounded-full bg-gradient-to-br from-pink-400 to-rose-500 flex items-center justify-center text-white text-xs font-bold">
                {name.charAt(0)}
              </div>
            </div>
          </div>
          <div>
            <p className={`font-medium text-[11px] ${isDark ? 'text-white' : 'text-gray-900'}`}>{user}</p>
            <p className={`text-[9px] ${isDark ? 'text-gray-500' : 'text-gray-500'}`}>Twoja relacja</p>
          </div>
        </div>
        {/* Story content - same aspect as post but with story styling */}
        <div className="aspect-square bg-gradient-to-br from-pink-500 via-rose-500 to-orange-400 relative flex items-center justify-center">
          <Camera className="w-10 h-10 text-white/30" />
          {data.storyType === 'poll' && (
            <div className="absolute bottom-8 left-3 right-3 bg-white/20 backdrop-blur-sm rounded-lg p-2">
              <p className="text-white text-[10px] font-medium text-center mb-1.5">Który kolor?</p>
              <div className="flex gap-1.5">
                <div className="flex-1 bg-white/30 rounded py-1.5 text-center text-white text-[9px]">💅 Róż</div>
                <div className="flex-1 bg-white/30 rounded py-1.5 text-center text-white text-[9px]">❤️ Czerwień</div>
              </div>
            </div>
          )}
          {data.storyType === 'question' && (
            <div className="absolute bottom-8 left-3 right-3 bg-white/20 backdrop-blur-sm rounded-lg p-2">
              <p className="text-white text-[10px] font-medium text-center">Zadaj pytanie...</p>
            </div>
          )}
          {/* Story indicator dots */}
          <div className="absolute top-2 left-2 right-2 h-0.5 bg-white/30 rounded-full">
            <div className="h-full w-1/3 bg-white rounded-full"></div>
          </div>
        </div>
        {data.description && <p className={`text-[10px] text-center py-2 px-2 border-t ${isDark ? 'border-neutral-800 text-gray-500' : 'border-gray-100 text-gray-400'}`}>{data.description}</p>}
      </div>
    );
  }

  // Reel variant
  if (isReel) {
    return (
      <div className={`rounded-lg overflow-hidden text-xs ${isDark ? 'bg-black' : 'bg-white'} shadow-sm border ${isDark ? 'border-neutral-800' : 'border-gray-200'} ${className}`}>
        {/* Reel header */}
        <div className={`px-3 py-2 flex items-center gap-2 border-b ${isDark ? 'border-neutral-800' : 'border-gray-100'}`}>
          <div className="w-8 h-8 rounded-full bg-gradient-to-br from-violet-500 to-fuchsia-500 p-0.5">
            <div className={`w-full h-full rounded-full ${isDark ? 'bg-black' : 'bg-white'} flex items-center justify-center`}>
              <div className="w-full h-full rounded-full bg-gradient-to-br from-violet-500 to-fuchsia-500 flex items-center justify-center text-white text-xs font-bold">
                {name.charAt(0)}
              </div>
            </div>
          </div>
          <div>
            <p className={`font-medium text-[11px] ${isDark ? 'text-white' : 'text-gray-900'}`}>{user}</p>
            <p className={`text-[9px] ${isDark ? 'text-gray-500' : 'text-gray-500'}`}>Rolka</p>
          </div>
        </div>
        {/* Reel content */}
        <div className="aspect-square bg-gradient-to-br from-violet-600 via-purple-600 to-fuchsia-500 relative flex items-center justify-center">
          {/* Play button */}
          <div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
            <Video className="w-6 h-6 text-white ml-0.5" />
          </div>
          {/* Reel controls on right */}
          <div className="absolute right-3 bottom-3 flex flex-col gap-2 items-center">
            <div className="flex flex-col items-center gap-0.5">
              <Heart className="w-5 h-5 text-white drop-shadow-sm" />
              <span className="text-white text-[8px]">38</span>
            </div>
            <div className="flex flex-col items-center gap-0.5">
              <MessageCircle className="w-5 h-5 text-white drop-shadow-sm" />
              <span className="text-white text-[8px]">7</span>
            </div>
          </div>
          {/* Caption at bottom */}
          <div className="absolute bottom-3 left-3 right-12">
            <p className="text-white text-[10px] font-medium drop-shadow-sm">{user}</p>
            <p className="text-white/80 text-[8px] mt-0.5 line-clamp-2">Metamorfoza ✨ #nails</p>
          </div>
        </div>
        {data.description && <p className={`text-[10px] text-center py-2 px-2 border-t ${isDark ? 'border-neutral-800 text-gray-500' : 'border-gray-100 text-gray-400'}`}>{data.description}</p>}
      </div>
    );
  }
  
  return (
    <div className={`rounded-lg overflow-hidden text-xs ${isDark ? 'bg-black' : 'bg-white'} shadow-sm border ${isDark ? 'border-neutral-800' : 'border-gray-200'} ${className}`}>
      {(data.variant === 'profile' || data.variant === 'profile-header') ? (
        <>
          {/* Header */}
          <div className={`px-3 py-2 flex items-center justify-between border-b ${isDark ? 'border-neutral-800' : 'border-gray-100'}`}>
            <span className={`font-semibold text-[11px] ${isDark ? 'text-white' : 'text-gray-900'}`}>{user}</span>
            <MoreHorizontal className={`w-4 h-4 ${isDark ? 'text-white' : 'text-gray-900'}`} />
          </div>
          {/* Profile */}
          <div className="p-3">
            <div className="flex items-center gap-4 mb-3">
              <div className="w-14 h-14 rounded-full bg-gradient-to-br from-pink-400 via-rose-500 to-orange-400 p-0.5">
                <div className={`w-full h-full rounded-full ${isDark ? 'bg-black' : 'bg-white'} p-0.5`}>
                  <div className="w-full h-full rounded-full bg-gradient-to-br from-pink-400 to-rose-500 flex items-center justify-center text-white font-bold text-sm">
                    {name.charAt(0)}
                  </div>
                </div>
              </div>
              <div className="flex-1 flex justify-around text-center">
                <div><p className={`font-semibold text-[11px] ${isDark ? 'text-white' : 'text-gray-900'}`}>{data.posts || '32'}</p><p className={`text-[9px] ${isDark ? 'text-gray-500' : 'text-gray-500'}`}>postów</p></div>
                <div><p className={`font-semibold text-[11px] ${isDark ? 'text-white' : 'text-gray-900'}`}>{data.followers || '487'}</p><p className={`text-[9px] ${isDark ? 'text-gray-500' : 'text-gray-500'}`}>obserwujących</p></div>
                <div><p className={`font-semibold text-[11px] ${isDark ? 'text-white' : 'text-gray-900'}`}>{data.following || '156'}</p><p className={`text-[9px] ${isDark ? 'text-gray-500' : 'text-gray-500'}`}>obserwuje</p></div>
              </div>
            </div>
            <p className={`font-semibold text-[11px] ${isDark ? 'text-white' : 'text-gray-900'}`}>{name}</p>
            <p className={`text-[10px] ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>{data.bio || '💅 Stylizacja paznokci\n📍 Toruń'}</p>
            <div className="flex gap-1.5 mt-2">
              <button className={`flex-1 py-1 rounded text-[10px] font-medium ${isDark ? 'bg-[#363636] text-white' : 'bg-gray-100 text-gray-700'}`}>Edytuj profil</button>
              <button className={`flex-1 py-1 rounded text-[10px] font-medium ${isDark ? 'bg-[#363636] text-white' : 'bg-gray-100 text-gray-700'}`}>Udostępnij</button>
            </div>
          </div>
          {/* Highlights */}
          <div className={`px-3 py-2 flex gap-3 overflow-x-auto border-t ${isDark ? 'border-neutral-800' : 'border-gray-100'}`}>
            {['Prace', 'Opinie', 'Cennik'].map(h => (
              <div key={h} className="flex flex-col items-center">
                <div className={`w-10 h-10 rounded-full ${isDark ? 'bg-neutral-900 border-neutral-700' : 'bg-gray-50 border-gray-200'} border flex items-center justify-center text-sm`}>💅</div>
                <span className={`text-[9px] mt-0.5 ${isDark ? 'text-white' : 'text-gray-900'}`}>{h}</span>
              </div>
            ))}
          </div>
        </>
      ) : (
        // Post
        <>
          <div className="p-2 flex items-center gap-2">
            <div className="w-6 h-6 rounded-full bg-gradient-to-br from-pink-400 to-rose-500 flex items-center justify-center text-white text-[9px] font-bold">{name.charAt(0)}</div>
            <span className={`font-medium text-[11px] ${isDark ? 'text-white' : 'text-gray-900'}`}>{user}</span>
          </div>
          {data.postCaption && <p className={`px-2 pb-1 text-[10px] whitespace-pre-line ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>{data.postCaption}</p>}
          <div className={`aspect-square flex items-center justify-center ${isDark ? 'bg-neutral-900' : 'bg-gray-100'}`}>
            <Camera className={`w-8 h-8 ${isDark ? 'text-neutral-700' : 'text-gray-300'}`} />
          </div>
          <div className="p-2 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Heart className={`w-4 h-4 ${isDark ? 'text-white' : 'text-gray-900'}`} />
              <MessageCircle className={`w-4 h-4 ${isDark ? 'text-white' : 'text-gray-900'}`} />
              <Share2 className={`w-4 h-4 ${isDark ? 'text-white' : 'text-gray-900'}`} />
            </div>
            <Bookmark className={`w-4 h-4 ${isDark ? 'text-white' : 'text-gray-900'}`} />
          </div>
          <div className="px-2 pb-2">
            <p className={`font-semibold text-[10px] ${isDark ? 'text-white' : 'text-gray-900'}`}>{data.postLikes || '32'} polubień</p>
          </div>
        </>
      )}
      {data.description && <p className={`text-[10px] text-center py-2 px-2 border-t ${isDark ? 'border-neutral-800 text-gray-500' : 'border-gray-100 text-gray-400'}`}>{data.description}</p>}
    </div>
  );
};

export default MockupPreview;
