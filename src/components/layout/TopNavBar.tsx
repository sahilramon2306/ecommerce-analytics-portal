import {
  AppBar,
  Badge,
  Box,
  IconButton,
  InputBase,
  Toolbar,
  Typography,
} from "@mui/material";

import {
  DarkMode,
  LightMode,
  Search,
  ShoppingCart,
} from "@mui/icons-material";

import { useThemeMode } from "../../theme/ThemeContext";

import "../../styles/TopNavBar.css";

interface TopNavBarProps {
  cartCount: number;
  searchValue: string;
  onSearchChange: (value: string) => void;
}

function TopNavBar({
  cartCount,
  searchValue,
  onSearchChange,
}: TopNavBarProps) {
  const { mode, toggleTheme } = useThemeMode();

  return (
    <AppBar
      position="sticky"
      elevation={0}
      className={`top-nav top-nav--${mode}`}
    >
      <Toolbar className="top-nav__toolbar">

        {/* Brand */}
        <Box className="top-nav__brand">
          <Box className="top-nav__logo">
            S
          </Box>

          <Typography
            variant="h6"
            component="div"
            className="top-nav__title"
          >
            Seller Analytics
          </Typography>
        </Box>

        {/* Search */}
        <Box className="top-nav__search">
          <Search className="top-nav__search-icon" />

          <InputBase
            placeholder="Search products..."
            value={searchValue}
            onChange={(event) =>
              onSearchChange(event.target.value)
            }
            className="top-nav__search-input"
            inputProps={{
              "aria-label": "search products",
            }}
          />
        </Box>

        {/* Actions */}
        <Box className="top-nav__actions">

          {/* Cart */}
          <IconButton
            aria-label="shopping cart"
            className="top-nav__action-button"
          >
            <Badge
              badgeContent={cartCount}
              color="secondary"
              max={99}
              showZero
            >
              <ShoppingCart />
            </Badge>
          </IconButton>

          {/* Theme */}
          <IconButton
            onClick={toggleTheme}
            aria-label="toggle theme"
            className="top-nav__action-button"
          >
            {mode === "light" ? (
              <DarkMode />
            ) : (
              <LightMode />
            )}
          </IconButton>

        </Box>
      </Toolbar>
    </AppBar>
  );
}

export default TopNavBar;