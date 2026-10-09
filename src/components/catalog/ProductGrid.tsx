import {
  Box,
  Grid,
  Typography,
} from "@mui/material";

import type { Product } from "../../types/purchase";

import ProductCard from "./ProductCard";

import "../../styles/ProductGrid.css";

interface ProductGridProps {
  products: Product[];
  onQuickView: (product: Product) => void;
}

function ProductGrid({
  products,
  onQuickView,
}: ProductGridProps) {
  return (
    <Box className="product-grid-section">
      <Box className="product-grid-section__header">
        <Box>
          <Typography
            variant="h5"
            component="h2"
            className="product-grid-section__title"
          >
            Product Catalog
          </Typography>

          <Typography
            variant="body2"
            className="product-grid-section__subtitle"
          >
            Browse and manage your available products.
          </Typography>
        </Box>

        <Typography
          variant="body2"
          className="product-grid-section__count"
        >
          {products.length}{" "}
          {products.length === 1
            ? "product"
            : "products"}
        </Typography>
      </Box>

      {products.length > 0 ? (
        <Grid
          container
          spacing={2.5}
          className="product-grid"
        >
          {products.map((product) => (
            <Grid
              key={product.id}
              size={{
                xs: 12,
                sm: 6,
                md: 4,
                lg: 3,
              }}
              className="product-grid__item"
            >
              <ProductCard
                product={product}
                onQuickView={onQuickView}
              />
            </Grid>
          ))}
        </Grid>
      ) : (
        <Box className="product-grid__empty">
          <Typography
            variant="h6"
            className="product-grid__empty-title"
          >
            No products found
          </Typography>

          <Typography
            variant="body2"
            className="product-grid__empty-text"
          >
            Try changing your search, category, or
            date filter.
          </Typography>
        </Box>
      )}
    </Box>
  );
}

export default ProductGrid;