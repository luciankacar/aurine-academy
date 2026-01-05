import { CennikTemplate } from '@/data/cennik-templates';

interface GalleryModeProps {
  templates: CennikTemplate[];
  onSelectTemplate: (template: CennikTemplate) => void;
}

export const GalleryMode = ({ templates, onSelectTemplate }: GalleryModeProps) => {
  return (
    <div className="space-y-3">
      <div>
        <h3 className="text-xs font-semibold text-foreground">Wszystkie szablony</h3>
        <p className="text-[10px] text-muted-foreground">Wybierz szablon do edycji</p>
      </div>

      <div className="grid grid-cols-2 gap-3">
        {templates.map((template) => (
          <button
            key={template.id}
            onClick={() => onSelectTemplate(template)}
            className="group relative overflow-hidden rounded-xl border border-border bg-card transition-all hover:border-primary/50 hover:shadow-md"
          >
            {/* Preview thumbnail */}
            <div
              className="aspect-square w-full relative"
              style={{ backgroundColor: template.backgroundColor }}
            >
              {/* Simple preview rendering */}
              <div className="absolute inset-0 flex flex-col items-center justify-center p-3">
                {template.elements
                  .filter((el) => el.type === 'text' && el.id === 'title')
                  .map((el) => (
                    <span
                      key={el.id}
                      className="text-center font-bold"
                      style={{
                        color: template.accentColor,
                        fontSize: '14px',
                      }}
                    >
                      {el.defaultValue}
                    </span>
                  ))}
                {/* Show a few service lines */}
                <div className="mt-2 space-y-1 w-full px-2">
                  {template.elements
                    .filter((el) => el.id.startsWith('service'))
                    .slice(0, 2)
                    .map((el) => (
                      <div
                        key={el.id}
                        className="flex justify-between text-[8px]"
                        style={{ color: el.color || '#ffffff' }}
                      >
                        <span className="truncate">{el.defaultValue}</span>
                      </div>
                    ))}
                </div>
              </div>
            </div>

            {/* Template info */}
            <div className="p-2 border-t border-border">
              <h4 className="text-[11px] font-medium text-foreground">{template.name}</h4>
              <p className="text-[9px] text-muted-foreground line-clamp-1">
                {template.description}
              </p>
            </div>
          </button>
        ))}
      </div>
    </div>
  );
};
