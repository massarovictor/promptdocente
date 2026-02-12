import { useState, useMemo, useEffect } from 'react';
import { PromptForm } from './components/PromptForm';
import { PromptPreview } from './components/PromptPreview';
import { PromptConfig, SchoolGrade, Subject, ExamType, QuestionFormat, BloomLevel } from './types';
import { ExternalLink, Zap, RotateCcw, Copy, Check, Maximize2, Moon, Sun } from 'lucide-react';

const INITIAL_CONFIG: PromptConfig = {
  grade: SchoolGrade.TERCEIRA_SERIE,
  subject: Subject.SELECIONE,
  customSubject: '',
  studentDescription: '',
  bnccSkills: [],
  examType: ExamType.SPAECE,
  difficulty: 'Médio',
  bloomLevel: BloomLevel.AUTO,
  questionFormat: QuestionFormat.MULTIPLA_ESCOLHA,
  questionCount: 1,
  alternativesCount: 5,
  contextContent: '',
  includeAnswerKey: true,
};

const BLOOM_DESCRIPTIONS: Record<string, string> = {
  [BloomLevel.LEMBRAR]: "A questão deve exigir que o aluno RECUPERE informações da memória: reconhecer, listar, identificar, nomear ou definir conceitos.",
  [BloomLevel.ENTENDER]: "A questão deve exigir que o aluno COMPREENDA o significado: interpretar, exemplificar, classificar, resumir, inferir, comparar ou explicar.",
  [BloomLevel.APLICAR]: "A questão deve exigir que o aluno USE conhecimento em situações novas: executar procedimentos, resolver problemas em contextos diferentes dos estudados.",
  [BloomLevel.ANALISAR]: "A questão deve exigir que o aluno DECOMPONHA informações em partes: diferenciar, organizar, atribuir, distinguir fatos de inferências, identificar relações causais.",
  [BloomLevel.AVALIAR]: "A questão deve exigir que o aluno JULGUE com base em critérios: verificar, criticar, justificar, argumentar a favor ou contra, detectar inconsistências.",
  [BloomLevel.CRIAR]: "A questão deve exigir que o aluno PRODUZA algo novo: gerar hipóteses, planejar soluções, elaborar propostas, reorganizar informações de forma original.",
};

export default function App() {
  const [config, setConfig] = useState<PromptConfig>(INITIAL_CONFIG);
  const [showFullPrompt, setShowFullPrompt] = useState(false);
  const [copied, setCopied] = useState(false);
  const [darkMode, setDarkMode] = useState(() => {
    if (typeof window !== 'undefined') {
      return localStorage.getItem('promptdocente-theme') === 'dark';
    }
    return false;
  });

  useEffect(() => {
    const root = document.documentElement;
    if (darkMode) {
      root.classList.add('dark');
      localStorage.setItem('promptdocente-theme', 'dark');
    } else {
      root.classList.remove('dark');
      localStorage.setItem('promptdocente-theme', 'light');
    }
  }, [darkMode]);

  const handleReset = () => setConfig(INITIAL_CONFIG);

  const handleCopy = async (text: string) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy:', err);
    }
  };



  const constructedPrompt = useMemo(() => {
    const {
      grade, subject, customSubject, bnccSkills, studentDescription,
      examType, difficulty, questionFormat, bloomLevel,
      alternativesCount, questionCount,
      contextContent, includeAnswerKey
    } = config;

    const isOther = subject === Subject.OUTRA;
    const isSelected = subject !== Subject.SELECIONE;

    if (!isSelected) {
      return "⚠️ Por favor, selecione uma disciplina para gerar o prompt.";
    }

    const subjectName = subject === Subject.OUTRA && customSubject ? customSubject : subject;
    const plural = questionCount > 1;
    const questaoWord = plural ? `${questionCount} QUESTÕES (Itens)` : 'UMA QUESTÃO (Item)';

    let prompt = `# PAPEL\n`;

    if (!isOther && examType !== ExamType.LIVRE) {
      prompt += ` Você tem vasta experiência na matriz de referência ${examType} e no currículo da BNCC.`;
    } else {
      prompt += ` Você prioriza qualidade pedagógica, clareza e rigor conceitual.`;
    }

    prompt += `\n\n# TAREFA\nElaborar ${questaoWord} de alta qualidade técnica para a **${grade}**, disciplina de **${subjectName}**.`;

    // Matrix section — only if not "Outra Disciplina"
    if (!isOther && examType !== ExamType.LIVRE) {
      prompt += `\n\n# MATRIZ DE REFERÊNCIA\n- Matriz: **${examType}**`;
      if (examType === ExamType.SAEB || examType === ExamType.SPAECE) {
        prompt += `\n- Adapte o rigor técnico e a estrutura para o padrão ${examType}.`;
      }
    } else if (!isOther) {
      prompt += `\n\n# CONTEXTO DE AVALIAÇÃO\n- Questão livre (focada no objetivo de aprendizagem definido abaixo).`;
    }

    // Bloom section
    if (bloomLevel === BloomLevel.AUTO) {
      prompt += `\n\n# NÍVEL COGNITIVO (Taxonomia de Bloom Revisada)`;
      prompt += `\n- Avalie o conteúdo, a habilidade e o nível de dificuldade informados e ESCOLHA automaticamente o nível taxonômico de Bloom mais adequado (Lembrar, Entender, Aplicar, Analisar, Avaliar ou Criar).`;
      prompt += `\n- JUSTIFIQUE brevemente sua escolha antes de elaborar a questão.`;
    } else {
      prompt += `\n\n# NÍVEL COGNITIVO (Taxonomia de Bloom Revisada)\n- Nível: **${bloomLevel}**`;
      prompt += `\n- ${BLOOM_DESCRIPTIONS[bloomLevel]}`;
    }
    prompt += `\n- Nível de Dificuldade: **${difficulty}**`;

    prompt += `\n\n# FORMATO DA QUESTÃO\n- Tipo: **${questionFormat}**`;
    prompt += `\n- Siga estritamente as regras abaixo:`;

    const isObjective = [
      QuestionFormat.MULTIPLA_ESCOLHA, QuestionFormat.ANALISE_AFIRMACOES,
      QuestionFormat.VERDADEIRO_FALSO, QuestionFormat.LACUNAS,
      QuestionFormat.ASSOCIACAO, QuestionFormat.ORDENACAO,
      QuestionFormat.ASSERCAO_RAZAO
    ].includes(questionFormat);

    switch (questionFormat) {
      case QuestionFormat.MULTIPLA_ESCOLHA:
        prompt += `\n  - Crie um enunciado contextualizado (suporte + comando claro).`;
        prompt += `\n  - Forneça EXATAMENTE ${alternativesCount} alternativas (A, B, C...).`;
        prompt += `\n  - Apenas uma correta (gabarito) e os demais distratores plausíveis.`;
        break;
      case QuestionFormat.ANALISE_AFIRMACOES:
        prompt += `\n  - Apresente 3 ou 4 afirmações romanas (I, II, III...) sobre o tema.`;
        prompt += `\n  - Crie ${alternativesCount} alternativas (A, B, C...) analisando a correção delas.`;
        break;
      case QuestionFormat.VERDADEIRO_FALSO:
        prompt += `\n  - Crie 4 a 5 proposições com parênteses ( ) para V/F.`;
        prompt += `\n  - Adicione ${alternativesCount} alternativas com a sequência correta.`;
        break;
      case QuestionFormat.LACUNAS:
        prompt += `\n  - Escreva um parágrafo coeso, removendo palavras-chave (lacunas numeradas).`;
        prompt += `\n  - Crie ${alternativesCount} alternativas com os termos que preenchem as lacunas.`;
        break;
      case QuestionFormat.ASSOCIACAO:
        prompt += `\n  - Crie duas colunas (Coluna 1 e Coluna 2) para associação de conceitos.`;
        prompt += `\n  - Crie ${alternativesCount} alternativas indicando a sequência correta.`;
        break;
      case QuestionFormat.ORDENACAO:
        prompt += `\n  - Apresente fatos, passos ou eventos desordenados.`;
        prompt += `\n  - Crie ${alternativesCount} alternativas indicando a ordem correta.`;
        break;
      case QuestionFormat.ASSERCAO_RAZAO:
        prompt += `\n  - Apresente duas asserções ligadas por "PORQUE".`;
        prompt += `\n  - Crie ${alternativesCount} alternativas padronizadas para Asserção e Razão.`;
        break;
      case QuestionFormat.DISSERTATIVA_CURTA:
        prompt += `\n  - Elabore uma pergunta direta que exija síntese ou explicação concisa (3 a 5 linhas).`;
        break;
      case QuestionFormat.DISSERTATIVA_LONGA:
        prompt += `\n  - Elabore uma proposta de produção textual ou resposta argumentativa (15 a 30 linhas).`;
        break;
      case QuestionFormat.RESOLUCAO_PROBLEMA:
        prompt += `\n  - Apresente uma situação-problema complexa do mundo real.`;
        prompt += `\n  - Solicite o passo a passo da solução lógica ou matemática.`;
        break;
    }

    // Content section — adapts for "Outra Disciplina" (uses "Tópicos" instead of "Habilidades")
    if (isOther) {
      prompt += `\n\n# CONTEÚDO E TÓPICOS`;
    } else {
      prompt += `\n\n# CONTEÚDO E HABILIDADE(S)`;
    }
    if (studentDescription) {
      prompt += `\n- **Objetivo Cognitivo / Ação do Aluno:** "${studentDescription}"`;
      prompt += `\n  (A questão DEVE exigir que o aluno realize essa ação específica.)`;
    }
    if (bnccSkills && bnccSkills.length > 0) {
      if (isOther) {
        prompt += `\n- **Tópicos de Referência:**`;
      } else {
        prompt += `\n- **Habilidades/Descritores de Referência:**`;
      }
      bnccSkills.forEach(skill => { prompt += `\n  * ${skill}`; });
    }

    if (contextContent.trim()) {
      prompt += `\n\n# CONTEÚDO DE REFERÊNCIA (Base para a IA)`;
      prompt += `\nUtilize o conteúdo abaixo como fonte de conhecimento para elaborar a questão. NÃO copie este texto diretamente no enunciado — use-o como base conceitual.`;
      prompt += `\n\`\`\`\n${contextContent}\n\`\`\``;
    }

    prompt += `\n\n# TEXTO BASE DA QUESTÃO`;
    prompt += `\nCrie um texto-suporte (enunciado/contexto) **inédito** e adequado ao nível escolar para contextualizar a questão.`;

    prompt += `\n\n# RESTRIÇÕES OBRIGATÓRIAS`;
    if (isObjective) {
      prompt += `\n- NÃO use "Todas as alternativas estão corretas" ou "Nenhuma das alternativas".`;
      prompt += `\n- NÃO crie distratores absurdos ou implausíveis.`;
      prompt += `\n- NÃO repita termos do enunciado literalmente no gabarito.`;
      prompt += `\n- Distratores DEVEM representar erros conceituais comuns dos alunos (misconceptions).`;
      prompt += `\n- O gabarito NÃO deve ser identificável por ser "a alternativa mais longa" ou "mais completa".`;
    }
    prompt += `\n- NÃO gere conteúdo discriminatório, preconceituoso ou inadequado.`;
    prompt += `\n- O nível linguístico deve ser coerente com a ${grade}.`;
    prompt += `\n- Antes de formular, reflita: qual o erro conceitual mais comum dos alunos neste tópico? Use esse raciocínio para construir distratores ou critérios de avaliação.`;

    if (includeAnswerKey) {
      prompt += `\n\n# RESPOSTA ESPERADA (GABARITO)`;
      if (isObjective) {
        prompt += `\n- Indique a alternativa correta (Gabarito).`;
        prompt += `\n- Explique por que a alternativa correta é a certa.`;
        prompt += `\n- Explique o erro conceitual de CADA distrator (para fins pedagógicos).`;
      } else {
        prompt += `\n- Forneça a resposta ideal/esperada.`;
        prompt += `\n- Liste os critérios de avaliação (o que o aluno deve mencionar para pontuar).`;
      }
    }

    prompt += `\n\n# FORMATO DE SAÍDA OBRIGATÓRIO`;
    prompt += `\nResponda usando EXATAMENTE a estrutura abaixo${plural ? ' para cada questão' : ''}:`;
    prompt += `\n\n---`;
    if (plural) { prompt += `\n## Questão [N de ${questionCount}]`; }
    if (bloomLevel === BloomLevel.AUTO) {
      prompt += `\n**Nível de Bloom Escolhido:** [nível] — [justificativa breve]`;
    }
    prompt += `\n**Texto Base:** [texto-suporte inédito]`;
    prompt += `\n**Enunciado:** [comando da questão]`;
    if (isObjective) {
      prompt += `\n**Alternativas:**`;
      const letters = ['A', 'B', 'C', 'D', 'E'];
      for (let i = 0; i < alternativesCount; i++) { prompt += `\n(${letters[i]}) ...`; }
    }
    if (includeAnswerKey) {
      if (isObjective) {
        prompt += `\n**Gabarito:** Alternativa [X]`;
        prompt += `\n**Justificativa Pedagógica:** [explicação de cada alternativa]`;
      } else {
        prompt += `\n**Resposta Esperada:** [resposta ideal]`;
        prompt += `\n**Critérios de Avaliação:** [lista de critérios]`;
      }
    }
    prompt += `\n---`;

    return prompt;
  }, [config]);

  const promptPreviewLines = constructedPrompt.split('\n').slice(0, 5).join('\n') + '\n...';
  const estimatedTokens = Math.ceil(constructedPrompt.length / 4);

  const subjectBadge = config.subject === Subject.OUTRA && config.customSubject
    ? config.customSubject
    : config.subject || "Selecione a Disciplina";

  return (
    <div className="h-screen flex flex-col bg-background text-foreground font-sans overflow-hidden">
      {/* Header */}
      <header className="bg-card border-b border-border shadow-sm flex-shrink-0">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 h-14 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="relative flex items-center justify-center">
              <div className="bg-primary p-1 rounded-lg relative z-10 shadow-sm">
                <svg viewBox="0 0 3040.54 3124.09" className="w-6 h-6 text-white fill-current">
                  <path d="M1520.27 2764.9c-640.21,0 -1161.09,-539.6 -1161.09,-1202.84 0,-663.27 520.87,-1202.88 1161.09,-1202.88 640.22,0 1161.09,539.6 1161.09,1202.88 0,663.24 -520.87,1202.84 -1161.09,1202.84zm0 -2764.9c-838.27,0 -1520.27,700.74 -1520.27,1562.06 0,861.29 682,1562.03 1520.27,1562.03 838.27,0 1520.27,-700.74 1520.27,-1562.03 0,-861.32 -682,-1562.06 -1520.27,-1562.06z" />
                  <path d="M1520.27 1940.03c-92.45,-131.08 -184.89,-262.15 -277.33,-393.23 69.52,-18.89 164.23,-37.41 277.33,-39.05 113.11,1.65 207.81,20.16 277.33,39.05 -92.45,131.08 -184.89,262.15 -277.33,393.23zm742.79 -1053.13l-251.01 355.85c-110.66,-33.12 -213.99,-56.45 -313.11,-70.26l0 -604.99c-58,-10.65 -117.7,-16.22 -178.68,-16.22 -60.97,0 -120.66,5.57 -178.68,16.22l0 604.99c-99.11,13.81 -202.45,37.14 -313.11,70.26l-251.01 -355.85c-86.17,96.85 -154.24,210.6 -198.82,335.64l941.61 1350.26c313.88,-450.09 627.73,-900.16 941.61,-1350.26 -44.57,-125.05 -112.65,-238.79 -198.82,-335.64z" />
                </svg>
              </div>
            </div>
            <h1 className="text-base tracking-tight text-foreground">
              <span className="font-extrabold">prompt</span>
              <span className="font-normal">Docente</span>
            </h1>
          </div>
          <div className="flex items-center gap-2">
            <span className="bg-accent text-accent-foreground px-2.5 py-1 rounded text-xs font-semibold hidden sm:inline">{subjectBadge}</span>
            <span className="bg-muted px-2.5 py-1 rounded text-xs font-semibold text-muted-foreground hidden sm:inline">{config.grade.replace(' do Ensino Médio', '')}</span>
            <button onClick={() => setDarkMode(!darkMode)}
              className="p-2 rounded-lg text-muted-foreground hover:bg-muted transition"
              title={darkMode ? 'Modo Claro' : 'Modo Escuro'}>
              {darkMode ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
            </button>
            <button onClick={handleReset}
              className="flex items-center gap-1.5 text-xs text-muted-foreground hover:text-destructive transition px-2 py-1 rounded hover:bg-destructive/10"
              title="Resetar">
              <RotateCcw className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Resetar</span>
            </button>
          </div>
        </div>
      </header>

      {/* Main layout */}
      <main className="flex-1 overflow-hidden">
        <div className="h-full max-w-6xl mx-auto flex flex-col lg:flex-row gap-4 p-4 sm:p-5">

          {/* Left Column: Form (scrollable) */}
          <div className="flex-1 overflow-y-auto min-w-0 pb-4 lg:pb-0 pr-1">
            <PromptForm config={config} onChange={setConfig} />
          </div>

          {/* Right Column: Prompt + AI Links */}
          <div className="w-full lg:w-[380px] flex-shrink-0 flex flex-col gap-4 overflow-y-auto">

            {/* Collapsed Prompt Preview */}
            <div className="bg-card rounded-lg shadow-sm border border-border overflow-hidden flex-shrink-0">
              <div className="px-4 py-2.5 border-b border-border flex items-center justify-between bg-muted">
                <div className="flex items-center gap-2">
                  <span className="text-xs font-bold text-muted-foreground uppercase tracking-wider">Prompt</span>
                  <span className="text-xs bg-secondary text-muted-foreground px-2 py-0.5 rounded font-mono">~{estimatedTokens} tok</span>
                </div>
                <div className="flex items-center gap-2">
                  <button onClick={() => handleCopy(constructedPrompt)}
                    className={`flex items-center gap-1.5 px-2.5 py-1 rounded text-xs font-medium transition ${copied ? 'bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-400' : 'text-muted-foreground hover:bg-muted'
                      }`}>
                    {copied ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
                    {copied ? 'Copiado!' : 'Copiar'}
                  </button>
                  <button onClick={() => setShowFullPrompt(true)}
                    className="flex items-center gap-1.5 px-2.5 py-1 rounded text-xs font-medium text-primary hover:bg-accent transition">
                    <Maximize2 className="w-3.5 h-3.5" />
                    Ver
                  </button>
                </div>
              </div>
              <div className="p-4 bg-slate-800 dark:bg-slate-900 max-h-[120px] overflow-hidden relative cursor-pointer" onClick={() => setShowFullPrompt(true)}>
                <pre className="text-xs text-slate-400 whitespace-pre-wrap font-mono leading-relaxed">{promptPreviewLines}</pre>
                <div className="absolute bottom-0 left-0 right-0 h-10 bg-gradient-to-t from-slate-800 dark:from-slate-900 to-transparent" />
              </div>
            </div>

            {/* AI Links */}
            <div className="bg-card p-4 rounded-lg shadow-sm border border-border flex-shrink-0">
              <h3 className="text-xs font-bold text-muted-foreground uppercase tracking-wider mb-3 flex items-center gap-2">
                <Zap className="w-3.5 h-3.5 text-amber-500" />
                Gerar na IA
              </h3>
              <div className="grid grid-cols-2 gap-2">
                {[
                  { name: 'ChatGPT', url: 'https://chatgpt.com', color: 'bg-emerald-50 text-emerald-700 border-emerald-100 hover:bg-emerald-100 dark:bg-emerald-900/20 dark:text-emerald-400 dark:border-emerald-800 dark:hover:bg-emerald-900/40' },
                  { name: 'Gemini', url: 'https://gemini.google.com', color: 'bg-blue-50 text-blue-700 border-blue-100 hover:bg-blue-100 dark:bg-blue-900/20 dark:text-blue-400 dark:border-blue-800 dark:hover:bg-blue-900/40' },
                  { name: 'Copilot', url: 'https://copilot.microsoft.com', color: 'bg-indigo-50 text-indigo-700 border-indigo-100 hover:bg-indigo-100 dark:bg-indigo-900/20 dark:text-indigo-400 dark:border-indigo-800 dark:hover:bg-indigo-900/40' },
                  { name: 'DeepSeek', url: 'https://chat.deepseek.com', color: 'bg-muted text-secondary-foreground border-border hover:bg-secondary dark:hover:bg-muted' },
                ].map(ai => (
                  <a key={ai.name} href={ai.url} target="_blank" rel="noopener noreferrer"
                    className={`flex items-center justify-center gap-2 px-3 py-2.5 rounded-lg transition text-sm font-medium border group ${ai.color}`}>
                    <span>{ai.name}</span>
                    <ExternalLink className="w-3 h-3 opacity-40 group-hover:opacity-100" />
                  </a>
                ))}
              </div>
            </div>

            {/* Completeness */}
            <PromptPreview config={config} />
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-card border-t border-border flex-shrink-0">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-2 text-center">
          <p className="text-xs text-muted-foreground">
            © 2026 Todos os direitos reservados — Massaro Victor Pinheiro Alves — victormassaro00@gmail.com
          </p>
        </div>
      </footer>

      {/* Full Prompt Modal */}
      {showFullPrompt && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/50 backdrop-blur-sm" onClick={() => setShowFullPrompt(false)}>
          <div className="bg-card rounded-xl shadow-2xl w-full max-w-3xl max-h-[90vh] flex flex-col" onClick={e => e.stopPropagation()}>
            <div className="flex items-center justify-between px-4 py-3 border-b border-border">
              <div className="flex items-center gap-3">
                <h2 className="text-base font-bold text-foreground">Prompt Completo</h2>
                <span className="text-xs bg-muted text-muted-foreground px-2.5 py-0.5 rounded-full font-mono">~{estimatedTokens} tokens</span>
              </div>
              <div className="flex items-center gap-2">
                <button onClick={() => handleCopy(constructedPrompt)}
                  className={`flex items-center gap-1.5 px-4 py-2 rounded-lg text-sm font-medium transition ${copied ? 'bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-400' : 'bg-primary text-primary-foreground hover:opacity-90'
                    }`}>
                  {copied ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                  {copied ? 'Copiado!' : 'Copiar Prompt'}
                </button>
                <button onClick={() => setShowFullPrompt(false)} className="text-muted-foreground hover:text-foreground p-1">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
                </button>
              </div>
            </div>
            <div className="flex-1 overflow-y-auto p-5 sm:p-6 bg-slate-900">
              <pre className="text-sm text-slate-300 whitespace-pre-wrap font-mono leading-relaxed">{constructedPrompt}</pre>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}