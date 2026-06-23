import { Injectable } from '@angular/core';
import {
  JarvisInteraction,
  JarvisModule,
  JarvisModuleInfo,
  JarvisProductLink,
} from '../models/jarvis.model';

@Injectable({
  providedIn: 'root',
})
export class JarvisMockService {
  getInteraction(question: string): JarvisInteraction {
    const normalized = this.normalize(question);

    if (this.containsAny(normalized, ['trevvos modo admin', 'modo admin', 'admin'])) {
      return {
        type: 'admin',
        mode: 'admin',
        activeModule: 'admin',
        ack: 'Acesso administrativo solicitado.',
        title: 'Acesso restrito',
        content: 'Autenticação necessária para acessar o núcleo administrativo da Trevvos.',
      };
    }

    if (
      this.containsAny(normalized, [
        'forge',
        'trevvos forge',
        'dev library',
        'biblioteca',
        'llm local',
        'codigo',
        'código',
      ])
    ) {
      return {
        type: 'module',
        mode: 'deterministic',
        activeModule: 'forge',
        ack: 'Abrindo módulo Trevvos Forge.',
        title: 'Trevvos Forge',
        content:
          'O Trevvos Forge é uma ferramenta local-first de IA para engenharia de software. A proposta é apoiar devs com análise de código, planejamento, geração de testes, diffs, documentação e sessões controladas com modelos locais ou APIs externas.',
      };
    }

    if (this.containsAny(normalized, ['km one', 'motorista', 'corrida', 'uber', '99'])) {
      return {
        type: 'module',
        mode: 'deterministic',
        activeModule: 'kmOne',
        ack: 'Carregando módulo KM One.',
        title: 'KM One',
        content:
          'O KM One é um produto da Trevvos para inteligência operacional de motoristas. Ele ajuda a interpretar corridas, metas, lucro, combustível e decisões do dia a dia com mais clareza.',
      };
    }

    if (
      this.containsAny(normalized, [
        'automatizar',
        'automação',
        'automacao',
        'processo',
        'fluxo',
        'fluxos',
      ])
    ) {
      return {
        type: 'module',
        mode: 'deterministic',
        activeModule: 'automation',
        ack: 'Mapeando possibilidades de automação.',
        title: 'Automação com IA',
        content:
          'A Trevvos pode projetar automações com IA para reduzir tarefas repetitivas, conectar sistemas, gerar respostas, analisar dados e apoiar decisões. O ideal é começar mapeando o fluxo atual e identificando onde a IA realmente economiza tempo.',
      };
    }

    if (
      this.containsAny(normalized, [
        'sistema',
        'sob medida',
        'personalizado',
        'negócio',
        'negocio',
        'empresa',
      ])
    ) {
      return {
        type: 'module',
        mode: 'conversation',
        activeModule: 'systems',
        ack: 'Analisando necessidade de sistema sob medida.',
        title: 'Sistemas sob medida',
        content:
          'A Trevvos desenvolve sistemas personalizados com IA quando uma solução pronta não resolve bem o problema. O caminho ideal é entender o gargalo, desenhar o fluxo, definir arquitetura e só então implementar o produto.',
      };
    }

    if (
      this.containsAny(normalized, [
        'apps',
        'aplicativos',
        'produtos',
        'soluções prontas',
        'solucoes prontas',
      ])
    ) {
      return {
        type: 'module',
        mode: 'deterministic',
        activeModule: 'apps',
        ack: 'Listando produtos Trevvos.',
        title: 'Apps e produtos Trevvos',
        content:
          'A Trevvos está construindo produtos próprios como Trevvos Forge, KM One e o próprio Neural Portal. Cada produto nasce de um problema real e serve também como prova técnica da capacidade da empresa em IA aplicada.',
      };
    }

    if (this.containsAny(normalized, ['blog', 'artigo', 'conteudo', 'conteúdo', 'seo'])) {
      return {
        type: 'module',
        mode: 'deterministic',
        activeModule: 'blog',
        ack: 'Abrindo módulo Blog Neural.',
        title: 'Blog Neural',
        content:
          'O Blog Neural será a área pública de conteúdo da Trevvos, com artigos sobre IA aplicada, engenharia de software, automação, produtos próprios e aprendizados técnicos reais. O foco é SEO, autoridade e demonstração prática.',
      };
    }

    if (
      this.containsAny(normalized, [
        'preço',
        'preco',
        'plano',
        'planos',
        'valor',
        'custo',
        'orçamento',
        'orcamento',
      ])
    ) {
      return {
        type: 'message',
        mode: 'conversation',
        activeModule: 'contact',
        ack: 'Preparando orientação comercial.',
        title: 'Projeto e diagnóstico',
        content:
          'A Trevvos ainda trata projetos de forma consultiva. O melhor caminho é entender o problema, estimar escopo e sugerir uma solução adequada. Posso te ajudar a organizar um diagnóstico inicial com perguntas objetivas.',
      };
    }

    if (
      this.containsAny(normalized, [
        'contato',
        'falar',
        'reunião',
        'reuniao',
        'diagnóstico',
        'diagnostico',
      ])
    ) {
      return {
        type: 'module',
        mode: 'conversation',
        activeModule: 'contact',
        ack: 'Preparando contato.',
        title: 'Contato com a Trevvos',
        content:
          'Você pode começar descrevendo seu desafio. O agente organiza o contexto, identifica se o caminho é automação, sistema sob medida, produto existente ou consultoria técnica.',
      };
    }

    if (
      this.containsAny(normalized, [
        'ia aplicada',
        'inteligencia artificial',
        'inteligência artificial',
        'agente',
        'agentes',
      ])
    ) {
      return {
        type: 'message',
        mode: 'conversation',
        activeModule: 'agent',
        ack: 'Analisando IA aplicada.',
        title: 'IA aplicada',
        content:
          'IA aplicada é quando modelos, agentes e automações deixam de ser demonstração e entram em fluxos reais: atendimento, análise, geração de conteúdo, engenharia de software, operação e integração entre sistemas.',
      };
    }

    if (
      this.containsAny(normalized, [
        'trevvos',
        'quem são vocês',
        'quem sao voces',
        'o que vocês fazem',
        'o que voces fazem',
        'sobre',
      ])
    ) {
      return {
        type: 'module',
        mode: 'conversation',
        activeModule: 'agent',
        ack: 'Apresentando a Trevvos.',
        title: 'Trevvos Soluções em IA',
        content:
          'A Trevvos cria soluções em inteligência artificial, automação e engenharia de software. O objetivo é transformar problemas reais em produtos digitais inteligentes, úteis e bem construídos.',
      };
    }

    if (this.containsAny(normalized, ['bom dia', 'boa tarde', 'boa noite', 'ola', 'olá', 'oi'])) {
      return {
        type: 'message',
        mode: 'conversation',
        activeModule: 'agent',
        ack: 'Interface neural ativa.',
        title: 'Trevvos Core online',
        content:
          'Olá. Sou o agente da Trevvos. Posso apresentar soluções, explicar produtos, falar sobre IA aplicada ou ajudar você a pensar em um sistema com inteligência artificial.',
      };
    }

    return {
      type: 'message',
      mode: 'conversation',
      activeModule: 'agent',
      ack: 'Interpretando solicitação.',
      title: 'Núcleo Trevvos',
      content:
        'Entendido. Para seguir melhor, me diga se você procura uma automação, um sistema sob medida, um produto pronto, conteúdo técnico ou uma solução de IA para sua empresa.',
    };
  }

  getModuleInfo(module: JarvisModule): JarvisModuleInfo {
    const modules: Record<JarvisModule, JarvisModuleInfo> = {
      agent: {
        module: 'agent',
        label: 'Agente Trevvos',
        title: 'Agente Trevvos',
        description:
          'Olá! Sou o agente da Trevvos. Aqui você já está usando nossa IA — pergunte o que precisa, escolha uma sugestão ou me diga seu desafio. A Trevvos cria apps, sistemas e soluções com IA aplicada.',
        suggestions: [
          {
            icon: '↔',
            title: 'Automatizar processos',
            subtitle: 'Fluxos com IA',
            prompt: 'Quero automatizar processos da minha empresa com IA',
          },
          {
            icon: '▦',
            title: 'Ver nossos produtos',
            subtitle: 'Soluções em construção',
            prompt: 'Quero conhecer os produtos da Trevvos',
          },
          {
            icon: '⌘',
            title: 'Trevvos Forge',
            subtitle: 'IA para devs',
            prompt: 'Explique o Trevvos Forge',
          },
          {
            icon: '▣',
            title: 'Sistema sob medida',
            subtitle: 'Projeto customizado',
            prompt: 'Quero um sistema personalizado com IA para meu negócio',
          },
        ],
      },
      apps: {
        module: 'apps',
        label: 'Nossos apps',
        title: 'Apps e produtos Trevvos',
        description:
          'A Trevvos constrói produtos próprios para resolver problemas reais e demonstrar IA aplicada em operação.',
        suggestions: [
          {
            icon: '⌘',
            title: 'Trevvos Forge',
            subtitle: 'IA para engenharia',
            prompt: 'Explique o Trevvos Forge',
          },
          {
            icon: '▣',
            title: 'KM One',
            subtitle: 'Inteligência para motoristas',
            prompt: 'O que é o KM One?',
          },
          {
            icon: '✦',
            title: 'Blog Neural',
            subtitle: 'Conteúdo e SEO',
            prompt: 'O que tem no Blog Neural?',
          },
        ],
      },
      systems: {
        module: 'systems',
        label: 'Sistemas',
        title: 'Sistemas sob medida com IA',
        description:
          'Quando uma solução pronta não resolve, a Trevvos projeta sistemas customizados com IA, automação, backend, frontend, integrações e arquitetura.',
        suggestions: [
          {
            icon: '◈',
            title: 'Diagnóstico inicial',
            subtitle: 'Entender o gargalo',
            prompt: 'Quero diagnosticar um problema do meu negócio',
          },
          {
            icon: '↔',
            title: 'Automação',
            subtitle: 'Reduzir tarefas manuais',
            prompt: 'Quero automatizar processos da minha empresa',
          },
          {
            icon: '▣',
            title: 'Sistema customizado',
            subtitle: 'Projeto sob medida',
            prompt: 'Quero um sistema personalizado com IA',
          },
        ],
      },
      forge: {
        module: 'forge',
        label: 'Dev Library',
        title: 'Trevvos Forge',
        description:
          'Ferramenta local-first de IA para apoiar desenvolvedores em análise, planejamento, testes, diffs, documentação e sessões de engenharia.',
        suggestions: [
          {
            icon: '⌘',
            title: 'Como funciona?',
            subtitle: 'Visão técnica',
            prompt: 'Como o Trevvos Forge funciona?',
          },
          {
            icon: '◉',
            title: 'LLM local',
            subtitle: 'Ollama e privacidade',
            prompt: 'Por que o Forge é local-first?',
          },
          {
            icon: '↺',
            title: 'Roadmap',
            subtitle: 'Próximos passos',
            prompt: 'Qual o roadmap do Trevvos Forge?',
          },
        ],
      },
      kmOne: {
        module: 'kmOne',
        label: 'KM One',
        title: 'KM One',
        description:
          'Produto para motoristas analisarem corridas, metas, combustível, lucro e tomada de decisão operacional.',
        suggestions: [
          {
            icon: '▣',
            title: 'Como ajuda?',
            subtitle: 'Uso no dia a dia',
            prompt: 'Como o KM One ajuda motoristas?',
          },
          {
            icon: '◈',
            title: 'Metas e lucro',
            subtitle: 'Decisão operacional',
            prompt: 'Como o KM One analisa metas e lucro?',
          },
        ],
      },
      automation: {
        module: 'automation',
        label: 'Automações',
        title: 'Automações com IA',
        description:
          'Fluxos inteligentes para reduzir tarefas repetitivas, organizar dados, gerar respostas, integrar sistemas e apoiar decisões.',
        suggestions: [
          {
            icon: '↔',
            title: 'Mapear fluxo',
            subtitle: 'Começar simples',
            prompt: 'Como mapear um fluxo para automação com IA?',
          },
          {
            icon: '◈',
            title: 'Diagnóstico',
            subtitle: 'Onde aplicar IA',
            prompt: 'Onde posso aplicar IA na minha empresa?',
          },
        ],
      },
      blog: {
        module: 'blog',
        label: 'Blog Neural',
        title: 'Blog Neural',
        description:
          'Área de conteúdo técnico da Trevvos sobre IA aplicada, engenharia de software, automação, produtos e aprendizados reais.',
        suggestions: [
          {
            icon: '✦',
            title: 'Ideias de artigos',
            subtitle: 'SEO e autoridade',
            prompt: 'Quais artigos a Trevvos poderia publicar?',
          },
          {
            icon: '◉',
            title: 'IA local',
            subtitle: 'Tema técnico',
            prompt: 'Crie uma ideia de artigo sobre IA local',
          },
        ],
      },
      contact: {
        module: 'contact',
        label: 'Contato',
        title: 'Contato e diagnóstico',
        description:
          'Descreva seu desafio. O agente organiza o contexto e sugere o melhor caminho: automação, sistema sob medida, produto Trevvos ou consultoria.',
        suggestions: [
          {
            icon: '◈',
            title: 'Diagnóstico',
            subtitle: 'Começar conversa',
            prompt: 'Quero fazer um diagnóstico do meu projeto',
          },
        ],
      },
      admin: {
        module: 'admin',
        label: 'Admin',
        title: 'Admin Core',
        description:
          'Área restrita para geração de artigos, imagens, gestão do blog e histórico de interações.',
        suggestions: [
          {
            icon: '⚿',
            title: 'Abrir admin',
            subtitle: 'Acesso restrito',
            prompt: 'Trevvos modo admin',
          },
        ],
      },
    };

    return modules[module];
  }

  getProductLinks(): JarvisProductLink[] {
    return [
      {
        icon: '⌘',
        title: 'Trevvos Forge',
        prompt: 'Me conta mais sobre o Trevvos Forge',
      },
      {
        icon: '▣',
        title: 'KM One',
        prompt: 'Como funciona o KM One?',
      },
      {
        icon: '↔',
        title: 'Automações',
        prompt: 'Quais automações a Trevvos oferece?',
      },
      {
        icon: '✦',
        title: 'Blog Neural',
        prompt: 'O que tem no Blog Neural?',
      },
    ];
  }

  private normalize(value: string): string {
    return value
      .toLowerCase()
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '')
      .trim();
  }

  private containsAny(value: string, terms: string[]): boolean {
    return terms.some((term) => value.includes(this.normalize(term)));
  }
}
