// DoughnutChart.js

import React, { useEffect, useRef, useState } from "react";
import Chart from "chart.js/auto";
import "./circle.css"

const Circle = () => {
  const chartRef = useRef(null);
  const data = [3];
  const labels = "";
  const chartInstance = useRef(null);
  const date = new Date();
  const hours = date.getHours();
  const minutes = date.getMinutes();
  const [minute, setMinute] = useState(minutes);
  const [currentTime, setCurrentTime] = useState(hours);
  const [time, setTime] = useState(24);
  const [timeStatus, setTimeStatus] = useState("AM");

  useEffect(() => {
    setTime(24 - hours);
    setCurrentTime(hours);
    setTimeStatus(hours > 12 ? "PM" : "AM");
  }, [time, currentTime]);

  useEffect(() => {
    if (chartRef && chartRef.current) {
      if (chartInstance.current) {
        chartInstance.current.destroy();
      }
      const ctx = chartRef.current.getContext("2d");
      const gradientSegment = ctx.createLinearGradient(0, 0, 0, 365);
      gradientSegment.addColorStop(0.0, "#eeee");
      gradientSegment.addColorStop(0.4, "#7012CE");
      const doughnutLabel = {
        id: "doughnutLabel",
        beforeDatasetsDraw(chart, args, pluginOptions) {
          const { ctx, data } = chart;
          ctx.save();

          const centerX = chart.getDatasetMeta(0).data[0].x;
          const centerY = chart.getDatasetMeta(0).data[0].y;
          const circleRadius = chart.getDatasetMeta(0).data[0].outerRadius; // Adjust the radius as needed
          ctx.beginPath();
          ctx.arc(centerX, centerY, circleRadius, 0, 2 * Math.PI);
          const gradient = ctx.createRadialGradient(
            centerX,
            centerY,
            0,
            centerX,
            centerY,
            circleRadius
          );
          gradient.addColorStop(1, "#25005c"); // Starting color (center)
          gradient.addColorStop(0, "#9650db"); // Ending color (outer edge)

          // Use the gradient as fill style
          ctx.fillStyle = gradient;
          ctx.fill();

          const xCoor = chart.getDatasetMeta(0).data[0].x;
          const yCoor = chart.getDatasetMeta(0).data[0].y;
          ctx.font = "bold 15px sans-serif";
          ctx.fillStyle = "white";
          ctx.textAlign = "center";
          ctx.fillText(
            `${currentTime % 12 || 12}:${
              minute.length > 1 ? minute : `0${minute}`
            }`,
            xCoor,
            yCoor
          );
        },
      };

      const overLappingSegment = {
        id: "overLappingSegment",
        afterDatasetsDraw(chart, args, plugins) {
          const { ctx, data } = chart;
          const x = chart.getDatasetMeta(0).data[0].x;
          const y = chart.getDatasetMeta(0).data[0].y;
          const angle = Math.PI / 180;
          const length = data.labels.length - 1;

          chart.getDatasetMeta(0).data.forEach((value, index) => {
            const innerRadius = chart.getDatasetMeta(0).data[index].innerRadius;
            const outerRadius = chart.getDatasetMeta(0).data[index].outerRadius;
            const endAngle = chart.getDatasetMeta(0).data[index].endAngle;
            const radius = (outerRadius - innerRadius) / 2;

            const coordinates = [];
            for (let i = -0.03; i <= 0.03; i += 0.05) {
              const xCoor =
                (innerRadius + radius) * Math.cos(endAngle + Math.PI + i);
              const yCoor = (innerRadius + radius) * Math.sin(endAngle + i);
              coordinates.push({ x: xCoor, y: yCoor });
            }
            ctx.save();
            ctx.fillStyle = data.datasets[0].backgroundColor[index];
            ctx.translate(x, y);
            ctx.beginPath();
            coordinates.forEach(({ x, y }) => {
              ctx.arc(-x, y, radius + 1, 0, angle * 360, false);
            });
            ctx.fill();
            ctx.restore();
          });
        },
      };
      chartInstance.current = new Chart(ctx, {
        type: "doughnut",
        data: {
          datasets: [
            {
              label: "Doughnut Chart",
              data: [currentTime, time],
              backgroundColor: ["#7012CE", "white"],
              borderWidth: 3,
              borderColor: ["#7012CE", "white"],
            },
          ],
        },
        options: {
          responsive: true,
          cutout: "80%",
          plugins: {
            legend: {
              position: "top",
            },
            title: {
              display: true,
              // text: "Doughnut Chart",
            },
          },
        },
        plugins: [overLappingSegment, doughnutLabel],
      });
    }

    return () => {
      if (chartInstance.current) {
        chartInstance.current.destroy();
      }
    };
  }, [data, labels]);

  return (
    <>
        <canvas
          className="mb-5"
          style={{ height: "150px", width: "400px" }}
          ref={chartRef}
        />
    </>
  );
};

export default Circle;
