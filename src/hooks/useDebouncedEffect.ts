import { useEffect } from "react";

export const useDebouncedEffect = (effect: (...args: any) => void, deps: unknown[], delay = 200) => {
  useEffect(() => {
    if (typeof window === undefined) return;
    const handler = setTimeout(() => effect(), delay);

    return () => clearTimeout(handler);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [...(deps || []), delay]);
};
