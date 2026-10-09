export type ProductCategory =
  | "Electronics"
  | "Fashion"
  | "Home"
  | "Beauty"
  | "Sports";

export interface Product {
  id: string;
  title: string;
  sku: string;
  description: string;
  category: ProductCategory;
  price: number;
  stock: number;
  rating: number;
  ratingCount: number;
  image: string;
  sales: number;
  createdAt: string;
}

export interface SalesData {
  date: string;
  revenue: number;
  salesVolume: number;
}

export interface CategorySalesData {
  category: ProductCategory;
  units: number;
}

export interface StoreStats {
  todayRevenue: number;
  totalOrders: number;
  activeInventory: number;
}

export interface ProductFilters {
  search: string;
  category: ProductCategory | "All";
  date: string | null;
}

export interface AddProductData {
  title: string;
  sku: string;
  description: string;
  category: ProductCategory;
  price: number;
  stock: number;
  rating: number;
  ratingCount: number;
  image: string;
}