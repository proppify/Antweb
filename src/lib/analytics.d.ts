export {};

declare global {
  interface Window {
    analytics?: {
      track?: (event: string, props?: Record<string, unknown>) => void;
      identify?: (id: string, traits?: Record<string, unknown>) => void;
      page?: (name?: string, props?: Record<string, unknown>) => void;
    };
  }
}
