import {
  Box,
  FormControl,
  InputAdornment,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";

import {
  CalendarMonth,
  Search,
} from "@mui/icons-material";

import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import dayjs, { type Dayjs } from "dayjs";

import type {
  ProductCategory,
  ProductFilters,
} from "../../types/purchase";

import "../../styles/ProductFilterBar.css";

interface ProductFilterBarProps {
  filters: ProductFilters;
  onFiltersChange: (
    filters: ProductFilters,
  ) => void;
}

const categories: Array<
  ProductCategory | "All"
> = [
  "All",
  "Electronics",
  "Fashion",
  "Home",
  "Beauty",
  "Sports",
];

function ProductFilterBar({
  filters,
  onFiltersChange,
}: ProductFilterBarProps) {
  const handleSearchChange = (
    event: React.ChangeEvent<HTMLInputElement>,
  ) => {
    onFiltersChange({
      ...filters,
      search: event.target.value,
    });
  };

  const handleCategoryChange = (
    event: {
      target: {
        value: string;
      };
    },
  ) => {
    onFiltersChange({
      ...filters,
      category:
        event.target.value as ProductCategory | "All",
    });
  };

  const handleDateChange = (
    value: Dayjs | null,
  ) => {
    onFiltersChange({
      ...filters,
      date: value
        ? value.format("YYYY-MM-DD")
        : null,
    });
  };

  return (
    <Box className="product-filter-bar">
      {/* Search */}
      <TextField
        fullWidth
        label="Search products"
        placeholder="Search by title or SKU..."
        value={filters.search}
        onChange={handleSearchChange}
        className="product-filter-bar__search"
        slotProps={{
          input: {
            startAdornment: (
              <InputAdornment position="start">
                <Search />
              </InputAdornment>
            ),
          },
        }}
      />

      {/* Category */}
      <FormControl
        fullWidth
        className="product-filter-bar__category"
      >
        <InputLabel id="category-filter-label">
          Category
        </InputLabel>

        <Select
          labelId="category-filter-label"
          value={filters.category}
          label="Category"
          onChange={handleCategoryChange}
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

      {/* Date */}
      <DatePicker
        label="Created Date"
        value={
          filters.date
            ? dayjs(filters.date)
            : null
        }
        onChange={handleDateChange}
        slots={{
          openPickerIcon: CalendarMonth,
        }}
        slotProps={{
          textField: {
            fullWidth: true,
            className:
              "product-filter-bar__date",
          },
        }}
      />
    </Box>
  );
}

export default ProductFilterBar;