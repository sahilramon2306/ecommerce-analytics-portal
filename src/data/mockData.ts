import type {
  CategorySalesData,
  Product,
  SalesData,
  StoreStats,
} from "../types/purchase";

export const initialProducts: Product[] = [
  {
    id: "P001",
    title: "Wireless Noise Cancelling Headphones",
    sku: "SKU-WNC-001",
    description:
      "Premium wireless headphones with active noise cancellation and long battery life.",
    category: "Electronics",
    price: 12999,
    stock: 24,
    rating: 4.7,
    ratingCount: 328,
    image:
      "https://images.unsplash.com/photo-1505740420928-5e560c06d30e",
    sales: 142,
    createdAt: "2026-09-20",
  },
  {
    id: "P002",
    title: "Smart Watch Pro",
    sku: "SKU-SWP-002",
    description:
      "Advanced smartwatch with fitness tracking, heart-rate monitoring and notifications.",
    category: "Electronics",
    price: 8999,
    stock: 18,
    rating: 4.5,
    ratingCount: 241,
    image:
      "https://images.unsplash.com/photo-1523275335684-37898b6baf30",
    sales: 118,
    createdAt: "2026-09-19",
  },
  {
    id: "P003",
    title: "Classic Cotton Shirt",
    sku: "SKU-CCS-003",
    description:
      "Comfortable classic-fit cotton shirt suitable for casual and formal occasions.",
    category: "Fashion",
    price: 1499,
    stock: 42,
    rating: 4.3,
    ratingCount: 156,
    image:
      "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf",
    sales: 96,
    createdAt: "2026-09-18",
  },
  {
    id: "P004",
    title: "Running Shoes",
    sku: "SKU-RS-004",
    description:
      "Lightweight running shoes designed for everyday training and comfortable movement.",
    category: "Sports",
    price: 3499,
    stock: 31,
    rating: 4.6,
    ratingCount: 194,
    image:
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff",
    sales: 87,
    createdAt: "2026-09-17",
  },
  {
    id: "P005",
    title: "Minimal Table Lamp",
    sku: "SKU-MTL-005",
    description:
      "Modern minimal table lamp that adds warm ambient lighting to your workspace.",
    category: "Home",
    price: 2199,
    stock: 16,
    rating: 4.4,
    ratingCount: 87,
    image:
      "https://images.unsplash.com/photo-1507473885765-e6ed057f782c",
    sales: 72,
    createdAt: "2026-09-16",
  },
  {
    id: "P006",
    title: "Hydrating Face Serum",
    sku: "SKU-HFS-006",
    description:
      "Lightweight hydrating face serum designed for daily skincare routines.",
    category: "Beauty",
    price: 999,
    stock: 28,
    rating: 4.5,
    ratingCount: 212,
    image:
      "https://images.unsplash.com/photo-1620916566398-39f1143ab7be",
    sales: 105,
    createdAt: "2026-09-15",
  },
  {
    id: "P007",
    title: "Bluetooth Portable Speaker",
    sku: "SKU-BPS-007",
    description:
      "Compact portable Bluetooth speaker with clear sound and powerful battery backup.",
    category: "Electronics",
    price: 2499,
    stock: 35,
    rating: 4.2,
    ratingCount: 139,
    image:
      "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1",
    sales: 81,
    createdAt: "2026-09-14",
  },
  {
    id: "P008",
    title: "Leather Backpack",
    sku: "SKU-LB-008",
    description:
      "Premium leather backpack with multiple compartments for work and travel.",
    category: "Fashion",
    price: 4299,
    stock: 12,
    rating: 4.6,
    ratingCount: 118,
    image:
      "https://images.unsplash.com/photo-1553062407-98eeb64c6a62",
    sales: 64,
    createdAt: "2026-09-13",
  },
];

export const salesData: SalesData[] = [
  {
    date: "Mon",
    revenue: 28400,
    salesVolume: 34,
  },
  {
    date: "Tue",
    revenue: 32100,
    salesVolume: 41,
  },
  {
    date: "Wed",
    revenue: 29700,
    salesVolume: 38,
  },
  {
    date: "Thu",
    revenue: 36500,
    salesVolume: 47,
  },
  {
    date: "Fri",
    revenue: 41200,
    salesVolume: 53,
  },
  {
    date: "Sat",
    revenue: 45800,
    salesVolume: 61,
  },
  {
    date: "Sun",
    revenue: 39200,
    salesVolume: 49,
  },
];

export const categorySalesData: CategorySalesData[] = [
  {
    category: "Electronics",
    units: 341,
  },
  {
    category: "Fashion",
    units: 160,
  },
  {
    category: "Home",
    units: 95,
  },
  {
    category: "Beauty",
    units: 105,
  },
  {
    category: "Sports",
    units: 87,
  },
];

export const initialStoreStats: StoreStats = {
  todayRevenue: 39200,
  totalOrders: 487,
  activeInventory: 156,
};