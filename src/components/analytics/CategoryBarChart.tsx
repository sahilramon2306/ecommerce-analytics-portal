import {
  Box,
  Card,
  CardContent,
  Typography,
} from "@mui/material";

import {
  Bar,
  BarChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

import type { CategorySalesData } from "../../types/purchase";

import "../../styles/CategoryBarChart.css";

interface CategoryBarChartProps {
  data: CategorySalesData[];
}

function CategoryBarChart({
  data,
}: CategoryBarChartProps) {
  return (
    <Card
      elevation={0}
      className="category-bar-chart"
    >
      <CardContent className="category-bar-chart__content">
        <Box className="category-bar-chart__header">
          <Typography
            variant="h6"
            component="h2"
            className="category-bar-chart__title"
          >
            Sales by Category
          </Typography>

          <Typography
            variant="body2"
            className="category-bar-chart__subtitle"
          >
            Product units sold by category
          </Typography>
        </Box>

        <Box className="category-bar-chart__wrapper">
          <ResponsiveContainer
            width="100%"
            height="100%"
          >
            <BarChart
              data={data}
              margin={{
                top: 10,
                right: 10,
                left: 0,
                bottom: 10,
              }}
            >
              <CartesianGrid
                strokeDasharray="3 3"
                vertical={false}
                stroke="rgba(128, 128, 128, 0.2)"
              />

              <XAxis
                dataKey="category"
                tickLine={false}
                axisLine={false}
              />

              <YAxis
                tickLine={false}
                axisLine={false}
                allowDecimals={false}
              />

              <Tooltip
                formatter={(value) => [
                  value,
                  "Units Sold",
                ]}
              />

              <Bar
                dataKey="units"
                name="Units Sold"
                fill="#FF8C00"
                radius={[6, 6, 0, 0]}
                maxBarSize={55}
              />
            </BarChart>
          </ResponsiveContainer>
        </Box>
      </CardContent>
    </Card>
  );
}

export default CategoryBarChart;