// Textos da página. Para adicionar um idioma, crie um novo bloco com as mesmas chaves
// e um botão [data-lang] correspondente no .lang-switch do index.html.
const TRANSLATIONS = {
  pt: {
    'meta.htmlLang': 'pt-BR',
    'meta.title': 'Gabriel Godoy — Senior Fullstack Engineer',
    'meta.description': 'Gabriel Godoy é Senior Fullstack Engineer na Faculdade Futurus, em Bauru-SP, a caminho de Tech Lead. Conheça a trajetória, a stack e os projetos.',
    'skip': 'Pular para o conteúdo',
    'nav.about': 'Sobre',
    'nav.career': 'Trajetória',
    'nav.stack': 'Stack',
    'nav.projects': 'Projetos',
    'nav.contact': 'Contato',
    'hero.eyebrow': 'Senior Fullstack Engineer @ Faculdade Futurus · Bauru-SP, Brasil',
    'hero.title': 'Gabriel Godoy<br /><em>desmonta, entende</em><br />e monta de novo.',
    'hero.lead': 'Engenheiro Fullstack Sênior na Faculdade Futurus. Construo produtos de ponta a ponta, da interface à API — e estou no caminho para Tech Lead.',
    'stats.1.value': 'Sênior',
    'stats.1.label': 'Fullstack Engineer na Faculdade Futurus',
    'stats.2.value': 'Front → Back',
    'stats.2.label': 'da interface à API',
    'stats.3.value': 'Tech Lead',
    'stats.3.label': 'o próximo passo',
    'about.title': 'Sobre',
    'about.quote': '“A diferença entre o eu de hoje e o eu de criança é que agora eu consigo remontar as peças do que desmontei. A curiosidade continua correndo nas minhas veias.”',
    'about.p1': 'Sou o Gabriel — Gabe, para os íntimos. Engenheiro Fullstack Sênior com o coração no Front-End: gosto do detalhe que ninguém pede mas todo mundo sente, da arquitetura que aguenta crescer e do código que outra pessoa consegue ler.',
    'about.p2': 'Hoje atuo na Faculdade Futurus, cuidando de produto de ponta a ponta. Meu próximo objetivo é liderar tecnicamente um time: decidir bem, destravar pessoas e entregar software que dura.',
    'about.life.1': 'Programar',
    'about.life.2': 'Ler',
    'about.life.3': 'Jogar',
    'career.title': 'Trajetória',
    'career.next.when': 'Próximo passo',
    'career.next.text': 'O objetivo agora: liderança técnica, com a mão no código e o olho no time.',
    'career.now.when': 'Mar 2026 — atual',
    'stack.front': 'Onde eu passo a maior parte do tempo.',
    'stack.back': 'Para fechar o ciclo de ponta a ponta.',
    'stack.rest': 'APIs REST',
    'stack.daily.title': 'Dia a dia',
    'stack.daily': 'O que mantém tudo andando.',
    'stack.responsive': 'Design responsivo',
    'projects.title': 'Projetos pessoais',
    'projects.lead': 'O que eu construo fora do trabalho, por curiosidade.',
    'projects.code': 'Ver código ↗',
    'projects.loan': 'Calculadora de empréstimos Fullstack: front em JavaScript conversando com um back-end em Java.',
    'projects.kanban': 'Quadro kanban construído em Vue para organizar tarefas em colunas.',
    'projects.msn': 'Uma homenagem nostálgica ao mensageiro que marcou uma geração, recriado no navegador.',
    'projects.wordle.title': 'Wordle da vó',
    'projects.wordle': 'Uma versão do Wordle feita para minha avó — que não usa Twitter — poder jogar também.',
    'projects.typing': 'Jogo de digitação para desktop, feito com JavaScript puro.',
    'projects.more.title': 'E muito mais',
    'projects.more': '50 repositórios públicos desde 2022: jogos, landing pages e experimentos.',
    'projects.more.go': 'Ver todos ↗',
    'contact.eyebrow': 'Contato',
    'contact.title': 'Vamos construir<br /><em>algo juntos?</em>',
    'contact.text': 'Aberto a conversas sobre liderança técnica e bons produtos. Respondo mais rápido pelo LinkedIn.',
    'footer': 'Feito com curiosidade em Bauru-SP',
  },
  en: {
    'meta.htmlLang': 'en',
    'meta.title': 'Gabriel Godoy — Senior Fullstack Engineer',
    'meta.description': 'Gabriel Godoy is a Senior Fullstack Engineer at Faculdade Futurus, based in Bauru, Brazil, on the path to Tech Lead. Career, stack and projects.',
    'skip': 'Skip to content',
    'nav.about': 'About',
    'nav.career': 'Career',
    'nav.stack': 'Stack',
    'nav.projects': 'Projects',
    'nav.contact': 'Contact',
    'hero.eyebrow': 'Senior Fullstack Engineer @ Faculdade Futurus · Bauru, Brazil',
    'hero.title': 'Gabriel Godoy<br /><em>takes it apart,</em><br />builds it back better.',
    'hero.lead': 'Senior Fullstack Engineer at Faculdade Futurus. I build products end to end, from the interface to the API — and I am on the path to Tech Lead.',
    'stats.1.value': 'Senior',
    'stats.1.label': 'Fullstack Engineer at Faculdade Futurus',
    'stats.2.value': 'Front → Back',
    'stats.2.label': 'from the interface to the API',
    'stats.3.value': 'Tech Lead',
    'stats.3.label': 'the next step',
    'about.title': 'About',
    'about.quote': '“The difference between today’s me and young me is that now I can put back together the pieces of what I’ve pulled apart. Curiosity still runs in my veins.”',
    'about.p1': 'I’m Gabriel — Gabe to friends. A Senior Fullstack Engineer with my heart in the Front-End: I care about the detail nobody asks for but everyone feels, architecture that can grow, and code other people can read.',
    'about.p2': 'Today I work at Faculdade Futurus, owning product end to end. My next goal is to lead a team technically: make sound decisions, unblock people and ship software that lasts.',
    'about.life.1': 'Coding',
    'about.life.2': 'Reading',
    'about.life.3': 'Gaming',
    'career.title': 'Career',
    'career.next.when': 'Next step',
    'career.next.text': 'The goal now: technical leadership, hands on the code and eyes on the team.',
    'career.now.when': 'Mar 2026 — present',
    'stack.front': 'Where I spend most of my time.',
    'stack.back': 'To close the loop end to end.',
    'stack.rest': 'REST APIs',
    'stack.daily.title': 'Day to day',
    'stack.daily': 'What keeps everything moving.',
    'stack.responsive': 'Responsive design',
    'projects.title': 'Side projects',
    'projects.lead': 'What I build outside of work, out of curiosity.',
    'projects.code': 'View code ↗',
    'projects.loan': 'A fullstack loan calculator: a JavaScript front end talking to a Java back end.',
    'projects.kanban': 'A kanban board built with Vue to organize tasks into columns.',
    'projects.msn': 'A nostalgic tribute to the messenger that defined a generation, rebuilt in the browser.',
    'projects.wordle.title': 'Grandma’s Wordle',
    'projects.wordle': 'A Wordle clone I built so my grandma — who isn’t on Twitter — could play too.',
    'projects.typing': 'A desktop typing game made with vanilla JavaScript.',
    'projects.more.title': 'And much more',
    'projects.more': '50 public repositories since 2022: games, landing pages and experiments.',
    'projects.more.go': 'View all ↗',
    'contact.eyebrow': 'Contact',
    'contact.title': 'Shall we build<br /><em>something together?</em>',
    'contact.text': 'Open to conversations about technical leadership and great products. LinkedIn is the fastest way to reach me.',
    'footer': 'Made with curiosity in Bauru, Brazil',
  },
};

const LANG_KEY = 'lang';

function detectLang() {
  const fromUrl = new URLSearchParams(location.search).get('lang');
  if (fromUrl && TRANSLATIONS[fromUrl]) return fromUrl;
  try {
    const saved = localStorage.getItem(LANG_KEY);
    if (saved && TRANSLATIONS[saved]) return saved;
  } catch (e) {}
  const browser = (navigator.language || 'pt').toLowerCase();
  return browser.startsWith('pt') ? 'pt' : 'en';
}

function applyLang(lang) {
  const dict = TRANSLATIONS[lang];
  document.documentElement.lang = dict['meta.htmlLang'];
  document.title = dict['meta.title'];
  document.querySelector('meta[name="description"]').setAttribute('content', dict['meta.description']);
  document.querySelectorAll('[data-i18n]').forEach((el) => {
    const text = dict[el.dataset.i18n];
    if (text !== undefined) el.innerHTML = text;
  });
  document.querySelectorAll('[data-lang]').forEach((btn) => {
    btn.setAttribute('aria-pressed', String(btn.dataset.lang === lang));
  });
}

document.querySelectorAll('[data-lang]').forEach((btn) => {
  btn.addEventListener('click', () => {
    const lang = btn.dataset.lang;
    applyLang(lang);
    try { localStorage.setItem(LANG_KEY, lang); } catch (e) {}
    const url = new URL(location.href);
    url.searchParams.set('lang', lang);
    history.replaceState(null, '', url);
  });
});

applyLang(detectLang());
