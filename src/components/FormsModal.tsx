import React, { useState, useEffect } from 'react';
import { X, ExternalLink, Calendar, MessageSquare, FileText, CheckCircle2 } from 'lucide-react';
import { INTEREST_FORMS } from '../data/studiosData';

interface FormsModalProps {
  isOpen: boolean;
  initialTab?: string;
  onClose: () => void;
}

export const FormsModal: React.FC<FormsModalProps> = ({
  isOpen,
  initialTab = 'visit-editor',
  onClose,
}) => {
  // Normalize legacy tab names
  const normalizeTab = (tab: string) => {
    if (tab === 'visit') return 'visit-editor';
    if (tab === 'catalog') return 'catalog-pricing';
    return tab;
  };

  const [activeTab, setActiveTab] = useState<string>(normalizeTab(initialTab));

  useEffect(() => {
    setActiveTab(normalizeTab(initialTab));
  }, [initialTab, isOpen]);

  // Handle escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const currentForm = INTEREST_FORMS.find((f) => f.id === activeTab) || INTEREST_FORMS[0];

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-stone-950/85 backdrop-blur-md animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div 
        className="relative w-full max-w-3xl bg-stone-900 rounded-2xl border border-stone-800 shadow-2xl overflow-hidden flex flex-col max-h-[94vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="p-4 border-b border-stone-800 bg-stone-950 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          
          {/* Switch tabs for all 3 interest links */}
          <div className="flex flex-wrap items-center gap-1.5 p-1 bg-stone-900 rounded-xl border border-stone-800">
            {INTEREST_FORMS.map((form, idx) => {
              const icons = [Calendar, MessageSquare, FileText];
              const Icon = icons[idx % icons.length];
              const isActive = activeTab === form.id;
              
              return (
                <button
                  key={form.id}
                  onClick={() => setActiveTab(form.id)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all flex items-center gap-1.5 ${
                    isActive
                      ? 'bg-amber-500 text-stone-950 shadow-sm'
                      : 'text-stone-400 hover:text-stone-200'
                  }`}
                >
                  <Icon className="w-3.5 h-3.5" />
                  <span className="truncate">{form.shortLabel}</span>
                </button>
              );
            })}
          </div>

          <div className="flex items-center justify-end gap-2 shrink-0">
            <a
              href={currentForm.url}
              target="_blank"
              rel="noopener noreferrer"
              className="px-2.5 py-1 text-xs text-amber-400 hover:text-amber-300 rounded-lg hover:bg-stone-900 transition-colors flex items-center gap-1 font-medium"
              title="Abrir este formulário em aba externa"
            >
              <span>Abrir no Google Forms</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
            <button
              onClick={onClose}
              className="p-1.5 text-stone-400 hover:text-stone-100 rounded-lg hover:bg-stone-800 transition-colors"
              aria-label="Fechar"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Informative strip */}
        <div className="px-4 py-2 bg-stone-950/80 border-b border-stone-800/80 flex items-center justify-between text-xs text-stone-300">
          <span className="font-medium text-stone-200 truncate mr-2">
            {currentForm.label}
          </span>
          <span className="text-[11px] font-mono text-amber-400 shrink-0">
            {currentForm.badge}
          </span>
        </div>

        {/* Form Body with iframe */}
        <div className="flex-1 w-full bg-white overflow-hidden">
          <iframe
            key={currentForm.id}
            src={currentForm.embedUrl}
            width="100%"
            height="100%"
            frameBorder="0"
            marginHeight={0}
            marginWidth={0}
            title={currentForm.label}
            className="w-full h-[580px]"
          >
            Carregando formulário oficial...
          </iframe>
        </div>

        {/* Footer */}
        <div className="px-4 py-2.5 bg-stone-950 border-t border-stone-800 flex items-center justify-between text-[11px] text-stone-400">
          <span className="flex items-center gap-1.5">
            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
            <span>Dados protegidos e enviados diretamente para a equipe oficial</span>
          </span>
          <button
            onClick={onClose}
            className="text-stone-300 hover:text-white font-medium"
          >
            Fechar
          </button>
        </div>
      </div>
    </div>
  );
};
