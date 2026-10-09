import {
  Box,
  Card,
  CardContent,
  Typography,
} from "@mui/material";

import {
  Area,
  AreaChart,
  CartesianGrid,
  Legend,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

import type { SalesData } from "../../types/purchase";

import "../../styles/RevenueTrendChart.css";

interface RevenueTrendChartProps {
  data: SalesData[];
}

function RevenueTrendChart({
  data,
}: RevenueTrendChartProps) {
  return (
    <Card
      elevation={0}
      className="revenue-trend-chart"
    >
      <CardContent className="revenue-trend-chart__content">
        <Box className="revenue-trend-chart__header">
          <Typography
            variant="h6"
            component="h2"
            className="revenue-trend-chart__title"
          >
            Revenue & Sales Trend
          </Typography>

          <Typography
            variant="body2"
            className="revenue-trend-chart__subtitle"
          >
            Last 7 days performance
          </Typography>
        </Box>

        <Box className="revenue-trend-chart__wrapper">
          <ResponsiveContainer
            width="100%"
            height="100%"
          >
            <AreaChart
              data={data}
              margin={{
                top: 10,
                right: 10,
                left: 0,
                bottom: 0,
              }}
            >
              <defs>
                <linearGradient
                  id="revenueGradient"
                  x1="0"
                  y1="0"
                  x2="0"
                  y2="1"
                >
                  <stop
                    offset="0%"
                    stopColor="#FF8C00"
                    stopOpacity={0.35}
                  />
                  <stop
                    offset="100%"
                    stopColor="#FF8C00"
                    stopOpacity={0.03}
                  />
                </linearGradient>

                <linearGradient
                  id="salesGradient"
                  x1="0"
                  y1="0"
                  x2="0"
                  y2="1"
                >
                  <stop
                    offset="0%"
                    stopColor="#3F51B5"
                    stopOpacity={0.3}
                  />
                  <stop
                    offset="100%"
                    stopColor="#3F51B5"
                    stopOpacity={0.03}
                  />
                </linearGradient>
              </defs>

              <CartesianGrid
                strokeDasharray="3 3"
                vertical={false}
                stroke="rgba(128, 128, 128, 0.2)"
              />

              <XAxis
                dataKey="date"
                tickLine={false}
                axisLine={false}
              />

              <YAxis
                yAxisId="revenue"
                tickLine={false}
                axisLine={false}
                tickFormatter={(value) =>
                  `₹${Number(value) / 1000}k`
                }
              />

              <YAxis
                yAxisId="sales"
                orientation="right"
                tickLine={false}
                axisLine={false}
                width={40}
              />

              <Tooltip
                formatter={(
                  value,
                  name,
                ) => {
                  if (name === "Revenue") {
                    return [
                      `₹${Number(value).toLocaleString(
                        "en-IN",
                      )}`,
                      name,
                    ];
                  }

                  return [value, name];
                }}
              />

              <Legend />

              <Area
                yAxisId="revenue"
                type="monotone"
                dataKey="revenue"
                name="Revenue"
                stroke="#FF8C00"
                fill="url(#revenueGradient)"
                strokeWidth={2.5}
                activeDot={{ r: 5 }}
              />

              <Area
                yAxisId="sales"
                type="monotone"
                dataKey="salesVolume"
                name="Sales Volume"
                stroke="#3F51B5"
                fill="url(#salesGradient)"
                strokeWidth={2.5}
                activeDot={{ r: 5 }}
              />
            </AreaChart>
          </ResponsiveContainer>
        </Box>
      </CardContent>
    </Card>
  );
}

export default RevenueTrendChart;