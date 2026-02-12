import React, { useState, useMemo } from 'react';
import { PromptConfig, SchoolGrade, Subject, ExamType, QuestionFormat, BloomLevel } from '../types';
import { GraduationCap, Target, FileText, Hash, ListChecks, Search, X, Plus, Lightbulb, Wrench, Microscope, Scale, Sparkles, ClipboardList, ChevronDown, Wand2, Image as ImageIcon, Camera } from 'lucide-react';
import { CustomSelect } from './CustomSelect';
import { BNCC_PORTUGUESE_SKILLS, BNCC_MATHEMATICS_SKILLS, SAEB_PORTUGUESE_SKILLS, SAEB_MATHEMATICS_SKILLS, SPAECE_PORTUGUESE_SKILLS_1ANO, SPAECE_PORTUGUESE_SKILLS_2ANO, SPAECE_PORTUGUESE_SKILLS_3ANO, SPAECE_MATHEMATICS_SKILLS, SkillGroup } from '../data/skills';

interface PromptFormProps {
  config: PromptConfig;
  onChange: (newConfig: PromptConfig) => void;
}

// Lucide icons for Bloom levels
const BLOOM_META: Record<string, { icon: React.ElementType; activeColor: string; hint: string }> = {
  [BloomLevel.AUTO]: { icon: Wand2, activeColor: "bg-primary/10 text-primary border-primary/30 ring-primary/40", hint: "A IA avalia e sugere o melhor nível" },
  [BloomLevel.LEMBRAR]: { icon: ClipboardList, activeColor: "bg-slate-100 text-slate-700 border-slate-300 ring-slate-400", hint: "Recordar, listar, definir" },
  [BloomLevel.ENTENDER]: { icon: Lightbulb, activeColor: "bg-sky-50 text-sky-700 border-sky-300 ring-sky-400", hint: "Interpretar, resumir, explicar" },
  [BloomLevel.APLICAR]: { icon: Wrench, activeColor: "bg-emerald-50 text-emerald-700 border-emerald-300 ring-emerald-400", hint: "Resolver, usar, executar" },
  [BloomLevel.ANALISAR]: { icon: Microscope, activeColor: "bg-violet-50 text-violet-700 border-violet-300 ring-violet-400", hint: "Diferenciar, organizar, atribuir" },
  [BloomLevel.AVALIAR]: { icon: Scale, activeColor: "bg-amber-50 text-amber-700 border-amber-300 ring-amber-400", hint: "Criticar, justificar, argumentar" },
  [BloomLevel.CRIAR]: { icon: Sparkles, activeColor: "bg-rose-50 text-rose-700 border-rose-300 ring-rose-400", hint: "Gerar, planejar, produzir" },
};

export const PromptForm: React.FC<PromptFormProps> = ({ config, onChange }) => {
  const [manualSkillInput, setManualSkillInput] = useState("");
  const [skillsExpanded, setSkillsExpanded] = useState(false);
  const [showSkillsModal, setShowSkillsModal] = useState(false);
  const [skillSearchTerm, setSkillSearchTerm] = useState("");

  const handleChange = (field: keyof PromptConfig, value: any) => {
    onChange({ ...config, [field]: value });
  };

  const isPortuguese = config.subject === Subject.PORTUGUES;
  const isMathematics = config.subject === Subject.MATEMATICA;
  const isOtherSubject = config.subject === Subject.OUTRA;

  const isFirstGrade = config.grade === SchoolGrade.PRIMEIRA_SERIE;
  const isSecondGrade = config.grade === SchoolGrade.SEGUNDA_SERIE;
  const isThirdGrade = config.grade === SchoolGrade.TERCEIRA_SERIE;

  let availableSkills: SkillGroup[] = [];
  if (config.examType !== ExamType.LIVRE && !isOtherSubject) {
    if (config.examType === ExamType.BNCC) {
      if (isPortuguese) availableSkills = BNCC_PORTUGUESE_SKILLS;
      if (isMathematics) availableSkills = BNCC_MATHEMATICS_SKILLS;
    }
    else if (config.examType === ExamType.SAEB) {
      if (isThirdGrade) {
        if (isPortuguese) availableSkills = SAEB_PORTUGUESE_SKILLS;
        if (isMathematics) availableSkills = SAEB_MATHEMATICS_SKILLS;
      }
    }
    else if (config.examType === ExamType.SPAECE) {
      if (isPortuguese) {
        if (isFirstGrade) availableSkills = SPAECE_PORTUGUESE_SKILLS_1ANO;
        else if (isSecondGrade) availableSkills = SPAECE_PORTUGUESE_SKILLS_2ANO;
        else if (isThirdGrade) availableSkills = SPAECE_PORTUGUESE_SKILLS_3ANO;
      }
      else if (isMathematics) { availableSkills = SPAECE_MATHEMATICS_SKILLS; }
    }
  }

  const hasSkillsData = availableSkills.length > 0;

  // Filter skills for modal based on search term
  const modalSearchTerm = skillSearchTerm.toLowerCase().trim();
  const filteredModalSkills = useMemo(() => {
    if (!modalSearchTerm) return availableSkills;
    return availableSkills.map(group => ({
      ...group,
      skills: group.skills.filter(skill =>
        skill.description.toLowerCase().includes(modalSearchTerm) ||
        skill.code.toLowerCase().includes(modalSearchTerm)
      )
    })).filter(group => group.skills.length > 0);
  }, [availableSkills, modalSearchTerm]);

  // Suggestions for "O que o aluno deve fazer" — merge Portuguese and Math skills into quick suggestions
  const quickSuggestions = useMemo(() => {
    const suggestions = [
      "Interpretar texto",
      "Inferir sentido de palavra",
      "Identificar tema central",
      "Reconhecer gênero textual",
      "Localizar informação explícita",
      "Distinguir fato de opinião",
      "Resolver equação",
      "Calcular área",
      "Interpretar gráfico",
      "Analisar tabela",
      "Resolver problema",
      "Calcular probabilidade",
    ];
    const desc = config.studentDescription.toLowerCase().trim();
    if (!desc) return [];
    return suggestions.filter(s => s.toLowerCase().includes(desc)).slice(0, 4);
  }, [config.studentDescription]);

  const addSkill = (skill: string) => {
    if (!skill) return;
    if (!config.bnccSkills.includes(skill)) {
      handleChange('bnccSkills', [...config.bnccSkills, skill]);
    }
  };
  const removeSkill = (s: string) => handleChange('bnccSkills', config.bnccSkills.filter(x => x !== s));
  const handleManualAdd = () => { if (manualSkillInput.trim()) { addSkill(manualSkillInput.trim()); setManualSkillInput(""); } };

  const isObjectiveFormat = [
    QuestionFormat.MULTIPLA_ESCOLHA, QuestionFormat.ANALISE_AFIRMACOES,
    QuestionFormat.VERDADEIRO_FALSO, QuestionFormat.LACUNAS,
    QuestionFormat.ASSOCIACAO, QuestionFormat.ORDENACAO,
    QuestionFormat.ASSERCAO_RAZAO
  ].includes(config.questionFormat);

  const inputClass = "w-full p-2.5 bg-muted border border-border rounded-lg text-sm text-foreground focus:ring-2 focus:ring-ring focus:border-ring outline-none transition";
  const labelClass = "block text-sm font-medium text-muted-foreground mb-1.5";

  // Bloom label for display
  const bloomLabel = (level: BloomLevel) => {
    if (level === BloomLevel.AUTO) return 'Auto';
    return level;
  };

  return (
    <>
      <div className="space-y-4">

        {/* Row 1: Grade + Subject (+ Matrix if not "Outra") */}
        <div className="bg-card p-4 rounded-lg shadow-sm border border-border">
          <h3 className="text-xs font-bold text-muted-foreground uppercase tracking-wider mb-3 flex items-center gap-2">
            <GraduationCap className="w-4 h-4 text-primary" />
            Escolaridade
          </h3>
          <div className={`grid gap-4 ${isOtherSubject ? 'grid-cols-2' : 'grid-cols-2 sm:grid-cols-3'}`}>
            <div>
              <label className={labelClass}>Série</label>
              <CustomSelect
                value={config.grade}
                options={Object.values(SchoolGrade).map(g => ({ label: g.replace(' do Ensino Médio', ''), value: g }))}
                onChange={(g: SchoolGrade) => {
                  let et = config.examType;
                  if (et === ExamType.SAEB && g !== SchoolGrade.TERCEIRA_SERIE) et = ExamType.BNCC;
                  onChange({ ...config, grade: g, examType: et, bnccSkills: [] });
                }}
              />
            </div>
            <div>
              <label className={labelClass}>Disciplina</label>
              <CustomSelect
                value={config.subject}
                error={config.subject === Subject.SELECIONE}
                placeholder="Selecione a disciplina..."
                options={Object.values(Subject).map(s => ({
                  label: s === Subject.SELECIONE ? "Selecione a disciplina..." : s,
                  value: s
                }))}
                onChange={(s: Subject) => {
                  const newConfig: any = { ...config, subject: s, bnccSkills: [] };
                  if (s === Subject.OUTRA) {
                    newConfig.examType = ExamType.LIVRE;
                    newConfig.customSubject = config.customSubject || '';
                  } else {
                    newConfig.customSubject = '';
                  }
                  onChange(newConfig);
                }}
              />
            </div>
            {/* Matrix — hidden when "Outra Disciplina" */}
            <div className="col-span-2 sm:col-span-1">
              <label className={labelClass}>Matriz</label>
              <CustomSelect
                value={config.examType}
                options={Object.values(ExamType).map(exam => {
                  const dis = exam === ExamType.SAEB && !isThirdGrade;
                  return {
                    label: `${exam.split(' (')[0]}${dis ? ' (3ª)' : ''}`,
                    value: exam,
                    disabled: dis
                  };
                })}
                onChange={(et: ExamType) => onChange({ ...config, examType: et, bnccSkills: [] })}
              />
            </div>
          </div>
          {isOtherSubject && (
            <div className="mt-3">
              <input type="text" placeholder="Nome da disciplina (Ex: História, Biologia)..." className={inputClass + " bg-accent/50 border-primary/20"}
                value={config.customSubject} onChange={(e) => handleChange('customSubject', e.target.value)} />
            </div>
          )}
        </div>

        {/* Row 2: Format + Bloom + Counts */}
        <div className="bg-card p-4 rounded-lg shadow-sm border border-border">
          <h3 className="text-xs font-bold text-muted-foreground uppercase tracking-wider mb-3 flex items-center gap-2">
            <ListChecks className="w-4 h-4 text-primary" />
            Formato e Nível Cognitivo
          </h3>

          <div className="grid grid-cols-2 gap-4 mb-4">
            <div>
              <label className={labelClass}>Modelo do Item</label>
              <CustomSelect
                value={config.questionFormat}
                options={[
                  ...Object.values(QuestionFormat).map(q => ({ label: q, value: q }))
                ]}
                onChange={(q: QuestionFormat) => handleChange('questionFormat', q)}
              />
            </div>
            <div>
              <label className={labelClass}>Dificuldade</label>
              <CustomSelect
                value={config.difficulty}
                options={[
                  { label: "Fácil (Básico)", value: "Fácil" },
                  { label: "Médio (Operacional)", value: "Médio" },
                  { label: "Difícil (Global)", value: "Difícil" }
                ]}
                onChange={(d) => handleChange('difficulty', d)}
              />
            </div>
          </div>

          {/* Bloom Taxonomy — pills inside a styled container */}
          <div className="mb-4">
            <label className={labelClass}>Taxonomia de Bloom</label>
            <div className="bg-muted rounded-xl p-3 border border-border">
              <div className="flex gap-1.5 overflow-x-auto pb-1">
                {Object.values(BloomLevel).map((level) => {
                  const meta = BLOOM_META[level];
                  const Icon = meta.icon;
                  const isSelected = config.bloomLevel === level;
                  return (
                    <button key={level}
                      onClick={() => handleChange('bloomLevel', level)}
                      className={`flex items-center gap-1.5 px-3 py-2 rounded-lg border text-xs font-medium transition-all whitespace-nowrap flex-shrink-0 ${isSelected
                        ? 'bg-primary text-primary-foreground border-primary shadow-md'
                        : 'bg-card text-muted-foreground border-border hover:bg-accent hover:text-accent-foreground hover:border-primary/30'
                        }`}
                      title={meta.hint}
                    >
                      <Icon className="w-3.5 h-3.5 flex-shrink-0" />
                      <span>{bloomLabel(level)}</span>
                    </button>
                  );
                })}
              </div>
              <p className="text-xs text-muted-foreground mt-2 px-0.5">{BLOOM_META[config.bloomLevel].hint}</p>
            </div>
          </div>

          {/* Counts and Options row */}
          <div className={`grid gap-4 ${isObjectiveFormat ? 'grid-cols-2 md:grid-cols-4' : 'grid-cols-1 sm:grid-cols-3'}`}>
            <div>
              <label className={labelClass}>Questões</label>
              <CustomSelect
                value={config.questionCount}
                options={[1, 2, 3, 4, 5].map(n => ({ label: String(n), value: n }))}
                onChange={(n) => handleChange('questionCount', n)}
              />
            </div>

            {isObjectiveFormat && (
              <div>
                <label className={labelClass}>Alternativas</label>
                <CustomSelect
                  value={config.alternativesCount}
                  options={[2, 3, 4, 5].map(n => ({ label: String(n), value: n }))}
                  onChange={(n) => handleChange('alternativesCount', n)}
                />
              </div>
            )}

            <div>
              <label className={labelClass}>Gabarito</label>
              <button
                type="button"
                onClick={() => handleChange('includeAnswerKey', !config.includeAnswerKey)}
                className={`w-full h-[42px] flex items-center justify-center gap-2 rounded-lg border text-sm font-medium transition-all ${config.includeAnswerKey
                  ? 'bg-primary/10 text-primary border-primary shadow-sm'
                  : 'bg-muted text-muted-foreground border-border hover:bg-accent'
                  }`}
              >
                <ListChecks className="w-4 h-4 flex-shrink-0" />
                <span>{config.includeAnswerKey ? 'Sim' : 'Não'}</span>
              </button>
            </div>

            <div>
              <label className={labelClass}>Imagem</label>
              <button
                type="button"
                onClick={() => handleChange('includeImageDescription', !config.includeImageDescription)}
                className={`w-full h-[42px] flex items-center justify-center gap-2 rounded-lg border text-sm font-medium transition-all ${config.includeImageDescription
                  ? 'bg-primary/10 text-primary border-primary shadow-sm'
                  : 'bg-muted text-muted-foreground border-border hover:bg-accent'
                  }`}
              >
                <Camera className="w-4 h-4 flex-shrink-0" />
                <span>{config.includeImageDescription ? 'Sim' : 'Não'}</span>
              </button>
            </div>
          </div>

          {config.includeImageDescription && (
            <div className="mt-4 animate-in slide-in-from-top-2 duration-200">
              <label className={labelClass}>O que deve ter na imagem? (opcional)</label>
              <div className="relative">
                <ImageIcon className="absolute left-3 top-3 w-4 h-4 text-primary" />
                <input
                  type="text"
                  placeholder="Ex: Gráfico de função afim, Charge sobre globalização, Mapa do Ceará..."
                  className={inputClass + " pl-9 bg-accent/30 border-primary/20 focus:border-primary"}
                  value={config.imageDescriptionPrompt || ''}
                  onChange={(e) => handleChange('imageDescriptionPrompt', e.target.value)}
                />
              </div>
              <p className="text-[10px] text-muted-foreground mt-1.5 px-0.5 italic">
                A IA sugerirá uma descrição detalhada da imagem para você gerar separadamente.
              </p>
            </div>
          )}
        </div>

        {/* Row 3: Content & Skills */}
        <div className="bg-card p-4 rounded-lg shadow-sm border border-border">
          <h3 className="text-xs font-bold text-muted-foreground uppercase tracking-wider mb-3 flex items-center gap-2">
            <Target className="w-4 h-4 text-primary" />
            {isOtherSubject ? 'Conteúdo e Tópicos' : 'Conteúdo e Habilidades'}
          </h3>

          {/* Objective input with suggestions */}
          <div className="mb-4">
            <label className={labelClass}>O que o aluno deve fazer?</label>
            <div className="relative">
              <Wand2 className="absolute left-3 top-3 w-4 h-4 text-primary" />
              <input type="text" placeholder="Ex: Interpretar gráficos, Calcular área, Inferir sentido..."
                className={inputClass + " pl-9 bg-accent/50 border-primary/20"}
                value={config.studentDescription}
                onChange={(e) => handleChange('studentDescription', e.target.value)} />
            </div>
            {/* Quick suggestions */}
            {quickSuggestions.length > 0 && (
              <div className="flex flex-wrap gap-1.5 mt-2">
                {quickSuggestions.map(s => (
                  <button key={s} onClick={() => handleChange('studentDescription', s)}
                    className="text-xs px-2.5 py-1 rounded-full bg-accent text-accent-foreground hover:bg-primary/10 transition border border-primary/20">
                    {s}
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Skills / Topics */}
          <div className="mb-4">
            <label className={labelClass}>
              {isOtherSubject ? 'Tópicos' : 'Habilidades / Descritores'}
            </label>

            {hasSkillsData ? (
              /* Button to open skills modal */
              <button onClick={() => { setShowSkillsModal(true); setSkillSearchTerm(""); }}
                className="w-full text-left flex items-center justify-between p-2.5 bg-muted border border-border rounded-lg text-sm text-foreground hover:bg-accent transition">
                <span className="flex items-center gap-2">
                  <Hash className="w-4 h-4 text-muted-foreground" />
                  <span>Selecionar habilidades...</span>
                </span>
                <ChevronDown className="w-4 h-4 text-muted-foreground" />
              </button>
            ) : (
              /* Manual input for skills/topics */
              <div className="flex gap-2">
                <div className="relative flex-1">
                  <Hash className="absolute left-3 top-3 w-4 h-4 text-muted-foreground" />
                  <input type="text"
                    placeholder={isOtherSubject ? "Adicionar tópico..." : "Código (Ex: S01.H01)"}
                    className={inputClass + " pl-9"} value={manualSkillInput}
                    onChange={(e) => setManualSkillInput(e.target.value)}
                    onKeyDown={(e) => e.key === 'Enter' && handleManualAdd()} />
                </div>
                <button onClick={handleManualAdd}
                  className="bg-primary text-primary-foreground px-3 rounded-lg hover:opacity-90 transition flex-shrink-0">
                  <Plus className="w-4 h-4" />
                </button>
              </div>
            )}
          </div>

          {/* Selected Skills/Topics — scrollable */}
          {config.bnccSkills.length > 0 && (
            <div className="mb-4">
              <div className="flex items-center justify-between mb-1.5">
                <span className="text-xs font-bold text-primary uppercase tracking-wide">
                  {isOtherSubject ? 'Tópicos' : 'Selecionadas'} ({config.bnccSkills.length})
                </span>
                {config.bnccSkills.length > 2 && (
                  <button onClick={() => setSkillsExpanded(!skillsExpanded)}
                    className="text-xs text-primary hover:opacity-80 font-medium transition">
                    {skillsExpanded ? 'Recolher' : 'Ver todas'}
                  </button>
                )}
              </div>
              <div className={`space-y-1.5 overflow-y-auto transition-all ${skillsExpanded ? 'max-h-[200px]' : 'max-h-[80px]'}`}>
                {config.bnccSkills.map((skill, i) => (
                  <div key={i} className="flex items-start gap-2 bg-accent rounded-lg px-3 py-2 group">
                    <span className="text-xs text-accent-foreground font-medium leading-snug flex-1 break-words">{skill}</span>
                    <button onClick={() => removeSkill(skill)}
                      className="text-primary/40 hover:text-destructive transition flex-shrink-0 mt-0.5">
                      <X className="w-3.5 h-3.5" />
                    </button>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Context Content */}
          <div>
            <label className={labelClass + " flex items-center gap-2"}>
              <FileText className="w-3.5 h-3.5 text-muted-foreground" />
              Conteúdo Base para a IA
              <span className="text-muted-foreground font-normal">(opcional)</span>
            </label>
            <textarea placeholder="Cole aqui o conteúdo que a IA usará como referência..."
              rows={2}
              className={inputClass + " resize-none"}
              value={config.contextContent}
              onChange={(e) => handleChange('contextContent', e.target.value)} />
          </div>
        </div>
      </div>

      {/* Skills Selection Modal */}
      {showSkillsModal && (
        <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center bg-black/40 backdrop-blur-sm" onClick={() => setShowSkillsModal(false)}>
          <div className="bg-card rounded-t-xl sm:rounded-xl shadow-2xl w-full sm:max-w-lg max-h-[85vh] sm:max-h-[75vh] flex flex-col" onClick={e => e.stopPropagation()}>
            {/* Modal header */}
            <div className="px-4 py-3 border-b border-border flex items-center justify-between flex-shrink-0">
              <div>
                <h2 className="text-base font-bold text-foreground">Selecionar Habilidades</h2>
                <p className="text-xs text-muted-foreground mt-0.5">
                  {config.examType.split(' (')[0]} · {config.subject} · {config.grade.replace(' do Ensino Médio', '')}
                </p>
              </div>
              <button onClick={() => setShowSkillsModal(false)} className="text-slate-400 hover:text-slate-600 p-1">
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Search */}
            <div className="px-4 py-3 border-b border-border flex-shrink-0">
              <div className="relative">
                <Search className="absolute left-3 top-3 w-4 h-4 text-muted-foreground" />
                <input type="text" placeholder="Buscar por código ou descrição..."
                  className="w-full pl-9 p-2.5 bg-muted border border-border rounded-lg text-sm text-foreground focus:ring-2 focus:ring-ring focus:border-ring outline-none"
                  value={skillSearchTerm}
                  onChange={(e) => setSkillSearchTerm(e.target.value)}
                  autoFocus />
              </div>
            </div>

            {/* Skills list */}
            <div className="flex-1 overflow-y-auto px-4 py-2">
              {filteredModalSkills.length === 0 ? (
                <p className="text-sm text-muted-foreground text-center py-8">Nenhuma habilidade encontrada.</p>
              ) : (
                filteredModalSkills.map((group, gi) => (
                  <div key={gi} className="mb-4">
                    <h4 className="text-xs font-bold text-muted-foreground uppercase tracking-wider mb-2 sticky top-0 bg-card py-1">
                      {group.category}
                    </h4>
                    <div className="space-y-1.5">
                      {group.skills.map(skill => {
                        const fullSkill = `${skill.code} - ${skill.description}`;
                        const isAdded = config.bnccSkills.includes(fullSkill);
                        return (
                          <button key={skill.code}
                            onClick={() => isAdded ? removeSkill(fullSkill) : addSkill(fullSkill)}
                            className={`w-full text-left p-2.5 rounded-lg text-sm transition border ${isAdded
                              ? 'bg-accent border-primary/30 text-accent-foreground'
                              : 'bg-card border-border text-foreground hover:bg-muted'
                              }`}>
                            <div className="flex items-start gap-2">
                              <span className={`font-bold flex-shrink-0 ${isAdded ? 'text-primary' : 'text-muted-foreground'}`}>
                                {skill.code}
                              </span>
                              <span className="leading-snug">{skill.description}</span>
                            </div>
                            {isAdded && (
                              <span className="text-xs text-primary/70 mt-1 block">Adicionada (clique para remover)</span>
                            )}
                          </button>
                        );
                      })}
                    </div>
                  </div>
                ))
              )}
            </div>

            {/* Modal footer */}
            <div className="px-4 py-3 border-t border-border flex items-center justify-between flex-shrink-0 bg-muted rounded-b-xl">
              <span className="text-sm text-muted-foreground">
                {config.bnccSkills.length} selecionada{config.bnccSkills.length !== 1 ? 's' : ''}
              </span>
              <button onClick={() => setShowSkillsModal(false)}
                className="px-4 py-2 bg-primary text-primary-foreground rounded-lg text-sm font-medium hover:opacity-90 transition">
                Concluir
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};