export enum SchoolGrade {
  PRIMEIRA_SERIE = "1ª Série do Ensino Médio",
  SEGUNDA_SERIE = "2ª Série do Ensino Médio",
  TERCEIRA_SERIE = "3ª Série do Ensino Médio",
}

export enum Subject {
  SELECIONE = "",
  PORTUGUES = "Língua Portuguesa",
  MATEMATICA = "Matemática",
  OUTRA = "Outra Disciplina"
}

export enum ExamType {
  SAEB = "SAEB (MEC/INEP)",
  SPAECE = "SPAECE (Ceará)",
  BNCC = "Alinhado à BNCC",
  LIVRE = "Livre / Sem Matriz Específica"
}

export enum QuestionFormat {
  // Objetivas
  MULTIPLA_ESCOLHA = "Múltipla Escolha Simples",
  ANALISE_AFIRMACOES = "Análise de Afirmações (I, II, III...)",
  VERDADEIRO_FALSO = "Verdadeiro ou Falso (com alternativas)",
  LACUNAS = "Preenchimento de Lacunas (com alternativas)",
  ASSOCIACAO = "Associação de Colunas (com alternativas)",
  ORDENACAO = "Ordenação / Sequenciamento (com alternativas)",
  ASSERCAO_RAZAO = "Asserção e Razão",

  // Discursivas
  DISSERTATIVA_CURTA = "Dissertativa (Resposta Curta)",
  DISSERTATIVA_LONGA = "Dissertativa (Redação/Argumentativa)",
  RESOLUCAO_PROBLEMA = "Resolução de Situação-Problema"
}

export enum BloomLevel {
  AUTO = "Automático (IA sugere)",
  LEMBRAR = "Lembrar",
  ENTENDER = "Entender",
  APLICAR = "Aplicar",
  ANALISAR = "Analisar",
  AVALIAR = "Avaliar",
  CRIAR = "Criar",
}

export interface PromptConfig {
  grade: SchoolGrade;
  subject: Subject;
  customSubject?: string;
  studentDescription: string;
  bnccSkills: string[];
  examType: ExamType;
  difficulty: string;
  bloomLevel: BloomLevel;
  questionFormat: QuestionFormat;
  questionCount: number;
  alternativesCount: number;
  contextContent: string;
  includeAnswerKey: boolean;
}