export type JarvisState = 'idle' | 'acknowledging' | 'processing' | 'admin-auth' | 'done' | 'error';

export type JarvisMessageRole = 'user' | 'jarvis';

export type JarvisMode = 'conversation' | 'deterministic' | 'admin';

export type JarvisModule =
  | 'agent'
  | 'apps'
  | 'systems'
  | 'forge'
  | 'kmOne'
  | 'automation'
  | 'blog'
  | 'contact'
  | 'admin';

export type JarvisInteractionType = 'message' | 'module' | 'admin';

export interface JarvisMessage {
  id: string;
  role: JarvisMessageRole;
  mode: JarvisMode;
  title?: string;
  content: string;
  createdAt: Date;
}

export interface JarvisSuggestion {
  title: string;
  subtitle: string;
  prompt: string;
  icon: string;
}

export interface JarvisProductLink {
  title: string;
  prompt: string;
  icon: string;
}

export interface JarvisModuleInfo {
  module: JarvisModule;
  label: string;
  title: string;
  description: string;
  suggestions: JarvisSuggestion[];
}

export interface JarvisInteraction {
  type: JarvisInteractionType;
  mode: JarvisMode;
  activeModule: JarvisModule;
  ack: string;
  title: string;
  content: string;
}
