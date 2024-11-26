export declare global {
  interface Document {
    startViewTransition: (transitions: () => void) => void;
  }
}
