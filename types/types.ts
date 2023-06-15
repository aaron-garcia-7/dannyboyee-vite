export interface NavState {
    nav: boolean;
    about: boolean;
    portfolio: boolean;
    references: boolean;
    contact: boolean;
}

export interface InlineNavButtonStyles {
    opacity: number;
    fontWeight: number;
}

export type TransitionTimeout = number | {
    appear?: number;
    enter?: number;
    exit?: number;
  };