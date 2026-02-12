import React from 'react';
import { PromptConfig } from '../types';
import { CheckCircle2, Circle } from 'lucide-react';

interface PromptPreviewProps {
  config: PromptConfig;
}

export const PromptPreview: React.FC<PromptPreviewProps> = ({ config }) => {
  const items = [
    { label: "Série", done: true },
    { label: "Disciplina", done: true },
    { label: "Formato", done: true },
    { label: "Nível Cognitivo", done: true },
    { label: "Objetivo", done: !!config.studentDescription.trim() },
    { label: "Habilidades", done: config.bnccSkills.length > 0 },
    { label: "Conteúdo Base", done: !!config.contextContent.trim() },
  ];
  const completedCount = items.filter(i => i.done).length;
  const pct = Math.round((completedCount / items.length) * 100);

  return (
    <div className="bg-card p-4 rounded-lg shadow-sm border border-border flex-shrink-0">
      <div className="flex items-center justify-between mb-3">
        <span className="text-xs font-bold text-muted-foreground uppercase tracking-wider">Completude</span>
        <span className={`text-xs font-bold ${pct === 100 ? 'text-emerald-600 dark:text-emerald-400' : 'text-primary'}`}>
          {completedCount}/{items.length}
        </span>
      </div>
      <div className="w-full bg-muted rounded-full h-2 mb-3">
        <div
          className={`h-2 rounded-full transition-all duration-500 ${pct === 100 ? 'bg-emerald-500' : 'bg-primary'}`}
          style={{ width: `${pct}%` }}
        />
      </div>
      <div className="space-y-1.5">
        {items.map(item => (
          <div key={item.label} className="flex items-center gap-2">
            {item.done
              ? <CheckCircle2 className="w-4 h-4 text-emerald-500 dark:text-emerald-400 flex-shrink-0" />
              : <Circle className="w-4 h-4 text-border flex-shrink-0" />
            }
            <span className={`text-sm ${item.done ? 'text-foreground' : 'text-muted-foreground'}`}>{item.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
};