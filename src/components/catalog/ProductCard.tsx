import {
  Box,
  Button,
  Card,
  CardContent,
  CardMedia,
  Rating,
  Typography,
} from "@mui/material";

import {
  Inventory2,
  Visibility,
} from "@mui/icons-material";

import type { Product } from "../../types/purchase";

import "../../styles/ProductCard.css";

interface ProductCardProps {
  product: Product;
  onQuickView: (product: Product) => void;
}

function ProductCard({
  product,
  onQuickView,
}: ProductCardProps) {
  const stockStatus =
    product.stock === 0
      ? "Out of Stock"
      : product.stock <= 10
        ? "Low Stock"
        : "In Stock";

  const stockClass =
    product.stock === 0
      ? "product-card__stock--out"
      : product.stock <= 10
        ? "product-card__stock--low"
        : "product-card__stock--available";

  return (
    <Card
      elevation={0}
      className="product-card"
    >
      <Box className="product-card__image-wrapper">
        <CardMedia
          component="img"
          image={product.image}
          alt={product.title}
          className="product-card__image"
        />

        <Box className="product-card__category">
          {product.category}
        </Box>
      </Box>

      <CardContent className="product-card__content">
        <Box className="product-card__main">
          <Typography
            variant="h6"
            component="h3"
            className="product-card__title"
            title={product.title}
          >
            {product.title}
          </Typography>

          <Typography
            variant="body2"
            className="product-card__sku"
          >
            SKU: {product.sku}
          </Typography>

          <Typography
            variant="body2"
            className="product-card__description"
          >
            {product.description}
          </Typography>

          <Box className="product-card__rating">
            <Rating
              value={product.rating}
              precision={0.1}
              readOnly
              size="small"
            />

            <Typography
              variant="body2"
              className="product-card__rating-value"
            >
              {product.rating.toFixed(1)}
            </Typography>

            <Typography
              variant="body2"
              className="product-card__rating-count"
            >
              ({product.ratingCount})
            </Typography>
          </Box>

          <Box className="product-card__price-row">
            <Typography
              variant="h6"
              component="p"
              className="product-card__price"
            >
              ₹{product.price.toLocaleString("en-IN")}
            </Typography>

            <Box
              className={`product-card__stock ${stockClass}`}
            >
              <Inventory2 fontSize="small" />

              <Typography
                variant="caption"
                component="span"
              >
                {stockStatus}
              </Typography>
            </Box>
          </Box>

          <Typography
            variant="body2"
            className="product-card__stock-count"
          >
            {product.stock} units available
          </Typography>
        </Box>

        <Button
          fullWidth
          variant="outlined"
          startIcon={<Visibility />}
          className="product-card__quick-view"
          onClick={() => onQuickView(product)}
        >
          Quick View
        </Button>
      </CardContent>
    </Card>
  );
}

export default ProductCard;