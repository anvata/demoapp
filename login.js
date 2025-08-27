import { useState, useCallback, useEffect } from "react";

export type LoadingState = "idle" | "loading" | "loaded" | "failed";

export interface DataSource<T> {
  data: T | null;
  loadingState: LoadingState;
  error: string | null;
}

export function useDataSource<T, P = void>(
  fetchFn: (params?: P) => Promise<T>,
  options?: { auto?: boolean; autoParams?: P } // auto fetch with optional params
) {
  const [state, setState] = useState<DataSource<T>>({
    data: null,
    loadingState: options?.auto ? "loading" : "idle",
    error: null,
  });

  const fetchData = useCallback(
    async (params?: P) => {
      setState({ data: null, loadingState: "loading", error: null });
      try {
        const result = await fetchFn(params);
        setState({ data: result, loadingState: "loaded", error: null });
      } catch (err: any) {
        setState({
          data: null,
          loadingState: "failed",
          error: err.message ?? "Something went wrong",
        });
      }
    },
    [fetchFn]
  );

  useEffect(() => {
    if (options?.auto) {
      fetchData(options.autoParams);
    }
  }, [options?.auto, options?.autoParams, fetchData]);

  return { ...state, fetchData };
}
