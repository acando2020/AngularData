export interface Bookmeta {
  currentPage?: number;
  itemCount?: number;
  itemsPerPage?: number;
  totalItems?: number;
  totalPages?: number;
}

export interface Bookregister {
  name?: string | null;
  position?: number | null;
  description?: string | null;
  autor?: string | null;
  date?: Date | null;
  number?: number | null;
  price?: number | null;
}
export interface Bookedit {
  id?: number | null;
  name?: string | null;
  description?: string | null;
  autor?: string | null;
  date?: Date | null;
  number?: number | null;
  price?: number | null;
}

export interface Bookedit {
  id?: number | null;
  name?: string | null;
  description?: string | null;
  autor?: string | null;
  date?: Date | null;
  number?: number | null;
  price?: number | null;
}
