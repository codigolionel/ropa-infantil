import { useState, useEffect } from "react";

/**
 * Generic hook to fetch JSON data from public/data/ at runtime.
 * Returns { data, loading, error } for any JSON endpoint.
 *
 * Usage:
 *   const { data: productos, loading } = useDataFetch<Producto[]>("/data/productos.json");
 */
export function useDataFetch<T>(url: string) {
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let cancelled = false;

    const fetchData = async () => {
      try {
        setLoading(true);
        // Evitar caché del navegador durante el desarrollo añadiendo un timestamp
        const cacheBuster = `?t=${new Date().getTime()}`;
        const response = await fetch(`${url}${cacheBuster}`);
        if (!response.ok) throw new Error(`Error ${response.status}: ${response.statusText}`);
        const json: T = await response.json();
        if (!cancelled) {
          setData(json);
          setError(null);
        }
      } catch (err) {
        if (!cancelled) {
          setError(err instanceof Error ? err.message : "Error desconocido");
        }
      } finally {
        if (!cancelled) setLoading(false);
      }
    };

    fetchData();
    return () => { cancelled = true; };
  }, [url]);

  return { data, loading, error };
}
