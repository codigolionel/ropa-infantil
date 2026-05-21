/**
 * Producto data model.
 * Mirrors the shape of each entry in public/data/productos.json.
 */
export interface Producto {
  id: number;
  nombre: string;
  precio: number;
  imagen: string;
  categoria: string;
  destacado: boolean;
}

/**
 * Categoria data model.
 * Mirrors the shape of each entry in public/data/categorias.json.
 */
export interface Categoria {
  id: number;
  nombre: string;
  imagen: string;
  slug: string;
}
