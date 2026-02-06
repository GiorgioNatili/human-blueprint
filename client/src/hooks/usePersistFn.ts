import { useRef, useLayoutEffect } from "react";

type AnyFunction = (...args: any[]) => any;

/**
 * usePersistFn returns a stable function reference that always calls the latest version of `fn`.
 * Unlike useCallback, it requires no dependency array and never causes re-renders.
 */
export function usePersistFn<T extends AnyFunction>(fn: T): T {
  const fnRef = useRef<T>(fn);

  useLayoutEffect(() => {
    fnRef.current = fn;
  });

  const persistFn = useRef<T>(null);
  if (!persistFn.current) {
    persistFn.current = function (this: unknown, ...args: unknown[]) {
      return fnRef.current.apply(this, args);
    } as T;
  }

  return persistFn.current;
}
