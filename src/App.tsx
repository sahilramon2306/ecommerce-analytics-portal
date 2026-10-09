import { useMemo, useState } from "react";

import { Box, Snackbar } from "@mui/material";

import {
  LocalizationProvider,
} from "@mui/x-date-pickers/LocalizationProvider";

import {
  AdapterDayjs,
} from "@mui/x-date-pickers/AdapterDayjs";

import TopNavBar from "./components/layout/TopNavBar";
import HeroBanner from "./components/layout/HeroBanner";
import ProductFilterBar from "./components/filters/ProductFilterBar";
import RevenueTrendChart from "./components/analytics/RevenueTrendChart";
import CategoryBarChart from "./components/analytics/CategoryBarChart";
import ProductGrid from "./components/catalog/ProductGrid";
import ProductDetailModal from "./components/modals/ProductDetailModal";
import AddProductFAB from "./components/modals/AddProductFAB";

import {
  categorySalesData,
  initialProducts,
  initialStoreStats,
  salesData,
} from "./data/mockData";

import type {
  AddProductData,
  Product,
  ProductFilters,
  StoreStats,
} from "./types/purchase";

import "./styles/global.css";

function App() {
  /*
   * =========================================
   * Product State
   * =========================================
   */
  const [products, setProducts] =
    useState<Product[]>(initialProducts);

  /*
   * =========================================
   * Store Statistics
   * =========================================
   */
  const [storeStats, setStoreStats] =
    useState<StoreStats>(initialStoreStats);

  /*
   * =========================================
   * Cart Count
   * =========================================
   */
  const [cartCount, setCartCount] = useState(0);

  /*
   * =========================================
   * Product Filters
   * =========================================
   */
  const [filters, setFilters] =
    useState<ProductFilters>({
      search: "",
      category: "All",
      date: null,
    });

  /*
   * =========================================
   * Selected Product
   * =========================================
   */
  const [selectedProduct, setSelectedProduct] =
    useState<Product | null>(null);

  /*
   * =========================================
   * Snackbar
   * =========================================
   */
  const [snackbarOpen, setSnackbarOpen] =
    useState(false);

  const [snackbarMessage, setSnackbarMessage] =
    useState("");

  /*
   * =========================================
   * Filter Products
   *
   * Search:
   * - Product title
   * - SKU
   *
   * Category:
   * - All
   * - Specific category
   *
   * Date:
   * - Product created date
   * =========================================
   */
  const filteredProducts = useMemo(() => {
    const searchValue = filters.search
      .trim()
      .toLowerCase();

    return products.filter((product) => {
      const matchesSearch =
        searchValue === "" ||
        product.title
          .toLowerCase()
          .includes(searchValue) ||
        product.sku
          .toLowerCase()
          .includes(searchValue);

      const matchesCategory =
        filters.category === "All" ||
        product.category === filters.category;

      const matchesDate =
        filters.date === null ||
        product.createdAt === filters.date;

      return (
        matchesSearch &&
        matchesCategory &&
        matchesDate
      );
    });
  }, [products, filters]);

  /*
   * =========================================
   * Quick View
   * =========================================
   */
  const handleQuickView = (product: Product) => {
    setSelectedProduct(product);
  };

  /*
   * =========================================
   * Close Product Details
   * =========================================
   */
  const handleCloseDetails = () => {
    setSelectedProduct(null);
  };

  /*
   * =========================================
   * Add Product To Order
   * =========================================
   */
  const handleAddToOrder = (product: Product) => {
    console.log("Added to order:", product);

    setCartCount(
      (currentCount) => currentCount + 1,
    );

    setSelectedProduct(null);

    setSnackbarMessage(
      `${product.title} added to order.`,
    );

    setSnackbarOpen(true);
  };

  /*
   * =========================================
   * Add New Product
   * =========================================
   */
  const handleAddProduct = (
    productData: AddProductData,
  ) => {
    const newProduct: Product = {
      id: `P${String(products.length + 1).padStart(
        3,
        "0",
      )}`,

      title: productData.title.trim(),

      sku: productData.sku.trim(),

      description:
        productData.description.trim(),

      category: productData.category,

      price: productData.price,

      stock: productData.stock,

      rating: productData.rating || 0,

      ratingCount:
        productData.ratingCount || 0,

      image:
        productData.image.trim() ||
        "https://images.unsplash.com/photo-1523275335684-37898b6baf30",

      sales: 0,

      createdAt:
        new Date()
          .toISOString()
          .split("T")[0],
    };

    /*
     * Add new product to catalog
     */
    setProducts((currentProducts) => [
      newProduct,
      ...currentProducts,
    ]);

    /*
     * Update active inventory
     */
    setStoreStats((currentStats) => ({
      ...currentStats,
      activeInventory:
        currentStats.activeInventory + 1,
    }));

    /*
     * Show success message
     */
    setSnackbarMessage(
      `${newProduct.title} added successfully.`,
    );

    setSnackbarOpen(true);
  };

  return (
    <Box className="app-container">

      {/* =================================
          Top Navigation
      ================================= */}
      <TopNavBar
        cartCount={cartCount}
        searchValue={filters.search}
        onSearchChange={(value) =>
          setFilters((currentFilters) => ({
            ...currentFilters,
            search: value,
          }))
        }
      />

      <Box className="page-container">

        {/* =================================
            Hero Statistics
        ================================= */}
        <HeroBanner stats={storeStats} />

        {/* =================================
            Product Filters
        ================================= */}
        <LocalizationProvider
          dateAdapter={AdapterDayjs}
        >
          <ProductFilterBar
            filters={filters}
            onFiltersChange={setFilters}
          />
        </LocalizationProvider>

        {/* =================================
            Analytics
        ================================= */}
        <Box className="analytics-section">
          <Box className="analytics-grid">

            <RevenueTrendChart
              data={salesData}
            />

            <CategoryBarChart
              data={categorySalesData}
            />

          </Box>
        </Box>

        {/* =================================
            Product Catalog
        ================================= */}
        <ProductGrid
          products={filteredProducts}
          onQuickView={handleQuickView}
        />

      </Box>

      {/* =================================
          Product Detail Modal
      ================================= */}
      <ProductDetailModal
        open={selectedProduct !== null}
        product={selectedProduct}
        onClose={handleCloseDetails}
        onAddToOrder={handleAddToOrder}
      />

      {/* =================================
          Add Product FAB
      ================================= */}
      <AddProductFAB
        onAddProduct={handleAddProduct}
      />

      {/* =================================
          Snackbar
      ================================= */}
      <Snackbar
        open={snackbarOpen}
        autoHideDuration={2500}
        onClose={() => setSnackbarOpen(false)}
        message={snackbarMessage}
      />

    </Box>
  );
}

export default App;