import {
  Box,
  Button,
  Chip,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Divider,
  IconButton,
  Rating,
  Typography,
} from "@mui/material";

import {
  Close,
  Inventory2,
  ShoppingCart,
} from "@mui/icons-material";

import type { Product } from "../../types/purchase";
import { useThemeMode } from "../../theme/ThemeContext";
import "../../styles/ProductDetailModal.css";

interface ProductDetailModalProps {
  open: boolean;
  product: Product | null;
  onClose: () => void;
  onAddToOrder: (product: Product) => void;
}


function ProductDetailModal({
  open,
  product,
  onClose,
  onAddToOrder,
}: ProductDetailModalProps) {
  const { mode } = useThemeMode();

  if (!product) {
    return null;
  }

  const stockStatus =
    product.stock === 0
      ? "Out of Stock"
      : product.stock <= 10
        ? "Low Stock"
        : "In Stock";

  const stockClass =
    product.stock === 0
      ? "product-detail-modal__stock--out"
      : product.stock <= 10
        ? "product-detail-modal__stock--low"
        : "product-detail-modal__stock--available";

  return (
<Dialog
    open={open}
    onClose={onClose}
    fullWidth
    maxWidth="md"
    className="product-detail-modal"
    slotProps={{
      paper: {
        className: `product-detail-modal__paper product-detail-modal__paper--${mode}`,
      },
      backdrop: {
        className: "product-detail-modal__backdrop",
      },
    }}
  >
      <DialogTitle className="product-detail-modal__title">
        <Typography
          variant="h6"
          component="h2"
          className="product-detail-modal__heading"
        >
          Product Details
        </Typography>

        <IconButton
          onClick={onClose}
          aria-label="close product details"
          className="product-detail-modal__close"
        >
          <Close />
        </IconButton>
      </DialogTitle>

      <DialogContent
        dividers
        className="product-detail-modal__content"
      >
        <Box className="product-detail-modal__layout">
          {/* Product Image */}
          <Box className="product-detail-modal__image-wrapper">
            <img
              src={product.image}
              alt={product.title}
              className="product-detail-modal__image"
            />
          </Box>

          {/* Product Information */}
          <Box className="product-detail-modal__details">
            <Box className="product-detail-modal__category-row">
              <Chip
                label={product.category}
                size="small"
                className="product-detail-modal__category"
              />

              <Typography
                variant="body2"
                className="product-detail-modal__sku"
              >
                SKU: {product.sku}
              </Typography>
            </Box>

            <Typography
              variant="h5"
              component="h3"
              className="product-detail-modal__product-title"
            >
              {product.title}
            </Typography>

            <Typography
              variant="body2"
              className="product-detail-modal__description"
            >
              {product.description}
            </Typography>

            <Box className="product-detail-modal__rating">
              <Rating
                value={product.rating}
                precision={0.1}
                readOnly
                size="small"
              />

              <Typography
                variant="body2"
                className="product-detail-modal__rating-value"
              >
                {product.rating.toFixed(1)}
              </Typography>

              <Typography
                variant="body2"
                className="product-detail-modal__rating-count"
              >
                ({product.ratingCount} ratings)
              </Typography>
            </Box>

            <Typography
              variant="h5"
              component="p"
              className="product-detail-modal__price"
            >
              ₹{product.price.toLocaleString("en-IN")}
            </Typography>

            <Divider className="product-detail-modal__divider" />

            {/* Specifications */}
            <Box className="product-detail-modal__specifications">
              <Typography
                variant="subtitle1"
                className="product-detail-modal__spec-title"
              >
                Specifications
              </Typography>

              <Box className="product-detail-modal__spec-row">
                <Typography
                  variant="body2"
                  className="product-detail-modal__spec-label"
                >
                  Product ID
                </Typography>

                <Typography
                  variant="body2"
                  className="product-detail-modal__spec-value"
                >
                  {product.id}
                </Typography>
              </Box>

              <Box className="product-detail-modal__spec-row">
                <Typography
                  variant="body2"
                  className="product-detail-modal__spec-label"
                >
                  Category
                </Typography>

                <Typography
                  variant="body2"
                  className="product-detail-modal__spec-value"
                >
                  {product.category}
                </Typography>
              </Box>

              <Box className="product-detail-modal__spec-row">
                <Typography
                  variant="body2"
                  className="product-detail-modal__spec-label"
                >
                  Units Sold
                </Typography>

                <Typography
                  variant="body2"
                  className="product-detail-modal__spec-value"
                >
                  {product.sales}
                </Typography>
              </Box>

              <Box className="product-detail-modal__spec-row">
                <Typography
                  variant="body2"
                  className="product-detail-modal__spec-label"
                >
                  Created Date
                </Typography>

                <Typography
                  variant="body2"
                  className="product-detail-modal__spec-value"
                >
                  {product.createdAt}
                </Typography>
              </Box>
            </Box>

            {/* Stock */}
            <Box className="product-detail-modal__stock-section">
              <Box className="product-detail-modal__stock-header">
                <Box className="product-detail-modal__stock-icon">
                  <Inventory2 />
                </Box>

                <Box>
                  <Typography
                    variant="body2"
                    className="product-detail-modal__stock-label"
                  >
                    Inventory
                  </Typography>

                  <Typography
                    variant="body1"
                    className="product-detail-modal__stock-count"
                  >
                    {product.stock} units available
                  </Typography>
                </Box>

                <Chip
                  label={stockStatus}
                  size="small"
                  className={`product-detail-modal__stock-chip ${stockClass}`}
                />
              </Box>
            </Box>
          </Box>
        </Box>
      </DialogContent>

      <DialogActions className="product-detail-modal__actions">
        <Button
          variant="outlined"
          onClick={onClose}
          className="product-detail-modal__cancel"
        >
          Close
        </Button>

        <Button
          variant="contained"
          startIcon={<ShoppingCart />}
          disabled={product.stock === 0}
          onClick={() => onAddToOrder(product)}
          className="product-detail-modal__add-button"
        >
          Add to Order
        </Button>
      </DialogActions>
    </Dialog>
  );
}

export default ProductDetailModal;