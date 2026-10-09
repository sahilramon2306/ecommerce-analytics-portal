import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Fab,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";

import {
  Add,
  Close,
} from "@mui/icons-material";

import {
  useState,
  type ChangeEvent,
  type FormEvent,
} from "react";

import type {
  AddProductData,
  ProductCategory,
} from "../../types/purchase";

import "../../styles/AddProductFAB.css";

interface AddProductFABProps {
  onAddProduct: (product: AddProductData) => void;
}

const categories: ProductCategory[] = [
  "Electronics",
  "Fashion",
  "Home",
  "Beauty",
  "Sports",
];

const initialForm: AddProductData = {
  title: "",
  sku: "",
  description: "",
  category: "Electronics",
  price: 0,
  stock: 0,
  rating: 0,
  ratingCount: 0,
  image: "",
};

function AddProductFAB({
  onAddProduct,
}: AddProductFABProps) {
  const [open, setOpen] = useState(false);

  const [formData, setFormData] =
    useState<AddProductData>(initialForm);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleChange = (
    field: keyof AddProductData,
    value: string | number,
  ) => {
    setFormData((current) => ({
      ...current,
      [field]: value,
    }));
  };

  const handleSubmit = (
    event: FormEvent<HTMLFormElement>,
  ) => {
    event.preventDefault();

    if (
      !formData.title.trim() ||
      !formData.sku.trim() ||
      !formData.description.trim() ||
      formData.price <= 0 ||
      formData.stock < 0
    ) {
      return;
    }

    onAddProduct(formData);

    setFormData(initialForm);
    setOpen(false);
  };

const handleNumberChange = (
  field: "price" | "stock",
  event: ChangeEvent<
    HTMLInputElement | HTMLTextAreaElement
  >,
) => {
  const value = event.target.value;

  handleChange(
    field,
    value === "" ? 0 : Number(value),
  );
};

  return (
    <>
      <Fab
        color="primary"
        variant="extended"
        onClick={handleOpen}
        className="add-product-fab"
      >
        <Add />
        Add Product
      </Fab>

   <Dialog
  open={open}
  onClose={handleClose}
  fullWidth
  maxWidth="sm"
  className="add-product-dialog"
  slotProps={{
    paper: {
      className: "add-product-dialog__paper",
      sx: {
        backgroundColor: "background.paper",
        backgroundImage: "none",
        color: "text.primary",
      },
    },
  }}
>
        <DialogTitle className="add-product-dialog__title">
          <Box>
            <div className="add-product-dialog__heading">
              Add New Inventory Item
            </div>

            <div className="add-product-dialog__subtitle">
              Add a new product to your catalog.
            </div>
          </Box>

          <Button
            onClick={handleClose}
            className="add-product-dialog__close"
            aria-label="close"
          >
            <Close />
          </Button>
        </DialogTitle>

        <Box
          component="form"
          onSubmit={handleSubmit}
        >
          <DialogContent className="add-product-dialog__content">
            <Box className="add-product-form">

              {/* Product Title */}
              <TextField
                fullWidth
                required
                label="Product Title"
                value={formData.title}
                onChange={(event) =>
                  handleChange(
                    "title",
                    event.target.value,
                  )
                }
              />

              {/* SKU */}
              <TextField
                fullWidth
                required
                label="SKU"
                value={formData.sku}
                onChange={(event) =>
                  handleChange(
                    "sku",
                    event.target.value,
                  )
                }
              />

              {/* Description */}
              <TextField
                fullWidth
                required
                multiline
                rows={3}
                label="Description"
                value={formData.description}
                onChange={(event) =>
                  handleChange(
                    "description",
                    event.target.value,
                  )
                }
              />

              {/* Category */}
              <FormControl fullWidth required>
                <InputLabel id="add-product-category">
                  Category
                </InputLabel>

                <Select
                  labelId="add-product-category"
                  value={formData.category}
                  label="Category"
                  onChange={(event) =>
                    handleChange(
                      "category",
                      event.target.value as ProductCategory,
                    )
                  }
                >
                  {categories.map((category) => (
                    <MenuItem
                      key={category}
                      value={category}
                    >
                      {category}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>

              {/* Price + Stock */}
              <Box className="add-product-form__row">
                <TextField
                  fullWidth
                  required
                  type="number"
                  label="Price"
                  value={
                    formData.price === 0
                      ? ""
                      : formData.price
                  }
                  slotProps={{
                    htmlInput: {
                      min: 1,
                    },
                  }}
                  onChange={(event) =>
                    handleNumberChange(
                      "price",
                      event,
                    )
                  }
                />

                <TextField
                  fullWidth
                  required
                  type="number"
                  label="Stock"
                  value={
                    formData.stock === 0
                      ? ""
                      : formData.stock
                  }
                  slotProps={{
                    htmlInput: {
                      min: 0,
                    },
                  }}
                  onChange={(event) =>
                    handleNumberChange(
                      "stock",
                      event,
                    )
                  }
                />
              </Box>

              {/* Image URL */}
              <TextField
                fullWidth
                label="Image URL"
                placeholder="https://..."
                value={formData.image}
                onChange={(event) =>
                  handleChange(
                    "image",
                    event.target.value,
                  )
                }
              />
            </Box>
          </DialogContent>

          <DialogActions className="add-product-dialog__actions">
            <Button
              type="button"
              variant="outlined"
              onClick={handleClose}
              className="add-product-dialog__cancel"
            >
              Cancel
            </Button>

            <Button
              type="submit"
              variant="contained"
              startIcon={<Add />}
              className="add-product-dialog__submit"
            >
              Add Product
            </Button>
          </DialogActions>
        </Box>
      </Dialog>
    </>
  );
}

export default AddProductFAB;