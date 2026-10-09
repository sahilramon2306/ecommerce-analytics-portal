import {
  Box,
  Card,
  CardContent,
  Grid,
  Typography,
} from "@mui/material";

import {
  AttachMoney,
  Inventory2,
  ShoppingBag,
} from "@mui/icons-material";

import type { StoreStats } from "../../types/purchase";

import "../../styles/HeroBanner.css";

interface HeroBannerProps {
  stats: StoreStats;
}

function HeroBanner({ stats }: HeroBannerProps) {
  const statCards = [
    {
      title: "Today's Revenue",
      value: `₹${stats.todayRevenue.toLocaleString("en-IN")}`,
      icon: <AttachMoney />,
      className: "hero-stat-card--revenue",
    },
    {
      title: "Total Orders",
      value: stats.totalOrders.toLocaleString("en-IN"),
      icon: <ShoppingBag />,
      className: "hero-stat-card--orders",
    },
    {
      title: "Active Inventory",
      value: stats.activeInventory.toLocaleString("en-IN"),
      icon: <Inventory2 />,
      className: "hero-stat-card--inventory",
    },
  ];

  return (
    <Box className="hero-banner">
      <Box className="hero-banner__heading">
        <Typography
          variant="h4"
          component="h1"
          className="hero-banner__title"
        >
          E-Commerce Seller Analytics
        </Typography>

        <Typography
          variant="body1"
          className="hero-banner__subtitle"
        >
          Monitor your store performance and inventory at a glance.
        </Typography>
      </Box>

      <Grid container spacing={2.5}>
        {statCards.map((stat) => (
          <Grid
            key={stat.title}
            size={{ xs: 12, sm: 4 }}
          >
           <Card
             elevation={0}
            className={`hero-stat-card ${stat.className}`}
              sx={{
              backgroundColor: "background.paper",
              color: "text.primary",
                }}
              >
              <CardContent className="hero-stat-card__content">
                <Box className="hero-stat-card__icon">
                  {stat.icon}
                </Box>

                <Box>
                  <Typography
                    variant="body2"
                    className="hero-stat-card__label"
                  >
                    {stat.title}
                  </Typography>

                  <Typography
                    variant="h5"
                    component="p"
                    className="hero-stat-card__value"
                  >
                    {stat.value}
                  </Typography>
                </Box>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

export default HeroBanner;