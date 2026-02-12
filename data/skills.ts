
export interface SkillGroup {
  category: string;
  skills: { code: string; description: string }[];
}

export const BNCC_PORTUGUESE_SKILLS: SkillGroup[] = [
  {
    category: "Todos os campos de atuação social",
    skills: [
      { code: "EM13LP01", description: "Relacionar o texto, tanto na produção como na recepção, com suas condições de produção e seu contexto sócio-histórico de circulação." },
      { code: "EM13LP02", description: "Estabelecer relações entre as partes do texto, considerando a construção composicional e o estilo do gênero." },
      { code: "EM13LP03", description: "Analisar relações de intertextualidade e interdiscursividade que permitam a explicitação de relações dialógicas." },
      { code: "EM13LP04", description: "Estabelecer relações de interdiscursividade e intertextualidade para explicitar, sustentar e qualificar posicionamentos." },
      { code: "EM13LP05", description: "Analisar, em textos argumentativos, os posicionamentos assumidos e os movimentos argumentativos." },
      { code: "EM13LP06", description: "Analisar efeitos de sentido decorrentes de usos expressivos da linguagem." },
      { code: "EM13LP07", description: "Analisar, em textos de diferentes gêneros, marcas que expressam a posição do enunciador frente àquilo que é dito." },
      { code: "EM13LP08", description: "Analisar elementos e aspectos da sintaxe do Português (ordem, sintagmas, coordenação, subordinação)." },
      { code: "EM13LP09", description: "Fazer curadoria de informações, tendo em vista diferentes propósitos e projetos discursivos." },
      { code: "EM13LP10", description: "Selecionar informações, dados e argumentos em fontes confiáveis e utilizá-los de forma referenciada." },
      { code: "EM13LP11", description: "Analisar efeitos de sentido decorrentes de escolhas de elementos sonoros e de suas relações com o verbal." },
      { code: "EM13LP12", description: "Analisar efeitos de sentido decorrentes de escolhas e formatação das imagens e de sua sequenciação." },
      { code: "EM13LP13", description: "Planejar, produzir, revisar, editar, reescrever e avaliar textos escritos e multissemióticos." },
      { code: "EM13LP14", description: "Produzir e analisar textos orais, considerando sua adequação aos contextos de produção." },
      { code: "EM13LP15", description: "Elaborar roteiros para a produção de vídeos variados, apresentações teatrais, narrativas multimídia, etc." },
      { code: "EM13LP16", description: "Utilizar softwares de edição e ferramentas colaborativas para criar textos e produções multissemióticas." },
      { code: "EM13LP17", description: "Analisar o fenômeno da variação linguística em seus diferentes níveis e dimensões." }
    ]
  },
  {
    category: "Campo da vida pessoal",
    skills: [
      { code: "EM13LP18", description: "Apresentar-se por meio de textos multimodais diversos e ferramentas digitais." },
      { code: "EM13LP19", description: "Compartilhar gostos, interesses, práticas culturais e temas de interesse." },
      { code: "EM13LP20", description: "Produzir e socializar playlists comentadas, fanzines e publicações afins." },
      { code: "EM13LP21", description: "Construir e/ou atualizar registros dinâmicos de profissões e ocupações de interesse." }
    ]
  },
  {
    category: "Campo de atuação na vida pública",
    skills: [
      { code: "EM13LP22", description: "Analisar o histórico e o discurso político de candidatos, partidos e propagandas." },
      { code: "EM13LP23", description: "Analisar formas não institucionalizadas de participação social (arte, intervenções, culturas juvenis)." },
      { code: "EM13LP24", description: "Participar de reuniões, agremiações e debates na escola ou comunidade." },
      { code: "EM13LP25", description: "Relacionar textos legais e normativos (direitos e deveres) aos seus contextos de produção." },
      { code: "EM13LP26", description: "Engajar-se na busca de solução de problemas coletivos, denunciando desrespeito a direitos." }
    ]
  },
  {
    category: "Campo das práticas de estudo e pesquisa",
    skills: [
      { code: "EM13LP27", description: "Organizar situações de estudo e utilizar estratégias de leitura adequadas." },
      { code: "EM13LP28", description: "Resumir e resenhar textos, com manejo adequado das vozes (paráfrases, citações)." },
      { code: "EM13LP29", description: "Realizar pesquisas de diferentes tipos, usando fontes confiáveis e comunicando resultados." },
      { code: "EM13LP30", description: "Compreender criticamente textos de divulgação científica." },
      { code: "EM13LP31", description: "Selecionar informações e dados para pesquisa e compará-los autonomamente." },
      { code: "EM13LP32", description: "Selecionar e utilizar instrumentos de coleta e análise de dados." },
      { code: "EM13LP33", description: "Produzir textos para divulgação do conhecimento (artigos, relatórios, vlogs científicos)." },
      { code: "EM13LP34", description: "Utilizar adequadamente ferramentas de apoio a apresentações orais." }
    ]
  },
  {
    category: "Campo jornalístico-midiático",
    skills: [
      { code: "EM13LP35", description: "Analisar interesses do campo jornalístico e impactos das novas tecnologias." },
      { code: "EM13LP36", description: "Conhecer e analisar diferentes projetos editoriais e o papel da mídia plural." },
      { code: "EM13LP37", description: "Analisar graus de parcialidade em textos noticiosos e efeitos de sentido." },
      { code: "EM13LP38", description: "Usar procedimentos de checagem de fatos (combate a fake news)." },
      { code: "EM13LP39", description: "Analisar o fenômeno da pós-verdade e disseminação de notícias falsas." },
      { code: "EM13LP40", description: "Analisar processos de curadoria (humanos e automáticos) e o efeito bolha." },
      { code: "EM13LP41", description: "Acompanhar e discutir a cobertura da mídia sobre questões de relevância social." },
      { code: "EM13LP42", description: "Atuar de forma ética e crítica na produção e compartilhamento em redes sociais." },
      { code: "EM13LP43", description: "Analisar publicidade em contexto digital e mecanismos de persuasão." },
      { code: "EM13LP44", description: "Produzir e socializar notícias, reportagens e conteúdos de opinião em várias mídias." }
    ]
  },
  {
    category: "Campo artístico-literário",
    skills: [
      { code: "EM13LP45", description: "Compartilhar sentidos na leitura de textos literários e exercitar o diálogo cultural." },
      { code: "EM13LP46", description: "Participar de eventos culturais e artísticos (saraus, slams, feiras)." },
      { code: "EM13LP47", description: "Analisar a literatura brasileira, suas assimilações e rupturas (cânone e matrizes)." },
      { code: "EM13LP48", description: "Perceber peculiaridades estruturais e estilísticas de diferentes gêneros literários." },
      { code: "EM13LP49", description: "Analisar relações intertextuais entre obras de diferentes autores e momentos." },
      { code: "EM13LP50", description: "Selecionar obras do repertório contemporâneo para constituir acervo pessoal." },
      { code: "EM13LP51", description: "Analisar obras da literatura brasileira, portuguesa, indígena, africana e latino-americana." },
      { code: "EM13LP52", description: "Produzir comentários críticos sobre produções culturais (resenhas, vlogs literários)." },
      { code: "EM13LP53", description: "Criar obras autorais ou derivadas (paródias, fanfics) dialogando com texto literário." }
    ]
  }
];

export const BNCC_MATHEMATICS_SKILLS: SkillGroup[] = [
  {
    category: "Competência Específica 1 - Interpretar situações em diversos contextos",
    skills: [
      { code: "EM13MAT101", description: "Interpretar situações econômicas, sociais e das Ciências da Natureza que envolvem a variação de duas grandezas, pela análise dos gráficos das funções representadas e das taxas de variação com ou sem apoio de tecnologias digitais." },
      { code: "EM13MAT102", description: "Analisar gráficos e métodos de amostragem de pesquisas estatísticas apresentadas em relatórios divulgados por diferentes meios de comunicação, identificando, quando for o caso, inadequações que possam induzir a erros de interpretação, como escalas e amostras não apropriadas." },
      { code: "EM13MAT103", description: "Interpretar e compreender o emprego de unidades de medida de diferentes grandezas, inclusive de novas unidades, como as de armazenamento de dados e de distâncias astronômicas e microscópicas, ligadas aos avanços tecnológicos, amplamente divulgadas na sociedade." },
      { code: "EM13MAT104", description: "Interpretar taxas e índices de natureza socioeconômica, tais como índice de desenvolvimento humano, taxas de inflação, entre outros, investigando os processos de cálculo desses números." },
      { code: "EM13MAT105", description: "Utilizar as noções de transformações isométricas (translação, reflexão, rotação e composições destas) e transformações homotéticas para analisar diferentes produções humanas como construções civis, obras de arte, entre outras." }
    ]
  },
  {
    category: "Competência Específica 2 - Articular conhecimentos matemáticos e tomar decisões",
    skills: [
      { code: "EM13MAT201", description: "Propor ações comunitárias, como as voltadas aos locais de moradia dos estudantes dentre outras, envolvendo cálculos das medidas de área, de volume, de capacidade ou de massa, adequados às demandas da região." },
      { code: "EM13MAT202", description: "Planejar e executar pesquisa amostral usando dados coletados ou de diferentes fontes sobre questões relevantes atuais, incluindo ou não apoio de recursos tecnológicos, e comunicar os resultados por meio de relatório contendo gráficos e interpretação das medidas de tendência central e das de dispersão." },
      { code: "EM13MAT203", description: "Planejar e executar ações envolvendo a criação e a utilização de aplicativos, jogos (digitais ou não), planilhas para o controle de orçamento familiar, simuladores de cálculos de juros compostos, dentre outros, para aplicar conceitos matemáticos e tomar decisões." }
    ]
  },
  {
    category: "Competência Específica 3 - Modelar e resolver problemas",
    skills: [
      { code: "EM13MAT301", description: "Resolver e elaborar problemas do cotidiano, da Matemática e de outras áreas do conhecimento, que envolvem equações lineares simultâneas, usando técnicas algébricas e gráficas, incluindo ou não tecnologias digitais." },
      { code: "EM13MAT302", description: "Resolver e elaborar problemas cujos modelos são as funções polinomiais de 1º e 2º graus, em contextos diversos, incluindo ou não tecnologias digitais." },
      { code: "EM13MAT303", description: "Resolver e elaborar problemas envolvendo porcentagens em diversos contextos e sobre juros compostos, destacando o crescimento exponencial." },
      { code: "EM13MAT304", description: "Resolver e elaborar problemas com funções exponenciais nos quais é necessário compreender e interpretar a variação das grandezas envolvidas, em contextos como o da Matemática Financeira e o do crescimento de seres vivos microscópicos, entre outros." },
      { code: "EM13MAT305", description: "Resolver e elaborar problemas com funções logarítmicas nos quais é necessário compreender e interpretar a variação das grandezas envolvidas, em contextos como os de abalos sísmicos, pH, radioatividade, Matemática Financeira, entre outros." },
      { code: "EM13MAT306", description: "Resolver e elaborar problemas em contextos que envolvem fenômenos periódicos reais, como ondas sonoras, ciclos menstruais, movimentos cíclicos, entre outros, e comparar suas representações com as funções seno e cosseno, no plano cartesiano, com ou sem apoio de aplicativos de álgebra e geometria." },
      { code: "EM13MAT307", description: "Empregar diferentes métodos para a obtenção da medida da área de uma superfície (reconfigurações, aproximação por cortes etc.) e deduzir expressões de cálculo para aplicá-las em situações reais, como o remanejamento e a distribuição de plantações, com ou sem apoio de tecnologias digitais." },
      { code: "EM13MAT308", description: "Resolver e elaborar problemas em variados contextos, envolvendo triângulos nos quais se aplicam as relações métricas ou as noções de congruência e semelhança." },
      { code: "EM13MAT309", description: "Resolver e elaborar problemas que envolvem o cálculo de áreas totais e de volumes de prismas, pirâmides e corpos redondos (cilindro e cone) em situações reais, como o cálculo do gasto de material para forrações ou pinturas de objetos cujos formatos sejam composições dos sólidos estudados." },
      { code: "EM13MAT310", description: "Resolver e elaborar problemas de contagem envolvendo diferentes tipos de agrupamento de elementos, por meio dos princípios multiplicativo e aditivo, recorrendo a estratégias diversas como o diagrama de árvore." },
      { code: "EM13MAT311", description: "Resolver e elaborar problemas que envolvem o cálculo da probabilidade de eventos aleatórios, identificando e descrevendo o espaço amostral e realizando contagem das possibilidades." },
      { code: "EM13MAT312", description: "Resolver e elaborar problemas que envolvem o cálculo de probabilidade de eventos em experimentos aleatórios sucessivos." },
      { code: "EM13MAT313", description: "Resolver e elaborar problemas que envolvem medições em que se discuta o emprego de algarismos significativos e algarismos duvidosos, utilizando, quando necessário, a notação científica." },
      { code: "EM13MAT314", description: "Resolver e elaborar problemas que envolvem grandezas compostas, determinadas pela razão ou pelo produto de duas outras, como velocidade, densidade demográfica, energia elétrica etc." },
      { code: "EM13MAT315", description: "Reconhecer um problema algorítmico, enunciá‑lo, procurar uma solução e expressá‑la por meio de um algoritmo, com o respectivo fluxograma." },
      { code: "EM13MAT316", description: "Resolver e elaborar problemas, em diferentes contextos, que envolvem cálculo e interpretação das medidas de tendência central (média, moda, mediana) e das de dispersão (amplitude, variância e desvio padrão)." }
    ]
  },
  {
    category: "Competência Específica 4 - Utilizar registros de representação",
    skills: [
      { code: "EM13MAT401", description: "Converter representações algébricas de funções polinomiais de 1º grau para representações geométricas no plano cartesiano, distinguindo os casos nos quais o comportamento é proporcional, recorrendo ou não a softwares ou aplicativos de álgebra e geometria dinâmica." },
      { code: "EM13MAT402", description: "Converter representações algébricas de funções polinomiais de 2º grau para representações geométricas no plano cartesiano, distinguindo os casos nos quais uma variável for diretamente proporcional ao quadrado da outra, recorrendo ou não a softwares ou aplicativos de álgebra e geometria dinâmica." },
      { code: "EM13MAT403", description: "Comparar e analisar as representações, em plano cartesiano, das funções exponencial e logarítmica para identificar as características fundamentais (domínio, imagem, crescimento) de cada uma, com ou sem apoio de tecnologias digitais, estabelecendo relações entre elas." },
      { code: "EM13MAT404", description: "Identificar as características fundamentais das funções seno e cosseno (periodicidade, domínio, imagem), por meio da comparação das representações em ciclos trigonométricos e em planos cartesianos, com ou sem apoio de tecnologias digitais." },
      { code: "EM13MAT405", description: "Reconhecer funções definidas por uma ou mais sentenças (como a tabela do Imposto de Renda, contas de luz, água, gás etc.), em suas representações algébrica e gráfica, convertendo essas representações de uma para outra e identificando domínios de validade, imagem, crescimento e decrescimento." },
      { code: "EM13MAT406", description: "Utilizar os conceitos básicos de uma linguagem de programação na implementação de algoritmos escritos em linguagem corrente e/ou matemática." },
      { code: "EM13MAT407", description: "Interpretar e construir vistas ortogonais de uma figura espacial para representar formas tridimensionais por meio de figuras planas." },
      { code: "EM13MAT408", description: "Construir e interpretar tabelas e gráficos de frequências, com base em dados obtidos em pesquisas por amostras estatísticas, incluindo ou não o uso de softwares que inter‑relacionem estatística, geometria e álgebra." },
      { code: "EM13MAT409", description: "Interpretar e comparar conjuntos de dados estatísticos por meio de diferentes diagramas e gráficos, como o histograma, o de caixa (box‑plot), o de ramos e folhas, reconhecendo os mais eficientes para sua análise." }
    ]
  },
  {
    category: "Competência Específica 5 - Investigar e estabelecer conjecturas",
    skills: [
      { code: "EM13MAT501", description: "Investigar relações entre números expressos em tabelas para representá‑los no plano cartesiano, identificando padrões e criando conjecturas para generalizar e expressar algebricamente essa generalização, reconhecendo quando essa representação é de função polinomial de 1º grau." },
      { code: "EM13MAT502", description: "Investigar relações entre números expressos em tabelas para representá‑los no plano cartesiano, identificando padrões e criando conjecturas para generalizar e expressar algebricamente essa generalização, reconhecendo quando essa representação é de função polinomial de 2º grau do tipo y = ax²." },
      { code: "EM13MAT503", description: "Investigar pontos de máximo ou de mínimo de funções quadráticas em contextos da Matemática Financeira ou da Cinemática, entre outros." },
      { code: "EM13MAT504", description: "Investigar processos de obtenção da medida do volume de prismas, pirâmides, cilindros e cones, incluindo o princípio de Cavalieri, para a obtenção das fórmulas de cálculo da medida do volume dessas figuras." },
      { code: "EM13MAT505", description: "Resolver problemas sobre ladrilhamentos do plano, com ou sem apoio de aplicativos de geometria dinâmica, para conjecturar a respeito dos tipos ou composição de polígonos que podem ser utilizados, generalizando padrões observados." },
      { code: "EM13MAT506", description: "Representar graficamente a variação da área e do perímetro de um polígono regular quando os comprimentos de seus lados variam, analisando e classificando as funções envolvidas." },
      { code: "EM13MAT507", description: "Identificar e associar sequências numéricas (PA) a funções afins de domínios discretos para análise de propriedades, incluindo dedução de algumas fórmulas e resolução de problemas." },
      { code: "EM13MAT508", description: "Identificar e associar sequências numéricas (PG) a funções exponenciais de domínios discretos para análise de propriedades, incluindo dedução de algumas fórmulas e resolução de problemas." },
      { code: "EM13MAT509", description: "Investigar a deformação de ângulos e áreas provocada pelas diferentes projeções usadas em cartografia, como a cilíndrica e a cônica." },
      { code: "EM13MAT510", description: "Investigar conjuntos de dados relativos ao comportamento de duas variáveis numéricas, usando tecnologias da informação, e, se apropriado, levar em conta a variação e utilizar uma reta para descrever a relação observada." },
      { code: "EM13MAT511", description: "Reconhecer a existência de diferentes tipos de espaços amostrais, discretos ou não, de eventos equiprováveis ou não, e investigar as implicações no cálculo de probabilidades." },
      { code: "EM13MAT512", description: "Investigar propriedades de figuras geométricas, questionando suas conjecturas por meio da busca de contraexemplos, para refutá‑las ou reconhecer a necessidade de sua demonstração para validação, como os teoremas relativos aos quadriláteros e triângulos." }
    ]
  }
];

export const SAEB_PORTUGUESE_SKILLS: SkillGroup[] = [
  {
    category: "Nível 1 – Desempenho ≥ 225 e < 250",
    skills: [
      { code: "Nível 1", description: "Identificar elementos da narrativa em história em quadrinhos." },
      { code: "Nível 1", description: "Reconhecer a finalidade de recurso gráfico em artigos." },
      { code: "Nível 1", description: "Reconhecer a relação de causa e consequência em lendas." },
      { code: "Nível 1", description: "Inferir o sentido de palavra em letras de música e reportagens." }
    ]
  },
  {
    category: "Nível 2 – Desempenho ≥ 250 e < 275",
    skills: [
      { code: "Nível 2", description: "Reconhecer a ideia comum entre textos de gêneros diferentes e a ironia em tirinhas." },
      { code: "Nível 2", description: "Reconhecer relações de sentido estabelecidas por conjunções ou locuções conjuntivas em letras de música e crônicas." },
      { code: "Nível 2", description: "Reconhecer o uso de expressões características da linguagem (científica, profissional etc.) e a relação entre pronome e seu referente em artigos e reportagens." },
      { code: "Nível 2", description: "Inferir o efeito de sentido da linguagem verbal e não verbal em notícias e charges." }
    ]
  },
  {
    category: "Nível 3 – Desempenho ≥ 275 e < 300",
    skills: [
      { code: "Nível 3", description: "Localizar informação explícita em artigos de opinião." },
      { code: "Nível 3", description: "Identificar a finalidade de relatórios científicos." },
      { code: "Nível 3", description: "Reconhecer relações de sentido marcadas por conjunções, a relação de causa e consequência e a relação entre o pronome e seu referente em fragmentos de romances." },
      { code: "Nível 3", description: "Reconhecer o tema de uma crônica." },
      { code: "Nível 3", description: "Reconhecer variantes linguísticas em artigos." },
      { code: "Nível 3", description: "Reconhecer o sentido e o efeito de sentido produzido pelo uso de recursos morfossintáticos em contos, artigos e crônicas." },
      { code: "Nível 3", description: "Reconhecer opiniões divergentes sobre o mesmo tema em diferentes textos." },
      { code: "Nível 3", description: "Inferir informação, o sentido e o efeito de sentido produzido por expressão em reportagens e tirinhas." }
    ]
  },
  {
    category: "Nível 4 – Desempenho ≥ 300 e < 325",
    skills: [
      { code: "Nível 4", description: "Localizar informações explícitas em infográficos, reportagens, crônicas e artigos." },
      { code: "Nível 4", description: "Identificar o argumento em contos." },
      { code: "Nível 4", description: "Identificar a finalidade e a informação principal em notícias." },
      { code: "Nível 4", description: "Reconhecer a relação entre os pronomes e seus referentes em contos." },
      { code: "Nível 4", description: "Reconhecer elementos da narrativa em contos." },
      { code: "Nível 4", description: "Reconhecer variantes linguísticas em contos, notícias e reportagens." },
      { code: "Nível 4", description: "Reconhecer o efeito de sentido produzido pelo uso de recursos morfossintáticos em poemas." },
      { code: "Nível 4", description: "Reconhecer ideia comum e opiniões divergentes sobre o mesmo tema na comparação entre diferentes textos." },
      { code: "Nível 4", description: "Reconhecer ironia e efeito de humor em crônicas e entrevistas." },
      { code: "Nível 4", description: "Reconhecer a relação de causa e consequência em piadas e fragmentos de romance." },
      { code: "Nível 4", description: "Comparar poemas que abordem o mesmo tema." },
      { code: "Nível 4", description: "Diferenciar fato de opinião em contos, artigos e reportagens." },
      { code: "Nível 4", description: "Diferenciar tese de argumentos em artigos, entrevistas e crônicas." },
      { code: "Nível 4", description: "Inferir informação, sentido de expressão e o efeito de sentido decorrente do uso de recursos morfossintáticos em crônicas." },
      { code: "Nível 4", description: "Inferir o sentido decorrente do uso de recursos gráficos em poemas." },
      { code: "Nível 4", description: "Inferir o efeito de sentido da linguagem verbal e não verbal e o efeito de humor em tirinhas." }
    ]
  },
  {
    category: "Nível 5 – Desempenho ≥ 325 e < 350",
    skills: [
      { code: "Nível 5", description: "Localizar informação explícita em resumos." },
      { code: "Nível 5", description: "Identificar a informação principal em reportagens." },
      { code: "Nível 5", description: "Identificar elementos da narrativa e a relação entre argumento e ideia central em crônicas." },
      { code: "Nível 5", description: "Reconhecer a finalidade de propagandas." },
      { code: "Nível 5", description: "Reconhecer variantes linguísticas e o efeito de sentido de recursos gráficos em crônicas e artigos." },
      { code: "Nível 5", description: "Reconhecer a relação de causa e consequência e relações de sentido marcadas por conjunções em reportagens, artigos e ensaios." },
      { code: "Nível 5", description: "Reconhecer o tema em poemas." },
      { code: "Nível 5", description: "Diferenciar fato de opinião em resenhas." },
      { code: "Nível 5", description: "Inferir o sentido de palavras e expressões em piadas e letras de música." },
      { code: "Nível 5", description: "Inferir informação em artigos; inferir o sentido de expressão em fragmentos de romances." }
    ]
  },
  {
    category: "Nível 6 – Desempenho ≥ 350 e < 375",
    skills: [
      { code: "Nível 6", description: "Reconhecer efeitos estilísticos em poemas." },
      { code: "Nível 6", description: "Reconhecer ironia e efeitos de sentido decorrentes da repetição de palavras em sinopses." },
      { code: "Nível 6", description: "Reconhecer opiniões distintas sobre o mesmo tema, na comparação entre diferentes textos." },
      { code: "Nível 6", description: "Reconhecer finalidade e traços de humor em reportagens." },
      { code: "Nível 6", description: "Reconhecer o efeito de sentido do humor em tirinhas." },
      { code: "Nível 6", description: "Reconhecer o tema em contos e fragmentos de romances." },
      { code: "Nível 6", description: "Reconhecer relação de sentido marcada por conjunção em crônicas." },
      { code: "Nível 6", description: "Inferir informação e tema em reportagens, poemas, histórias em quadrinhos e tirinhas." },
      { code: "Nível 6", description: "Inferir o sentido e o efeito de sentido de palavras ou de expressão em poemas, crônicas e fragmentos de romances." }
    ]
  },
  {
    category: "Nível 7 – Desempenho ≥ 375 e < 400",
    skills: [
      { code: "Nível 7", description: "Identificar a ideia central e o argumento em apresentações de livros, reportagens, editoriais e crônicas." },
      { code: "Nível 7", description: "Identificar elementos da narrativa em crônicas, contos e fragmentos de romances." },
      { code: "Nível 7", description: "Identificar ironia e tema em poemas e artigos." },
      { code: "Nível 7", description: "Reconhecer relações de sentido marcadas por conjunção em artigos, reportagens e fragmentos de romances." },
      { code: "Nível 7", description: "Reconhecer a relação de causa e consequência em reportagens e fragmentos de romances." },
      { code: "Nível 7", description: "Reconhecer o efeito de sentido de recursos gráficos em artigos." },
      { code: "Nível 7", description: "Reconhecer variantes linguísticas em letras de música e piadas." },
      { code: "Nível 7", description: "Reconhecer a finalidade de reportagens, resenhas e artigos." },
      { code: "Nível 7", description: "Inferir efeito de humor e ironia em tirinhas e charges." }
    ]
  },
  {
    category: "Nível 8 – Desempenho ≥ 400",
    skills: [
      { code: "Nível 8", description: "Reconhecer o efeito de sentido resultante do uso de recursos morfossintáticos em artigos e letras de música." }
    ]
  }
];

export const SAEB_MATHEMATICS_SKILLS: SkillGroup[] = [
  {
    category: "Nível 1 – Desempenho ≥ 225 e < 250",
    skills: [
      { code: "Nível 1", description: "Associar uma tabela de até duas entradas a informações apresentadas textualmente ou em um gráfico de barras ou de linhas." }
    ]
  },
  {
    category: "Nível 2 – Desempenho ≥ 250 e < 275",
    skills: [
      { code: "Nível 2", description: "Reconhecer as coordenadas de pontos representados em um plano cartesiano localizados no primeiro quadrante." },
      { code: "Nível 2", description: "Reconhecer os zeros de uma função dada graficamente." },
      { code: "Nível 2", description: "Determinar o valor de uma função afim, dada sua lei de formação." },
      { code: "Nível 2", description: "Determinar resultado utilizando o conceito de progressão aritmética." },
      { code: "Nível 2", description: "Associar um gráfico de setores a dados percentuais apresentados textualmente ou em uma tabela." }
    ]
  },
  {
    category: "Nível 3 – Desempenho ≥ 275 e < 300",
    skills: [
      { code: "Nível 3", description: "Reconhecer o valor máximo de uma função quadrática representada graficamente." },
      { code: "Nível 3", description: "Reconhecer, em um gráfico, o intervalo no qual a função assume valor máximo." },
      { code: "Nível 3", description: "Determinar, por meio de proporcionalidade, o gráfico de setores que representa uma situação com dados fornecidos textualmente." },
      { code: "Nível 3", description: "Determinar o quarto valor em uma relação de proporcionalidade direta a partir de três valores fornecidos em uma situação do cotidiano." },
      { code: "Nível 3", description: "Determinar um valor reajustado de uma quantia a partir de seu valor inicial e do percentual de reajuste." },
      { code: "Nível 3", description: "Resolver problemas utilizando operações fundamentais com números naturais." }
    ]
  },
  {
    category: "Nível 4 – Desempenho ≥ 300 e < 325",
    skills: [
      { code: "Nível 4", description: "Resolver problemas envolvendo área de uma região composta por retângulos a partir de medidas fornecidas em texto e figura." },
      { code: "Nível 4", description: "Reconhecer o gráfico de função a partir de valores fornecidos em um texto." },
      { code: "Nível 4", description: "Determinar a lei de formação de uma função linear a partir de dados fornecidos em uma tabela." },
      { code: "Nível 4", description: "Determinar a solução de um sistema de duas equações lineares." },
      { code: "Nível 4", description: "Determinar um termo de progressão aritmética, dada sua forma geral." },
      { code: "Nível 4", description: "Determinar a probabilidade da ocorrência de um evento simples." },
      { code: "Nível 4", description: "Resolver problemas utilizando proporcionalidade direta ou inversa, cujos valores devem ser obtidos a partir de operações simples." },
      { code: "Nível 4", description: "Resolver problemas de contagem usando princípio multiplicativo." }
    ]
  },
  {
    category: "Nível 5 – Desempenho ≥ 325 e < 350",
    skills: [
      { code: "Nível 5", description: "Determinar medidas de segmentos por meio da semelhança entre dois polígonos." },
      { code: "Nível 5", description: "Determinar o valor de variável dependente ou independente de uma função exponencial dada." },
      { code: "Nível 5", description: "Determinar o percentual que representa um valor em relação a outro." },
      { code: "Nível 5", description: "Determinar o valor de uma expressão algébrica." },
      { code: "Nível 5", description: "Determinar a solução de um sistema de três equações sendo uma com uma incógnita, outra com duas e a terceira com três incógnitas." },
      { code: "Nível 5", description: "Resolver problema envolvendo divisão proporcional do lucro em relação a dois investimentos iniciais diferentes." },
      { code: "Nível 5", description: "Resolver problema envolvendo operações, além das fundamentais, com números naturais." },
      { code: "Nível 5", description: "Resolver problema envolvendo a relação linear entre duas variáveis para a determinação de uma delas." },
      { code: "Nível 5", description: "Resolver problema envolvendo probabilidade de união de eventos." },
      { code: "Nível 5", description: "Avaliar o comportamento de uma função representada graficamente, quanto ao seu crescimento." }
    ]
  },
  {
    category: "Nível 6 – Desempenho ≥ 350 e < 375",
    skills: [
      { code: "Nível 6", description: "Reconhecer as coordenadas de pontos representados em um plano cartesiano e localizados em quadrantes diferentes do primeiro." },
      { code: "Nível 6", description: "Associar um sólido geométrico simples a uma planificação usual dada." },
      { code: "Nível 6", description: "Resolver problemas envolvendo Teorema de Pitágoras, para calcular a medida da hipotenusa de um triângulo pitagórico, a partir de informações textuais e figura." },
      { code: "Nível 6", description: "Determinar a razão de semelhança entre as imagens de um mesmo objeto em escalas diferentes." },
      { code: "Nível 6", description: "Determinar o volume de um paralelepípedo retângulo, dada sua representação espacial." },
      { code: "Nível 6", description: "Determinar os zeros de uma função quadrática, a partir de sua expressão algébrica." },
      { code: "Nível 6", description: "Resolver problemas de porcentagem envolvendo números racionais não inteiros." }
    ]
  },
  {
    category: "Nível 7 – Desempenho ≥ 375 e < 400",
    skills: [
      { code: "Nível 7", description: "Determinar a medida de um dos lados de um triângulo retângulo, por meio de razões trigonométricas, fornecendo ou não as fórmulas." },
      { code: "Nível 7", description: "Determinar, com o uso do Teorema de Pitágoras, a medida de um dos catetos de um triângulo retângulo não pitagórico." },
      { code: "Nível 7", description: "Determinar a área de um polígono não convexo composto por retângulos e triângulos, a partir de informações fornecidas na figura." },
      { code: "Nível 7", description: "Resolver problemas por meio de semelhança de triângulos sem apoio de figura." },
      { code: "Nível 7", description: "Resolver problemas envolvendo perímetros de triângulos equiláteros que compõem uma figura." },
      { code: "Nível 7", description: "Reconhecer gráfico de função a partir de informações sobre sua variação descritas em um texto." },
      { code: "Nível 7", description: "Reconhecer os zeros de uma função quadrática em sua forma fatorada." },
      { code: "Nível 7", description: "Reconhecer gráfico de função afim a partir de sua representação algébrica." },
      { code: "Nível 7", description: "Reconhecer a equação de uma reta a partir de dois de seus pontos." },
      { code: "Nível 7", description: "Reconhecer as raízes de um polinômio apresentado na sua forma fatorada." },
      { code: "Nível 7", description: "Determinar os pontos de máximo ou de mínimo a partir do gráfico de uma função." },
      { code: "Nível 7", description: "Determinar o valor de uma expressão algébrica envolvendo módulo." },
      { code: "Nível 7", description: "Determinar o ponto de interseção de duas retas." },
      { code: "Nível 7", description: "Determinar a expressão algébrica que relaciona duas variáveis com valores dados em tabela ou gráfico." },
      { code: "Nível 7", description: "Determinar a maior raiz de um polinômio de 2º grau." },
      { code: "Nível 7", description: "Resolver problemas para obter valor de variável dependente ou independente de uma função exponencial dada." },
      { code: "Nível 7", description: "Resolver problemas que envolvam uma equação de 1º grau que requeira manipulação algébrica." },
      { code: "Nível 7", description: "Resolver problemas envolvendo um sistema linear, dadas duas equações a duas incógnitas." },
      { code: "Nível 7", description: "Resolver problemas usando permutação." },
      { code: "Nível 7", description: "Resolver problemas utilizando probabilidade, envolvendo eventos independentes." }
    ]
  },
  {
    category: "Nível 8 – Desempenho ≥ 400 e < 425",
    skills: [
      { code: "Nível 8", description: "Reconhecer a proporcionalidade dos elementos lineares de figuras semelhantes." },
      { code: "Nível 8", description: "Determinar uma das medidas de uma figura tridimensional, utilizando o Teorema de Pitágoras." },
      { code: "Nível 8", description: "Determinar a equação de uma circunferência, dados o centro e o raio." },
      { code: "Nível 8", description: "Determinar a quantidade de faces, vértices e arestas de um poliedro por meio da relação de Euler." },
      { code: "Nível 8", description: "Resolver problema envolvendo razões trigonométricas no triângulo retângulo, com apoio de figura." },
      { code: "Nível 8", description: "Associar um prisma a uma planificação usual dada." },
      { code: "Nível 8", description: "Determinar a área da superfície de uma pirâmide regular." },
      { code: "Nível 8", description: "Determinar o volume de um paralelepípedo, dadas suas dimensões em unidades diferentes." },
      { code: "Nível 8", description: "Determinar o volume de cilindros." },
      { code: "Nível 8", description: "Reconhecer o gráfico de uma função trigonométrica da forma y=sen(x)." },
      { code: "Nível 8", description: "Reconhecer um sistema de equações associado a uma matriz." },
      { code: "Nível 8", description: "Determinar a expressão algébrica associada a um dos trechos do gráfico de uma função definida por partes." },
      { code: "Nível 8", description: "Determinar o valor máximo de uma função quadrática a partir de sua expressão algébrica e das expressões que determinam as coordenadas do vértice." },
      { code: "Nível 8", description: "Determinar a distância entre dois pontos no plano cartesiano." },
      { code: "Nível 8", description: "Resolver problema usando arranjo." },
      { code: "Nível 8", description: "Resolver problema envolvendo a resolução de uma equação do 2º grau sendo dados seus coeficientes." },
      { code: "Nível 8", description: "Interpretar o significado dos coeficientes da equação de uma reta, a partir de sua forma reduzida." }
    ]
  },
  {
    category: "Nível 9 – Desempenho ≥ 425 e < 450",
    skills: [
      { code: "Nível 9", description: "Reconhecer a equação que representa uma circunferência, dentre diversas equações dadas." },
      { code: "Nível 9", description: "Determinar o centro e o raio de uma circunferência a partir de sua equação geral." },
      { code: "Nível 9", description: "Resolver problemas envolvendo relações métricas em um triângulo retângulo que é parte de uma figura plana dada." },
      { code: "Nível 9", description: "Determinar o volume de pirâmides regulares." },
      { code: "Nível 9", description: "Resolver problema envolvendo áreas de círculos e polígonos." },
      { code: "Nível 9", description: "Resolver problema envolvendo semelhança de triângulos com apoio de figura na qual os dois triângulos apresentam ângulos opostos pelos vértices." },
      { code: "Nível 9", description: "Resolver problema envolvendo cálculo de volume de cilindro." },
      { code: "Nível 9", description: "Reconhecer o gráfico de uma função exponencial do tipo f(x)=10^{x+1}." },
      { code: "Nível 9", description: "Reconhecer o gráfico de uma função logarítmica dada a expressão algébrica da sua função inversa e seu gráfico." },
      { code: "Nível 9", description: "Determinar a expressão algébrica correspondente a uma função exponencial, a partir de dados fornecidos em texto ou gráfico." },
      { code: "Nível 9", description: "Determinar a inversa de uma função exponencial dada, representativa de uma situação do cotidiano." },
      { code: "Nível 9", description: "Determinar inclinação ou coeficiente angular de retas a partir de suas equações." },
      { code: "Nível 9", description: "Determinar um polinômio na forma fatorada, dadas as suas raízes." }
    ]
  },
  {
    category: "Nível 10 – Desempenho ≥ 450",
    skills: [
      { code: "Nível 10", description: "Determinar a solução de um sistema de três equações lineares, a três incógnitas, apresentado na forma matricial escalonada." }
    ]
  }
];

export const SPAECE_PORTUGUESE_SKILLS_1ANO: SkillGroup[] = [
  {
    category: "Saber 1: Localizar informação explícita",
    skills: [
      { code: "S01.H01", description: "Localizar informações explícitas a partir da verificação de suas marcas tipográficas (negrito, sublinhado, aspas, números etc.) em textos verbais, pertencentes a gêneros simples ou complexos de qualquer sequência discursiva predominante." },
      { code: "S01.H02", description: "Localizar informações explícitas a partir da reprodução de ideias de um trecho ou parágrafo de textos de gêneros simples de grande circulação social." },
      { code: "S01.H03", description: "Localizar uma informação explícita a partir da reprodução de ideias de um trecho ou parágrafo em textos verbais, pertencentes a gêneros simples, predominantemente narrativos." },
      { code: "S01.H04", description: "Localizar uma informação explícita a partir da reprodução de ideias de um trecho ou parágrafo de textos de gêneros simples predominantemente descritivos." },
      { code: "S01.H05", description: "Localizar uma informação explícita a partir da reprodução de ideias de um trecho ou parágrafo em textos verbais, pertencentes a gêneros simples, da ordem do relatar." },
      { code: "S01.H06", description: "Localizar uma informação explícita a partir da reprodução de ideias de um trecho ou parágrafo em textos verbais pertencentes a gêneros simples predominantemente expositivos." },
      { code: "S01.H07", description: "Localizar informações explícitas a partir da reprodução de ideias de um trecho ou parágrafo em textos verbais, pertencentes a gêneros simples, predominantemente instrucionais/injuntivos." },
      { code: "S01.H08", description: "Localizar informações explícitas a partir da reprodução de ideias de um trecho ou parágrafo em textos verbais, pertencentes a gêneros simples, predominantemente argumentativos." },
      { code: "S01.H09", description: "Localizar informações explícitas em textos não verbais ou multissemióticos pertencentes a gêneros simples e/ou de grande circulação social de qualquer sequência discursiva predominante." },
      { code: "S01.H10", description: "Localizar uma informação explícita a partir do sentido global de textos de gêneros simples predominantemente descritivos." },
      { code: "S01.H11", description: "Localizar uma informação explícita a partir do sentido global de textos de gêneros simples predominantemente narrativos." },
      { code: "S01.H12", description: "Localizar uma informação explícita a partir do sentido global de textos de gêneros simples da ordem do relatar." }
    ]
  },
  {
    category: "Saber 2: Inferir informação em texto verbal",
    skills: [
      { code: "S02.H01", description: "Inferir tempo, espaço ou seres em textos verbais, pertencentes a gêneros simples de grande circulação social de qualquer sequência discursiva predominante." },
      { code: "S02.H02", description: "Inferir sentimentos ou emoções vinculadas a um trecho ou parágrafo de textos verbais pertencentes a gêneros simples e/ou de grande circulação social de qualquer sequência discursiva predominante." },
      { code: "S02.H03", description: "Inferir a moral vinculada a uma fábula, quando não explicitada/expressa." },
      { code: "S02.H04", description: "Inferir ações de um ser retratado em textos verbais pertencentes a gêneros simples predominantemente descritivos." },
      { code: "S02.H05", description: "Inferir características físicas de um ser retratado, com base em suas atitudes, ações ou discursos em textos verbais, pertencentes a gêneros simples predominantemente descritivos ou da ordem do relatar." },
      { code: "S02.H06", description: "Inferir ideias contraditórias, ambíguas (duplo sentido) ou paradoxais em textos verbais pertencentes a gêneros simples e/ou de grande circulação social predominantemente narrativos, descritivos ou da ordem do relatar." },
      { code: "S02.H07", description: "Inferir ações de um ser retratado em textos verbais pertencentes a gêneros simples predominantemente expositivos, instrucionais ou argumentativos." },
      { code: "S02.H08", description: "Inferir características físicas de um ser retratado com base em suas atitudes, ações ou discursos em textos verbais pertencentes a gêneros simples predominantemente expositivos, instrucionais ou argumentativos." },
      { code: "S02.H09", description: "Inferir ideias contraditórias, ambíguas (duplo sentido) ou paradoxais em textos verbais pertencentes a gêneros simples e/ou de grande circulação social predominantemente expositivos, instrucionais ou argumentativos." },
      { code: "S02.H10", description: "Inferir a causa ou a consequência decorrentes/resultantes de um fato, ação ou de um comportamento em textos verbais pertencentes a gêneros simples predominantemente narrativos, descritivos ou da ordem do relatar." },
      { code: "S02.H11", description: "Inferir características ou estados psicológicos de seres retratados com base em suas atitudes, ações ou discursos em textos verbais pertencentes a gêneros simples, predominantemente descritivos ou da ordem do relatar." },
      { code: "S02.H12", description: "Inferir uma crítica político-social vinculado a textos verbais pertencentes a gêneros simples predominantemente narrativos, descritivos ou da ordem do relatar." },
      { code: "S02.H13", description: "Inferir sentimentos ou emoções vinculadas a um trecho ou parágrafo de textos não verbais ou multissemióticos pertencentes a gêneros simples e/ou de grande circulação social, de qualquer sequência discursiva predominante." }
    ]
  },
  {
    category: "Saber 3: Inferir o sentido de uma palavra ou expressão",
    skills: [
      { code: "S03.H01", description: "Inferir o significado figurado de uma palavra em textos verbais, pertencentes a gêneros simples de grande circulação social, predominantemente descritivos ou narrativos." },
      { code: "S03.H02", description: "Inferir o significado de expressões idiomáticas, frases feitas, bordões ou ditados populares, a partir de seus usos em textos verbais, pertencentes a gêneros simples de grande circulação social predominantemente descritivos ou narrativos." },
      { code: "S03.H03", description: "Inferir o significado figurado de uma palavra em textos multissemióticos pertencentes a gêneros simples e/ou de grande circulação social de qualquer sequência discursiva predominante." },
      { code: "S03.H04", description: "Inferir o significado de expressões idiomáticas, frases feitas, bordões ou ditados populares, a partir de seus usos em textos multissemióticos, pertencentes a gêneros simples e/ou de grande circulação social de qualquer sequência discursiva predominante." },
      { code: "S03.H05", description: "Inferir o significado de gírias ou regionalismos a partir de seus usos em textos verbais pertencentes a gêneros simples de qualquer sequência discursiva predominante." },
      { code: "S03.H06", description: "Inferir o significado de estrangeirismos ou neologismos a partir de seus usos em textos verbais pertencentes a gêneros simples de qualquer sequência discursiva predominante." },
      { code: "S03.H07", description: "Inferir o significado de expressões idiomáticas, frases feitas, bordões ou ditados populares a partir de seus usos em textos verbais pertencentes a gêneros simples da ordem do relatar, expor, instruir e argumentar." },
      { code: "S03.H08", description: "Inferir o significado de gírias ou regionalismos a partir de seus usos, em textos multissemióticos, pertencentes a gêneros simples e/ou de grande circulação social de qualquer sequência discursiva predominante." },
      { code: "S03.H09", description: "Inferir o significado figurado de uma palavra em textos verbais pertencentes a gêneros simples da ordem do relatar, expor, instruir e argumentar." }
    ]
  },
  {
    category: "Saber 4: Interpretar textos não verbais e textos que articulam elementos verbais e não verbais",
    skills: [
      { code: "S04.H01", description: "Reconhecer elementos organizadores (tempo, espaço, personagens etc.), em textos não verbais ou multissemióticos, pertencentes a gêneros simples e/ou de grande circulação social de qualquer sequência discursiva predominante." },
      { code: "S04.H02", description: "Identificar características físicas de seres retratados, em textos não verbais ou multissemióticos, pertencentes a gêneros simples de qualquer sequência discursiva, exceto os predominantemente narrativos." },
      { code: "S04.H03", description: "Identificar ações de seres retratados, em textos não verbais ou multissemióticos, pertencentes a gêneros simples de qualquer sequência discursiva, exceto os predominantemente narrativos." },
      { code: "S04.H04", description: "Compreender o sentido global, em textos não verbais ou multissemióticos, pertencentes a gêneros simples e/ou de grande circulação social de qualquer sequência discursiva, exceto os predominantemente narrativos." },
      { code: "S04.H05", description: "Reconhecer a ordem cronológica em que fatos acontecem, em textos não verbais ou multissemióticos, pertencentes a gêneros simples de qualquer sequência discursiva, exceto os predominantemente narrativos." },
      { code: "S04.H06", description: "Identificar características psicológicas ou estados emocionais de seres retratados, em textos não verbais ou multissemióticos, pertencentes a gêneros simples de qualquer sequência discursiva, exceto os predominantemente narrativos." },
      { code: "S04.H07", description: "Identificar intenções de seres retratados, em textos não verbais ou multissemióticos, pertencentes a gêneros simples de qualquer sequência discursiva, exceto os predominantemente narrativos." },
      { code: "S04.H08", description: "Compreender o sentido global com base em informações implícitas, em textos não verbais ou multissemióticos, pertencentes a gêneros simples e/ou de grande circulação social de qualquer sequência discursiva predominante." }
    ]
  },
  {
    category: "Saber 5: Identificar o tema ou assunto de um texto",
    skills: [
      { code: "S05.H01", description: "Identificar o tema ou o assunto central já sinalizados pelo título, em textos verbais pertencentes a gêneros simples ou complexo de qualquer sequência discursiva predominante." },
      { code: "S05.H02", description: "Identificar palavras-chave que sintetizam o sentido global, em textos verbais, pertencentes a gêneros simples de qualquer sequência discursiva predominante." },
      { code: "S05.H03", description: "Identificar o tema ou o assunto central de textos verbais pertencentes a gêneros simples predominantemente da ordem do relatar." },
      { code: "S05.H04", description: "Identificar o tema ou o assunto central de textos não verbais ou multissemióticos pertencentes a gêneros simples e/ou de grande circulação social de qualquer sequência discursiva predominante." },
      { code: "S05.H05", description: "Identificar o tema ou o assunto central de textos verbais pertencentes a gêneros simples predominantemente expositivos." },
      { code: "S05.H06", description: "Reconhecer o tema ou o assunto central de textos verbais pertencentes a gêneros simples predominantemente argumentativos." },
      { code: "S05.H07", description: "Identificar o tema ou assunto central de textos verbais pertencentes a gêneros simples predominantemente instrucionais/injuntivos." }
    ]
  },
  {
    category: "Saber 6: Distinguir fato da opinião relativa a esse fato",
    skills: [
      { code: "S06.H01", description: "Identificar um fato apresentado, em textos verbais, pertencentes a gêneros simples de grande circulação social predominantemente narrativos, descritivos e da ordem do relatar." },
      { code: "S06.H02", description: "Identificar opinião explícita, em textos verbais, pertencentes a gêneros simples de grande circulação social predominantemente narrativos, descritivos e da ordem do relatar." },
      { code: "S06.H03", description: "Identificar um fato apresentado, em textos verbais, pertencentes a gêneros simples de grande circulação social predominantemente expositivo, instrucionais/injuntivos ou argumentativos." },
      { code: "S06.H04", description: "Identificar opinião explícita, em textos verbais, pertencentes a gêneros simples de grande circulação social predominantemente expositivos, instrucionais/injuntivos ou argumentativos." },
      { code: "S06.H05", description: "Identificar um fato presente em textos não verbais ou multissemióticos pertencentes a gêneros simples e/ou de grande circulação social de qualquer sequência discursiva predominante." },
      { code: "S06.H06", description: "Identificar uma opinião presente em textos não verbais ou multissemióticos pertencentes a gêneros e/ou de grande circulação social de qualquer sequência discursiva predominante." },
      { code: "S06.H07", description: "Identificar um juízo de valor/julgamento expresso pelo enunciador (narrador, autor, eu lírico) sobre algo, alguém ou fato, em textos verbais, pertencentes a gênero simples predominantemente narrativos, descritivos e da ordem do relatar." },
      { code: "S06.H08", description: "Identificar marcas linguísticas (substantivo, advérbios e locuções de tempo ou lugar, verbos no pretérito perfeito, escolha vocabular etc.) que ajudam a evidenciar um fato expresso pelo enunciador, em textos verbais, pertencentes a gêneros simples de qualquer sequência discursiva predominante." },
      { code: "S06.H09", description: "Identificar opiniões, pontos de vista e/ou posicionamentos divergentes em um mesmo texto verbal pertencente a gêneros simples, predominantemente narrativos, descritivos, expositivos, instrucionais e da ordem do relatar." },
      { code: "S06.H10", description: "Identificar opiniões, pontos de vista e/ou posicionamentos divergentes em um mesmo texto verbal, pertencente a gêneros simples predominantemente argumentativo." },
      { code: "S06.H11", description: "Identificar marcas linguísticas que ajudam a evidenciar uma opinião expressa pelo enunciador em textos verbais pertencentes a gêneros simples de qualquer sequência discursiva predominante." },
      { code: "S06.H12", description: "Identificar opiniões, pontos de vista e/ou posicionamentos divergentes em um único texto não verbal ou multissemiótico pertencentes a gêneros simples e/ou de grande circulação social de qualquer sequência discursiva predominante." },
      { code: "S06.H23", description: "Identificar fatos fictícios ou fakenews em textos verbais ou multissemióticos de qualquer sequência discursiva predominante." },
      { code: "S06.H24", description: "Identificar opiniões do enunciador (autor, narrador, personagem), por meio de comentários interventivos, sobre fatos fictícios em textos ficcionais ou em fakenews." }
    ]
  },
  {
    category: "Saber 7: Diferenciar a informação principal das secundárias em um texto",
    skills: [
      { code: "S07.H01", description: "Identificar informação secundária expressa por uma afirmação do autor, narrador ou eu-lírico em um texto de gêneros simples de qualquer sequência discursiva predominante." },
      { code: "S07.H02", description: "Identificar informação secundária expressa por meio de uma descrição de estados, eventos, espaços, objetos ou fenômenos em textos verbais ou multissemióticos, pertencentes a gêneros simples e/ou de grande circulação social de qualquer sequência discursiva predominante." },
      { code: "S07.H03", description: "Identificar informação principal expressa por meio da relação de um agente e seus respectivos eventos por ele desencadeados em um texto verbal de gêneros simples de qualquer sequência discursiva predominante." },
      { code: "S07.H04", description: "Identificar informação secundária expressa por meio de uma explicação, um detalhamento ou uma exemplificação relativa a estados, eventos, espaços, objetos ou fenômenos em textos verbais ou multissemióticos, pertencentes a gêneros simples de qualquer sequência discursiva predominante." },
      { code: "S07.H08", description: "Identificar informação secundária expressa por meio de uma explicação, um detalhamento ou uma exemplificação de estados, eventos, espaços, objetos ou fenômenos em um texto em textos de gêneros simples de qualquer sequência discursiva predominante." },
      { code: "S07.H09", description: "Identificar informação secundária expressa por meio de um resumo exposto logo após uma sequência de fatos ou ideias ter sido apresentadas ou relatadas pelo autor, narrador ou eu-lírico de um texto de gênero simples de qualquer sequência discursiva predominante." },
      { code: "S07.H10", description: "Identificar informação principal expressa por meio de eventos ordenados em uma sequência temporal em textos de gêneros simples de qualquer sequência discursiva predominante." },
      { code: "S07.H11", description: "Identificar informação principal expressa por meio de eventos de aspecto perfectivo em textos verbais de gêneros simples de qualquer sequência discursiva predominante." },
      { code: "S07.H12", description: "Identificar informação secundária expressa por meio de eventos de aspecto imperfectivo em textos verbais, pertencentes a gêneros simples de qualquer sequência discursiva predominante." },
      { code: "S07.H13", description: "Identificar informação secundária expressa por meio de uma autoparáfrase (reelaboração discursiva) do próprio autor, narrador ou eu-lírico de um texto verbal de gêneros simples de qualquer sequência discursiva predominante." }
    ]
  },
  {
    category: "Saber 9: Reconhecer gêneros discursivos",
    skills: [
      { code: "S09.H01", description: "Reconhecer gêneros simples que materializam textos verbais de grande circulação social, predominantemente narrativos ou descritivos." },
      { code: "S09.H02", description: "Reconhecer gêneros simples que materializam verbais de grande circulação social, predominantemente da ordem do relatar." },
      { code: "S09.H03", description: "Reconhecer gêneros simples que materializam textos verbais, predominantemente expositivos." },
      { code: "S09.H04", description: "Reconhecer gêneros simples que materializam textos verbais, predominantemente instrucionais/injuntivos." },
      { code: "S09.H05", description: "Reconhecer gêneros simples que materializam textos verbais, predominantemente argumentativos." },
      { code: "S09.H06", description: "Reconhecer gêneros simples que materializam textos não verbais ou multissemióticos de grande circulação social, de qualquer sequência discursiva predominante." },
      { code: "S09.H07", description: "Identificar o domínio/ambiente discursivo a qual pertence ou se vincula um determinado gênero que materializa textos verbais, não verbais ou multissemióticos, simples e/ou de grande circulação social, de qualquer sequência discursiva predominante." }
    ]
  },
  {
    category: "Saber 10: Identificar o propósito comunicativo em diferentes gêneros",
    skills: [
      { code: "S10.H01", description: "Identificar o propósito comunicativo de gêneros simples que materializam textos verbais de grande circulação social, predominantemente narrativos." },
      { code: "S10.H02", description: "Identificar o propósito comunicativo de gêneros simples da ordem do descrever." },
      { code: "S10.H03", description: "Identificar o propósito comunicativo de gêneros simples que materializam textos verbais, predominantemente da ordem do relatar." },
      { code: "S10.H04", description: "Identificar o propósito comunicativo de gêneros simples que materializam textos verbais, predominantemente expositivos/informativos." },
      { code: "S10.H05", description: "Identificar o propósito comunicativo de gêneros simples que materializam textos verbais, predominantemente instrucionais/injuntivos." },
      { code: "S10.H06", description: "Identificar o propósito comunicativo de gêneros simples que materializam textos verbais, predominantemente argumentativos." },
      { code: "S10.H07", description: "Identificar o propósito comunicativo de gêneros simples que materializam textos não verbais ou multissemióticos de grande circulação social, de qualquer sequência discursiva predominante." }
    ]
  },
  {
    category: "Saber 11: Reconhecer os elementos que compõem uma narrativa e o conflito gerador",
    skills: [
      { code: "S11.H01", description: "Reconhecer elementos organizadores (tempo, espaço, personagens, enredo etc.) em textos verbais, pertencentes a gêneros simples, predominantemente narrativos." },
      { code: "S11.H02", description: "Reconhecer características físicas de personagens em textos verbais, pertencentes a gêneros simples, predominantemente narrativos." },
      { code: "S11.H03", description: "Identificar ações dos personagens em textos verbais, pertencentes a gêneros simples, predominantemente narrativos." },
      { code: "S11.H04", description: "Identificar marcas linguísticas que evidenciam o tipo de tempo (cronológico ou psicológico) em textos verbais de gêneros simples, predominantemente narrativos." },
      { code: "S11.H05", description: "Identificar marcas linguísticas que evidenciam o foco narrativo (narrador-personagem, narrador- observador, narrador-intruso) em textos verbais, pertencentes a gêneros simples, predominantemente narrativos." },
      { code: "S11.H06", description: "Identificar marcas linguísticas que evidenciam o discurso narrativo (direto, indireto e indireto livre) em textos verbais, pertencentes a gêneros simples, predominantemente narrativos." },
      { code: "S11.H07", description: "Diferenciar protagonista, antagonista, personagens secundários ou figurantes em textos verbais, pertencentes a gêneros simples, ou multissemióticos em geral, predominantemente narrativos." },
      { code: "S11.H08", description: "Identificar características psicológicas ou estados emocionais de personagens em textos verbais, pertencentes a gêneros simples, predominantemente narrativos." },
      { code: "S11.H09", description: "Associar ações de personagens a suas características psicológicas em textos verbais, pertencentes a gêneros simples, predominantemente narrativos." },
      { code: "S11.H10", description: "Reconhecer a ordem psicológica, em que as ações acontecem em textos verbais, pertencentes a gêneros simples, ou multissemióticos em geral, predominantemente narrativos." },
      { code: "S11.H11", description: "Associar intenções a ações particulares de determinados personagens em textos verbais, pertencentes a gêneros simples, predominantemente narrativos." },
      { code: "S11.H12", description: "Identificar o conflito gerador em textos verbais ou multissemióticos, pertencentes a gêneros simples, predominantemente narrativos." },
      { code: "S11.H13", description: "Identificar o clímax em textos verbais ou multissemióticos, pertencentes a gêneros simples, predominantemente narrativos." }
    ]
  },
  {
    category: "Saber 12: Identificar semelhanças e/ou diferenças de ideias e opiniões na comparação entre textos",
    skills: [
      { code: "S12.H01", description: "Reconhecer ideias e opiniões semelhantes na comparação entre textos verbais, pertencentes a gêneros iguais simples e predominantemente narrativos, descritos ou da ordem do relatar." },
      { code: "S12.H02", description: "Reconhecer ideias e opiniões diferentes na comparação entre textos verbais, pertencentes a gêneros iguais, simples e predominantemente narrativos, descritos ou da ordem do relatar." },
      { code: "S12.H03", description: "Reconhecer ideias e opiniões semelhantes na comparação entre textos verbais, pertencentes a gêneros diferentes, simples e predominantemente narrativos, descritos ou da ordem do relatar." },
      { code: "S12.H04", description: "Reconhecer ideias e opiniões diferentes na comparação entre textos verbais, pertencentes a gêneros diferentes, simples e predominantemente narrativos, descritos ou da ordem do relatar." },
      { code: "S12.H05", description: "Reconhecer ideias e opiniões semelhantes na comparação entre textos verbais, pertencentes a gêneros iguais, simples e predominantemente expositivos, instrucionais ou argumentativos." },
      { code: "S12.H06", description: "Reconhecer ideias e opiniões diferentes na comparação entre textos verbais, pertencentes a gêneros iguais, simples e predominantemente expositivos, instrucionais ou argumentativos." }
    ]
  },
  {
    category: "Saber 13: Reconhecer diferentes formas de tratar uma informação na comparação de textos de um mesmo tema",
    skills: [
      { code: "S13.H01", description: "Reconhecer diferentes formas de tratar uma informação qualquer, na comparação de textos verbais de um mesmo tema, pertencentes a gêneros iguais, simples e predominantemente narrativos, descritos ou da ordem do relatar." },
      { code: "S13.H02", description: "Reconhecer diferentes formas de tratar uma informação qualquer, na comparação de textos não verbais ou multissemióticos de um mesmo tema, pertencentes a gêneros iguais, simples e/ou de grande circulação social, de qualquer sequência discursiva predominante." },
      { code: "S13.H03", description: "Reconhecer diferentes formas de tratar uma informação qualquer, na comparação de textos verbais de um mesmo tema, pertencentes a gêneros iguais, simples e predominantemente expositivos, instrucionais ou argumentativos." },
      { code: "S13.H04", description: "Reconhecer diferentes formas de tratar uma informação qualquer, na comparação de textos verbais de um mesmo tema, pertencentes a gêneros diferentes, simples e predominantemente narrativos, descritos ou da ordem do relatar." },
      { code: "S13.H06", description: "Reconhecer diferentes formas de tratar uma informação qualquer, na comparação de textos verbais de um mesmo tema, pertencentes a gêneros diferentes, simples e predominantemente expositivos, instrucionais ou argumentativos." },
      { code: "S13.H07", description: "Reconhecer a intertextualidade temática na comparação de textos verbais, pertencentes a gêneros simples e predominantemente expositivos, injuntivos ou argumentativos." },
      { code: "S13.H08", description: "Reconhecer a intertextualidade temática, na comparação de textos não verbais ou multissemióticos, pertencentes a gêneros simples de qualquer sequência discursiva predominante." }
    ]
  },
  {
    category: "Saber 14: Reconhecer as relações entre as partes de um texto, identificando os recursos coesivos que contribuem para a sua continuidade",
    skills: [
      { code: "S14.H01", description: "Reconhecer relações entre partes de um texto estabelecidas pela retomada de termos, expressões ou ideias mediante o uso de pronomes pessoais do caso reto em textos verbais ou multissemióticos, pertencentes a gêneros simples e/ou de grande circulação social, de qualquer sequência discursiva predominante." },
      { code: "S14.H02", description: "Reconhecer relações entre partes de um texto estabelecidas pela retomada de termos, expressões ou ideias mediante o uso de pronomes demonstrativos em textos verbais ou multissemióticos, pertencentes a gêneros simples e/ou de grande circulação social, de qualquer sequência discursiva predominante." },
      { code: "S14.H03", description: "Reconhecer relações entre partes de um texto estabelecidas pela retomada de termos, expressões ou ideias mediante o uso de pronomes possessivos em textos verbais ou multissemióticos, pertencentes a gêneros simples e/ou de grande circulação social, de qualquer sequência discursiva predominante." },
      { code: "S14.H04", description: "Reconhecer relações entre partes de um texto estabelecidas pela retomada de termos, expressões ou ideias mediante o uso de pronomes de tratamento em textos verbais ou multissemióticos, pertencentes a gêneros simples e/ou de grande circulação social, de qualquer sequência discursiva predominante." },
      { code: "S14.H05", description: "Reconhecer relações entre partes de um texto estabelecidas pelo uso de advérbios, preposições ou respectivas locuções em textos verbais ou multissemióticos, pertencentes a gêneros simples e/ou de grande circulação social, de qualquer sequência discursiva predominante." },
      { code: "S14.H06", description: "Reconhecer relações entre partes de um texto estabelecidas pela retomada de termos, expressões ou ideias mediante o uso de palavras sinônimas em textos verbais ou multissemióticos, pertencentes a gêneros simples e/ou de grande circulação social, de qualquer sequência discursiva predominante." },
      { code: "S14.H07", description: "Reconhecer relações entre partes de um texto estabelecidas pela retomada de termos, expressões ou ideias mediante a elipse em textos verbais ou multissemióticos, pertencentes a gêneros simples e/ ou de grande circulação social, de qualquer sequência discursiva predominante." },
      { code: "S14.H08", description: "Reconhecer relações entre partes de um texto estabelecidas pela retomada de termos, expressões ou ideias mediante a relação de estabelecida hiperonímia-hiponímia entre palavras em textos verbais ou multissemióticos, pertencentes a gêneros simples e/ou de grande circulação social, de qualquer sequência discursiva predominante." },
      { code: "S14.H09", description: "Reconhecer relações entre partes de um texto estabelecidas pela retomada de termos, expressões ou ideias mediante o uso de pronomes pessoais do caso oblíquo em textos verbais ou multissemióticos, pertencentes a gêneros simples e/ou de grande circulação social, de qualquer sequência discursiva predominante." },
      { code: "S14.H10", description: "Reconhecer relações entre partes de um texto estabelecidas pela catáfora presente em textos verbais ou multissemióticos, pertencentes a gêneros simples e/ou de grande circulação social, de qualquer sequência discursiva predominante." },
      { code: "S14.H12", description: "Reconhecer relações entre partes de um texto estabelecidas pelo uso de conjunções ou locuções conjuntivas coordenativas em textos verbais ou multissemióticos, pertencentes a gêneros simples e/ou de grande circulação social, de qualquer sequência discursiva predominante." },
      { code: "S14.H13", description: "Reconhecer relações entre partes de um texto estabelecidas pela retomada de termos, expressões ou ideias mediante o uso de recursos coesivos recategorizadores em textos verbais ou multissemióticos, pertencentes a gêneros simples e/ou de grande circulação social, de qualquer sequência discursiva predominante." },
      { code: "S14.H14", description: "Reconhecer relações entre partes de um texto estabelecidas pela retomada de termos, expressões ou ideias mediante o uso de pronomes relativos em textos verbais ou multissemióticos, pertencentes a gêneros simples e/ou de grande circulação social, de qualquer sequência discursiva predominante." }
    ]
  },
  {
    category: "Saber 15: Identificar a tese de um texto",
    skills: [
      { code: "S15.H01", description: "Identificar marcas linguísticas que evidenciam partes (introdução, argumentação e conclusão) de textos verbais, pertencentes a gêneros simples, predominantemente argumentativos." },
      { code: "S15.H02", description: "Identificar o trecho que evidencia a tese principal de textos verbais, pertencentes a gêneros simples, predominantemente argumentativos." },
      { code: "S15.H03", description: "Identificar o trecho que retoma a tese na conclusão (também chamada de nova tese) de textos verbais, pertencentes a gêneros simples, predominantemente argumentativos." },
      { code: "S15.H05", description: "Identificar a tese principal vinculada a textos não verbais ou multissemióticos, pertencentes a gêneros simples e/ou de grande circulação social, predominantemente argumentativos." },
      { code: "S15.H06", description: "Identificar o trecho que evidencia a tese principal de textos verbais, pertencentes a gêneros complexos predominantemente argumentativos." }
    ]
  },
  {
    category: "Saber 16: Estabelecer relação entre tese e os argumentos oferecidos para sustentá-la",
    skills: [
      { code: "S16.H01", description: "Reconhecer o(s) argumento(s) que sustenta(m) a tese principal vinculada a textos verbais, pertencentes a gêneros simples, predominantemente argumentativos." },
      { code: "S16.H02", description: "Identificar trecho ou marcas linguísticas que evidenciam o(s) argumento(s) que embasa(m) a tese principal vinculada a textos verbais, pertencentes a gêneros simples, predominantemente argumentativos." },
      { code: "S16.H03", description: "Identificar o trecho ou marcas linguísticas que evidenciam um argumento de autoridade presente em textos verbais, pertencentes a gêneros simples, predominantemente argumentativos." },
      { code: "S16.H04", description: "Identificar o trecho ou marcas linguísticas que evidenciam um argumento de comprovação presente em textos verbais, pertencentes a gêneros simples, predominantemente argumentativos." },
      { code: "S16.H05", description: "Identificar o trecho ou marcas linguísticas que evidenciam um argumento por raciocínio lógico presente em textos verbais, pertencentes a gêneros simples, predominantemente argumentativos." },
      { code: "S16.H06", description: "Identificar a estratégia argumentativa utilizada pelo autor para embasar uma tese vinculada a textos verbais, pertencentes a gêneros simples, predominantemente argumentativos." },
      { code: "S16.H07", description: "Identificar o(s) argumento(s) que sustenta(m) uma contra-tese (refutação ou contestação) em textos verbais, pertencentes a gêneros simples, predominantemente argumentativos." },
      { code: "S16.H08", description: "Identificar o(s) argumento(s) que embasa(m) a tese principal vinculada a textos não verbais ou multissemióticos, pertencentes a gêneros simples e/ou de grande circulação social, predominantemente argumentativos." }
    ]
  },
  {
    category: "Saber 17: Reconhecer o sentido das relações lógico-discursivas marcadas por conjunções, advérbios etc.",
    skills: [
      { code: "S17.H01", description: "Reconhecer a relação lógico-discursiva de lugar ou tempo marcada pelo uso de advérbios, locuções adverbiais, conjunções, denotadores etc. que expressam essa relação em textos verbais, pertencentes a gêneros simples, de qualquer sequência discursiva predominante." },
      { code: "S17.H02", description: "Reconhecer a relação lógico-discursiva de adição, inclusão ou alternância marcada pelo uso de advérbios, locuções adverbiais, conjunções, denotadores etc. que expressam essa relação em textos verbais, pertencentes a gêneros simples, ou multissemióticos em geral, de qualquer sequência discursiva predominante." },
      { code: "S17.H03", description: "Reconhecer a relação lógico-discursiva de ênfase, (re)afirmação ou dúvida marcada pelo uso de advérbios, locuções adverbiais, conjunções, denotadores etc. que expressam essa relação em textos verbais, pertencentes a gêneros simples, ou multissemióticos em geral, de qualquer sequência discursiva predominante." },
      { code: "S17.H04", description: "Reconhecer a relação lógico-discursiva de comparação marcada pelo uso de advérbios, locuções adverbiais, conjunções, denotadores etc. que expressam essa relação em textos verbais, pertencentes a gêneros simples ou multissemióticos em geral, de qualquer sequência discursiva predominante." },
      { code: "S17.H05", description: "Reconhecer a relação lógico-discursiva de oposição, restrição ou exclusão de ideias marcada pelo uso de advérbios, locuções adverbiais, conjunções, denotadores etc. que expressam essa relação em textos verbais, pertencentes a gêneros simples ou multissemióticos em geral, de qualquer sequência discursiva predominante." },
      { code: "S17.H06", description: "Reconhecer a relação lógico-discursiva de explicação ou causa marcada pelo uso de advérbios, locuções adverbiais, conjunções, denotadores etc. que expressam essa relação em textos verbais, pertencentes a gêneros simples, ou multissemióticos em geral, de qualquer sequência discursiva predominante." },
      { code: "S17.H07", description: "Reconhecer a relação lógico-discursiva de consequência ou efeito/desdobramento de ações e ideias marcada pelo uso de advérbios, locuções adverbiais, conjunções, denotadores etc. que expressam essa relação em textos verbais, pertencentes a gêneros simples, ou multissemióticos em geral, de qualquer sequência discursiva predominante." },
      { code: "S17.H08", description: "Reconhecer a relação lógico-discursiva de conclusão ou finalidade de uma ideia ou de um raciocínio marcada pelo uso de advérbios, locuções adverbiais, conjunções, denotadores etc. que expressam essa relação em textos verbais, pertencentes a gêneros simples, ou multissemióticos em geral, de qualquer sequência discursiva predominante." },
      { code: "S17.H09", description: "Reconhecer a relação lógico-discursiva de condição ou proporção marcada pelo uso de conjunções que expressam essa relação em textos verbais, pertencentes a gêneros simples, ou multissemióticos em geral, de qualquer sequência discursiva predominante." },
      { code: "S17.H10", description: "Reconhecer a relação lógico-discursiva de conformidade marcada pelo uso de conjunções, denotadores etc. que expressam essa relação em textos verbais, pertencentes a gêneros simples, ou multissemióticos em geral, de qualquer sequência discursiva predominante." }
    ]
  },
  {
    category: "Saber 18: Reconhecer o sentido do texto e suas partes sem a presença de marcas coesivas",
    skills: [
      { code: "S18.H01", description: "Compreender o sentido do texto verbal e suas partes sem a presença de marcas coesivas a partir da lógica sequencial de fatos, ações, intenções ou ideias em textos verbais pertencentes a gêneros simples predominantemente narrativos, descritivos ou da ordem do relatar." },
      { code: "S18.H02", description: "Compreender o sentido do texto verbal e suas partes sem a presença de marcas coesivas a partir da sequência de palavras ligadas pelo mesmo campo semântico em textos verbais pertencentes a gêneros simples predominantemente narrativos, descritivos ou da ordem do relatar." },
      { code: "S18.H03", description: "Compreender o sentido do texto e suas partes sem a presença de marcas coesivas a partir da temática central em textos verbais pertencentes a gêneros simples predominantemente narrativos, descritivos ou da ordem do relatar." },
      { code: "S18.H04", description: "Compreender o sentido do texto verbal e suas partes sem a presença de marcas coesivas a partir da lógica sequencial de fatos, ações, intenções ou ideias em textos verbais pertencentes a gêneros simples predominantemente expositivos, instrucionais ou argumentativos." },
      { code: "S18.H05", description: "Compreender o sentido do texto verbal e suas partes sem a presença de marcas coesivas a partir da sequência de palavras ligadas pelo mesmo campo semântico em textos verbais pertencentes a gêneros simples predominantemente expositivos, instrucionais ou argumentativos." },
      { code: "S18.H06", description: "Compreender o sentido do texto e suas partes sem a presença de marcas coesivas a partir da temática central em textos verbais pertencentes a gêneros simples predominantemente expositivos, instrucionais ou argumentativos." },
      { code: "S18.H07", description: "Compreender o sentido do texto e suas partes sem a presença de marcas coesivas a partir da relação estabelecida entre os elementos verbais e não verbais em textos multissemióticos, pertencentes a gêneros simples e/ou de grande circulação social, de qualquer sequência predominante." },
      { code: "S18.H08", description: "Compreender o sentido do texto verbal e suas partes sem a presença de marcas coesivas a partir da relação de causa e consequência em textos verbais, pertencentes a gênero simples, predominantemente narrativos, descritivos ou da ordem do relatar." }
    ]
  },
  {
    category: "Saber 19: Reconhecer o efeito de sentido decorrente da escolha de palavras, frases ou expressões",
    skills: [
      { code: "S19.H01", description: "Compreender o efeito de sentido decorrente da escolha de palavras, frases ou expressões conotativas em textos verbais pertencentes a gêneros simples, ou multissemióticos em geral, de qualquer sequência discursiva predominante." },
      { code: "S19.H02", description: "Compreender o efeito de sentido decorrente da escolha de palavras, frases ou expressões com valor semântico de antonímia em textos verbais pertencentes a gêneros simples, ou multissemióticos em geral, de qualquer sequência discursiva predominante." },
      { code: "S19.H03", description: "Compreender o efeito de sentido decorrente da escolha de palavras polissêmicas em textos verbais pertencentes a gêneros simples, ou multissemióticos em geral, de qualquer sequência discursiva predominante." },
      { code: "S19.H04", description: "Compreender o efeito de sentido decorrente do uso de palavras que qualificam (adjetivos, numerais etc.) elementos em textos verbais pertencentes a gêneros simples, ou multissemióticos em geral, de qualquer sequência discursiva predominante." },
      { code: "S19.H05", description: "Compreender o efeito de sentido decorrente da escolha de palavras homônimas ou parônimas em textos verbais ou multissemióticos pertencentes a gêneros simples e/ou de grande circulação social, de qualquer sequência discursiva predominante." },
      { code: "S19.H06", description: "Compreender o efeito de sentido decorrente do uso de estrangeirismos, neologismos, gírias ou regionalismos a partir de seus usos em textos verbais ou multissemióticos pertencentes a gêneros simples e/ou de grande circulação social, de qualquer sequência discursiva predominante." },
      { code: "S19.H07", description: "Compreender o efeito de sentido gerado pelo uso de provérbios, ditados populares, expressões idiomáticas ou frases feitas a partir do seu contexto, estando elas em sua forma fixa ou subversiva em textos verbais pertencentes a gêneros simples, ou multissemióticos em geral, de qualquer sequência discursiva predominante." },
      { code: "S19.H08", description: "Compreender o efeito de sentido decorrente do uso de palavras, termos ou expressões específicas ou típicas de uma determinada área do Saber/Conhecimento em textos verbais ou multissemióticos pertencentes a gêneros simples e/ou de grande circulação social de qualquer sequência discursiva predominante." }
    ]
  },
  {
    category: "Saber 20: Identificar o efeito de sentido decorrente do uso da pontuação e de outras notações",
    skills: [
      { code: "S20.H01", description: "Identificar o uso primordial de sinais de pontuação que delimitam unidades com entonações específicas e de sentido expressivos na fala (interrogação, exclamação e aspas) em textos verbais ou multissemióticos em geral de qualquer sequência discursiva predominante." },
      { code: "S20.H02", description: "Identificar o uso primordial de sinais de pontuação que indicam pausas ou interrupções entre unidades de forma e sentido (ponto final, reticência, vírgula, dois pontos e ponto-vírgula) em textos verbais ou multissemióticos em geral, de qualquer sequência discursiva predominante." },
      { code: "S20.H03", description: "Reconhecer a função textual da utilização de travessões simples para indicar fala ou mudança de fala de interlocutores nos discursos diretos em textos verbais ou multissemióticos em geral, de qualquer sequência discursiva predominante." },
      { code: "S20.H04", description: "Detectar o efeito de sentido decorrente do emprego da reticência para expressar continuidade, dúvida ou hesitação em textos verbais ou multissemióticos em geral de qualquer sequência discursiva predominante." },
      { code: "S20.H05", description: "Detectar o efeito de sentido decorrente do emprego do ponto de interrogação como recurso para expressar dúvida, pergunta retórica ou reflexão em textos verbais ou multissemióticos em geral de qualquer sequência discursiva predominante." },
      { code: "S20.H06", description: "Perceber o uso expressivo do ponto de exclamação, para realçar determinados sentidos ou transmitir determinados sentimentos e estados emocionais em textos verbais ou multissemióticos em geral, de qualquer sequência discursiva predominante." },
      { code: "S20.H07", description: "Identificar efeitos de sentido decorrentes do uso de aspas, como recurso para expressar ironia, sarcasmo, insinuação, licença poética e ética, bem como para marcar gírias ou estrangeirismos em textos verbais ou multissemióticos em geral, de qualquer sequência discursiva predominante." },
      { code: "S20.H08", description: "Identificar o uso de dois-pontos para expressar explicações, enumerações e apostos ou orações apositivas em textos verbais ou multissemióticos em geral, de qualquer sequência discursiva predominante." },
      { code: "S20.H09", description: "Reconhecer a função textual da utilização de travessões duplos, parênteses para separar orações intercaladas ou colocar em evidência uma frase, expressão, palavra etc. em textos verbais ou multissemióticos em geral, de qualquer sequência discursiva predominante." },
      { code: "S20.H10", description: "Identificar o efeito de sentido decorrente do uso de negrito, itálico, realce, sublinhado, cor ou de caixa alta (letras maiúsculas) em textos verbais ou multissemióticos de grande circulação social, de qualquer sequência discursiva predominante." }
    ]
  },
  {
    category: "Saber 21: Reconhecer o efeito decorrente do emprego de recursos estilísticos e morfossintáticos",
    skills: [
      { code: "S21.H01", description: "Reconhecer rimas (recursos morfossintáticos que agregam musicalidade) em textos verbais ou multissemióticos, pertencentes a gêneros simples do âmbito artístico e lítero-musical." },
      { code: "S21.H02", description: "Reconhecer o efeito de sentido decorrente do uso de uma interjeição em textos verbais ou multissemióticos de qualquer sequência discursiva predominante." },
      { code: "S21.H03", description: "Reconhecer o efeito de sentido decorrente do uso da onomatopeia em textos verbais ou multissemióticos de qualquer sequência discursiva predominante." },
      { code: "S21.H04", description: "Reconhecer o efeito de sentido decorrente do emprego do diminutivo ou aumentativo de palavra em textos verbais ou multissemióticos de qualquer sequência discursiva predominante." },
      { code: "S21.H05", description: "Reconhecer o efeito de sentido decorrente do uso de onomatopeias ou interjeições em textos não verbais ou multissemióticos de qualquer sequência discursiva predominante." },
      { code: "S21.H06", description: "Reconhecer o efeito de sentido decorrente da repetição de vocábulos e/ou expressões em textos verbais ou multissemióticos de qualquer sequência discursiva predominante." }
    ]
  },
  {
    category: "Saber 22: Reconhecer os efeitos de humor e ironia",
    skills: [
      { code: "S22.H01", description: "Reconhecer efeitos de humor em textos verbais, não verbais ou multissemióticos, pertencentes a gêneros simples e/ou de grande circulação social, predominantemente narrativos, descritivos ou da ordem do relatar." },
      { code: "S22.H02", description: "Localizar trechos ou elementos que apresentam humor em textos verbais, não verbais ou multissemióticos, pertencentes a gêneros simples de qualquer sequência discursiva predominante." },
      { code: "S22.H03", description: "Reconhecer efeitos de humor em textos verbais, não verbais ou multissemióticos, pertencentes a gêneros simples e/ou de grande circulação social, predominantemente expositivos, instrucionais ou argumentativos." },
      { code: "S22.H04", description: "Reconhecer efeitos de ironia em textos verbais, não verbais ou multissemióticos, pertencentes a gêneros simples e/ou de grande circulação social, predominantemente narrativos, descritivos ou da ordem do relatar." },
      { code: "S22.H06", description: "Reconhecer efeitos de ironia em textos verbais, não verbais ou multissemióticos, pertencentes a gêneros simples e/ou de grande circulação social, predominantemente expositivos, instrucionais ou argumentativos." },
      { code: "S22.H07", description: "Localizar trechos ou elementos que apresentam ironia em textos verbais, não verbais ou multissemióticos, pertencentes a gêneros simples de qualquer sequência discursiva predominante." },
      { code: "S22.H09", description: "Reconhecer a finalidade da ironia ou do humor em textos verbais, não verbais ou multissemióticos, pertencentes a gêneros simples e/ou de grande circulação social, de qualquer sequência discursiva predominante." },
      { code: "S22.H10", description: "Reconhecer humor ou ironia através do uso de recursos morfossintáticos em textos verbais ou multissemióticos de qualquer sequência discursiva predominante." }
    ]
  },
  {
    category: "Saber 23: Identificar os níveis de linguagem e/ou as marcas linguísticas que evidenciam locutor e/ou interlocutor",
    skills: [
      { code: "S23.H01", description: "Identificar marcas linguísticas que evidenciam o locutor e/ou o interlocutor em textos verbais de qualquer sequência discursiva predominante." },
      { code: "S23.H02", description: "Identificar marcas linguísticas que evidenciam o uso da linguagem coloquial/informal/popular pelo locutor e/ou interlocutor em textos verbais de qualquer sequência discursiva predominante." },
      { code: "S23.H03", description: "Identificar marcas linguísticas que evidenciam o locutor e/ou o interlocutor em textos multissemióticos de qualquer sequência discursiva predominante." },
      { code: "S23.H04", description: "Reconhecer marcas linguísticas que evidenciam o uso da linguagem coloquial/informal/popular pelo locutor e/ou interlocutor em textos multissemióticos de qualquer sequência discursiva predominante." }
    ]
  }
];

export const SPAECE_PORTUGUESE_SKILLS_3ANO: SkillGroup[] = [
  {
    category: "Saber 1: Localizar informação explícita",
    skills: [
      { code: "S01.H01", description: "Localizar informações explícitas a partir da verificação de suas marcas tipográficas (negrito, sublinhado, aspas, números etc.) em textos verbais, pertencentes a gêneros simples ou complexos de qualquer sequência discursiva predominante." },
      { code: "S01.H02", description: "Localizar informações explícitas a partir da reprodução de ideias de um trecho ou parágrafo de textos de gêneros simples de grande circulação social." },
      { code: "S01.H03", description: "Localizar uma informação explícita a partir da reprodução de ideias de um trecho ou parágrafo em textos verbais, pertencentes a gêneros simples, predominantemente narrativos." },
      { code: "S01.H04", description: "Localizar uma informação explícita a partir da reprodução de ideias de um trecho ou parágrafo de textos de gêneros simples predominantemente descritivos." },
      { code: "S01.H05", description: "Localizar uma informação explícita a partir da reprodução de ideias de um trecho ou parágrafo em textos verbais, pertencentes a gêneros simples, da ordem do relatar." },
      { code: "S01.H06", description: "Localizar uma informação explícita a partir da reprodução de ideias de um trecho ou parágrafo em textos verbais pertencentes a gêneros simples predominantemente expositivos." },
      { code: "S01.H07", description: "Localizar informações explícitas a partir da reprodução de ideias de um trecho ou parágrafo em textos verbais, pertencentes a gêneros simples, predominantemente instrucionais/injuntivos." },
      { code: "S01.H08", description: "Localizar informações explícitas a partir da reprodução de ideias de um trecho ou parágrafo em textos verbais, pertencentes a gêneros simples, predominantemente argumentativos." },
      { code: "S01.H09", description: "Localizar informações explícitas em textos não verbais ou multissemióticos pertencentes a gêneros simples e/ou de grande circulação social de qualquer sequência discursiva predominante." },
      { code: "S01.H10", description: "Localizar uma informação explícita a partir do sentido global de textos de gêneros simples predominantemente descritivos." },
      { code: "S01.H11", description: "Localizar uma informação explícita a partir do sentido global de textos de gêneros simples predominantemente narrativos." },
      { code: "S01.H12", description: "Localizar uma informação explícita a partir do sentido global de textos de gêneros simples da ordem do relatar." },
      { code: "S01.H13", description: "Localizar uma informação explícita a partir da reprodução de ideias de um trecho ou parágrafo em textos verbais, pertencentes a gêneros complexos, predominantemente narrativos." },
      { code: "S01.H14", description: "Localizar uma informação explícita a partir da reprodução de ideias de um trecho ou parágrafo de textos de gêneros complexos predominantemente descritivos." },
      { code: "S01.H15", description: "Localizar uma informação explícita a partir da reprodução de ideias de um trecho ou parágrafo em textos verbais, pertencentes a gêneros complexos, da ordem do relatar." },
      { code: "S01.H16", description: "Localizar uma informação explícita a partir do sentido global de textos de gêneros simples predominantemente expositivos." },
      { code: "S01.H17", description: "Localizar uma informação explícita a partir do sentido global de textos de gêneros simples predominantemente instrucionais/injuntivos." },
      { code: "S01.H18", description: "Localizar uma informação explícita a partir do sentido global de textos de gêneros simples predominantemente argumentativos." },
      { code: "S01.H19", description: "Localizar informações explícitas em textos não verbais ou multissemióticos, pertencentes a gêneros complexos de qualquer sequência discursiva predominante." }
    ]
  },
  {
    category: "Saber 2: Inferir informação em texto verbal",
    skills: [
      { code: "S02.H01", description: "Inferir tempo, espaço ou seres em textos verbais, pertencentes a gêneros simples de grande circulação social de qualquer sequência discursiva predominante." },
      { code: "S02.H02", description: "Inferir sentimentos ou emoções vinculadas a um trecho ou parágrafo de textos verbais pertencentes a gêneros simples e/ou de grande circulação social de qualquer sequência discursiva predominante." },
      { code: "S02.H03", description: "Inferir a moral vinculada a uma fábula, quando não explicitada/expressa." },
      { code: "S02.H04", description: "Inferir ações de um ser retratado em textos verbais pertencentes a gêneros simples predominantemente descritivos." },
      { code: "S02.H05", description: "Inferir características físicas de um ser retratado, com base em suas atitudes, ações ou discursos (falas e/ou pensamentos) em textos verbais, pertencentes a gêneros simples predominantemente descritivos ou da ordem do relatar." },
      { code: "S02.H06", description: "Inferir ideias contraditórias, ambiguas (duplo sentido) ou paradoxais em textos verbais pertencentes a gêneros simples e/ou de grande circulação social predominantemente narrativos, descritivos ou da ordem do relatar." },
      { code: "S02.H07", description: "Inferir ações de um ser retratado em textos verbais pertencentes a gêneros simples predominantemente expositivos, instrucionais ou argumentativos." },
      { code: "S02.H08", description: "Inferir características físicas de um ser retratado com base em suas atitudes, ações ou discursos (falas e/ou pensamentos) em textos verbais pertencentes a gêneros simples predominantemente expositivos, instrucionais ou argumentativos." },
      { code: "S02.H09", description: "Inferir ideias contraditórias, ambiguas (duplo sentido) ou paradoxais em textos verbais pertencentes a gêneros simples e/ou de grande circulação social predominantemente expositivos, instrucionais ou argumentativos." },
      { code: "S02.H10", description: "Inferir a causa ou a consequência decorrentes/resultantes de um fato, ação ou de um comportamento em textos verbais pertencentes a gêneros simples predominantemente narrativos, descritivos ou da ordem do relatar." },
      { code: "S02.H11", description: "Inferir características ou estados psicológicos de seres retratados com base em suas atitudes, ações ou discursos em textos verbais pertencentes a gêneros simples, predominantemente descritivos ou da ordem do relatar." },
      { code: "S02.H12", description: "Inferir uma crítica político-social vinculado a textos verbais pertencentes a gêneros simples predominantemente narrativos, descritivos ou da ordem do relatar." },
      { code: "S02.H13", description: "Inferir sentimentos ou emoções vinculadas a um trecho ou parágrafo de textos não verbais ou multissemióticos pertencentes a gêneros simples e/ou de grande circulação social, de qualquer sequência discursiva predominante." },
      { code: "S02.H14", description: "Inferir sentimentos ou emoções vinculadas a um trecho ou parágrafo de textos não verbais ou multissemióticos, pertencentes a gêneros simples e/ou de grande circulação social, de qualquer sequência discursiva predominante." },
      { code: "S02.H15", description: "Inferir ações de um ser retratado em textos verbais, pertencentes a gêneros complexos, predominantemente descritivos ou da ordem do relatar." },
      { code: "S02.H16", description: "Inferir características físicas de um ser retratado, com base em suas atitudes, ações ou discursos (falas e/ou pensamentos) em textos verbais, pertencentes a gêneros complexos, predominantemente descritivos ou da ordem do relatar." },
      { code: "S02.H17", description: "Inferir ideias contraditórias, ambiguas (duplo sentido) ou paradoxais em textos, verbais, pertencentes a gêneros complexos, predominantemente descritivos ou da ordem do relatar." },
      { code: "S02.H18", description: "Inferir ações de um ser retratado em textos verbais, pertencentes a gêneros complexos, predominantemente expositivos, instrucionais ou argumentativos." },
      { code: "S02.H19", description: "Inferir características físicas de um ser retratado, com base em suas atitudes, ações ou discursos (falas e/ou pensamentos) em textos verbais, pertencentes a gêneros complexos, predominantemente expositivos, instrucionais ou argumentativos." },
      { code: "S02.H20", description: "Inferir ideias contraditórias, ambíguas (duplo sentido) ou paradoxais em textos, verbais, pertencentes a gêneros complexos, predominantemente expositivos, instrucional ou argumentativos." },
      { code: "S02.H21", description: "Inferir sentimentos ou emoções vinculadas a um trecho ou parágrafo de textos não verbais ou multissemióticos, pertencentes a gêneros complexos e/ou de grande circulação social, de qualquer sequência discursiva predominante." },
      { code: "S02.H22", description: "Inferir características ou estados psicológicos de seres retratados, com base em suas atitudes, ações ou discursos em textos verbais, pertencentes a gêneros complexos de qualquer sequência discursiva predominante." },
      { code: "S02.H23", description: "Inferir uma crítica político-social vinculado a textos verbais, pertencentes a gêneros complexos de qualquer sequência discursiva predominante." },
      { code: "S02.H24", description: "Inferir a imagem ou perfil construída(o) a respeito de quem fala (enunciador), isto é, do narrador, em textos narrativos, do eu lírico, em textos poéticos, ou do autor, em textos no geral." },
      { code: "S02.H25", description: "Inferir o referente, claramente não explicitado, ao qual se faz referência por meio de intertextualidade em textos complexos, de qualquer sequência discursiva predominante." }
    ]
  },
  {
    category: "Saber 3: Inferir o sentido de uma palavra ou expressão",
    skills: [
      { code: "S03.H01", description: "Inferir o significado figurado de uma palavra em textos verbais, pertencentes a gêneros simples de grande circulação social, predominantemente descritivos ou narrativos." },
      { code: "S03.H02", description: "Inferir o significado de expressões idiomáticas, frases feitas, bordões ou ditados populares, a partir de seus usos em textos verbais, pertencentes a gêneros simples de grande circulação social predominantemente descritivos ou narrativos." },
      { code: "S03.H03", description: "Inferir o significado figurado de uma palavra em textos multissemióticos pertencentes a gêneros simples e/ou de grande circulação social de qualquer sequência discursiva predominante." },
      { code: "S03.H04", description: "Inferir o significado de expressões idiomáticas, frases feitas, bordões ou ditados populares, a partir de seus usos em textos multissemióticos, pertencentes a gêneros simples e/ou de grande circulação social de qualquer sequência discursiva predominante." },
      { code: "S03.H05", description: "Inferir o significado de gírias ou regionalisms a partir de seus usos em textos verbais pertencentes a gêneros simples de qualquer sequência discursiva predominante." },
      { code: "S03.H08", description: "Inferir o significado de gírias ou regionalismos a partir de seus usos, em textos multissemióticos, pertencentes a gêneros simples e/ou de grande circulação social de qualquer sequência discursiva predominante." },
      { code: "S03.H09", description: "Inferir o significado figurado de uma palavra em textos verbais pertencentes a gêneros simples da ordem do relatar, expor, instruir e argumentar." },
      { code: "S03.H10", description: "Inferir o significado de gírias ou regionalismos a partir de seus usos em textos verbais pertencentes a gêneros complexos de qualquer sequência discursiva predominante." },
      { code: "S03.H11", description: "Inferir o significado de expressões idiomáticas, frases feitas, bordões ou ditados populares, a partir de seus usos em textos verbais, pertencentes a gêneros complexos predominantemente descritivos ou narrativos." },
      { code: "S03.H12", description: "Inferir o sentido de palavras, termos ou expressões específicas ou típicas de uma determinada área do Saber/Conhecimento em textos verbais, pertencentes a gêneros simples, de qualquer sequência discursiva predominante." },
      { code: "S03.H13", description: "Inferir o significado figurado de uma palavra em textos multissemióticos, pertencentes a gêneros complexos de qualquer sequência discursiva predominante." },
      { code: "S03.H14", description: "Inferir o significado figurado de uma palavra em textos complexos de qualquer sequência discursiva predominante." },
      { code: "S03.H15", description: "Inferir o significado de expressões idiomáticas, frases feitas, bordões ou ditados populares, a partir de seus usos em textos multissemióticos, pertencentes a gêneros simples de qualquer sequência discursiva predominante." },
      { code: "S03.H16", description: "Inferir o significado de estrangeirismos ou neologismos a partir de seus usos em textos verbais, pertencentes a gêneros complexos de qualquer sequência discursiva predominante." },
      { code: "S03.H17", description: "Inferir o significado de gírias ou regionalismos a partir de seus usos em textos multissemióticos, pertencentes a gêneros complexos de qualquer sequência discursiva predominante." },
      { code: "S03.H18", description: "Inferir o sentido de palavras, termos ou expressões específicas ou típicas de uma determinada área do Saber/Conhecimento em textos verbais ou multissemióticos complexos de qualquer sequência discursiva predominante." },
      { code: "S03.H19", description: "Inferir o significado de expressões idiomáticas, frases feitas, bordões ou ditados populares, a partir de seus usos em textos verbais, pertencentes a gêneros complexos de qualquer sequência discursiva predominante." },
      { code: "S03.H20", description: "Inferir o significado de palavras, termos ou expressões arcaicas, em desuso, em textos verbais ou multissemióticos, de natureza artístico-literária, bíblica/sacra ou histórica de qualquer sequência discursiva predominante." }
    ]
  },
  {
    category: "Saber 4: Interpretar textos não verbais e textos que articulam elementos verbais e não verbais",
    skills: [
      { code: "S04.H01", description: "Reconhecer elementos organizadores (tempo, espaço, personagens etc.), em textos não verbais ou multissemióticos, pertencentes a gêneros simples e/ou de grande circulação social de qualquer sequência discursiva predominante." },
      { code: "S04.H02", description: "Identificar características físicas de seres retratados, em textos não verbais ou multissemióticos, pertencentes a gêneros simples de qualquer sequência discursiva, exceto os predominantemente narrativos." },
      { code: "S04.H03", description: "Identificar ações de seres retratados, em textos não verbais ou multissemióticos, pertencentes a gêneros simples de qualquer sequência discursiva, exceto os predominantemente narrativos." },
      { code: "S04.H04", description: "Compreender o sentido global, em textos não verbais ou multissemióticos, pertencentes a gêneros simples e/ou de grande circulação social de qualquer sequência discursiva, exceto os predominantemente narrativos." },
      { code: "S04.H05", description: "Reconhecer a ordem cronológica em que fatos acontecem, em textos não verbais ou multissemióticos, pertencentes a gêneros simples de qualquer sequência discursiva, exceto os predominantemente narrativos." },
      { code: "S04.H06", description: "Identificar características psicológicas ou estados emocionais de seres retratados, em textos não verbais ou multissemióticos, pertencentes a gêneros simples de qualquer sequência discursiva, exceto os predominantemente narrativos." },
      { code: "S04.H07", description: "Identificar intenções de seres retratados, em textos não verbais ou multissemióticos, pertencentes a gêneros simples de qualquer sequência discursiva, exceto os predominantemente narrativos." },
      { code: "S04.H08", description: "Compreender o sentido global com base em informações implícitas, em textos não verbais ou multissemióticos, pertencentes a gêneros simples e/ou de grande circulação social de qualquer sequência discursiva predominante." },
      { code: "S04.H09", description: "Identificar características físicas de seres retratados em textos não verbais ou multissemióticos, pertencentes a gêneros complexos, de qualquer sequência discursiva, exceto os predominantemente narrativos." },
      { code: "S04.H10", description: "Reconhecer elementos organizadores (tempo, espaço, personagens etc.) em textos não verbais ou multissemióticos, pertencentes a gêneros complexos de qualquer sequência discursiva predominante." },
      { code: "S04.H11", description: "Identificar ações de seres retratados em textos não verbais ou multissemióticos, pertencentes a gêneros complexos, de qualquer sequência discursiva, exceto os predominantemente narrativos." },
      { code: "S04.H12", description: "Reconhecer a ordem cronológica em que fatos acontecem em textos não verbais ou multissemióticos, pertencentes a gêneros complexos, de qualquer sequência discursiva, exceto os predominantemente narrativos." },
      { code: "S04.H13", description: "Identificar características psicológicas ou estados emocionais de seres retratados em textos não verbais ou multissemióticos, pertencentes a gêneros complexos, de qualquer sequência discursiva, exceto os predominantemente narrativos." },
      { code: "S04.H14", description: "Compreender o sentido global com base em informações implícitas em textos não verbais ou multissemióticos, pertencentes a gêneros complexos de qualquer sequência discursiva predominante." },
      { code: "S04.H15", description: "Identificar intenções de seres retratados em textos não verbais ou multissemióticos, pertencentes a gêneros complexos, de qualquer sequência discursiva, exceto os predominantemente narrativos." }
    ]
  },
  {
    category: "Saber 5: Identificar o tema ou assunto de um texto",
    skills: [
      { code: "S05.H01", description: "Identificar o tema ou o assunto central já sinalizados pelo título, em textos verbais pertencentes a gêneros simples ou complexo de qualquer sequência discursiva predominante." },
      { code: "S05.H02", description: "Identificar palavras-chave que sintetizam o sentido global, em textos verbais, pertencentes a gêneros simples de qualquer sequência discursiva predominante." },
      { code: "S05.H03", description: "Identificar o tema ou o assunto central de textos verbais pertencentes a gêneros simples predominantemente da ordem do relatar." },
      { code: "S05.H04", description: "Identificar o tema ou o assunto central de textos não verbais ou multissemióticos pertencentes a gêneros simples e/ou de grande circulação social de qualquer sequência discursiva predominante." },
      { code: "S05.H05", description: "Identificar o tema ou o assunto central de textos verbais pertencentes a gêneros simples predominantemente expositivos." },
      { code: "S05.H06", description: "Reconhecer o tema ou o assunto central de textos verbais pertencentes a gêneros simples predominantemente argumentativos." },
      { code: "S05.H07", description: "Identificar o tema ou assunto central de textos verbais pertencentes a gêneros simples predominantemente instrucionais/injuntivos." },
      { code: "S05.H08", description: "Identificar palavras-chave que sintetizam o sentido global em textos verbais, pertencentes a gêneros complexos de qualquer sequência discursiva predominante." },
      { code: "S05.H09", description: "Identificar o tema ou o assunto central de textos verbais, pertencentes a gêneros complexos predominantemente narrativos ou descritivos." },
      { code: "S05.H10", description: "Identificar o tema ou o assunto central de textos verbais, pertencentes a gêneros complexos predominantemente expositivos." },
      { code: "S05.H11", description: "Identificar o tema central de textos verbais, pertencentes a gêneros complexos predominantemente instrucionais/injuntivos." },
      { code: "S05.H12", description: "Reconhecer o tema ou o assunto central de textos verbais, pertencentes a gêneros complexos predominantemente argumentativos." },
      { code: "S05.H13", description: "Identificar temas ou assuntos secundários a um tema ou assunto central em textos verbais, de qualquer sequência discursiva predominante." }
    ]
  },
  {
    category: "Saber 6: Distinguir fato da opinião relativa a esse fato",
    skills: [
      { code: "S06.H01", description: "Identificar um fato apresentado, em textos verbais, pertencentes a gêneros simples de grande circulação social predominantemente narrativos, descritivos e da ordem do relatar." },
      { code: "S06.H02", description: "Identificar opinião explícita, em textos verbais, pertencentes a gêneros simples de grande circulação social predominantemente narrativos, descritivos e da ordem do relatar." },
      { code: "S06.H03", description: "Identificar um fato apresentado, em textos verbais, pertencentes a gêneros simples de grande circulação social predominantemente expositivo, instrucionais/injuntivos ou argumentativos." },
      { code: "S06.H04", description: "Identificar opinião explícita, em textos verbais, pertencentes a gêneros simples de grande circulação social predominantemente expositivos, instrucionais/injuntivos ou argumentativos." },
      { code: "S06.H05", description: "Identificar um fato presente em textos não verbais ou multissemióticos pertencentes a gêneros simples e/ou de grande circulação social de qualquer sequência discursiva predominante." },
      { code: "S06.H06", description: "Identificar uma opinião presente em textos não verbais ou multissemióticos pertencentes a gêneros e/ou de grande circulação social de qualquer sequência discursiva predominante." },
      { code: "S06.H08", description: "Identificar marcas linguísticas (substantivo, advérbios e locuções de tempo ou lugar, verbos no pretérito perfeito, escolha vocabular etc.) que ajudam a evidenciar um fato expresso pelo enunciador, em textos verbais, pertencentes a gêneros simples de qualquer sequência discursiva predominante." },
      { code: "S06.H09", description: "Identificar opiniões, pontos de vista e/ou posicionamentos divergentes em um mesmo texto verbal pertencente a gêneros simples, predominantemente narrativos, descritivos, expositivos, instrucionais e da ordem do relatar." },
      { code: "S06.H10", description: "Identificar opiniões, pontos de vista e/ou posicionamentos divergentes em um mesmo texto verbal, pertencente a gêneros simples predominantemente argumentativo." },
      { code: "S06.H13", description: "Identificar um fato apresentado em textos verbais, pertencentes a gêneros complexos de grande circulação social em qualquer sequência discursiva." },
      { code: "S06.H14", description: "Identificar opiniões, pontos de vista e/ou posicionamentos divergentes em um mesmo texto verbal, pertencente a gêneros complexos de qualquer sequência discursiva predominante." },
      { code: "S06.H16", description: "Identificar um juízo de valor/julgamento expresso pelo enunciador (narrador, autor, eu lírico) sobre algo, alguém ou fato textos verbais, pertencentes a gênero simples, expositivo, injuntivo ou argumentativo." },
      { code: "S06.H17", description: "Identificar um juízo de valor/julgamento expresso pelo enunciador sobre algo, alguém ou fato textos verbais, pertencentes a gêneros complexos de qualquer sequência discursiva predominante." },
      { code: "S06.H18", description: "Identificar opiniões, pontos de vista e/ou posicionamentos divergentes em um único texto não verbal ou multissemiótico, pertencentes a gêneros complexos de qualquer sequência discursiva predominante." },
      { code: "S06.H19", description: "Identificar um fato presente em textos não verbais ou multissemióticos, pertencentes a gêneros complexos de qualquer sequência discursiva predominante." },
      { code: "S06.H20", description: "Identificar uma opinião presente em textos não verbais ou multissemióticos, pertencentes a gêneros complexos de qualquer sequência discursiva predominante." },
      { code: "S06.H21", description: "Identificar marcas linguísticas que ajudam a evidenciar um fato expresso pelo enunciador em textos verbais, pertencentes a gêneros complexos de qualquer sequência discursiva predominante." },
      { code: "S06.H22", description: "Identificar marcas linguísticas que ajudam a evidenciar uma opinião expressa pelo enunciador em textos verbais, pertencentes a gêneros complexos de qualquer sequência discursiva predominante." }
    ]
  },
  {
    category: "Saber 7: Diferenciar a informação principal das secundárias em um texto",
    skills: [
      { code: "S07.H01", description: "Identificar informação secundária expressa por uma afirmação do autor, narrador ou eu-lírico em um texto de gêneros simples de qualquer sequência discursiva predominante." },
      { code: "S07.H02", description: "Identificar informação secundária expressa por meio de uma descrição de estados, eventos, espaços, objetos ou fenômenos em textos verbais ou multissemióticos, pertencentes a gêneros simples e/ou de grande circulação social de qualquer sequência discursiva predominante." },
      { code: "S07.H03", description: "Identificar informação principal expressa por meio da relação de um agente e seus respectivos eventos por ele desencadeados em um texto verbal de gêneros simples de qualquer sequência discursiva predominante." },
      { code: "S07.H04", description: "Identificar informação secundária expressa por meio de uma explicação, um detalhamento ou uma exemplificação relativa a estados, eventos, espaços, objetos ou fenômenos em textos verbais ou multissemióticos, pertencentes a gêneros simples de qualquer sequência discursiva predominante." },
      { code: "S07.H07", description: "Identificar informação principal expressa pela relação de um agente e seus respectivos eventos por ele desencadeados em textos verbais ou multissemióticos, pertencentes a gêneros simples e/ou de grande circulação social de qualquer sequência discursiva predominante." },
      { code: "S07.H08", description: "Identificar informação secundária expressa por meio de uma explicação, um detalhamento ou uma exemplificação de estados, eventos, espaços, objetos ou fenômenos em um texto em textos de gêneros simples de qualquer sequência discursiva predominante." },
      { code: "S07.H09", description: "Identificar informação secundária expressa por meio de um resumo exposto logo após uma sequência de fatos ou ideias ter sido apresentadas ou relatadas pelo autor, narrador ou eu-lírico de um texto de gênero simples de qualquer sequência discursiva predominante." },
      { code: "S07.H10", description: "Identificar informação principal expressa por meio de eventos ordenados em uma sequência temporal em textos de gêneros simples de qualquer sequência discursiva predominante." },
      { code: "S07.H11", description: "Identificar informação principal expressa por meio de eventos de aspecto perfectivo em textos verbais de gêneros simples de qualquer sequência discursiva predominante." },
      { code: "S07.H12", description: "Identificar informação secundária expressa por meio de eventos de aspecto imperfectivo em textos verbais, pertencentes a gêneros simples de qualquer sequência discursiva predominante." },
      { code: "S07.H13", description: "Identificar informação secundária expressa por meio de uma autoparáfrase (reelaboração discursiva) do próprio autor, narrador ou eu-lírico de um texto verbal de gêneros simples de qualquer sequência discursiva predominante." },
      { code: "S07.H14", description: "Identificar informação secundária expressa por uma afirmação do autor, narrador ou eu-lírico em um texto de gêneros complexos de qualquer sequência discursiva predominante." },
      { code: "S07.H15", description: "Identificar informação secundária expressa por meio de uma descrição de estados, eventos, espaços, objetos ou fenômenos em textos verbais ou multissemióticos, pertencentes a gêneros complexos e/ou de grande circulação social de qualquer sequência discursiva predominante." },
      { code: "S07.H16", description: "Identificar informação principal expressa por meio da relação de um agente e seus respectivos eventos por ele desencadeados em um texto verbal de gêneros complexos de qualquer sequência discursiva predominante." },
      { code: "S07.H17", description: "Identificar informação secundária expressa por meio de uma explicação, um detalhamento ou uma exemplificação relativa a estados, eventos, espaços, objetos ou fenômenos em textos verbais ou multissemióticos, pertencentes a gêneros complexos de qualquer sequência discursiva predominante." },
      { code: "S07.H18", description: "Identificar informação secundária expressa por uma afirmação do autor, narrador ou eu-lírico em um texto verbal pertencente a gêneros complexos de qualquer sequência discursiva predominante." },
      { code: "S07.H19", description: "Identificar informação secundária expressa por meio de uma descrição de estados, eventos, espaços, objetos ou fenômenos em textos verbais ou multissemióticos, pertencentes a gêneros complexos de qualquer sequência discursiva predominante." },
      { code: "S07.H20", description: "Identificar informação principal expressa pela relação de um agente e seus respectivos eventos por ele desencadeados em textos verbais ou multissemióticos, pertencentes a gêneros complexos e/ou de grande circulação social de qualquer sequência discursiva predominante." },
      { code: "S07.H21", description: "Identificar informação secundária expressa por meio de uma explicação, um detalhamento ou uma exemplificação de estados, eventos, espaços, objetos ou fenômenos em um texto em textos de gêneros complexos de qualquer sequência discursiva predominante." },
      { code: "S07.H22", description: "Identificar informação secundária expressa por meio de um resumo exposto logo após uma sequência de fatos ou ideias ter sido apresentadas ou relatadas pelo autor, narrador ou eu-lírico de um texto de gênero complexo de qualquer sequência discursiva predominante." },
      { code: "S07.H23", description: "Identificar informação principal expressa por meio de eventos ordenados em uma sequência temporal em textos de gêneros complexos de qualquer sequência discursiva predominante." },
      { code: "S07.H24", description: "Identificar informação principal expressa por meio de eventos de aspecto perfectivo em textos verbais de gêneros complexos de qualquer sequência discursiva predominante." },
      { code: "S07.H25", description: "Identificar informação secundária expressa por meio de eventos de aspecto imperfectivo em textos verbais, pertencentes a gêneros complexos de qualquer sequência discursiva predominante." },
      { code: "S07.H26", description: "Identificar informação secundária expressa por meio de uma autoparáfrase do próprio autor, narrador ou eu-lírico de um texto verbal de gêneros complexos de qualquer sequência discursiva predominante." }
    ]
  },
  {
    category: "Saber 9: Reconhecer gêneros discursivos",
    skills: [
      { code: "S09.H06", description: "Reconhecer gêneros simples que materializam textos não verbais ou multissemióticos de grande circulação social, de qualquer sequência discursiva predominante." },
      { code: "S09.H07", description: "Identificar o domínio/ambiente discursivo a qual pertence ou se vincula um determinado gênero que materializa textos verbais, não verbais ou multissemióticos, simples e/ou de grande circulação social." },
      { code: "S09.H08", description: "Reconhecer gêneros complexos que materializam textos verbais, predominantemente narrativos, descritivos ou da ordem do relatar." },
      { code: "S09.H09", description: "Reconhecer gêneros complexos que materializam textos verbais, predominantemente expositivos, injuntivos ou argumentativos." },
      { code: "S09.H10", description: "Identificar a sequência discursiva predominante em um determinado gênero que materializa textos verbais, não verbais ou multissemióticos, simples e/ou de grande circulação social." },
      { code: "S09.H11", description: "Identificar o domínio/ambiente discursivo a qual pertence ou se vincula um determinado gênero que materializa textos verbais, não verbais ou multissemióticos complexos de qualquer sequência discursiva predominante." },
      { code: "S09.H12", description: "Reconhecer características estruturais de um dado gênero discursivo, seja ele verbal, não verbal ou multissemiótico simples e/ou de grande circulação social." },
      { code: "S09.H13", description: "Reconhecer características estruturais de um dado gênero discursivo, seja ele verbal, não verbal ou multissemiótico complexos de qualquer sequência discursiva predominante." },
      { code: "S09.H14", description: "Identificar a sequência discursiva predominante em um determinado gênero que materializa textos verbais, não verbais ou multissemióticos complexos de qualquer sequência discursiva predominante." }
    ]
  },
  {
    category: "Saber 10: Identificar o propósito comunicativo em diferentes gêneros",
    skills: [
      { code: "S10.H07", description: "Identificar o propósito comunicativo de gêneros simples que materializam textos não verbais ou multissemióticos de grande circulação social." },
      { code: "S10.H08", description: "Identificar o propósito comunicativo de gêneros complexos que materializam textos verbais predominantemente descritivos ou narrativos." },
      { code: "S10.H09", description: "Identificar o propósito comunicativo de gêneros simples que materializam textos verbais, predominantemente da ordem do relatar." },
      { code: "S10.H10", description: "Identificar o propósito comunicativo de gêneros simples que materializam textos verbais, predominantemente da ordem do expor." },
      { code: "S10.H11", description: "Identificar o propósito comunicativo de gêneros simples que materializam textos verbais, predominantemente instrucionais/injuntivos e argumentativos." },
      { code: "S10.H12", description: "Identificar o propósito comunicativo de gêneros simples que materializam textos verbais, predominantemente instrucionais/injuntivos (ex.: estatutos, regulamentos, leis etc.)." },
      { code: "S10.H13", description: "Identificar o propósito comunicativo de gêneros complexos que materializam textos não verbais ou multissemióticos de qualquer sequência discursiva predominante." },
      { code: "S10.H14", description: "Identificar o propósito comunicativo de textos híbridos (intergenéricos), com base em suas funções/finalidades, sejam eles verbais ou multissemióticos, de gêneros simples e/ou de grande circulação social." }
    ]
  },
  {
    category: "Saber 11: Reconhecer os elementos que compõem uma narrativa e o conflito gerador",
    skills: [
      { code: "S11.H07", description: "Diferenciar protagonista, antagonista, personagens secundários ou figurantes em textos verbais, pertencentes a gêneros simples, ou multissemióticos em geral, predominantemente narrativos." },
      { code: "S11.H08", description: "Identificar características psicológicas ou estados emocionais de personagens em textos verbais, pertencentes a gêneros simples, predominantemente narrativos." },
      { code: "S11.H10", description: "Reconhecer a ordem psicológica, em que as ações acontecem em textos verbais, pertencentes a gêneros simples, ou multissemióticos em geral, predominantemente narrativos." },
      { code: "S11.H11", description: "Associar intenções a ações particulares de determinados personagens em textos verbais, pertencentes a gêneros simples, predominantemente narrativos." },
      { code: "S11.H12", description: "Identificar o conflito gerador em textos verbais ou multissemióticos, pertencentes a gêneros simples, predominantemente narrativos." },
      { code: "S11.H13", description: "Identificar o clímax em textos verbais ou multissemióticos, pertencentes a gêneros simples, predominantemente narrativos." },
      { code: "S11.H14", description: "Reconhecer elementos organizadores (tempo, espaço, personagens, enredo etc.) em textos verbais, pertencentes a gêneros complexos, predominantemente narrativos." },
      { code: "S11.H15", description: "Reconhecer características físicas de personagens em textos verbais, pertencentes a gêneros complexos predominantemente narrativos." },
      { code: "S11.H16", description: "Identificar ações dos personagens em textos verbais, pertencentes a gêneros complexos predominantemente narrativos." },
      { code: "S11.H17", description: "Identificar marcas linguísticas que evidenciam o tipo de tempo (cronológico ou psicológico) em textos verbais de gêneros complexos predominantemente narrativos." },
      { code: "S11.H18", description: "Identificar marcas linguísticas que evidenciam o discurso narrativo (direto, indireto e indireto livre) em textos verbais, pertencentes a gêneros complexos predominantemente narrativos." },
      { code: "S11.H19", description: "Identificar marcas linguísticas que evidenciam o discurso narrativo em textos verbais, pertencentes a gêneros complexos predominantemente narrativos." },
      { code: "S11.H20", description: "Diferenciar protagonista, antagonista, personagens secundários ou figurantes em textos verbais, pertencentes a gêneros complexos ou multissemióticos em geral, predominantemente narrativos." },
      { code: "S11.H21", description: "Identificar características psicológicas ou estados emocionais de personagens em textos verbais, pertencentes a gêneros complexos predominantemente narrativos." },
      { code: "S11.H22", description: "Associar ações de personagens a suas características psicológicas em textos verbais, pertencentes a gêneros complexos predominantemente narrativos." },
      { code: "S11.H23", description: "Reconhecer a ordem psicológica, em que as ações acontecem em textos verbais, pertencentes a gêneros complexos, ou multissemióticos em geral, predominantemente narrativos." },
      { code: "S11.H24", description: "Associar intenções a ações particulares de determinados personagens em textos verbais, pertencentes a gêneros complexos, predominantemente narrativos." },
      { code: "S11.H25", description: "Identificar o conflito gerador em textos verbais ou multissemióticos, pertencentes a gêneros complexos, predominantemente narrativos." },
      { code: "S11.H26", description: "Identificar o clímax em textos verbais ou multissemióticos, pertencentes a gêneros complexos, predominantemente narrativos." }
    ]
  },
  {
    category: "Saber 12: Identificar semelhanças e/ou diferenças de ideias e opiniões na comparação entre textos",
    skills: [
      { code: "S12.H04", description: "Reconhecer ideias e opiniões diferentes na comparação entre textos verbais, pertencentes a gêneros diferentes, simples e predominantemente narrativos, descritos ou da ordem do relatar." },
      { code: "S12.H05", description: "Reconhecer ideias e opiniões semelhantes na comparação entre textos verbais, pertencentes a gêneros iguais, simples e predominantemente expositivos, instrucionais ou argumentativos." },
      { code: "S12.H06", description: "Reconhecer ideias e opiniões diferentes na comparação entre textos verbais, pertencentes a gêneros iguais, simples e predominantemente expositivos, instrucionais ou argumentativos." },
      { code: "S12.H07", description: "Reconhecer ideias e opiniões semelhantes na comparação entre textos verbais, pertencentes a gêneros diferentes, simples e predominantemente expositivos, instrucionais ou argumentativos." },
      { code: "S12.H08", description: "Reconhecer ideias e opiniões diferentes na comparação entre textos verbais, pertencentes a gêneros diferentes, simples e predominantemente expositivos, instrucionais ou argumentativos." },
      { code: "S12.H09", description: "Reconhecer ideias e opiniões semelhantes na comparação entre textos não verbais ou multissemióticos, pertencentes a gêneros iguais, simples e/ou de grande circulação social." },
      { code: "S12.H10", description: "Reconhecer ideias e opiniões diferentes na comparação entre textos não verbais ou multissemióticos, pertencentes a gêneros diferentes, simples e/ou de grande circulação social." },
      { code: "S12.H11", description: "Reconhecer ideias e opiniões semelhantes na comparação entre textos verbais, pertencentes a gêneros iguais ou diferentes, complexos e predominantemente narrativos, descritos ou da ordem do relatar." },
      { code: "S12.H12", description: "Reconhecer ideias e opiniões semelhantes ou diferentes na comparação entre textos verbais e multissemióticos, pertencentes a gêneros iguais ou diferentes, simples de qualquer sequência discursiva predominante." },
      { code: "S12.H13", description: "Reconhecer ideias e opiniões diferentes na comparação entre textos verbais, pertencentes a gêneros iguais ou diferentes, complexos e predominantemente narrativos, descritos ou da ordem do relatar." },
      { code: "S12.H14", description: "Reconhecer ideias e opiniões semelhantes na comparação entre textos verbais, pertencentes a gêneros iguais ou diferentes, complexos e predominantemente expositivos, instrucionais ou argumentativos." },
      { code: "S12.H15", description: "Reconhecer ideias e opiniões diferentes na comparação entre textos verbais, pertencentes a gêneros iguais ou diferentes, complexos e predominantemente expositivos, instrucionais ou argumentativos." },
      { code: "S12.H16", description: "Reconhecer ideias e opiniões semelhantes ou diferentes na comparação entre textos não verbais e multissemióticos, pertencentes a gêneros iguais ou diferentes, complexos de qualquer sequência discursiva predominante." }
    ]
  },
  {
    category: "Saber 13: Reconhecer diferentes formas de tratar uma informação na comparação de textos de um mesmo tema",
    skills: [
      { code: "S13.H04", description: "Reconhecer diferentes formas de tratar uma informação qualquer, na comparação de textos verbais de um mesmo tema, pertencentes a gêneros diferentes, simples e predominantemente narrativos, descritos ou da ordem do relatar." },
      { code: "S13.H06", description: "Reconhecer diferentes formas de tratar uma informação qualquer, na comparação de textos verbais de um mesmo tema, pertencentes a gêneros diferentes, simples e predominantemente expositivos, instrucionais ou argumentativos." },
      { code: "S13.H07", description: "Reconhecer a intertextualidade temática na comparação de textos verbais, pertencentes a gêneros simples e predominantemente expositivos, injuntivos ou argumentativos." },
      { code: "S13.H08", description: "Reconhecer a intertextualidade temática, na comparação de textos não verbais ou multissemióticos, pertencentes a gêneros simples de qualquer sequência discursiva predominante." },
      { code: "S13.H09", description: "Reconhecer diferentes formas de tratar uma informação qualquer, na comparação de textos verbais de um mesmo tema pertencentes a gêneros complexos de qualquer sequência discursiva predominante." },
      { code: "S13.H10", description: "Reconhecer diferentes formas de tratar uma informação qualquer, na comparação de textos não verbais ou multissemióticos de um mesmo tema, pertencentes a gêneros diferentes, simples e/ou de grande circulação social." },
      { code: "S13.H11", description: "Reconhecer a intertextualidade temática na comparação de textos verbais, pertencentes a gêneros complexos de qualquer sequência discursiva predominante." },
      { code: "S13.H12", description: "Reconhecer diferentes formas de apresentar informações implícitas na comparação de textos verbais sobre um mesmo tema pertencentes a gêneros simples de qualquer sequência discursiva predominante." },
      { code: "S13.H13", description: "Reconhecer a intertextualidade temática, na comparação de textos não verbais ou multissemióticos, pertencentes a gêneros complexos de qualquer sequência discursiva predominante." },
      { code: "S13.H14", description: "Reconhecer diferentes formas de apresentar informações implícitas na comparação de textos verbais sobre um mesmo tema pertencentes a gêneros complexos de qualquer sequência discursiva predominante." }
    ]
  },
  {
    category: "Saber 14: Relações entre as partes de um texto, identificando os recursos coesivos que contribuem para a sua continuidade",
    skills: [
      { code: "S14.H05", description: "Reconhecer relações entre partes de um texto estabelecidas pelo uso de advérbios, preposições ou respectivas locuções em textos verbais ou multissemióticos, pertencentes a gêneros simples e/ou de grande circulação social." },
      { code: "S14.H06", description: "Reconhecer relações entre partes de um texto estabelecidas pela retomada de termos, expressões ou ideias mediante o uso de palavras sinônimas em textos verbais ou multissemióticos, pertencentes a gêneros simples e/ou de grande circulação social." },
      { code: "S14.H08", description: "Reconhecer relações entre partes de um texto estabelecidas pela retomada de termos, expressões ou ideias mediante a relação estabelecida de hiperonímia-hiponímia entre palavras em textos verbais ou multissemióticos." },
      { code: "S14.H09", description: "Reconhecer relações entre partes de um texto estabelecidas pela retomada de termos, expressões ou ideias mediante o uso de pronomes pessoais do caso oblíquo em textos verbais ou multissemióticos." },
      { code: "S14.H10", description: "Reconhecer relações entre partes de um texto estabelecidas pela catáfora presente em textos verbais ou multissemióticos, pertencentes a gêneros simples e/ou de grande circulação social." },
      { code: "S14.H11", description: "Reconhecer relações entre partes de um texto estabelecidas pelo uso de recursos coesivos encapsuladores em textos verbais ou multissemióticos, pertencentes a gêneros simples e/ou de grande circulação social." },
      { code: "S14.H12", description: "Reconhecer relações entre partes de um texto estabelecidas pelo uso de conjunções ou locuções conjuntivas coordenativas em textos verbais ou multissemióticos, pertencentes a gêneros simples e/ou de grande circulação social." },
      { code: "S14.H13", description: "Reconhecer relações entre partes de um texto estabelecidas pela retomada de termos, expressões ou ideias mediante o uso de recursos coesivos recategorizadores." },
      { code: "S14.H14", description: "Reconhecer relações entre partes de um texto estabelecidas pela retomada de termos, expressões ou ideias mediante o uso de pronomes relativos em textos verbais ou multissemióticos, pertencentes a gêneros simples e/ou de grande circulação social." },
      { code: "S14.H15", description: "Reconhecer relações entre partes de um texto estabelecidas pela retomada de termos, expressões ou ideias mediante o uso de pronomes pessoais do caso reto em textos verbais ou multissemióticos, pertencentes a gêneros complexos." },
      { code: "S14.H16", description: "Reconhecer relações entre partes de um texto estabelecidas pela retomada de termos, expressões ou ideias mediante o uso de pronomes demonstrativos em textos verbais ou multissemióticos, pertencentes a gêneros complexos." },
      { code: "S14.H17", description: "Reconhecer relações entre partes de um texto estabelecidas pela retomada de termos, expressões ou ideias mediante o uso de pronomes possessivos em textos verbais ou multissemióticos, pertencentes a gêneros complexos." },
      { code: "S14.H18", description: "Reconhecer relações entre partes de um texto estabelecidas pela retomada de termos, expressões ou ideias mediante o uso de pronomes de tratamento em textos verbais ou multissemióticos, pertencentes a gêneros complexos." },
      { code: "S14.H19", description: "Reconhecer relações entre partes de um texto estabelecidas pelo uso de advérbios, preposições ou respectivas locuções em textos verbais ou multissemióticos, pertencentes a gêneros complexos de qualquer sequência discursiva predominante." },
      { code: "S14.H20", description: "Reconhecer relações entre partes de um texto estabelecidas pela retomada de termos, expressões ou ideias mediante o uso de palavras sinônimas em textos verbais ou multissemióticos, pertencentes a gêneros complexos de qualquer sequência discursiva predominante." },
      { code: "S14.H21", description: "Reconhecer relações entre partes de um texto estabelecidas pela retomada de termos, expressões ou ideias mediante a elipse em textos verbais ou multissemióticos, pertencentes a gêneros complexos de qualquer sequência discursiva predominante." },
      { code: "S14.H22", description: "Reconhecer relações entre partes de um texto estabelecidas pela retomada de termos, expressões ou ideias mediante a relação de estabelecida hiperonímia-hiponímia entre palavras em textos verbais ou multissemióticos, pertencentes a gêneros complexos." },
      { code: "S14.H23", description: "Reconhecer relações entre partes de um texto estabelecidas pelo uso de conjunções ou locuções conjuntivas subordinativas em textos verbais ou multissemióticos, pertencentes a gêneros simples e/ou de grande circulação social." },
      { code: "S14.H24", description: "Reconhecer relações entre partes de um texto estabelecidas pela retomada de termos, expressões ou ideias mediante o uso de pronomes pessoais do caso oblíquo em textos verbais ou multissemióticos, pertencentes a gêneros complexos." },
      { code: "S14.H25", description: "Reconhecer relações entre partes de um texto estabelecidas pela catáfora presente em textos verbais ou multissemióticos, pertencentes a gêneros complexos de qualquer sequência discursiva predominante." },
      { code: "S14.H26", description: "Reconhecer relações entre partes de um texto estabelecidas pelo uso de recursos coesivos encapsuladores em textos verbais ou multissemióticos, pertencentes a gêneros complexos de qualquer sequência discursiva predominante." },
      { code: "S14.H27", description: "Reconhecer relações entre partes de um texto estabelecidas pelo uso de conjunções ou locuções conjuntivas coordenativas em textos verbais ou multissemióticos, pertencentes a gêneros complexos de qualquer sequência discursiva predominante." },
      { code: "S14.H28", description: "Reconhecer relações entre partes de um texto estabelecidas pela retomada de termos, expressões ou ideias mediante o uso de recursos coesivos recategorizadores em textos verbais ou multissemióticos, pertencentes a gêneros complexos." },
      { code: "S14.H29", description: "Reconhecer relações entre partes de um texto estabelecidas pela retomada de termos, expressões ou ideias mediante o uso de pronomes relativos em textos verbais ou multissemióticos, pertencentes a gêneros complexos." },
      { code: "S14.H30", description: "Reconhecer relações entre partes de um texto estabelecidas pelo uso de conjunções ou locuções conjuntivas subordinativas em textos verbais ou multissemióticos, pertencentes a gêneros complexos de qualquer sequência discursiva predominante." }
    ]
  },
  {
    category: "Saber 15: Identificar a tese de um texto",
    skills: [
      { code: "S15.H03", description: "Identificar o trecho que retoma a tese na conclusão de textos verbais, pertencentes a gêneros simples, predominantemente argumentativos." },
      { code: "S15.H04", description: "Identificar a contra-tese (refutação ou contestação) em textos verbais, pertencentes a gêneros simples, predominantemente argumentativos." },
      { code: "S15.H05", description: "Identificar a tese principal vinculada a textos não verbais ou multissemióticos, pertencentes a gêneros simples e/ou de grande circulação social, predominantemente argumentativos." },
      { code: "S15.H06", description: "Identificar o trecho que evidencia a tese principal de textos verbais, pertencentes a gêneros complexos predominantemente argumentativos." },
      { code: "S15.H07", description: "Identificar o trecho que retoma a tese na conclusão de textos verbais, pertencentes a gêneros complexos, predominantemente argumentativos." },
      { code: "S15.H08", description: "Identificar a contra-tese (refutação ou contestação) em textos verbais, pertencentes a gêneros complexos predominantemente argumentativos." },
      { code: "S15.H09", description: "Identificar a tese principal vinculada a textos não verbais ou multissemióticos, pertencentes a gêneros complexos predominantemente argumentativos." }
    ]
  },
  {
    category: "Saber 16: Relação entre tese e argumentos",
    skills: [
      { code: "S16.H03", description: "Identificar o trecho ou marcas linguísticas que evidenciam um argumento de autoridade presente em textos verbais, pertencentes a gêneros simples, predominantemente argumentativos." },
      { code: "S16.H04", description: "Identificar o trecho ou marcas linguísticas que evidenciam um argumento de comprovação presente em textos verbais, pertencentes a gêneros simples, predominantemente argumentativos." },
      { code: "S16.H05", description: "Identificar o trecho ou marcas linguísticas que evidenciam um argumento por raciocínio lógico presente em textos verbais, pertencentes a gêneros simples, predominantemente argumentativos." },
      { code: "S16.H06", description: "Identificar a estratégia argumentativa utilizada pelo autor para embasar uma tese vinculada a textos verbais, pertencentes a gêneros simples, predominantemente argumentativos." },
      { code: "S16.H07", description: "Identificar o(s) argumento(s) que sustenta(m) uma contra-tese em textos verbais, pertencentes a gêneros simples, predominantemente argumentativos." },
      { code: "S16.H08", description: "Identificar o(s) argumento(s) que embasa(m) a tese principal vinculada a textos não verbais ou multissemióticos, pertencentes a gêneros simples e/ou de grande circulação social, predominantemente argumentativos." },
      { code: "S16.H09", description: "Reconhecer o(s) argumento(s) que sustenta(m) a tese principal vinculada a textos verbais, pertencentes a gêneros complexos predominantemente argumentativos." },
      { code: "S16.H10", description: "Identificar trecho ou marcas linguísticas que evidenciam o(s) argumento(s) que embasa(m) a tese principal vinculada a textos verbais, pertencentes a gêneros complexos predominantemente argumentativos." },
      { code: "S16.H11", description: "Identificar o trecho ou marcas linguísticas que evidenciam um argumento de autoridade presente em textos verbais, pertencentes a gêneros complexos predominantemente argumentativos." },
      { code: "S16.H12", description: "Identificar o trecho ou marcas linguísticas que evidenciam um argumento de comprovação presente em textos verbais, pertencentes a gêneros complexos predominantemente argumentativos." },
      { code: "S16.H13", description: "Identificar o trecho ou marcas linguísticas que evidenciam um argumento por raciocínio lógico presente em textos verbais, pertencentes a gêneros complexos predominantemente argumentativos." },
      { code: "S16.H14", description: "Identificar a estratégia argumentativa utilizada pelo autor para embasar uma tese vinculada a textos verbais, pertencentes a gêneros complexos predominantemente argumentativos." },
      { code: "S16.H15", description: "Identificar o(s) argumento(s) que sustenta(m) uma contra-tese em textos verbais pertencentes a gêneros complexos predominantemente argumentativos." },
      { code: "S16.H16", description: "Identificar o(s) argumento(s) que embasa(m) a tese principal vinculada a textos não verbais ou multissemióticos, pertencentes a gêneros complexos predominantemente argumentativos." }
    ]
  },
  {
    category: "Saber 17: Relações lógico-discursivas",
    skills: [
      { code: "S17.H08", description: "Reconhecer a relação lógico-discursiva de conclusão ou finalidade de uma ideia ou de um raciocínio marcada pelo uso de advérbios, locuções adverbiais, conjunções, denotadores etc.." },
      { code: "S17.H09", description: "Reconhecer a relação lógico-discursiva de condição ou proporção marcada pelo uso de conjunções que expressam essa relação em textos verbais ou multissemióticos." },
      { code: "S17.H10", description: "Reconhecer a relação lógico-discursiva de conformidade marcada pelo uso de conjunções, denotadores etc. em textos verbais ou multissemióticos." },
      { code: "S17.H11", description: "Reconhecer a relação lógico-discursiva de ênfase, (re)afirmação ou dúvida marcada pelo uso de advérbios, locuções adverbiais, conjunções, denotadores etc. em textos verbais pertencentes a gêneros complexos." },
      { code: "S17.H12", description: "Reconhecer a relação lógico-discursiva de comparação marcada pelo uso de advérbios, locuções adverbiais, conjunções, denotadores etc. em textos verbais pertencentes a gêneros complexos." },
      { code: "S17.H13", description: "Reconhecer a relação lógico-discursiva de oposição, restrição ou exclusão de ideias marcada pelo uso de advérbios, locuções adverbiais, conjunções, denotadores etc. em textos verbais pertencentes a gêneros complexos." },
      { code: "S17.H14", description: "Reconhecer a relação lógico-discursiva de explicação ou causa marcada pelo uso de advérbios, locuções adverbiais, conjunções, denotadores etc. em textos verbais pertencentes a gêneros complexos." },
      { code: "S17.H15", description: "Reconhecer a relação lógico-discursiva de conformidade marcada pelo uso de conjunções, denotadores que expressam essa relação em textos verbais pertencentes a gêneros complexos." },
      { code: "S17.H16", description: "Reconhecer a relação lógico-discursiva de consequência ou efeito/desdobramento de ações e ideias marcada pelo uso de advérbios, locuções adverbiais, conjunções, denotadores etc. em textos verbais pertencentes a gêneros complexos." },
      { code: "S17.H17", description: "Reconhecer a relação lógico-discursiva de conclusão ou finalidade de uma ideia ou de um raciocínio marcada pelo uso de advérbios, locuções adverbiais, conjunções, denotadores etc. em textos verbais pertencentes a gêneros complexos." },
      { code: "S17.H18", description: "Reconhecer a relação lógico-discursiva de condição ou proporção marcada pelo uso de conjunções que expressam essa relação em textos verbais ou multissemióticos em geral pertencentes a gêneros complexos." },
      { code: "S17.H19", description: "Reconhecer a relação lógico-discursiva de concessão marcada pelo uso de conjunções, denotadores etc. em textos verbais ou multissemióticos pertencentes a gêneros complexos." },
      { code: "S17.H20", description: "Reconhecer a relação lógico-discursiva de conformidade marcada pelo uso de conjunções, denotadores etc. em textos verbais, pertencentes a gêneros complexos ou multissemióticos em geral." }
    ]
  },
  {
    category: "Saber 18: Sentido do texto sem marcas coesivas",
    skills: [
      { code: "S18.H09", description: "Compreender o sentido do texto verbal e suas partes sem a presença de marcas coesivas a partir de uma lógica sequencial de fatos, ações, intenções ou ideias em textos verbais pertencentes a gêneros complexos." },
      { code: "S18.H10", description: "Compreender o sentido do texto verbal e suas partes sem a presença de marcas coesivas a partir da sequência de palavras ligadas pelo mesmo campo semântico em textos verbais pertencentes a gêneros complexos." },
      { code: "S18.H11", description: "Compreender o sentido do texto e suas partes sem a presença de marcas coesivas a partir da temática central em textos verbais pertencentes a gêneros complexos." },
      { code: "S18.H12", description: "Compreender o sentido do texto verbal e suas partes sem a presença de marcas coesivas a partir de uma lógica sequencial de fatos, ações, intenções ou ideias em textos verbais pertencentes a gêneros complexos predominantemente expositivos, instrucionais ou argumentativos." },
      { code: "S18.H13", description: "Compreender o sentido do texto verbal e suas partes sem a presença de marcas coesivas a partir da sequência de palavras ligadas pelo mesmo campo semântico em textos verbais pertencentes a gêneros complexos." },
      { code: "S18.H14", description: "Compreender o sentido do texto e suas partes sem a presença de marcas coesivas a partir da temática central em textos verbais pertencentes a gêneros simples predominantemente expositivos, instrucionais ou argumentativos." },
      { code: "S18.H15", description: "Compreender o sentido do texto e suas partes sem a presença de marcas coesivas a partir da relação estabelecida entre os elementos verbais e não verbais em textos multissemióticos pertencentes a gêneros complexos." },
      { code: "S18.H16", description: "Compreender o sentido do texto verbal e suas partes sem a presença de marcas coesivas a partir da relação de causa e consequência em textos verbais pertencentes a gênero complexos." },
      { code: "S18.H17", description: "Compreender o sentido do texto verbal e suas partes sem a presença de marcas coesivas a partir da relação de causa e consequência em textos verbais, pertencentes a gênero simples, predominantemente expositivos, instrucionais ou argumentativos." }
    ]
  },
  {
    category: "Saber 19: Efeito de sentido por escolha de palavras",
    skills: [
      { code: "S19.H07", description: "Compreender o efeito de sentido gerado pelo uso de provérbios, ditados populares, expressões idiomáticas ou frases feitas a partir do seu contexto em textos verbais pertencentes a gêneros simples." },
      { code: "S19.H08", description: "Compreender o efeito de sentido decorrente do uso de palavras, termos ou expressões específicas ou típicas de uma determinada área do Saber/Conhecimento em textos verbais ou multissemióticos de gêneros simples." },
      { code: "S19.H09", description: "Compreender o efeito de sentido decorrente da escolha de palavras, frases ou expressões conotativas em textos verbais pertencentes a gêneros complexos." },
      { code: "S19.H10", description: "Compreender o efeito de sentido decorrente da escolha de palavras polissêmicas em textos verbais pertencentes a gêneros complexos." },
      { code: "S19.H11", description: "Compreender o efeito de sentido decorrente do uso de palavras que qualificam elementos em textos verbais pertencentes a gêneros complexos." },
      { code: "S19.H12", description: "Compreender as intenções vinculadas à escolha de palavras, frases ou expressões em textos verbais ou multissemióticos pertencentes a gêneros simples e/ou de grande circulação social." },
      { code: "S19.H13", description: "Compreender o efeito de sentido decorrente da escolha de palavras homônimas ou parônimas em textos verbais ou multissemióticos pertencentes a gêneros complexos." },
      { code: "S19.H14", description: "Compreender o efeito de sentido decorrente do uso de estrangeirismos, neologismos, gírias ou regionalismos a partir de seus usos em textos verbais ou multissemióticos pertencentes a gêneros complexos." },
      { code: "S19.H15", description: "Compreender o efeito de sentido gerado pelo uso de provérbios, ditados populares, expressões idiomáticas ou frases feitas a partir do seu contexto em textos verbais pertencentes a gêneros complexos." },
      { code: "S19.H16", description: "Compreender o efeito de sentido decorrente do uso de palavras, termos ou expressões específicas ou típicas de uma determinada área do Saber/Conhecimento em textos verbais ou multissemióticos pertencentes a gêneros complexos." },
      { code: "S19.H17", description: "Compreender as intenções vinculadas à escolha de palavras, frases ou expressões em textos verbais ou multissemióticos pertencentes a gêneros complexos." }
    ]
  },
  {
    category: "Saber 20: Efeito de sentido por pontuação e outras notações",
    skills: [
      { code: "S20.H07", description: "Identificar efeitos de sentido decorrentes do uso de aspas como recurso para expressar ironia, sarcasmo, insinuação, licença poética e ética, bem como para marcar gírias ou estrangeirismos." },
      { code: "S20.H08", description: "Identificar o uso de dois-pontos para expressar explicações, enumerações e apostos ou orações apositivas em textos verbais ou multissemióticos." },
      { code: "S20.H09", description: "Reconhecer a função textual da utilização de travessões duplos, parênteses para separar orações intercaladas ou colocar em evidência uma frase, expressão, palavra etc.." },
      { code: "S20.H10", description: "Identificar o efeito de sentido decorrente do uso de negrito, itálico, realce, sublinhado, cor ou de caixa alta em textos verbais ou multissemióticos de grande circulação social." },
      { code: "S20.H11", description: "Identificar problemas comunicativos, efeito de ambiguidade ou imprecisão na mensagem decorrente do uso inadequado ou da ausência do sinal de pontuação requerido." },
      { code: "S20.H12", description: "Identificar o uso do ponto final, vírgula ou dois-pontos como elementos coesivos em caso de elipse ou substituição de conectivos em textos verbais ou multissemióticos." },
      { code: "S20.H13", description: "Identificar a função ou o efeito de sentido decorrente do uso de parênteses, colchetes, chaves, barras e outras notações gráficas em textos verbais ou multissemióticos de grande circulação social." }
    ]
  },
  {
    category: "Saber 21: Recursos estilísticos e morfossintáticos",
    skills: [
      { code: "S21.H07", description: "Compreender o efeito de sentido decorrente do uso cacofônico de recursos morfossintáticos em textos verbais ou multissemióticos." },
      { code: "S21.H08", description: "Compreender o efeito de sentido decorrente do uso das figuras de som/harmonia aliteração ou assonância em textos verbais ou multissemióticos do âmbito artístico e litero-literário." },
      { code: "S21.H09", description: "Compreender o efeito de sentido decorrente do emprego do diminutivo ou aumentativo de palavra em textos verbais ou multissemióticos." },
      { code: "S21.H10", description: "Reconhecer o efeito de sentido decorrente da repetição de vocábulos e/ou expressões em textos verbais ou multissemióticos." },
      { code: "S21.H11", description: "Compreender o efeito de sentido decorrente do uso de figuras de palavras (metáfora, metonímia, catacrese, sinestesia perífrase etc.) em textos verbais ou multissemióticos." },
      { code: "S21.H12", description: "Compreender o efeito de sentido decorrente do uso de figuras de pensamento (hipérbole, eufemismo, personificação, gradação etc.) em textos verbais ou multissemióticos." },
      { code: "S21.H13", description: "Compreender o efeito de sentido decorrente do uso de figuras de sintaxe/construção (elipse, zeugma, silepse, inversão, pleonasmo etc.) em textos verbais ou multissemióticos." },
      { code: "S21.H14", description: "Compreender o efeito de sentido decorrente do emprego de determinado tempo verbal em textos verbais ou multissemióticos." },
      { code: "S21.H15", description: "Compreender o efeito de sentido de prefixos ou sufixos de palavras em textos verbais ou multissemióticos." },
      { code: "S21.H16", description: "Compreender o efeito de sentido construído no texto em relação ao paralelismo ou à quebra deste recurso em textos verbais ou multissemióticos." }
    ]
  },
  {
    category: "Saber 22: Efeitos de humor e ironia",
    skills: [
      { code: "S22.H07", description: "Localizar trechos ou elementos que apresentam ironia em textos verbais, não verbais ou multissemióticos, pertencentes a gêneros simples de qualquer sequência discursiva predominante." },
      { code: "S22.H09", description: "Reconhecer a finalidade da ironia ou do humor em textos verbais, não verbais ou multissemióticos, pertencentes a gêneros simples e/ou de grande circulação social." },
      { code: "S22.H10", description: "Reconhecer humor ou ironia através do uso de recursos morfossintáticos em textos verbais ou multissemióticos." },
      { code: "S22.H11", description: "Reconhecer efeitos de humor em textos verbais, não verbais ou multissemióticos, pertencentes a gêneros complexos de qualquer sequência discursiva predominante." },
      { code: "S22.H12", description: "Localizar trechos ou elementos que apresentam ironia em textos verbais, não verbais ou multissemióticos, pertencentes a gêneros complexos de qualquer sequência discursiva predominante." },
      { code: "S22.H13", description: "Localizar trechos ou elementos que apresentam humor em textos verbais, não verbais ou multissemióticos, pertencentes a gêneros complexos de qualquer sequência discursiva predominante." },
      { code: "S22.H14", description: "Reconhecer efeitos de ironia em textos verbais, não verbais ou multissemióticos, pertencentes a gêneros complexos de qualquer sequência discursiva predominante." },
      { code: "S22.H15", description: "Reconhecer a finalidade da ironia ou do humor em textos verbais, não verbais ou multissemióticos, pertencentes a gêneros complexos de qualquer sequência discursiva predominante." },
      { code: "S22.H16", description: "Reconhecer humor ou ironia através do uso de recursos estilísticos em textos verbais ou multissemióticos pertencentes a gêneros simples e/ou de grande circulação social." },
      { code: "S22.H17", description: "Reconhecer a finalidade da ironia ou do humor em textos verbais, não verbais ou multissemióticos, pertencentes a gêneros complexos de qualquer sequência discursiva predominante." },
      { code: "S22.H18", description: "Reconhecer humor ou ironia através do uso de recursos estilísticos em textos verbais ou multissemióticos pertencentes a gêneros complexos." }
    ]
  },
  {
    category: "Saber 23: Níveis de linguagem e marcas linguísticas",
    skills: [
      { code: "S23.H07", description: "Identificar marcas linguísticas que evidenciam o uso da linguagem coloquial/informal/popular pelo locutor e/ou interlocutor em textos multissemióticos." },
      { code: "S23.H08", description: "Reconhecer marcas linguísticas que evidenciam uma função de linguagem predominante em textos multissemióticos de qualquer sequência discursiva predominante." },
      { code: "S23.H09", description: "Reconhecer intenções do locutor e/ou interlocutor pelo uso de estrangeirismo ou neologismo em textos verbais de qualquer sequência discursiva predominante." },
      { code: "S23.H10", description: "Reconhecer intenções do locutor e/ou interlocutor pelo uso de provérbios, ditos populares, expressões idiomáticas ou frases feitas em textos verbais." },
      { code: "S23.H11", description: "Reconhecer intenções do locutor e/ou interlocutor pelo uso de estrangeirismo ou neologismo em textos multissemióticos." },
      { code: "S23.H12", description: "Reconhecer intenções do locutor e/ou interlocutor pelo uso de provérbios, ditos populares, expressões idiomáticas ou frases feitas em textos multissemióticos." },
      { code: "S23.H13", description: "Reconhecer propósito comunicativo de determinada função da linguagem em textos verbais ou multissemióticos." }
    ]
  }
];

export const SPAECE_PORTUGUESE_SKILLS_2ANO: SkillGroup[] = [
  {
    category: "Saber 1: Localizar informação explícita",
    skills: [
      { code: "S01.H01", description: "Localizar informações explícitas a partir da verificação de suas marcas tipográficas (negrito, sublinhado, aspas, números etc.) em textos verbais, pertencentes a gêneros simples ou complexos de qualquer sequência discursiva predominante." },
      { code: "S01.H02", description: "Localizar informações explícitas a partir da reprodução de ideias de um trecho ou parágrafo de textos de gêneros simples de grande circulação social." },
      { code: "S01.H03", description: "Localizar uma informação explícita a partir da reprodução de ideias de um trecho ou parágrafo em textos verbais, pertencentes a gêneros simples, predominantemente narrativos." },
      { code: "S01.H04", description: "Localizar uma informação explícita a partir da reprodução de ideias de um trecho ou parágrafo de textos de gêneros simples predominantemente descritivos." },
      { code: "S01.H05", description: "Localizar uma informação explícita a partir da reprodução de ideias de um trecho ou parágrafo em textos verbais, pertencentes a gêneros simples, da ordem do relatar." },
      { code: "S01.H06", description: "Localizar uma informação explícita a partir da reprodução de ideias de um trecho ou parágrafo em textos verbais pertencentes a gêneros simples predominantemente expositivos." },
      { code: "S01.H07", description: "Localizar informações explícitas a partir da reprodução de ideias de um trecho ou parágrafo em textos verbais, pertencentes a gêneros simples, predominantemente instrucionais/injuntivos." },
      { code: "S01.H08", description: "Localizar informações explícitas a partir da reprodução de ideias de um trecho ou parágrafo em textos verbais, pertencentes a gêneros simples, predominantemente argumentativos." },
      { code: "S01.H09", description: "Localizar informações explícitas em textos não verbais ou multissemióticos pertencentes a gêneros simples e/ou de grande circulação social de qualquer sequência discursiva predominante." },
      { code: "S01.H10", description: "Localizar uma informação explícita a partir do sentido global de textos de gêneros simples predominantemente descritivos." },
      { code: "S01.H11", description: "Localizar uma informação explícita a partir do sentido global de textos de gêneros simples predominantemente narrativos." },
      { code: "S01.H12", description: "Localizar uma informação explícita a partir do sentido global de textos de gêneros simples da ordem do relatar." },
      { code: "S01.H13", description: "Localizar uma informação explícita a partir da reprodução de ideias de um trecho ou parágrafo em textos verbais, pertencentes a gêneros complexos, predominantemente narrativos." },
      { code: "S01.H14", description: "Localizar uma informação explícita a partir da reprodução de ideias de um trecho ou parágrafo de textos de gêneros complexos predominantemente descritivos." },
      { code: "S01.H15", description: "Localizar uma informação explícita a partir da reprodução de ideias de um trecho ou parágrafo em textos verbais, pertencentes a gêneros complexos, da ordem do relatar." },
      { code: "S01.H16", description: "Localizar uma informação explícita a partir do sentido global de textos de gêneros simples predominantemente expositivos." },
      { code: "S01.H17", description: "Localizar uma informação explícita a partir do sentido global de textos de gêneros simples predominantemente instrucionais/injuntivos." },
      { code: "S01.H18", description: "Localizar uma informação explícita a partir do sentido global de textos de gêneros simples predominantemente argumentativos." }
    ]
  },
  {
    category: "Saber 2: Inferir informação em texto verbal",
    skills: [
      { code: "S02.H01", description: "Inferir tempo, espaço ou seres em textos verbais, pertencentes a gêneros simples de grande circulação social de qualquer sequência discursiva predominante." },
      { code: "S02.H02", description: "Inferir sentimentos ou emoções vinculadas a um trecho ou parágrafo de textos verbais pertencentes a gêneros simples e/ou de grande circulação social de qualquer sequência discursiva predominante." },
      { code: "S02.H03", description: "Inferir a moral vinculada a uma fábula, quando não explicitada/expressa." },
      { code: "S02.H04", description: "Inferir ações de um ser retratado em textos verbais pertencentes a gêneros simples predominantemente descritivos." },
      { code: "S02.H05", description: "Inferir características físicas de um ser retratado, com base em suas atitudes, ações ou discursos (falas e/ou pensamentos) em textos verbais, pertencentes a gêneros simples predominantemente descritivos ou da ordem do relatar." },
      { code: "S02.H06", description: "Inferir ideias contraditórias, ambiguas (duplo sentido) ou paradoxais em textos verbais pertencentes a gêneros simples e/ou de grande circulação social predominantemente narrativos, descritivos ou da ordem do relatar." },
      { code: "S02.H07", description: "Inferir ações de um ser retratado em textos verbais pertencentes a gêneros simples predominantemente expositivos, instrucionais ou argumentativos." },
      { code: "S02.H08", description: "Inferir características físicas de um ser retratado com base em suas atitudes, ações ou discursos (falas e/ou pensamentos) em textos verbais pertencentes a gêneros simples predominantemente expositivos, instrucionais ou argumentativos." },
      { code: "S02.H09", description: "Inferir ideias contraditórias, ambiguas (duplo sentido) ou paradoxais em textos verbais pertencentes a gêneros simples e/ou de grande circulação social predominantemente expositivos, instrucionais ou argumentativos." },
      { code: "S02.H10", description: "Inferir a causa ou a consequência decorrentes/resultantes de um fato, ação ou de um comportamento em textos verbais pertencentes a gêneros simples predominantemente narrativos, descritivos ou da ordem do relatar." },
      { code: "S02.H11", description: "Inferir características ou estados psicológicos de seres retratados com base em suas atitudes, ações ou discursos em textos verbais pertencentes a gêneros simples, predominantemente descritivos ou da ordem do relatar." },
      { code: "S02.H12", description: "Inferir uma crítica político-social vinculado a textos verbais pertencentes a gêneros simples predominantemente narrativos, descritivos ou da ordem do relatar." },
      { code: "S02.H13", description: "Inferir sentimentos ou emoções vinculadas a um trecho ou parágrafo de textos não verbais ou multissemióticos pertencentes a gêneros simples e/ou de grande circulação social, de qualquer sequência discursiva predominante." },
      { code: "S02.H14", description: "Inferir sentimentos ou emoções vinculadas a um trecho ou parágrafo de textos não verbais ou multissemióticos, pertencentes a gêneros simples e/ou de grande circulação social, de qualquer sequência discursiva predominante." },
      { code: "S02.H15", description: "Inferir ações de um ser retratado em textos verbais, pertencentes a gêneros complexos, predominantemente descritivos ou da ordem do relatar." },
      { code: "S02.H16", description: "Inferir características físicas de um ser retratado, com base em suas atitudes, ações ou discursos (falas e/ou pensamentos) em textos verbais, pertencentes a gêneros complexos, predominantemente descritivos ou da ordem do relatar." },
      { code: "S02.H17", description: "Inferir ideias contraditórias, ambiguas (duplo sentido) ou paradoxais em textos, verbais, pertencentes a gêneros complexos, predominantemente descritivos ou da ordem do relatar." },
      { code: "S02.H18", description: "Inferir ações de um ser retratado em textos verbais, pertencentes a gêneros complexos, predominantemente expositivos, instrucionais ou argumentativos." },
      { code: "S02.H19", description: "Inferir características físicas de um ser retratado, com base em suas atitudes, ações ou discursos (falas e/ou pensamentos) em textos verbais, pertencentes a gêneros complexos, predominantemente expositivos, instrucionais ou argumentativos." },
      { code: "S02.H20", description: "Inferir ideias contraditórias, ambíguas (duplo sentido) ou paradoxais em textos, verbais, pertencentes a gêneros complexos, predominantemente expositivos, instrucional ou argumentativos." }
    ]
  },
  {
    category: "Saber 3: Inferir o sentido de uma palavra ou expressão",
    skills: [
      { code: "S03.H01", description: "Inferir o significado figurado de uma palavra em textos verbais, pertencentes a gêneros simples de grande circulação social, predominantemente descritivos ou narrativos." },
      { code: "S03.H02", description: "Inferir o significado de expressões idiomáticas, frases feitas, bordões ou ditados populares, a partir de seus usos em textos verbais, pertencentes a gêneros simples de grande circulação social predominantemente descritivos ou narrativos." },
      { code: "S03.H03", description: "Inferir o significado figurado de uma palavra em textos multissemióticos pertencentes a gêneros simples e/ou de grande circulação social de qualquer sequência discursiva predominante." },
      { code: "S03.H04", description: "Inferir o significado de expressões idiomáticas, frases feitas, bordões ou ditados populares, a partir de seus usos em textos multissemióticos, pertencentes a gêneros simples e/ou de grande circulação social de qualquer sequência discursiva predominante." },
      { code: "S03.H05", description: "Inferir o significado de gírias ou regionalismos a partir de seus usos em textos verbais pertencentes a gêneros simples de qualquer sequência discursiva predominante." },
      { code: "S03.H06", description: "Inferir o significado de estrangeirismos ou neologismos a partir de seus usos em textos verbais pertencentes a gêneros simples de qualquer sequência discursiva predominante." },
      { code: "S03.H07", description: "Inferir o significado de expressões idiomáticas, frases feitas, bordões ou ditados populares a partir de seus usos em textos verbais pertencentes a gêneros simples da ordem do relatar, expor, instruir e argumentar." },
      { code: "S03.H08", description: "Inferir o significado de gírias ou regionalismos a partir de seus usos, em textos multissemióticos, pertencentes a gêneros simples e/ou de grande circulação social de qualquer sequência discursiva predominante." },
      { code: "S03.H09", description: "Inferir o significado figurado de uma palavra em textos verbais pertencentes a gêneros simples da ordem do relatar, expor, instruir e argumentar." },
      { code: "S03.H10", description: "Inferir o significado de gírias ou regionalismos a partir de seus usos em textos verbais pertencentes a gêneros complexos de qualquer sequência discursiva predominante." },
      { code: "S03.H11", description: "Inferir o significado de expressões idiomáticas, frases feitas, bordões ou ditados populares, a partir de seus usos em textos verbais, pertencentes a gêneros complexos predominantemente descritivos ou narrativos." },
      { code: "S03.H12", description: "Inferir o sentido de palavras, termos ou expressões específicas ou típicas de uma determinada área do Saber/Conhecimento em textos verbais, pertencentes a gêneros simples, de qualquer sequência discursiva predominante." },
      { code: "S03.H13", description: "Inferir o significado figurado de uma palavra em textos multissemióticos, pertencentes a gêneros complexos de qualquer sequência discursiva predominante." },
      { code: "S03.H14", description: "Inferir o significado figurado de uma palavra em textos complexos de qualquer sequência discursiva predominante." },
      { code: "S03.H15", description: "Inferir o significado de expressões idiomáticas, frases feitas, bordões ou ditados populares, a partir de seus usos em textos multissemióticos, pertencentes a gêneros simples de qualquer sequência discursiva predominante." },
      { code: "S03.H16", description: "Inferir o significado de estrangeirismos ou neologismos a partir de seus usos em textos verbais, pertencentes a gêneros complexos de qualquer sequência discursiva predominante." }
    ]
  },
  {
    category: "Saber 4: Interpretar textos não verbais e textos que articulam elementos verbais e não verbais",
    skills: [
      { code: "S04.H01", description: "Reconhecer elementos organizadores (tempo, espaço, personagens etc.), em textos não verbais ou multissemióticos, pertencentes a gêneros simples e/ou de grande circulação social de qualquer sequência discursiva predominante." },
      { code: "S04.H02", description: "Identificar características físicas de seres retratados, em textos não verbais ou multissemióticos, pertencentes a gêneros simples de qualquer sequência discursiva, exceto os predominantemente narrativos." },
      { code: "S04.H03", description: "Identificar ações de seres retratados, em textos não verbais ou multissemióticos, pertencentes a gêneros simples de qualquer sequência discursiva, exceto os predominantemente narrativos." },
      { code: "S04.H04", description: "Compreender o sentido global, em textos não verbais ou multissemióticos, pertencentes a gêneros simples e/ou de grande circulação social de qualquer sequência discursiva, exceto os predominantemente narrativos." },
      { code: "S04.H05", description: "Reconhecer a ordem cronológica em que fatos acontecem, em textos não verbais ou multissemióticos, pertencentes a gêneros simples de qualquer sequência discursiva, exceto os predominantemente narrativos." },
      { code: "S04.H06", description: "Identificar características psicológicas ou estados emocionais de seres retratados, em textos não verbais ou multissemióticos, pertencentes a gêneros simples de qualquer sequência discursiva, exceto os predominantemente narrativos." },
      { code: "S04.H07", description: "Identificar intenções de seres retratados, em textos não verbais ou multissemióticos, pertencentes a gêneros simples de qualquer sequência discursiva, exceto os predominantemente narrativos." },
      { code: "S04.H08", description: "Compreender o sentido global com base em informações implícitas, em textos não verbais ou multissemióticos, pertencentes a gêneros simples e/ou de grande circulação social de qualquer sequência discursiva predominante." },
      { code: "S04.H09", description: "Identificar características físicas de seres retratados em textos não verbais ou multissemióticos, pertencentes a gêneros complexos, de qualquer sequência discursiva, exceto os predominantemente narrativos." },
      { code: "S04.H10", description: "Reconhecer elementos organizadores (tempo, espaço, personagens etc.) em textos não verbais ou multissemióticos, pertencentes a gêneros complexos de qualquer sequência discursiva predominante." },
      { code: "S04.H11", description: "Identificar ações de seres retratados em textos não verbais ou multissemióticos, pertencentes a gêneros complexos, de qualquer sequência discursiva, exceto os predominantemente narrativos." },
      { code: "S04.H12", description: "Reconhecer a ordem cronológica em que fatos acontecem em textos não verbais ou multissemióticos, pertencentes a gêneros complexos, de qualquer sequência discursiva, exceto os predominantemente narrativos." },
      { code: "S04.H13", description: "Identificar características psicológicas ou estados emocionais de seres retratados em textos não verbais ou multissemióticos, pertencentes a gêneros complexos, de qualquer sequência discursiva, exceto os predominantemente narrativos." },
      { code: "S04.H14", description: "Compreender o sentido global com base em informações implícitas em textos não verbais ou multissemióticos, pertencentes a gêneros complexos de qualquer sequência discursiva predominante." }
    ]
  },
  {
    category: "Saber 5: Identificar o tema ou assunto de um texto",
    skills: [
      { code: "S05.H01", description: "Identificar o tema ou o assunto central já sinalizados pelo título, em textos verbais pertencentes a gêneros simples ou complexo de qualquer sequência discursiva predominante." },
      { code: "S05.H02", description: "Identificar palavras-chave que sintetizam o sentido global, em textos verbais, pertencentes a gêneros simples de qualquer sequência discursiva predominante." },
      { code: "S05.H03", description: "Identificar o tema ou o assunto central de textos verbais pertencentes a gêneros simples predominantemente da ordem do relatar." },
      { code: "S05.H04", description: "Identificar o tema ou o assunto central de textos não verbais ou multissemióticos pertencentes a gêneros simples e/ou de grande circulação social de qualquer sequência discursiva predominante." },
      { code: "S05.H05", description: "Identificar o tema ou o assunto central de textos verbais pertencentes a gêneros simples predominantemente expositivos." },
      { code: "S05.H06", description: "Reconhecer o tema ou o assunto central de textos verbais pertencentes a gêneros simples predominantemente argumentativos." },
      { code: "S05.H07", description: "Identificar o tema ou assunto central de textos verbais pertencentes a gêneros simples predominantemente instrucionais/injuntivos." },
      { code: "S05.H08", description: "Identificar palavras-chave que sintetizam o sentido global em textos verbais, pertencentes a gêneros complexos de qualquer sequência discursiva predominante." },
      { code: "S05.H09", description: "Identificar o tema ou o assunto central de textos verbais, pertencentes a gêneros complexos predominantemente narrativos ou descritivos." },
      { code: "S05.H10", description: "Identificar o tema ou o assunto central de textos verbais, pertencentes a gêneros complexos predominantemente expositivos." },
      { code: "S05.H11", description: "Identificar o tema central de textos verbais, pertencentes a gêneros complexos predominantemente instrucionais/injuntivos." }
    ]
  },
  {
    category: "Saber 6: Distinguir fato da opinião relativa a esse fato",
    skills: [
      { code: "S06.H08", description: "Identificar marcas linguísticas (substantivo, advérbios e locuções de tempo ou lugar, verbos no pretérito perfeito, escolha vocabular etc.) que ajudam a evidenciar um fato expresso pelo enunciador, em textos verbais, pertencentes a gêneros simples de qualquer sequência discursiva predominante." },
      { code: "S06.H09", description: "Identificar opiniões, pontos de vista e/ou posicionamentos divergentes em um mesmo texto verbal pertencente a gêneros simples, predominantemente narrativos, descritivos, expositivos, instrucionais e da ordem do relatar." },
      { code: "S06.H10", description: "Identificar opiniões, pontos de vista e/ou posicionamentos divergentes em um mesmo texto verbal, pertencente a gêneros simples predominantemente argumentativo." },
      { code: "S06.H11", description: "Identificar marcas linguísticas (adjetivos, advérbios de modo e dúvida, verbos na 1ª pessoa, escolha vocabular, modalização, ordem das informações no enunciado etc.) que ajudam a evidenciar uma opinião expressa pelo enunciador em textos verbais pertencentes a gêneros simples de qualquer sequência discursiva predominante." },
      { code: "S06.H12", description: "Identificar opiniões, pontos de vista e/ou posicionamentos divergentes em um único texto não verbal ou multissemiótico pertencentes a gêneros simples e/ou de grande circulação social de qualquer sequência discursiva predominante." },
      { code: "S06.H13", description: "Identificar um fato apresentado em textos verbais, pertencentes a gêneros complexos de grande circulação social em qualquer sequência discursiva." },
      { code: "S06.H14", description: "Identificar opiniões, pontos de vista e/ou posicionamentos divergentes em um mesmo texto verbal, pertencente a gêneros complexos de qualquer sequência discursiva predominante." },
      { code: "S06.H15", description: "Identificar opinião explícita em textos verbais, pertencentes a gêneros complexos de qualquer sequência discursiva predominante." },
      { code: "S06.H16", description: "Identificar um juízo de valor/julgamento expresso pelo enunciador sobre algo, alguém ou fato textos verbais, pertencentes a gênero simples, expositivo, injuntivo ou argumentativo." },
      { code: "S06.H17", description: "Identificar um juízo de valor/julgamento expresso pelo enunciador sobre algo, alguém ou fato textos verbais, pertencentes a gêneros complexos de qualquer sequência discursiva predominante." },
      { code: "S06.H18", description: "Identificar opiniões, pontos de vista e/ou posicionamentos divergentes em um único texto não verbal ou multissemiótico, pertencentes a gêneros complexos de qualquer sequência discursiva predominante." },
      { code: "S06.H19", description: "Identificar um fato presente em textos não verbais ou multissemióticos, pertencentes a gêneros complexos de qualquer sequência discursiva predominante." }
    ]
  },
  {
    category: "Saber 7: Diferenciar a informação principal das secundárias em um texto",
    skills: [
      { code: "S07.H01", description: "Identificar informação secundária expressa por uma afirmação do autor, narrador ou eu-lírico em um texto de gêneros simples de qualquer sequência discursiva predominante." },
      { code: "S07.H02", description: "Identificar informação secundária expressa por meio de uma descrição de estados, eventos, espaços, objetos ou fenômenos em textos verbais ou multissemióticos, pertencentes a gêneros simples e/ou de grande circulação social de qualquer sequência discursiva predominante." },
      { code: "S07.H03", description: "Identificar informação principal expressa por meio da relação de um agente e seus respectivos eventos por ele desencadeados em um texto verbal de gêneros simples de qualquer sequência discursiva predominante." },
      { code: "S07.H04", description: "Identificar informação secundária expressa por meio de uma explicação, um detalhamento ou uma exemplificação relativa a estados, eventos, espaços, objetos ou fenômenos em textos verbais ou multissemióticos, pertencentes a gêneros simples de qualquer sequência discursiva predominante." },
      { code: "S07.H08", description: "Identificar informação secundária expressa por meio de uma explicação, um detalhamento ou uma exemplificação de estados, eventos, espaços, objetos ou fenômenos em um texto em textos de gêneros simples de qualquer sequência discursiva predominante." },
      { code: "S07.H09", description: "Identificar informação secundária expressa por meio de um resumo exposto logo após uma sequência de fatos ou ideias ter sido apresentadas ou relatadas pelo autor, narrador ou eu-lírico de um texto de gênero simples de qualquer sequência discursiva predominante." },
      { code: "S07.H10", description: "Identificar informação principal expressa por meio de eventos ordenados em uma sequência temporal em textos de gêneros simples de qualquer sequência discursiva predominante." },
      { code: "S07.H11", description: "Identificar informação principal expressa por meio de eventos de aspecto perfectivo em textos verbais de gêneros simples de qualquer sequência discursiva predominante." },
      { code: "S07.H12", description: "Identificar informação secundária expressa por meio de eventos de aspecto imperfectivo em textos verbais, pertencentes a gêneros simples de qualquer sequência discursiva predominante." },
      { code: "S07.H13", description: "Identificar informação secundária expressa por meio de uma autoparáfrase do próprio autor, narrador ou eu-lírico de um texto verbal de gêneros simples de qualquer sequência discursiva predominante." },
      { code: "S07.H14", description: "Identificar informação secundária expressa por uma afirmação do autor, narrador ou eu-lírico em um texto de gêneros complexos de qualquer sequência discursiva predominante." },
      { code: "S07.H15", description: "Identificar informação secundária expressa por meio de uma descrição de estados, eventos, espaços, objetos ou fenômenos em textos verbais ou multissemióticos, pertencentes a gêneros complexos e/ou de grande circulação social de qualquer sequência discursiva predominante." },
      { code: "S07.H16", description: "Identificar informação principal expressa por meio da relação de um agente e seus respectivos eventos por ele desencadeados em um texto verbal de gêneros complexos de qualquer sequência discursiva predominante." },
      { code: "S07.H17", description: "Identificar informação secundária expressa por meio de uma explicação, um detalhamento ou uma exemplificação relativa a estados, eventos, espaços, objetos ou fenômenos em textos verbais ou multissemióticos, pertencentes a gêneros complexos de qualquer sequência discursiva predominante." },
      { code: "S07.H18", description: "Identificar informação secundária expressa por uma afirmação do autor, narrador ou eu-lírico em um texto verbal pertencente a gêneros complexos de qualquer sequência discursiva predominante." },
      { code: "S07.H19", description: "Identificar informação secundária expressa por meio de uma descrição de estados, eventos, espaços, objetos ou fenômenos em textos verbais ou multissemióticos, pertencentes a gêneros complexos de qualquer sequência discursiva predominante." },
      { code: "S07.H20", description: "Identificar informação principal expressa pela relação de um agente e seus respectivos eventos por ele desencadeados em textos verbais ou multissemióticos, pertencentes a gêneros complexos e/ou de grande circulação social de qualquer sequência discursiva predominante." },
      { code: "S07.H21", description: "Identificar informação secundária expressa por meio de uma explicação, um detalhamento ou uma exemplificação de estados, eventos, espaços, objetos ou fenômenos em um texto em textos de gêneros complexos de qualquer sequência discursiva predominante." }
    ]
  },
  {
    category: "Saber 9: Reconhecer gêneros discursivos",
    skills: [
      { code: "S09.H06", description: "Reconhecer gêneros simples que materializam textos não verbais ou multissemióticos de grande circulação social, de qualquer sequência discursiva predominante." },
      { code: "S09.H07", description: "Identificar o domínio/ambiente discursivo a qual pertence ou se vincula um determinado gênero que materializa textos verbais, não verbais ou multissemióticos, simples e/ou de grande circulação social." },
      { code: "S09.H08", description: "Reconhecer gêneros complexos que materializam textos verbais, predominantemente narrativos, descritivos ou da ordem do relatar." },
      { code: "S09.H09", description: "Reconhecer gêneros complexos que materializam textos verbais, predominantemente expositivos, injuntivos ou argumentativos." },
      { code: "S09.H10", description: "Identificar a sequência discursiva predominante em um determinado gênero que materializa textos verbais, não verbais ou multissemióticos, simples e/ou de grande circulação social." },
      { code: "S09.H11", description: "Identificar o domínio/ambiente discursivo a qual pertence ou se vincula um determinado gênero que materializa textos verbais, não verbais ou multissemióticos complexos de qualquer sequência discursiva predominante." },
      { code: "S09.H12", description: "Reconhecer características estruturais de um dado gênero discursivo, seja ele verbal, não verbal ou multissemiótico simples e/ou de grande circulação social." }
    ]
  },
  {
    category: "Saber 10: Identificar o propósito comunicativo em diferentes gêneros",
    skills: [
      { code: "S10.H07", description: "Identificar o propósito comunicativo de gêneros simples que materializam textos não verbais ou multissemióticos de grande circulação social." },
      { code: "S10.H08", description: "Identificar o propósito comunicativo de gêneros complexos que materializam textos verbais predominantemente descritivos ou narrativos." },
      { code: "S10.H09", description: "Identificar o propósito comunicativo de gêneros simples que materializam textos verbais, predominantemente da ordem do relatar." },
      { code: "S10.H10", description: "Identificar o propósito comunicativo de gêneros simples que materializam textos verbais, predominantemente da ordem do expor." },
      { code: "S10.H11", description: "Identificar o propósito comunicativo de gêneros simples que materializam textos verbais, predominantemente instrucionais/injuntivos e argumentativos." },
      { code: "S10.H12", description: "Identificar o propósito comunicativo de gêneros simples que materializam textos verbais, predominantemente instrucionais/injuntivos (ex.: estatutos, regulamentos, leis etc.)." },
      { code: "S10.H13", description: "Identificar o propósito comunicativo de gêneros complexos que materializam textos não verbais ou multissemióticos de qualquer sequência discursiva predominante." },
      { code: "S10.H14", description: "Identificar o propósito comunicativo de textos híbridos (intergenéricos), com base em suas funções/finalidades, sejam eles verbais ou multissemióticos, de gêneros simples e/ou de grande circulação social." }
    ]
  },
  {
    category: "Saber 11: Reconhecer os elementos que compõem uma narrativa e o conflito gerador",
    skills: [
      { code: "S11.H07", description: "Diferenciar protagonista, antagonista, personagens secundários ou figurantes em textos verbais, pertencentes a gêneros simples, ou multissemióticos em geral, predominantemente narrativos." },
      { code: "S11.H08", description: "Identificar características psicológicas ou estados emocionais de personagens em textos verbais, pertencentes a gêneros simples, predominantemente narrativos." },
      { code: "S11.H11", description: "Associar intenções a ações particulares de determinados personagens em textos verbais, pertencentes a gêneros simples, predominantemente narrativos." },
      { code: "S11.H12", description: "Identificar o conflito gerador em textos verbais ou multissemióticos, pertencentes a gêneros simples, predominantemente narrativos." },
      { code: "S11.H13", description: "Identificar o clímax em textos verbais ou multissemióticos, pertencentes a gêneros simples, predominantemente narrativos." },
      { code: "S11.H14", description: "Reconhecer elementos organizadores (tempo, espaço, personagens, enredo etc.) em textos verbais, pertencentes a gêneros complexos, predominantemente narrativos." },
      { code: "S11.H15", description: "Reconhecer características físicas de personagens em textos verbais, pertencentes a gêneros complexos predominantemente narrativos." },
      { code: "S11.H16", description: "Identificar ações dos personagens em textos verbais, pertencentes a gêneros complexos predominantemente narrativos." },
      { code: "S11.H17", description: "Identificar marcas linguísticas que evidenciam o tipo de tempo (cronológico ou psicológico) em textos verbais de gêneros complexos predominantemente narrativos." },
      { code: "S11.H18", description: "Identificar marcas linguísticas que evidenciam o discurso narrativo (direto, indireto e indireto livre) em textos verbais, pertencentes a gêneros complexos predominantemente narrativos." },
      { code: "S11.H19", description: "Identificar marcas linguísticas que evidenciam o discurso narrativo em textos verbais, pertencentes a gêneros complexos predominantemente narrativos." },
      { code: "S11.H20", description: "Diferenciar protagonista, antagonista, personagens secundários ou figurantes em textos verbais, pertencentes a gêneros complexos ou multissemióticos em geral, predominantemente narrativos." },
      { code: "S11.H21", description: "Identificar características psicológicas ou estados emocionais de personagens em textos verbais, pertencentes a gêneros complexos predominantemente narrativos." }
    ]
  },
  {
    category: "Saber 12: Identificar semelhanças e/ou diferenças de ideias e opiniões na comparação entre textos",
    skills: [
      { code: "S12.H04", description: "Reconhecer ideias e opiniões diferentes na comparação entre textos verbais, pertencentes a gêneros diferentes, simples e predominantemente narrativos, descritos ou da ordem do relatar." },
      { code: "S12.H05", description: "Reconhecer ideias e opiniões semelhantes na comparação entre textos verbais, pertencentes a gêneros iguais, simples e predominantemente expositivos, instrucionais ou argumentativos." },
      { code: "S12.H06", description: "Reconhecer ideias e opiniões diferentes na comparação entre textos verbais, pertencentes a gêneros iguais, simples e predominantemente expositivos, instrucionais ou argumentativos." },
      { code: "S12.H07", description: "Reconhecer ideias e opiniões semelhantes na comparação entre textos verbais, pertencentes a gêneros diferentes, simples e predominantemente expositivos, instrucionais ou argumentativos." },
      { code: "S12.H08", description: "Reconhecer ideias e opiniões diferentes na comparação entre textos verbais, pertencentes a gêneros diferentes, simples e predominantemente expositivos, instrucionais ou argumentativos." },
      { code: "S12.H09", description: "Reconhecer ideias e opiniões semelhantes na comparação entre textos não verbais ou multissemióticos, pertencentes a gêneros iguais, simples e/ou de grande circulação social." },
      { code: "S12.H10", description: "Reconhecer ideias e opiniões diferentes na comparação entre textos não verbais ou multissemióticos, pertencentes a gêneros diferentes, simples e/ou de grande circulação social." },
      { code: "S12.H12", description: "Reconhecer ideias e opiniões semelhantes ou diferentes na comparação entre textos verbais e multissemióticos, pertencentes a gêneros iguais ou diferentes, simples de qualquer sequência discursiva predominante." },
      { code: "S12.H13", description: "Reconhecer ideias e opiniões diferentes na comparação entre textos verbais, pertencentes a gêneros iguais ou diferentes, complexos e predominantemente narrativos, descritos ou da ordem do relatar." }
    ]
  },
  {
    category: "Saber 13: Reconhecer diferentes formas de tratar uma informação na comparação de textos de um mesmo tema",
    skills: [
      { code: "S13.H04", description: "Reconhecer diferentes formas de tratar uma informação qualquer, na comparação de textos verbais de um mesmo tema, pertencentes a gêneros diferentes, simples e predominantemente narrativos, descritos ou da ordem do relatar." },
      { code: "S13.H06", description: "Reconhecer diferentes formas de tratar uma informação qualquer, na comparação de textos verbais de um mesmo tema, pertencentes a gêneros diferentes, simples e predominantemente expositivos, instrucionais ou argumentativos." },
      { code: "S13.H07", description: "Reconhecer a intertextualidade temática na comparação de textos verbais, pertencentes a gêneros simples e predominantemente expositivos, injuntivos ou argumentativos." },
      { code: "S13.H08", description: "Reconhecer a intertextualidade temática, na comparação de textos não verbais ou multissemióticos, pertencentes a gêneros simples de qualquer sequência discursiva predominante." },
      { code: "S13.H09", description: "Reconhecer diferentes formas de tratar uma informação qualquer, na comparação de textos verbais de um mesmo tema pertencentes a gêneros complexos de qualquer sequência discursiva predominante." },
      { code: "S13.H10", description: "Reconhecer diferentes formas de tratar uma informação qualquer, na comparação de textos não verbais ou multissemióticos de um mesmo tema, pertencentes a gêneros diferentes, simples e/ou de grande circulação social." },
      { code: "S13.H11", description: "Reconhecer a intertextualidade temática na comparação de textos verbais, pertencentes a gêneros complexos de qualquer sequência discursiva predominante." },
      { code: "S13.H12", description: "Reconhecer diferentes formas de apresentar informações implícitas na comparação de textos verbais sobre um mesmo tema pertencentes a gêneros simples de qualquer sequência discursiva predominante." }
    ]
  },
  {
    category: "Saber 14: Relações entre as partes de um texto e recursos coesivos",
    skills: [
      { code: "S14.H05", description: "Reconhecer relações entre partes de um texto estabelecidas pelo uso de advérbios, preposições ou respectivas locuções em textos verbais ou multissemióticos, pertencentes a gêneros simples e/ou de grande circulação social." },
      { code: "S14.H06", description: "Reconhecer relações entre partes de um texto estabelecidas pela retomada de termos, expressões ou ideias mediante o uso de palavras sinônimas em textos verbais ou multissemióticos, pertencentes a gêneros simples e/ou de grande circulação social." },
      { code: "S14.H08", description: "Reconhecer relações entre partes de um texto estabelecidas pela retomada de termos, expressões ou ideias mediante a relação estabelecida de hiperonímia-hiponímia entre palavras em textos verbais ou multissemióticos." },
      { code: "S14.H09", description: "Reconhecer relações entre partes de um texto estabelecidas pela retomada de termos, expressões ou ideias mediante o uso de pronomes pessoais do caso oblíquo em textos verbais ou multissemióticos." },
      { code: "S14.H10", description: "Reconhecer relações entre partes de um texto estabelecidas pela catáfora presente em textos verbais ou multissemióticos, pertencentes a gêneros simples e/ou de grande circulação social." },
      { code: "S14.H11", description: "Reconhecer relações entre partes de um texto estabelecidas pelo uso de recursos coesivos encapsuladores em textos verbais ou multissemióticos, pertencentes a gêneros simples e/ou de grande circulação social." },
      { code: "S14.H12", description: "Reconhecer relações entre partes de um texto estabelecidas pelo uso de conjunções ou locuções conjuntivas coordenativas em textos verbais ou multissemióticos, pertencentes a gêneros simples e/ou de grande circulação social." },
      { code: "S14.H13", description: "Reconhecer relações entre partes de um texto estabelecidas pela retomada de termos, expressões ou ideias mediante o uso de recursos coesivos recategorizadores." },
      { code: "S14.H14", description: "Reconhecer relações entre partes de um texto estabelecidas pela retomada de termos, expressões ou ideias mediante o uso de pronomes relativos em textos verbais ou multissemióticos, pertencentes a gêneros simples e/ou de grande circulação social." },
      { code: "S14.H15", description: "Reconhecer relações entre partes de um texto estabelecidas pela retomada de termos, expressões ou ideias mediante o uso de pronomes pessoais do caso reto em textos verbais ou multissemióticos, pertencentes a gêneros complexos." },
      { code: "S14.H16", description: "Reconhecer relações entre partes de um texto estabelecidas pela retomada de termos, expressões ou ideias mediante o uso de pronomes demonstrativos em textos verbais ou multissemióticos, pertencentes a gêneros complexos." },
      { code: "S14.H17", description: "Reconhecer relações entre partes de um texto estabelecidas pela retomada de termos, expressões ou ideias mediante o uso de pronomes possessivos em textos verbais ou multissemióticos, pertencentes a gêneros complexos." },
      { code: "S14.H18", description: "Reconhecer relações entre partes de um texto estabelecidas pela retomada de termos, expressões ou ideias mediante o uso de pronomes de tratamento em textos verbais ou multissemióticos, pertencentes a gêneros complexos." },
      { code: "S14.H21", description: "Reconhecer relações entre partes de um texto estabelecidas pela retomada de termos, expressões ou ideias mediante a elipse em textos verbais ou multissemióticos, pertencentes a gêneros complexos de qualquer sequência discursiva predominante." },
      { code: "S14.H22", description: "Reconhecer relações entre partes de um texto estabelecidas pela retomada de termos, expressões ou ideias mediante a relação de estabelecida hiperonímia-hiponímia entre palavras em textos verbais ou multissemióticos, pertencentes a gêneros complexos." },
      { code: "S14.H23", description: "Reconhecer relações entre partes de um texto estabelecidas pelo uso de conjunções ou locuções conjuntivas subordinativas em textos verbais ou multissemióticos, pertencentes a gêneros simples e/ou de grande circulação social." }
    ]
  },
  {
    category: "Saber 15: Identificar a tese de um texto",
    skills: [
      { code: "S15.H03", description: "Identificar o trecho que retoma a tese na conclusão de textos verbais, pertencentes a gêneros simples, predominantemente argumentativos." },
      { code: "S15.H04", description: "Identificar a contra-tese em textos verbais, pertencentes a gêneros simples, predominantemente argumentativos." },
      { code: "S15.H05", description: "Identificar a tese principal vinculada a textos não verbais ou multissemióticos, pertencentes a gêneros simples e/ou de grande circulação social, predominantemente argumentativos." },
      { code: "S15.H06", description: "Identificar o trecho que evidencia a tese principal de textos verbais, pertencentes a gêneros complexos predominantemente argumentativos." },
      { code: "S15.H07", description: "Identificar o trecho que retoma a tese na conclusão de textos verbais, pertencentes a gêneros complexos, predominantemente argumentativos." }
    ]
  },
  {
    category: "Saber 16: Relação entre tese e argumentos",
    skills: [
      { code: "S16.H03", description: "Identificar o trecho ou marcas linguísticas que evidenciam um argumento de autoridade presente em textos verbais, pertencentes a gêneros simples, predominantemente argumentativos." },
      { code: "S16.H04", description: "Identificar o trecho ou marcas linguísticas que evidenciam um argumento de comprovação presente em textos verbais, pertencentes a gêneros simples, predominantemente argumentativos." },
      { code: "S16.H05", description: "Identificar o trecho ou marcas linguísticas que evidenciam um argumento por raciocínio lógico presente em textos verbais, pertencentes a gêneros simples, predominantemente argumentativos." },
      { code: "S16.H06", description: "Identificar a estratégia argumentativa utilizada pelo autor para embasar uma tese vinculada a textos verbais, pertencentes a gêneros simples, predominantemente argumentativos." },
      { code: "S16.H07", description: "Identificar o(s) argumento(s) que sustenta(m) uma contra-tese em textos verbais, pertencentes a gêneros simples, predominantemente argumentativos." },
      { code: "S16.H08", description: "Identificar o(s) argumento(s) que embasa(m) a tese principal vinculada a textos não verbais ou multissemióticos, pertencentes a gêneros simples e/ou de grande circulação social, predominantemente argumentativos." },
      { code: "S16.H09", description: "Reconhecer o(s) argumento(s) que sustenta(m) a tese principal vinculada a textos verbais, pertencentes a gêneros complexos predominantemente argumentativos." },
      { code: "S16.H10", description: "Identificar trecho ou marcas linguísticas que evidenciam o(s) argumento(s) que embasa(m) a tese principal vinculada a textos verbais, pertencentes a gêneros complexos predominantemente argumentativos." },
      { code: "S16.H11", description: "Identificar o trecho ou marcas linguísticas que evidenciam um argumento de autoridade presente em textos verbais, pertencentes a gêneros complexos predominantemente argumentativos." },
      { code: "S16.H12", description: "Identificar o trecho ou marcas linguísticas que evidenciam um argumento de comprovação presente em textos verbais, pertencentes a gêneros complexos predominantemente argumentativos." },
      { code: "S16.H13", description: "Identificar o trecho ou marcas linguísticas que evidenciam um argumento por raciocínio lógico presente em textos verbais, pertencentes a gêneros complexos predominantemente argumentativos." }
    ]
  },
  {
    category: "Saber 17: Relações lógico-discursivas",
    skills: [
      { code: "S17.H03", description: "Reconhecer a relação lógico-discursiva de ênfase, (re)afirmação ou dúvida marcada pelo uso de advérbios, locuções adverbiais, conjunções, denotadores etc. em textos verbais ou multissemióticos." },
      { code: "S17.H04", description: "Reconhecer a relação lógico-discursiva de comparação marcada pelo uso de advérbios, locuções adverbiais, conjunções, denotadores etc. em textos verbais ou multissemióticos." },
      { code: "S17.H05", description: "Reconhecer a relação lógico-discursiva de oposição, restrição ou exclusão de ideias marcada pelo uso de advérbios, locuções adverbiais, conjunções, denotadores etc. em textos verbais ou multissemióticos." },
      { code: "S17.H06", description: "Reconhecer a relação lógico-discursiva de explicação ou causa marcada pelo uso de advérbios, locuções adverbiais, conjunções, denotadores etc. em textos verbais ou multissemióticos." },
      { code: "S17.H07", description: "Reconhecer a relação lógico-discursiva de consequência ou efeito/desdobramento de ações e ideias marcada pelo uso de advérbios, locuções adverbiais, conjunções, denotadores etc. em textos verbais ou multissemióticos." },
      { code: "S17.H08", description: "Reconhecer a relação lógico-discursiva de conclusão ou finalidade de uma ideia ou de um raciocínio marcada pelo uso de advérbios, locuções adverbiais, conjunções, denotadores etc.." },
      { code: "S17.H09", description: "Reconhecer a relação lógico-discursiva de condição ou proporção marcada pelo uso de conjunções que expressam essa relação em textos verbais ou multissemióticos." },
      { code: "S17.H10", description: "Reconhecer a relação lógico-discursiva de conformidade marcada pelo uso de conjunções, denotadores etc. em textos verbais ou multissemióticos." },
      { code: "S17.H11", description: "Reconhecer a relação lógico-discursiva de ênfase, (re)afirmação ou dúvida marcada pelo uso de advérbios, locuções adverbiais, conjunções, denotadores etc. em textos verbais pertencentes a gêneros complexos." },
      { code: "S17.H12", description: "Reconhecer a relação lógico-discursiva de comparação marcada pelo uso de advérbios, locuções adverbiais, conjunções, denotadores etc. em textos verbais pertencentes a gêneros complexos." },
      { code: "S17.H13", description: "Reconhecer a relação lógico-discursiva de oposição, restrição ou exclusão de ideias marcada pelo uso de advérbios, locuções adverbiais, conjunções, denotadores etc. em textos verbais pertencentes a gêneros complexos." },
      { code: "S17.H14", description: "Reconhecer a relação lógico-discursiva de explicação ou causa marcada pelo uso de advérbios, locuções adverbiais, conjunções, denotadores etc. em textos verbais pertencentes a gêneros complexos." },
      { code: "S17.H15", description: "Reconhecer a relação lógico-discursiva de conformidade marcada pelo uso de conjunções, denotadores que expressam essa relação em textos verbais pertencentes a gêneros complexos." },
      { code: "S17.H16", description: "Reconhecer a relação lógico-discursiva de consequência ou efeito/desdobramento de ações e ideias marcada pelo uso de advérbios, locuções adverbiais, conjunções, denotadores etc. em textos verbais pertencentes a gêneros complexos." }
    ]
  },
  {
    category: "Saber 18: Sentido do texto sem marcas coesivas",
    skills: [
      { code: "S18.H07", description: "Compreender o sentido do texto e suas partes sem a presença de marcas coesivas a partir da relação estabelecida entre os elementos verbais e não verbais em textos multissemióticos de gêneros simples." },
      { code: "S18.H08", description: "Compreender o sentido do texto verbal e suas partes sem a presença de marcas coesivas a partir da relação de causa e consequência em textos verbais de gênero simples." },
      { code: "S18.H09", description: "Compreender o sentido do texto verbal e suas partes sem a presença de marcas coesivas a partir de uma lógica sequencial de fatos, ações, intenções ou ideias em textos verbais pertencentes a gêneros complexos." },
      { code: "S18.H10", description: "Compreender o sentido do texto verbal e suas partes sem a presença de marcas coesivas a partir da sequência de palavras ligadas pelo mesmo campo semântico em textos verbais pertencentes a gêneros complexos." },
      { code: "S18.H11", description: "Compreender o sentido do texto e suas partes sem a presença de marcas coesivas a partir da temática central em textos verbais pertencentes a gêneros complexos." },
      { code: "S18.H12", description: "Compreender o sentido do texto verbal e suas partes sem a presença de marcas coesivas a partir de uma lógica sequencial de fatos, ações, intenções ou ideias em textos verbais pertencentes a gêneros complexos predominantemente expositivos, instrucionais ou argumentativos." },
      { code: "S18.H13", description: "Compreender o sentido do texto verbal e suas partes sem a presença de marcas coesivas a partir da sequência de palavras ligadas pelo mesmo campo semântico em textos verbais pertencentes a gêneros complexos." },
      { code: "S18.H14", description: "Compreender o sentido do texto e suas partes sem a presença de marcas coesivas a partir da temática central em textos verbais pertencentes a gêneros simples predominantemente expositivos, instrucionais ou argumentativos." },
      { code: "S18.H15", description: "Compreender o sentido do texto e suas partes sem a presença de marcas coesivas a partir da relação estabelecida entre os elementos verbais e não verbais em textos multissemióticos pertencentes a gêneros complexos." },
      { code: "S18.H16", description: "Compreender o sentido do texto verbal e suas partes sem a presença de marcas coesivas a partir da relação de causa e consequência em textos verbais pertencentes a gênero complexos." },
      { code: "S18.H17", description: "Compreender o sentido do texto verbal e suas partes sem a presença de marcas coesivas a partir da relação de causa e consequência em textos verbais pertencentes a gênero simples predominantemente expositivos, instrucionais ou argumentativos." }
    ]
  },
  {
    category: "Saber 19: Efeito de sentido por escolha de palavras",
    skills: [
      { code: "S19.H05", description: "Compreender o efeito de sentido decorrente da escolha de palavras homônimas ou parônimas em textos verbais ou multissemióticos pertencentes a gêneros simples e/ou de grande circulação social." },
      { code: "S19.H06", description: "Compreender o efeito de sentido decorrente do uso de estrangeirismos, neologismos, gírias ou regionalismos a partir de seus usos em textos verbais ou multissemióticos pertencentes a gêneros simples." },
      { code: "S19.H07", description: "Compreender o efeito de sentido gerado pelo uso de provérbios, ditados populares, expressões idiomáticas ou frases feitas a partir do seu contexto em textos verbais pertencentes a gêneros simples." },
      { code: "S19.H08", description: "Compreender o efeito de sentido decorrente do uso de palavras, termos ou expressões específicas ou típicas de uma determinada área do Saber/Conhecimento em textos verbais ou multissemióticos de gêneros simples." },
      { code: "S19.H09", description: "Compreender o efeito de sentido decorrente da escolha de palavras, frases ou expressões conotativas em textos verbais pertencentes a gêneros complexos ou multissemióticos." },
      { code: "S19.H10", description: "Compreender o efeito de sentido decorrente da escolha de palavras polissêmicas em textos verbais pertencentes a gêneros complexos ou multissemióticos." },
      { code: "S19.H11", description: "Compreender o efeito de sentido decorrente do uso de palavras que qualificam elementos em textos verbais pertencentes a gêneros complexos ou multissemióticos." },
      { code: "S19.H12", description: "Compreender as intenções vinculadas à escolha de palavras, frases ou expressões em textos verbais ou multissemióticos pertencentes a gêneros simples e/ou de grande circulação social." },
      { code: "S19.H13", description: "Compreender o efeito de sentido decorrente da escolha de palavras homônimas ou parônimas em textos verbais ou multissemióticos pertencentes a gêneros complexos." },
      { code: "S19.H14", description: "Compreender o efeito de sentido decorrente do uso de estrangeirismos, neologismos, gírias ou regionalismos a partir de seus usos em textos verbais ou multissemióticos pertencentes a gêneros complexos." },
      { code: "S19.H15", description: "Compreender o efeito de sentido gerado pelo uso de provérbios, ditados populares, expressões idiomáticas ou frases feitas a partir do seu contexto em textos verbais pertencentes a gêneros complexos." }
    ]
  },
  {
    category: "Saber 20: Efeito de sentido por pontuação e outras notações",
    skills: [
      { code: "S20.H04", description: "Detectar o efeito de sentido decorrente do emprego da reticência para expressar continuidade, dúvida ou hesitação em textos verbais ou multissemióticos de qualquer sequência discursiva predominante." },
      { code: "S20.H05", description: "Detectar o efeito de sentido decorrente do emprego do ponto de interrogação como recurso para expressar dúvida, pergunta retórica ou reflexão em textos verbais ou multissemióticos." },
      { code: "S20.H06", description: "Perceber o uso expressivo do ponto de exclamação para realçar determinados sentidos ou transmitir determinados sentimentos e estados emocionais em textos verbais ou multissemióticos." },
      { code: "S20.H07", description: "Identificar efeitos de sentido decorrentes do uso de aspas como recurso para expressar ironia, sarcasmo, insinuação, licença poética e ética, bem como para marcar gírias ou estrangeirismos." },
      { code: "S20.H08", description: "Identificar o uso de dois-pontos para expressar explicações, enumerações e apostos ou orações apositivas em textos verbais ou multissemióticos." },
      { code: "S20.H09", description: "Reconhecer a função textual da utilização de travessões duplos, parênteses para separar orações intercaladas ou colocar em evidência uma frase, expressão, palavra etc.." },
      { code: "S20.H10", description: "Identificar o efeito de sentido decorrente do uso de negrito, itálico, realce, sublinhado, cor ou de caixa alta em textos verbais ou multissemióticos de grande circulação social." },
      { code: "S20.H11", description: "Identificar problemas comunicativos, efeito de ambiguidade ou imprecisão na mensagem decorrente do uso inadequado ou da ausência do sinal de pontuação requerido." },
      { code: "S20.H12", description: "Identificar o uso do ponto final, vírgula ou dois-pontos como elementos coesivos em caso de elipse ou substituição de conectivos em textos verbais ou multissemióticos." }
    ]
  },
  {
    category: "Saber 21: Recursos estilísticos e morfossintáticos",
    skills: [
      { code: "S21.H05", description: "Reconhecer o efeito de sentido decorrente do uso de onomatopeias ou interjeições em textos não verbais ou multissemióticos." },
      { code: "S21.H06", description: "Reconhecer o efeito de sentido decorrente da repetição de vocábulos e/ou expressões em textos verbais ou multissemióticos." },
      { code: "S21.H07", description: "Compreender o efeito de sentido decorrente do uso cacofônico de recursos morfossintáticos em textos verbais ou multissemióticos." },
      { code: "S21.H08", description: "Compreender o efeito de sentido decorrente do uso das figuras de som/harmonia aliteração ou assonância em textos verbais ou multissemióticos do âmbito artístico e litero-literário." },
      { code: "S21.H09", description: "Compreender o efeito de sentido decorrente do emprego do diminutivo ou aumentativo de palavra em textos verbais ou multissemióticos." },
      { code: "S21.H10", description: "Reconhecer o efeito de sentido decorrente da repetição de vocábulos e/ou expressões em textos verbais ou multissemióticos." },
      { code: "S21.H11", description: "Compreender o efeito de sentido decorrente do uso de figuras de palavras (metáfora, metonímia, catacrese, sinestesia perífrase etc.) em textos verbais ou multissemióticos." },
      { code: "S21.H13", description: "Compreender o efeito de sentido decorrente do uso de figuras de sintaxe/construção (elipse, zeugma, silepse, inversão, pleonasmo etc.) em textos verbais ou multissemióticos." }
    ]
  },
  {
    category: "Saber 22: Efeitos de humor e ironia",
    skills: [
      { code: "S22.H07", description: "Localizar trechos ou elementos que apresentam ironia em textos verbais, não verbais ou multissemióticos, pertencentes a gêneros simples de qualquer sequência discursiva predominante." },
      { code: "S22.H09", description: "Reconhecer a finalidade da ironia ou do humor em textos verbais, não verbais ou multissemióticos, pertencentes a gêneros simples e/ou de grande circulação social." },
      { code: "S22.H10", description: "Reconhecer humor ou ironia através do uso de recursos morfossintáticos em textos verbais ou multissemióticos de qualquer sequência discursiva predominante." },
      { code: "S22.H11", description: "Reconhecer efeitos de humor em textos verbais, não verbais ou multissemióticos, pertencentes a gêneros complexos de qualquer sequência discursiva predominante." },
      { code: "S22.H12", description: "Localizar trechos ou elementos que apresentam ironia em textos verbais, não verbais ou multissemióticos, pertencentes a gêneros complexos de qualquer sequência discursiva predominante." },
      { code: "S22.H13", description: "Localizar trechos ou elementos que apresentam humor em textos verbais, não verbais ou multissemióticos, pertencentes a gêneros complexos de qualquer sequência discursiva predominante." },
      { code: "S22.H14", description: "Reconhecer efeitos de ironia em textos verbais, não verbais ou multissemióticos, pertencentes a gêneros complexos de qualquer sequência discursiva predominante." },
      { code: "S22.H15", description: "Reconhecer a finalidade da ironia ou do humor em textos verbais, não verbais ou multissemióticos, pertencentes a gêneros complexos de qualquer sequência discursiva predominante." }
    ]
  },
  {
    category: "Saber 23: Níveis de linguagem e marcas linguísticas",
    skills: [
      { code: "S23.H02", description: "Identificar marcas linguísticas que evidenciam o uso da linguagem coloquial/informal/popular pelo locutor e/ou interlocutor em textos verbais." },
      { code: "S23.H04", description: "Reconhecer marcas linguísticas que evidenciam o uso da linguagem coloquial/informal/popular pelo locutor e/ou interlocutor em textos multissemióticos." },
      { code: "S23.H05", description: "Identificar marcas linguísticas que evidenciam o uso da linguagem coloquial/informal/popular pelo locutor e/ou interlocutor em textos verbais." },
      { code: "S23.H06", description: "Reconhecer marcas linguísticas que evidenciam uma função de linguagem predominante em textos verbais, pertencentes a gênero simples." },
      { code: "S23.H07", description: "Identificar marcas linguísticas que evidenciam o uso da linguagem coloquial/informal/popular pelo locutor e/ou interlocutor em textos multissemióticos." },
      { code: "S23.H08", description: "Reconhecer marcas linguísticas que evidenciam uma função de linguagem predominante em textos multissemióticos de qualquer sequência discursiva predominante" }
    ]
  }
];

export const SPAECE_MATHEMATICS_SKILLS: SkillGroup[] = [
  {
    category: "Saber 1: Reconhecer e utilizar características do sistema de numeração posicional decimal",
    skills: [
      { code: "S01.H1", description: "Relacionar a forma escrita por extenso dos números naturais e suas representações por meio de algarismos." },
      { code: "S01.H2", description: "Reconhecer e expressar números naturais em diversos contextos cotidianos, sociais, econômicos ou científico-tecnológicos." },
      { code: "S01.H3", description: "Compreender a noção de cardinalidade e sua expressão como número natural." },
      { code: "S01.H4", description: "Expressar cardinalidade, ordem ou códigos usando números naturais." },
      { code: "S01.H5", description: "Compreender e utilizar as noções de antecessor e sucessor na construção e ordem dos números naturais." },
      { code: "S01.H6", description: "Ordenar e comparar números naturais." },
      { code: "S01.H7", description: "Contar, comparar ou estimar grandezas expressas em termos de números naturais." },
      { code: "S01.H8", description: "Reconhecer o efeito da posição dos algarismos, especialmente o zero, na representação ou ordem dos números naturais." },
      { code: "S01.H9", description: "Compreender ordens de grandeza expressas em potências de dez, relacionadas a contextos cotidianos e científico-tecnológicos." },
      { code: "S01.H10", description: "Compor e decompor números naturais em diversas ordens e agrupamentos, em particular envolvendo expansões em potências de dez." },
      { code: "S01.H11", description: "Compor e decompor números naturais em potências distintas de dez (sistemas posicionais não-decimais)." },
      { code: "S01.H12", description: "Associar números naturais a pontos na reta numérica, determinando a localização de pontos correspondentes aos números." },
      { code: "S01.H13", description: "Reconhecer e descrever padrões e regularidades (e.g., leis de formação, recursividade ou recorrência) em sequências de números naturais." }
    ]
  },
  {
    category: "Saber 2: Efetuar operações e resolver problemas envolvendo números naturais e inteiros",
    skills: [
      { code: "S02.H1", description: "Expressar a composição e decomposição de números naturais em termos da adição e da multiplicação por potências de dez." },
      { code: "S02.H2", description: "Expressar os algoritmos da adição e multiplicação em termos da composição ou decomposição de números naturais." },
      { code: "S02.H3", description: "Compreender e efetuar as operações de adição e multiplicação com a ajuda de representações simbólicas ou geométricas." },
      { code: "S02.H4", description: "Compreender e efetuar a operação de adição, relacionando-a aos conceitos de antecessor e sucessor ou a translações na reta numérica." },
      { code: "S02.H5", description: "Utilizar, de modo correto e justificado, procedimentos e algoritmos de adição de números naturais." },
      { code: "S02.H6", description: "Compreender e utilizar as noções de números inteiros opostos e de valor absoluto de um número inteiro." },
      { code: "S02.H7", description: "Associar números inteiros a pontos na reta numérica, determinando a localização dos pontos correspondentes aos números." },
      { code: "S02.H8", description: "Ordenar e comparar números inteiros, possivelmente utilizando suas localizações na reta numérica." },
      { code: "S02.H9", description: "Compreender e expressar os algoritmos da multiplicação em termos da adição e da decomposição de números inteiros." },
      { code: "S02.H10", description: "Compreender e expressar a subtração em termos da soma de um número inteiro com o oposto de outro." },
      { code: "S02.H11", description: "Utilizar, de modo correto e justificado, procedimentos e algoritmos de subtração de números naturais ou inteiros." },
      { code: "S02.H12", description: "Utilizar, de modo correto e justificado, procedimentos e algoritmos de multiplicação de números naturais ou inteiros." },
      { code: "S02.H13", description: "Compreender, interpretar e utilizar corretamente as \"regras de sinais\" nas operações com números inteiros." },
      { code: "S02.H14", description: "Utilizar as propriedades das operações (comutatividade, associatividade, distributividade) para efetuar cálculos aritméticos." },
      { code: "S02.H15", description: "Efetuar divisões exatas (restos nulos) de números naturais, relacionando, em particular, divisões exatas e multiplicações e seus diversos significados e representações." },
      { code: "S02.H16", description: "Determinar parcelas desconhecidas em um cálculo aritmético a partir de parcelas e resultados dados." },
      { code: "S02.H17", description: "Reconhecer múltiplos e divisores de um dado número natural, utilizando, em particular, tábuas de multiplicação e critérios de divisibilidade na resolução de problemas." },
      { code: "S02.H18", description: "Formular e resolver problemas que envolvam múltiplos e divisores comuns a dois ou mais números inteiros." },
      { code: "S02.H19", description: "Identificar fatores primos de números naturais, utilizando-os, em particular, para determinar múltiplos e divisores comuns." },
      { code: "S02.H20", description: "Compreender a noção de potências naturais de números inteiros e efetuar cálculos envolvendo essas potências." },
      { code: "S02.H21", description: "Compreender e relacionar os diversos significados e representações da divisão de números naturais (também com restos não nulos), inclusive a noção de congruência." },
      { code: "S02.H22", description: "Compreender e utilizar procedimentos e algoritmos de divisão, corretos e justificados, em particular o algoritmo de divisão euclidiano (com restos não nulos, inclusive) e suas relações com os algoritmos de adição e multiplicação." },
      { code: "S02.H23", description: "Utilizar procedimentos e efetuar cálculos envolvendo as operações aritméticas (adição, subtração, multiplicação, divisão e potenciação) com números naturais ou inteiros e as relações entre essas operações." },
      { code: "S02.H24", description: "Utilizar, em diferentes contextos e problemas, arredondamentos e estimativas de números naturais ou números inteiros e dos resultados de operações aritméticas." },
      { code: "S02.H25", description: "Formular e resolver problemas, motivados por diferentes contextos e com recurso a diferentes procedimentos, em termos da adição ou subtração de números naturais e seus vários significados e representações." },
      { code: "S02.H26", description: "Formular e resolver problemas, motivados por diversos contextos e com recurso a diferentes procedimentos, em termos da multiplicação ou divisão de números naturais e seus vários significados e representações." },
      { code: "S02.H27", description: "Formular e resolver problemas, motivados por diversos contextos e com recurso a diferentes procedimentos, em termos de operações com números naturais (adição, subtração, multiplicação, divisão e potenciação) e seus vários significados e representações." },
      { code: "S02.H28", description: "Formular e resolver problemas, motivados por diversos contextos e com recurso a diferentes procedimentos, em termos de operações com números inteiros (adição, subtração, multiplicação, divisão e potenciação) e seus vários significados e representações." }
    ]
  },
  {
    category: "Saber 3: Efetuar operações e resolver problemas envolvendo números racionais e suas representações fracionárias e decimais",
    skills: [
      { code: "S03.H1", description: "Relacionar divisão de números naturais a frações (eventualmente \"mistas\" ou \"impróprias\")." },
      { code: "S03.H2", description: "Reconhecer e expressar frações, com diferentes formas e suportes, em seus diferentes significados e em diversos contextos cotidianos, socioeconômicos e científicos-tecnológicos." },
      { code: "S03.H3", description: "Determinar frações (e.g., metade, um terço, um quinto, um décimo, um centésimo, etc.) de um número inteiro, associando-as às noções de divisão, fatoração ou partes de um todo." },
      { code: "S03.H4", description: "Compreender e utilizar a noção de equivalência de frações e suas interpretações aritméticas e geométricas, identificando frações equivalentes por métodos aritméticos ou geométricos." },
      { code: "S03.H5", description: "Escrever frações equivalentes a uma fração dada, com denominadores dados por potências de dez." },
      { code: "S03.H6", description: "Associar frações a números decimais (e reciprocamente) e, em particular, estabelecer a equivalência entre porcentagens, frações centesimais e suas representações como números decimais." },
      { code: "S03.H7", description: "Reconhecer usos e equivalências das representações de números racionais - escrita (por extenso), na forma fracionária e na forma decimal - em diferentes contextos e problemas." },
      { code: "S03.H8", description: "Compreender o conceito de potências inteiras de um número racional, em suas representações fracionárias ou decimais, efetuando cálculos com o uso de suas propriedades operatórias." },
      { code: "S03.H9", description: "Reconhecer a representação decimal de números racionais, compondo-os e decompondo-os em termos de potências de dez, positivas e negativas." },
      { code: "S03.H10", description: "Comparar números racionais, na forma fracionária e na forma decimal." },
      { code: "S03.H11", description: "Ordenar ou comparar números racionais, em suas representações fracionária ou decimal, em particular por meio de sua localização na reta numérica." },
      { code: "S03.H12", description: "Identificar a localização de números racionais, em suas representações fracionária ou decimal, na reta numérica, associando pontos a números." },
      { code: "S03.H13", description: "Efetuar, segundo algoritmos corretos e justificados, operações aritméticas (soma, subtração, multiplicação, divisão e potenciação) de frações." },
      { code: "S03.H14", description: "Compreender e efetuar, segundo algoritmos corretos e justificados, a adição ou subtração de números racionais, em suas representações fracionárias ou decimais." },
      { code: "S03.H15", description: "Compreender e efetuar, segundo algoritmos corretos e justificados, a multiplicação ou divisão de números racionais, em suas representações fracionárias ou decimais." },
      { code: "S03.H16", description: "Compreender e efetuar, segundo algoritmos corretos e justificados, operações aritméticas (soma, subtração, multiplicação, divisão e potenciação) de números racionais, em suas representações fracionárias ou decimais." },
      { code: "S03.H17", description: "Usar a noção de igualdade e as propriedades das operações para determinar incógnitas em equações envolvendo números inteiros ou racionais." },
      { code: "S03.H18", description: "Usar as propriedades das operações (comutatividade, associatividade, distributividade) para efetuar cálculos aritméticos envolvendo números racionais (nas formas fracionária ou decimal)." },
      { code: "S03.H19", description: "Efetuar aproximações, estimativas e arredondamentos de números racionais e dos resultados de operações aritméticas (somas, produtos, diferenças, quocientes e potências) entre esses números." },
      { code: "S03.H20", description: "Formular e resolver problemas, motivados por diferentes contextos e com recurso a diferentes procedimentos, envolvendo a adição ou subtração de números racionais, em suas representações fracionárias ou decimais." },
      { code: "S03.H21", description: "Formular e resolver problemas, motivados por diferentes contextos e com recurso a diferentes procedimentos, envolvendo operações entre números racionais, expressos na forma de frações ou de números decimais." }
    ]
  },
  {
    category: "Saber 4: Identificar e utilizar relações de proporcionalidade entre grandezas numéricas",
    skills: [
      { code: "S04.H1", description: "Reconhecer, em diferentes contextos, aplicações e problemas, relações de proporcionalidade direta ou inversa entre grandezas ou entre suas variações." },
      { code: "S04.H2", description: "Relacionar números racionais a razões entre grandezas ou entre suas variações, expressando, em particular, a taxa de variação (percentual) entre essas grandezas." },
      { code: "S04.H3", description: "Reconhecer - em gráficos, tabelas e outros suportes - relações de proporcionalidade entre grandezas ou entre variações dessas grandezas." },
      { code: "S04.H4", description: "Compreender as relações entre razões, frações e suas representações decimais, inclusive quando expressas na forma de porcentagem." },
      { code: "S04.H5", description: "Compreender a relação de proporcionalidade inversa em termos de proporcionalidade direta entre uma grandeza e o recíproco de outra." },
      { code: "S04.H6", description: "Resolver problemas, motivados por diferentes contextos e aplicações, que envolvam a variação proporcional entre grandezas direta ou inversamente proporcionais." },
      { code: "S04.H7", description: "Resolver problema que envolva porcentagens." },
      { code: "S04.H8", description: "Compreender e efetuar cálculos, bem como resolver problemas, que envolvam duas ou mais grandezas direta ou inversamente proporcionais (e.g., divisão em partes proporcionais)." },
      { code: "S04.H9", description: "Determinar termos desconhecidos em uma proporção a partir dos termos dados." },
      { code: "S04.H10", description: "Compreender e utilizar corretamente propriedades operacionais de razões e proporções, inclusive quando expressas na forma das chamadas \"regras de três\", combinando grandezas direta e/ou inversamente proporcionais." },
      { code: "S04.H11", description: "Formular e resolver problemas que envolvam grandezas relativas, como velocidades, densidades, fluxos, vazões e outras taxas de variação entre grandezas, motivadas por diversos contextos e aplicações." },
      { code: "S04.H12", description: "Reconhecer, em diferentes contextos, aplicações e problemas, quando grandezas não são proporcionais, direta ou inversamente." },
      { code: "S04.H13", description: "Compreender e aplicar o conceito de juros como correção de valores no tempo, identificando a aplicação de juros simples em gráficos e tabelas e reconhecendo que a diferença entre valor presente e valor futuro de um ativo financeiro é proporcional ao tempo, no regime de juros simples." },
      { code: "S04.H14", description: "Interpretar, modelar e resolver problemas, no contexto da Matemática Financeira, relativos a acréscimos, descontos, valores presente e futuro, débitos, créditos, poupança, consumo, investimento e outras grandezas envolvidas na educação financeira." },
      { code: "S04.H15", description: "Formular e resolver problemas, motivados por diversos contextos e aplicações, envolvendo acréscimos/decréscimos aritméticos (e.g., juros simples)." }
    ]
  },
  {
    category: "Saber 5: Compreender e utilizar elementos, propriedades e relações de congruência e semelhança entre figuras geométricas",
    skills: [
      { code: "S05.H1", description: "Reconhecer padrões geométricos, em vários contextos, descrevendo simetrias e invariâncias." },
      { code: "S05.H2", description: "Compreender as noções de distância e ângulo e suas medidas." },
      { code: "S05.H3", description: "Identificar e medir os elementos constituintes de figuras geométricas (e.g., segmentos, ângulos e suas medidas)." },
      { code: "S05.H4", description: "Localizar pontos e descrever movimentos no plano (e em modelos como mapas, plantas, entre outros) a partir de distâncias a um ponto fixo e/ou ângulos com respeito a uma direção fixa." },
      { code: "S05.H5", description: "Reconhecer relações de paralelismo, perpendicularidade e transversalidade entre retas ou direções, identificando-as em termos de ângulos retos e não-retos e suas medidas." },
      { code: "S05.H6", description: "Reconhecer e mensurar a ação de movimentos geométricos (rotações, translações, semelhanças) sobre figuras no plano e seus elementos constituintes e medidas." },
      { code: "S05.H7", description: "Compreender e identificar relações de congruência, relações de semelhança, simetrias e invariância de figuras geométricas em termos de movimentos geométricos." },
      { code: "S05.H8", description: "Reconhecer e determinar relações de semelhança entre figuras planas, inclusive descrevendo-as quantitativamente em termos de proporções numéricas (e.g., por meio de escalas)." },
      { code: "S05.H9", description: "Utilizar, com correção e justificativa, o Teorema de Tales e suas consequências." },
      { code: "S05.H10", description: "Compreender e utilizar relações e comparações entre medidas de lados e ângulos em triângulos." },
      { code: "S05.H11", description: "Determinar elementos geométricos (e.g., lados e ângulos) desconhecidos em figuras planas, a partir de elementos dados e de relações de semelhança ou congruência." },
      { code: "S05.H12", description: "Reconhecer e distinguir, por meio de suas propriedades geométricas, as diferentes classes de quadriláteros no plano." },
      { code: "S05.H13", description: "Resolver problemas, motivados por diferentes contextos e aplicações, envolvendo congruência ou semelhança de figuras planas." },
      { code: "S05.H14", description: "Identificar e classificar figuras planas (e.g., triângulos, quadriláteros, polígonos, círculos) e suas propriedades, reconhecendo e descrevendo alguns de seus elementos." },
      { code: "S05.H15", description: "Formular e resolver problemas que envolvam reconhecer e determinar elementos e propriedades geométricas de polígonos convexos e polígonos regulares." },
      { code: "S05.H16", description: "Resolver problemas relativos a recobrimentos do plano utilizando polígonos e a outros padrões geométricos com propriedades de simetria e periodicidade." },
      { code: "S05.H17", description: "Identificar circunferências e seus elementos geométricos (e.g., raio, centro, ângulos centrais, ângulos inscritos, arcos, tangentes e secantes), descrevendo relações entre esses elementos." },
      { code: "S05.H18", description: "Formular e resolver problemas envolvendo lugares geométricos em triângulos, tais como linhas e pontos \"notáveis\"." },
      { code: "S05.H19", description: "Compreender e utilizar as relações entre os elementos geométricos de circunferências e de polígonos inscritos ou circunscritos a estas." },
      { code: "S05.H20", description: "Compreender e determinar a razão entre uma circunferência, seu diâmetro, as medidas de ângulos e dos arcos que determinam." },
      { code: "S05.H21", description: "Formular e resolver problemas, motivados por diferentes contextos, envolvendo figuras planas, seus elementos, propriedades e relações de congruência e semelhança." }
    ]
  },
  {
    category: "Saber 6: Utilizar modelos e resolver problemas envolvendo relações lineares entre variáveis",
    skills: [
      { code: "S06.H1", description: "Compreender a noção de variável em diversos contextos e problemas." },
      { code: "S06.H2", description: "Identificar variáveis e seus valores em diversos contextos e problemas, a partir de modelos, tabelas, gráficos e outros conjuntos de informações." },
      { code: "S06.H3", description: "Identificar e interpretar representações gráficas ou geométricas de variáveis (e suas variações) expressas em informações contidas em um texto ou outro conjunto de dados." },
      { code: "S06.H4", description: "Compreender as noções básicas do plano cartesiano e coordenadas cartesianas ou polares." },
      { code: "S06.H5", description: "Localizar pontos na reta numérica e no plano cartesiano, associando-os a coordenadas." },
      { code: "S06.H6", description: "Representar e descrever movimentos geométricos do plano em termos do efeito sobre as coordenadas de pontos e figuras planas." },
      { code: "S06.H7", description: "Associar relações de proporcionalidade entre grandezas a pontos sobre retas no plano, em particular identificando razões entre grandezas proporcionais à inclinação das retas correspondentes." },
      { code: "S06.H8", description: "Relacionar retas no plano ao lugar geométrico de soluções de uma equação linear." },
      { code: "S06.H9", description: "Reconhecer relações de proporcionalidade (linearidade) entre variáveis ou suas variações a partir de modelos, tabelas, gráficos e outros conjuntos de informações." },
      { code: "S06.H10", description: "Reconhecer relações não-lineares entre variáveis ou suas variações, a partir de modelos, tabelas, gráficos e outros conjuntos de informações." },
      { code: "S06.H11", description: "Resolver uma equação linear com procedimentos corretos e justificados (e.g., o método de falsa posição)." },
      { code: "S06.H12", description: "Reconhecer e utilizar representações geométricas de (sistemas de) equações lineares em termos de retas no plano e suas intersecções." },
      { code: "S06.H13", description: "Utilizar, com correção e justificativa, procedimentos algébricos para solução (de sistemas) de equações lineares a duas variáveis." },
      { code: "S06.H14", description: "Formular modelos ou resolver problemas, motivados por diferentes contextos e aplicações, em termos de (in)equações e sistemas de (in)equações lineares." },
      { code: "S06.H15", description: "Compreender a noção de função como uma relação entre variáveis em que o valor de uma determina, de modo unívoco, o valor da outra." },
      { code: "S06.H16", description: "Identificar e descrever, algébrica ou graficamente, relações entre variáveis que são dadas por funções, a partir de modelos, tabelas, gráficos e outras representações dessas relações." },
      { code: "S06.H17", description: "Identificar, em diferentes contextos e via distintos suportes, a dependência de uma variável como função afim de outra." },
      { code: "S06.H18", description: "Relacionar funções afins e equações lineares a relações de proporcionalidade (linearidade) entre variáveis ou suas variações e suas representações gráficas em termos de retas no plano." },
      { code: "S06.H19", description: "Identificar os parâmetros e a representação algébrica de uma função afim a partir da reta que a representa graficamente." },
      { code: "S06.H20", description: "Analisar crescimento e decrescimento ou determinar zeros de funções reais apresentadas em gráficos." },
      { code: "S06.H21", description: "Determinar o gráfico e identificar a declividade e interceptos de uma reta em termos dos parâmetros da função afim que representa." },
      { code: "S06.H22", description: "Interpretar o efeito de translações e rotações sobre a representação gráfica e a expressão algébrica de uma função afim." },
      { code: "S06.H23", description: "Formular modelos ou resolver problemas, com diferentes motivações e contextos, envolvendo (in)equações lineares ou funções afins." },
      { code: "S06.H24", description: "Determinar a função inversa de uma função afim." },
      { code: "S06.H25", description: "Relacionar os gráficos de uma função afim e de sua inversa." },
      { code: "S06.H26", description: "Relacionar os parâmetros de uma função afim e de sua inversa." },
      { code: "S06.H27", description: "Identificar a equação de uma reta apresentada a partir de dois pontos dados ou de um ponto e sua inclinação." },
      { code: "S06.H28", description: "Interpretar geometricamente os coeficientes da equação de uma reta." }
    ]
  },
  {
    category: "Saber 7: Compreender e medir grandezas geométricas de figuras geométricas planas",
    skills: [
      { code: "S07.H1", description: "Compreender a noção de perímetro de figuras planas." },
      { code: "S07.H2", description: "Calcular ou estimar perímetros de figuras geométricas gerais por aproximação ou comparação com o perímetro de figuras planas elementares." },
      { code: "S07.H3", description: "Compreender e utilizar, em problemas motivados por diversos contextos, as relações entre comprimentos de circunferências e seus diâmetros ou entre diâmetros, ângulos e arcos." },
      { code: "S07.H4", description: "Resolver problema envolvendo o cálculo de perímetro de figuras planas." },
      { code: "S07.H5", description: "Compreender a noção de área de figuras planas." },
      { code: "S07.H6", description: "Calcular ou estimar a área de figuras geométricas planas, por aproximação ou comparação com áreas de figuras elementares." },
      { code: "S07.H7", description: "Calcular ou estimar a área de regiões poligonais." },
      { code: "S07.H8", description: "Formular e resolver problemas, motivados por diferentes contextos e aplicações, envolvendo o cálculo de áreas de figuras geométricas planas." },
      { code: "S07.H9", description: "Compreender e utilizar a relação entre área de um círculo (e partes dele) e seu diâmetro." },
      { code: "S07.H10", description: "Calcular ou estimar a área de figuras planas utilizando movimentos geométricos e composição, decomposição, justaposição, simetrização, entre outros rearranjos das figuras." },
      { code: "S07.H11", description: "Estabelecer e reconhecer relações entre medidas de lados, diagonais e ângulos em polígonos, especialmente os regulares." },
      { code: "S07.H12", description: "Compreender as relações entre perímetro e área de figuras planas, em particular identificando figuras com mesmo perímetro e diferentes áreas, e vice-versa." },
      { code: "S07.H13", description: "Resolver problemas, motivados por diferentes contextos e aplicações, envolvendo perímetro e área de figuras planas e as relações entre essas grandezas." },
      { code: "S07.H14", description: "Calcular distâncias entre pontos, dadas suas coordenadas cartesianas." },
      { code: "S07.H15", description: "Identificar o efeito de movimentos geométricos (translações, rotações, homotetias, reflexões) sobre a distância entre pontos e sobre o perímetro de figuras planas." },
      { code: "S07.H17", description: "Identificar o efeito de movimentos geométricos sobre ângulos entre retas." },
      { code: "S07.H18", description: "Identificar, descrever e comparar o efeito de movimentos geométricos sobre a distância entre pontos, ângulos entre retas e sobre o perímetro e área de figuras planas." },
      { code: "S07.H19", description: "Interpretar, modelar e resolver problemas que envolvam grandezas geométricas de figuras planas, motivados por diversos contextos." }
    ]
  },
  {
    category: "Saber 8: Compreender e utilizar relações métricas e razões trigonométricas em figuras geométricas planas",
    skills: [
      { code: "S08.H1", description: "Utilizar, com correção e justificativa, o Teorema de Pitágoras, em diversos contextos, aplicações e problemas." },
      { code: "S08.H2", description: "Relacionar o Teorema de Pitágoras à expressão analítica, em coordenadas, da distância entre pontos." },
      { code: "S08.H3", description: "Compreender e reconhecer as relações métricas no triângulo retângulo, em diversos contextos, aplicações e problemas." },
      { code: "S08.H4", description: "Formular e resolver problemas, motivados por diversos contextos e aplicações, envolvendo o Teorema de Pitágoras ou as demais relações métricas no triângulo retângulo." },
      { code: "S08.H5", description: "Determinar as razões trigonométricas em triângulos retângulos, compreendendo-as em termos de relações de semelhança." },
      { code: "S08.H6", description: "Resolver problema que envolva razões trigonométricas no triângulo retângulo, em particular na determinação de ângulos e distâncias." },
      { code: "S08.H7", description: "Relacionar o arco subtendido por um ângulo central em uma circunferência às razões trigonométricas deste ângulo." },
      { code: "S08.H8", description: "Compreender e utilizar as relações métricas e trigonométricas entre lados, ângulos e linhas e pontos notáveis de triângulos quaisquer." },
      { code: "S08.H9", description: "Compreender as extensões das razões trigonométricas para ângulos quaisquer com o auxílio do ciclo trigonométrico." },
      { code: "S08.H10", description: "Resolver problemas que envolvam razões trigonométricas da soma de dois ângulos e outras relações entre as razões trigonométricas." },
      { code: "S08.H11", description: "Resolver problemas, motivados por diferentes contextos e aplicações, que envolvam razões trigonométricas e relações métricas em triângulos quaisquer ou círculos." },
      { code: "S08.H12", description: "Compreender e descrever as razões trigonométricas para ângulos quaisquer em termos de funções, determinando seus valores no ciclo trigonométrico." },
      { code: "S08.H13", description: "Compreender as propriedades básicas das funções trigonométricas (funções seno, cosseno e tangente) em termos da paridade, periodicidade e da não-linearidade das razões trigonométricas." },
      { code: "S08.H14", description: "Reconhecer as representações gráficas das funções trigonométricas no plano cartesiano." },
      { code: "S08.H15", description: "Interpretar, modelar e resolver problemas envolvendo funções trigonométricas, em diversos contextos e aplicações que envolvam fenômenos periódicos." }
    ]
  },
  {
    category: "Saber 9: Efetuar operações, calcular medidas e tratar informações envolvendo números reais",
    skills: [
      { code: "S09.H1", description: "Reconhecer e expressar números reais em diversos contextos cotidianos, sociais, econômicos ou científicos-tecnológicos." },
      { code: "S09.H2", description: "Ler e expressar numericamente informações apresentadas em tabelas, gráficos de barras ou colunas e outros contextos e suportes." },
      { code: "S09.H3", description: "Estimar um dado número real utilizando aproximações por números racionais." },
      { code: "S09.H4", description: "Compreender e reconhecer a incomensurabilidade de dois segmentos." },
      { code: "S09.H5", description: "Compreender, reconhecer ou expressar geometricamente a irracionalidade de um número real." },
      { code: "S09.H6", description: "Utilizar aproximações, arredondamentos, estimativas para localizar números reais na reta numérica." },
      { code: "S09.H7", description: "Identificar a localização de números reais na reta numérica." },
      { code: "S09.H8", description: "Ordenar e comparar números reais." },
      { code: "S09.H9", description: "Efetuar cálculos, corretos e justificados, com potências (inteiras e racionais) de números reais." },
      { code: "S09.H10", description: "Utilizar aproximações e arredondamentos para determinar ou estimar potências e raízes de números reais." },
      { code: "S09.H11", description: "Calcular e diferenciar médias aritméticas e geométricas, em diversos contextos, aplicações e problemas." },
      { code: "S09.H12", description: "Compreender e efetuar operações aritméticas com números reais (em particular, irracionais), inclusive potenciações e radiciações." },
      { code: "S09.H13", description: "Formular e resolver problemas, motivados por diferentes contextos e aplicações, envolvendo operações aritméticas entre números reais." },
      { code: "S09.H14", description: "Reconhecer e descrever padrões e regularidades em sequências de números racionais e reais, em representações aritméticas, algébricas ou geométricas." },
      { code: "S09.H15", description: "Efetuar cálculos com as expansões decimais de números reais, sejam racionais ou não." },
      { code: "S09.H16", description: "Resolver problemas que envolvam as várias representações de números reais (expansões decimais, \"dízimas\", frações contínuas, entre outras)." },
      { code: "S09.H17", description: "Utilizar arredondamentos e estimativas para determinar o resultado de operações aritméticas com números reais." },
      { code: "S09.H18", description: "Determinar medidas de perímetro, área e volume de figuras geométricas elementares, expressas em unidades padronizadas de medida." },
      { code: "S09.H19", description: "Utilizar comparações, arredondamentos e estimativas para medir grandezas, em particular perímetros, áreas e volumes de figuras geométricas elementares." },
      { code: "S09.H20", description: "Elaborar modelos e resolver problemas, motivados por diferentes contextos, envolvendo a expressão de perímetros, áreas ou volumes em unidades de medida em números reais." },
      { code: "S09.H21", description: "Compreender e descrever quantitativamente as relações entre medidas de perímetro e área ou área e volume sob o efeito de homotetias ou de mudanças de unidades de medida." },
      { code: "S09.H22", description: "Realizar cálculos aritméticos em notação científica para medidas de grandezas, considerando ordens de grandeza, algarismos significativos, algarismos duvidosos e erros." },
      { code: "S09.H23", description: "Formular e resolver problemas envolvendo relações entre unidades de medida bem como conversões de unidades de medida em um mesmo sistema e de sistema para outro." },
      { code: "S09.H24", description: "Relacionar conversões de medidas no sistema métrico decimal à expansão decimal dos números reais expressando as medidas das grandezas." },
      { code: "S09.H25", description: "Relacionar conversões de medidas de tempo e de ângulo a expansões dos números reais em sistemas posicionais sexagesimais." },
      { code: "S09.H26", description: "Formular e resolver problemas, motivado por diferentes contextos e aplicações, utilizando unidades de medida padronizadas, sobretudo do sistema métrico decimal." },
      { code: "S09.H27", description: "Formular e resolver problemas, motivados por diferentes contextos e aplicações, utilizando a escrita decimal de valores monetários em diversos sistemas monetários." },
      { code: "S09.H28", description: "Formular e resolver problemas, motivado por diferentes contextos e aplicações, utilizando unidades de medida de tempo e as relações entre elas." },
      { code: "S09.H29", description: "Formular e resolver problemas, motivado por diversos contextos e aplicações, utilizando unidades de medida para grandezas relativas." },
      { code: "S09.H30", description: "Resolver problemas que envolvam operações aritméticas que envolvam medidas de tempo, como intervalos, durações, períodos, entre outras." },
      { code: "S09.H31", description: "Resolver problema envolvendo informações apresentadas em tabelas, gráficos e outros suportes, relativas a diversos contextos." },
      { code: "S09.H32", description: "Estabelecer relações entre diferentes unidades de medida em situação-problema motivada por diversos contextos e aplicações." }
    ]
  },
  {
    category: "Saber 10: Utilizar modelos e resolver problemas envolvendo relações quadráticas e polinomiais entre grandezas",
    skills: [
      { code: "S10.H1", description: "Calcular o valor numérico de expressões algébricas." },
      { code: "S10.H2", description: "Efetuar soma, diferença e produto de expressões algébricas, agrupando termos semelhantes e simplificando-os." },
      { code: "S10.H3", description: "Identificar fatores comuns em expressões algébricas." },
      { code: "S10.H4", description: "Reconhecer e utilizar fatores comuns e produtos notáveis na escrita de expressões algébricas, em particular simplificando-as." },
      { code: "S10.H5", description: "Elaborar ou identificar modelos geométricos dos produtos notáveis." },
      { code: "S10.H6", description: "Utilizar, em diferentes contextos e problemas, a expansão de binômios." },
      { code: "S10.H7", description: "Formular e resolver problemas envolvendo simplificação, fatoração ou determinação de valores numéricos de expressões algébricas." },
      { code: "S10.H8", description: "Compreender o conceito de zero ou raiz de uma equação algébrica." },
      { code: "S10.H9", description: "Associar um fator linear de uma expressão algébrica quadrática (ou polinomial, em geral) a um zero ou raiz." },
      { code: "S10.H10", description: "Fatorar e simplificar expressões algébricas." },
      { code: "S10.H11", description: "Relacionar as raízes de um polinômio quadrático com sua decomposição em fatores lineares." },
      { code: "S10.H12", description: "Completar quadrados em expressões quadráticas para determinação das raízes." },
      { code: "S10.H14", description: "Reconhecer, em diversos contextos, a dependência de uma variável como função quadrática de outra." },
      { code: "S10.H15", description: "Reconhecer as representações algébrica ou geométrica de funções quadráticas." },
      { code: "S10.H16", description: "Identificar os parâmetros de uma função quadrática em termos da parábola que a representa graficamente." },
      { code: "S10.H17", description: "Identificar raízes, máximos/mínimos e outros elementos algébricos e geométricos a partir da forma estendida e da forma fatorada de uma função quadrática." },
      { code: "S10.H18", description: "Formular modelos ou resolver problemas, motivados por diferentes contextos e aplicações, em termos de (in)equações e sistemas de (in)equações lineares ou quadráticas." },
      { code: "S10.H19", description: "Formular modelos ou resolver problemas, motivados por diferentes contextos e aplicações, em termos de funções lineares ou quadráticas." },
      { code: "S10.H20", description: "Resolver problemas que envolvam os pontos de máximo ou de mínimo no gráfico de uma função quadrática." },
      { code: "S10.H21", description: "Reconhecer funções polinomiais, identificando seus elementos algébricos e geométricos." },
      { code: "S10.H22", description: "Realizar operações de adição, multiplicação e composição de funções polinomiais." },
      { code: "S10.H23", description: "Compreender e relacionar as noções de raiz e de fatores lineares e quadráticos de equações polinomiais." },
      { code: "S10.H24", description: "Diferenciar aspectos algébricos e geométricos de funções afins e de funções polinomiais de grau maior que um." }
    ]
  },
  {
    category: "Saber 11: Utilizar modelos e resolver problemas envolvendo potências e raízes de números reais",
    skills: [
      { code: "S11.H1", description: "Distinguir e descrever crescimentos/decrescimentos aritmético e geométrico em diversos contextos e aplicações." },
      { code: "S11.H2", description: "Reconhecer e determinar os elementos fundamentais de progressões aritméticas e geométricas." },
      { code: "S11.H3", description: "Compreender e utilizar as propriedades operacionais de potências de mesma base." },
      { code: "S11.H4", description: "Reconhecer, em diversos contextos e aplicações, a dependência de uma variável como função exponencial ou logarítmica de outra." },
      { code: "S11.H5", description: "Relacionar funções afins a progressões aritméticas e funções exponenciais a progressões geométricas." },
      { code: "S11.H6", description: "Resolver problema envolvendo propriedades e elementos de progressões aritméticas e geométricas." },
      { code: "S11.H7", description: "Interpretar as propriedades dos logaritmos em termos das propriedades operacionais de potências de mesma base." },
      { code: "S11.H8", description: "Reconhecer funções exponenciais e suas inversas, logarítmicas, a partir de suas representações algébrica ou gráfica." },
      { code: "S11.H9", description: "Identificar e descrever as representações algébrica ou gráfica de uma função logarítmica a partir de sua inversa, e vice-versa." },
      { code: "S11.H10", description: "Formular e resolver problemas, motivados por diversos contextos, modelos e aplicações, que envolvam funções exponenciais e logarítmicas." },
      { code: "S11.H11", description: "Reconhecer e utilizar as propriedades dos logaritmos como ferramentas efetivas de cálculo." },
      { code: "S11.H12", description: "Reconhecer gráficos associados a pares de variáveis inversamente proporcionais." },
      { code: "S11.H13", description: "Formular e resolver problemas que envolvam funções da forma $y=c/x,$ ou seja, pares de variáveis inversamente proporcionais." },
      { code: "S11.H14", description: "Interpretar geometricamente as propriedades operatórias dos logaritmos, utilizando o gráfico de funções da forma $y=c/x$." },
      { code: "S11.H15", description: "Identificar, em gráficos e tabelas, as relações entre valor presente e valor futuro de ativos financeiros em regime de juros compostos." },
      { code: "S11.H16", description: "Utilizar, de modo correto e justificado, a fórmula dos juros compostos." },
      { code: "S11.H17", description: "Resolver problema envolvendo juros compostos." },
      { code: "S11.H18", description: "Distinguir crescimentos/decrescimentos aritmético e geométrico, com o suporte de tabelas, gráficos ou outros conjuntos de dados, em particular no contexto de juros simples e juros compostos." },
      { code: "S11.H19", description: "Interpretar, modelar e resolver problemas envolvendo funções exponenciais e progressões geométricas, no contexto da Matemática Financeira." }
    ]
  },
  {
    category: "Saber 12: Utilizar modelos e resolver problemas envolvendo equações e sistemas lineares",
    skills: [
      { code: "S12.H1", description: "Compreender a noção de matriz, seus elementos fundamentais e operações elementares." },
      { code: "S12.H2", description: "Associar matrizes a dados, extraídos de diversos contextos, disponíveis em tabelas, gráficos, modelos e outros conjuntos de informações." },
      { code: "S12.H3", description: "Reconhecer matrizes 2x2 associadas a rotações, homotetias e reflexões no plano, interpretando geometricamente a adição e multiplicação de matrizes." },
      { code: "S12.H4", description: "Efetuar operações matriciais de soma, multiplicação e produto por número real." },
      { code: "S12.H5", description: "Representar sistemas lineares de duas/três equações a duas/três variáveis em termos de matrizes, utilizando-as na resolução algébrico-geométrica." },
      { code: "S12.H6", description: "Determinar a solução de um sistema linear associando-o a uma matriz." },
      { code: "S12.H7", description: "Compreender a noção e as propriedades fundamentais de determinante de matrizes 2x2 e 3x3." },
      { code: "S12.H8", description: "Determinar a inversa, caso exista, de matrizes 2x2 e 3x3, em particular relacionando-a à existência de soluções dos sistemas lineares associados." },
      { code: "S12.H9", description: "Interpretar a condição de existência de solução de sistemas de duas/três equações lineares a duas/três variáveis em termos de determinantes." },
      { code: "S12.H10", description: "Descrever retas e planos como lugares geométricos definidos por equações lineares a duas ou três variáveis." },
      { code: "S12.H11", description: "Interpretar geometricamente, em termos de posições relativas de retas e planos, as condições de existência e unicidade de sistemas de equações lineares." },
      { code: "S12.H12", description: "Elaborar estratégias de resolução de sistemas de equações lineares utilizando informações geométricas sobre as retas e planos definidos pelas equações." },
      { code: "S12.H13", description: "Interpretar geometricamente a noção de determinantes e suas propriedades de anti-simetria e linearidade." },
      { code: "S12.H14", description: "Interpretar, modelar e resolver problemas, motivado por diferentes contextos e aplicações, envolvendo matrizes, determinantes e sistemas lineares." }
    ]
  },
  {
    category: "Saber 13: Compreender e utilizar conceitos algébricos em Geometria",
    skills: [
      { code: "S13.H1", description: "Associar vetores a pontos e pares de coordenadas no plano." },
      { code: "S13.H2", description: "Efetuar e interpretar geometricamente operações algébricas de soma vetorial e produto por escalar real." },
      { code: "S13.H3", description: "Reconhecer e utilizar as expressões para distância e ângulo em termos de expressões algébricas envolvendo vetores." },
      { code: "S13.H4", description: "Expressar movimentos geométricos em termos das coordenadas de vetores." },
      { code: "S13.H5", description: "Interpretar determinantes em termos de área de retângulos, paralelogramos e triângulos." },
      { code: "S13.H6", description: "Calcular a área de um triângulo e de um paralelogramo pelas coordenadas de seus vértices." },
      { code: "S13.H7", description: "Resolver problema utilizando as relações entre diferentes unidades de medidas de área, capacidade e volume." },
      { code: "S13.H8", description: "Interpretar, formular e resolver problemas, motivados por diversos contextos e aplicações, envolvendo os aspectos algébricos e geométricos de vetores no plano." },
      { code: "S13.H9", description: "Reconhecer circunferências como lugares geométricos de soluções de uma equação quadrática." },
      { code: "S13.H10", description: "Determinar raio e centro de uma circunferência a partir de sua equação quadrática." },
      { code: "S13.H11", description: "Determinar posições relativas de pontos, retas e circunferências a partir de suas equações em coordenadas cartesianas." },
      { code: "S13.H12", description: "Reconhecer, dentre as equações quadráticas com duas incógnitas, as que representam circunferências." },
      { code: "S13.H13", description: "Identificar o efeito de translações e rotações sobre as equações das secções cônicas em coordenadas cartesianas ou polares." },
      { code: "S13.H14", description: "Reconhecer lugares geométricos, tais como as secções cônicas, como conjunto de soluções de equações quadráticas." },
      { code: "S13.H15", description: "Interpretar, modelar e resolver problemas, motivados por diversos contextos e aplicações, envolvendo as expressões algébricas de circunferências e outras secções cônicas." }
    ]
  },
  {
    category: "Saber 14: Compreender e utilizar elementos, propriedades e medidas de objetos geométricos no espaço",
    skills: [
      { code: "S14.H1", description: "Compreender as noções de paralelismo e perpendicularidade no plano e no espaço." },
      { code: "S14.H2", description: "Compreender e identificar posições relativas entre retas e planos no espaço." },
      { code: "S14.H3", description: "Identificar e calcular os ângulos entre planos (ângulos diedrais)." },
      { code: "S14.H4", description: "Reconhecer o efeito de transformações geométricas sobre figuras espaciais." },
      { code: "S14.H5", description: "Identificar e representar figuras planas que são elementos constituintes de figuras espaciais." },
      { code: "S14.H6", description: "Identificar e representar figuras geométricas espaciais sob diferentes técnicas de representação." },
      { code: "S14.H7", description: "Reconhecer os efeitos sobre medidas geométricas de projeções ortogonais e afins de figuras espaciais sobre planos." },
      { code: "S14.H8", description: "Relacionar diferentes representações, no plano e no espaço, de uma dada figura espacial." },
      { code: "S14.H9", description: "Relacionar as propriedades geométricas de figuras geométricas espaciais e planas, quando umas forem obtidas a partir das outras por planificação." },
      { code: "S14.H10", description: "Relacionar diferentes poliedros ou corpos redondos a suas planificações ou vistas, estabelecendo propriedades comuns e diferenças." },
      { code: "S14.H11", description: "Identificar planificações de alguns poliedros e/ou corpos redondos." },
      { code: "S14.H12", description: "Reconhecer os elementos geométricos fundamentais de poliedros, prismas e pirâmides; de cilindros, cones e esferas." },
      { code: "S14.H13", description: "Identificar vértices, faces e/ou arestas de poliedros e reconhecer ou estabelecer relações entre suas quantidades." },
      { code: "S14.H14", description: "Compreender a noção de área superficial de figuras espaciais." },
      { code: "S14.H15", description: "Entender o efeito de transformações geométricas sobre a área superficial de figuras espaciais." },
      { code: "S14.H16", description: "Calcular a área da superfície total de prismas, pirâmides, cones, cilindros e esferas." },
      { code: "S14.H17", description: "Compreender a noção de volume de figuras espaciais." },
      { code: "S14.H18", description: "Entender o efeito de transformações geométricas sobre o volume de figuras espaciais." },
      { code: "S14.H19", description: "Calcular o volume de prismas, pirâmides, cilindros e cones e secções ou partes destas figuras." },
      { code: "S14.H20", description: "Compreender e aplicar o Princípio de Cavalieri no cálculo de volumes de figuras espaciais." },
      { code: "S14.H21", description: "Formular modelos ou resolver problemas envolvendo o volume de prismas, pirâmides, cilindros e cones." },
      { code: "S14.H22", description: "Formular modelos ou resolver problemas envolvendo a área total e/ou volume de um sólido." },
      { code: "S14.H23", description: "Calcular ou estimar a área superficial e volume de figuras espaciais utilizando figuras geométricas elementares." },
      { code: "S14.H24", description: "Reconhecer as relações entre área superficial e volume de figuras espaciais." },
      { code: "S14.H25", description: "Formular modelos ou resolver problemas, motivados por diferentes contextos e aplicações, envolvendo área superficial de figuras espaciais gerais." },
      { code: "S14.H26", description: "Resolver problemas, motivados por diferentes contextos e aplicações, envolvendo volume de figuras espaciais gerais." },
      { code: "S14.H27", description: "Reconhecer aplicações das relações métricas do triângulo retângulo em um problema que envolva figuras espaciais." },
      { code: "S14.H28", description: "Interpretar, formular e resolver problemas, motivados por diversos contextos e aplicações, envolvendo objetos geométricos no espaço, suas medidas e relações." }
    ]
  },
  {
    category: "Saber 15: Utilizar ferramentas estatísticas no tratamento da informação",
    skills: [
      { code: "S15.H1", description: "Coletar e sistematizar dados a partir de textos, figuras, gráficos, tabelas e outros meios de representação." },
      { code: "S15.H2", description: "Compreender as noções de variáveis qualitativas e quantitativas em pesquisas para obtenção de dados." },
      { code: "S15.H3", description: "Identificar variáveis de interesse em pesquisas motivadas por diversos contextos e problemas cotidianos, sociais, econômicos ou científicos." },
      { code: "S15.H4", description: "Definir e identificar as técnicas de amostragem adequadas à obtenção de dados em pesquisas em diversos contextos e problemas." },
      { code: "S15.H5", description: "Identificar as ferramentas e suportes adequados para sistematização e apresentação de dados e relatórios de pesquisas amostrais." },
      { code: "S15.H6", description: "Ler e interpretar dados dispostos em tabelas, gráficos, grafos, textos, relatórios e outros meios de representação." },
      { code: "S15.H7", description: "Analisar criticamente, quanto a aspectos técnicos, a apresentação e o tratamento de dados dispostos em tabelas, gráficos, textos, relatórios e outros meios de representação." },
      { code: "S15.H8", description: "Reconhecer expressão algébrica que representa uma função afim a partir de uma tabela." },
      { code: "S15.H9", description: "Reconhecer expressão algébrica que representa uma função (possivelmente não-linear) a partir de uma tabela." },
      { code: "S15.H10", description: "Representar, em diversos suportes gráficos, os dados contidos em um texto, tabela ou outro conjunto de dados." },
      { code: "S15.H11", description: "Organizar, em diversos suportes, dados expressos em suportes gráficos." },
      { code: "S15.H12", description: "Compreender as noções de frequência e frequência relativa em diversos contextos e problemas." },
      { code: "S15.H13", description: "Calcular frequências e frequências relativas em conjuntos de dados, expressos e representados em diversos suportes." },
      { code: "S15.H14", description: "Resolver problema envolvendo informações apresentadas em tabelas e/ou gráficos." },
      { code: "S15.H15", description: "Associar informações apresentadas em listas e/ou tabelas simples aos gráficos que as representam e vice-versa." },
      { code: "S15.H16", description: "Compreender, reconhecer e calcular as medidas de tendência central ou de dispersão." },
      { code: "S15.H17", description: "Calcular medidas de tendência central e de dispersão em conjuntos de dados." },
      { code: "S15.H18", description: "Formular modelos ou resolver problemas envolvendo medidas de tendência central, tais como média, moda ou mediana, entre outras." },
      { code: "S15.H19", description: "Resolver problemas envolvendo medidas de dispersão, tais como amplitude, variância, entre outras." },
      { code: "S15.H20", description: "Formular modelos ou resolver problemas, motivados por diversos contextos e aplicações, envolvendo medidas de tendência central e de dispersão." },
      { code: "S15.H21", description: "Interpretar e representar geometricamente medidas de tendência central ou de dispersão em conjuntos de dados." },
      { code: "S15.H22", description: "Interpretar estatisticamente medidas de tendência central e de dispersão em conjunto de dados." },
      { code: "S15.H23", description: "Reconhecer e descrever retas que melhor se ajustem a conjuntos de dados de pares de variáveis." }
    ]
  },
  {
    category: "Saber 16: Compreender e utilizar métodos probabilísticos no tratamento da informação e da aleatoriedade",
    skills: [
      { code: "S16.H1", description: "Compreender a noção de experimento aleatório, em diversos contextos cotidianos, sociais, econômicos e científicos." },
      { code: "S16.H2", description: "Compreender as noções de espaço amostral e de eventos como resultados de experimentos aleatórios." },
      { code: "S16.H3", description: "Identificar ou descrever o espaço amostral de eventos resultantes de experimentos aleatórios." },
      { code: "S16.H4", description: "Utilizar métodos de contagem em situações problemas para quantificar frequências e outros dados descritivos." },
      { code: "S16.H5", description: "Compreender e aplicar, em diversos contextos, os princípios aditivo e multiplicativo da contagem." },
      { code: "S16.H6", description: "Resolver problemas utilizando os princípios aditivo, multiplicativo e o princípio das \"casas dos pombos\"." },
      { code: "S16.H7", description: "Resolver problema de contagem utilizando o princípio multiplicativo ou noções de permutação simples, arranjo simples e/ou combinação simples." },
      { code: "S16.H8", description: "Reconhecer e utilizar o Binômio de Newton para cálculos elementares em Combinatória." },
      { code: "S16.H9", description: "Compreender noções básicas de grafos e seus invariantes básicos." },
      { code: "S16.H10", description: "Formular modelos e resolver problemas, relativos a vários contextos e aplicações, que envolvam Combinatória e grafos." },
      { code: "S16.H11", description: "Compreender a noção de probabilidade em termos freqüentistas ou geométricos, em diversos contextos que envolvem incerteza ou aleatoriedade." },
      { code: "S16.H12", description: "Calcular ou estimar a probabilidade de um dado evento no espaço amostral, expressa em termos aritméticos ou geométricos." },
      { code: "S16.H13", description: "Compreender a noção de variável aleatória e do espaço amostral associado." },
      { code: "S16.H14", description: "Reconhecer a distribuição de probabilidade de uma variável aleatória." },
      { code: "S16.H15", description: "Compreender e utilizar a noção de amostra de uma dada variável aleatória." },
      { code: "S16.H16", description: "Relacionar a distribuição de probabilidade da variável aleatória a dados estatísticos de uma amostra desta variável." },
      { code: "S16.H17", description: "Calcular a probabilidade de eventos equiprováveis." },
      { code: "S16.H18", description: "Calcular a probabilidade de eventos de acordo com uma distribuição binomial." },
      { code: "S16.H19", description: "Efetuar cálculos de probabilidades, utilizando técnicas da Combinatória." },
      { code: "S16.H20", description: "Compreender a noção de eventos (e variáveis aleatórias) independentes." },
      { code: "S16.H21", description: "Calcular probabilidades envolvendo variáveis aleatórias independentes." },
      { code: "S16.H22", description: "Compreender a noção de probabilidade condicional." },
      { code: "S16.H23", description: "Calcular a probabilidade de um evento." },
      { code: "S16.H24", description: "Calcular probabilidades condicionais e probabilidade total em problemas motivados por diversos contextos e aplicações." },
      { code: "S16.H25", description: "Formular e resolver problemas, motivados por diversos contextos e aplicações, envolvendo o cálculo da probabilidade de um evento." },
      { code: "S16.H26", description: "Reconhecer algumas das distribuições de probabilidades, discretas ou contínuas, mais corriqueiras." },
      { code: "S16.H27", description: "Calcular média e variância associada a uma distribuição de probabilidade, relacionando-as a médias e variâncias amostrais." },
      { code: "S16.H28", description: "Formular modelos e resolver problemas, relativos a vários contextos e aplicações, envolvendo probabilidades." }
    ]
  }
];
