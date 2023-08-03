import React, { useState, useEffect } from "react";

import Sidebar from "./Sidebar.jsx";
import Heatmap from "./Charts/Heatmap.jsx";
import Dynamic from "./Charts/Dynamic.jsx";
import Boxplot from "./Charts/Boxplot.jsx";
import Exponential from "./Charts/Exponential.jsx";

import { Tab } from "semantic-ui-react";
import Bar from "./Charts/Bar.jsx";

import "../styles/App.scss";

import "semantic-ui-css/semantic.min.css";

function App() {
  const [filterValue, setFilterValue] = useState(100);
  const [selectedMonths, setSelectedMonths] = useState([]);

  // Exponential Chart
  const exponentialData = [
    [1, 4862.4],
    [2, 5294.7],
    [3, 5934.5],
    [4, 7171.0],
    [5, 8964.4],
    [6, 10202.2],
    [7, 11962.5],
    [8, 14928.3],
    [9, 16909.2],
    [10, 18547.9],
    [11, 21617.8],
    [12, 26638.1],
    [13, 34634.4],
    [14, 46759.4],
    [15, 58478.1],
    [16, 67884.6],
    [17, 74462.6],
    [18, 79395.7],
  ];

  // Heatmap Chart
  const heatmapHours = [
    "12a",
    "1a",
    "2a",
    "3a",
    "4a",
    "5a",
    "6a",
    "7a",
    "8a",
    "9a",
    "10a",
    "11a",
    "12p",
    "1p",
    "2p",
    "3p",
    "4p",
    "5p",
    "6p",
    "7p",
    "8p",
    "9p",
    "10p",
    "11p",
  ];

  const heatmapDays = [
    "Saturday",
    "Friday",
    "Thursday",
    "Wednesday",
    "Tuesday",
    "Monday",
    "Sunday",
  ];

  const heatmapData = [
    [0, 0, 5],
    [0, 1, 1],
    [0, 2, 0],
    [0, 3, 0],
    [0, 4, 0],
    [0, 5, 0],
    [0, 6, 0],
    [0, 7, 0],
    [0, 8, 0],
    [0, 9, 0],
    [0, 10, 0],
    [0, 11, 2],
    [0, 12, 4],
    [0, 13, 1],
    [0, 14, 1],
    [0, 15, 3],
    [0, 16, 4],
    [0, 17, 6],
    [0, 18, 4],
    [0, 19, 4],
    [0, 20, 3],
    [0, 21, 3],
    [0, 22, 2],
    [0, 23, 5],
    [1, 0, 7],
    [1, 1, 0],
    [1, 2, 0],
    [1, 3, 0],
    [1, 4, 0],
    [1, 5, 0],
    [1, 6, 0],
    [1, 7, 0],
    [1, 8, 0],
    [1, 9, 0],
    [1, 10, 5],
    [1, 11, 2],
    [1, 12, 2],
    [1, 13, 6],
    [1, 14, 9],
    [1, 15, 11],
    [1, 16, 6],
    [1, 17, 7],
    [1, 18, 8],
    [1, 19, 12],
    [1, 20, 5],
    [1, 21, 5],
    [1, 22, 7],
    [1, 23, 2],
    [2, 0, 1],
    [2, 1, 1],
    [2, 2, 0],
    [2, 3, 0],
    [2, 4, 0],
    [2, 5, 0],
    [2, 6, 0],
    [2, 7, 0],
    [2, 8, 0],
    [2, 9, 0],
    [2, 10, 3],
    [2, 11, 2],
    [2, 12, 1],
    [2, 13, 9],
    [2, 14, 8],
    [2, 15, 10],
    [2, 16, 6],
    [2, 17, 5],
    [2, 18, 5],
    [2, 19, 5],
    [2, 20, 7],
    [2, 21, 4],
    [2, 22, 2],
    [2, 23, 4],
    [3, 0, 7],
    [3, 1, 3],
    [3, 2, 0],
    [3, 3, 0],
    [3, 4, 0],
    [3, 5, 0],
    [3, 6, 0],
    [3, 7, 0],
    [3, 8, 1],
    [3, 9, 0],
    [3, 10, 5],
    [3, 11, 4],
    [3, 12, 7],
    [3, 13, 14],
    [3, 14, 13],
    [3, 15, 12],
    [3, 16, 9],
    [3, 17, 5],
    [3, 18, 5],
    [3, 19, 10],
    [3, 20, 6],
    [3, 21, 4],
    [3, 22, 4],
    [3, 23, 1],
    [4, 0, 1],
    [4, 1, 3],
    [4, 2, 0],
    [4, 3, 0],
    [4, 4, 0],
    [4, 5, 1],
    [4, 6, 0],
    [4, 7, 0],
    [4, 8, 0],
    [4, 9, 2],
    [4, 10, 4],
    [4, 11, 4],
    [4, 12, 2],
    [4, 13, 4],
    [4, 14, 4],
    [4, 15, 14],
    [4, 16, 12],
    [4, 17, 1],
    [4, 18, 8],
    [4, 19, 5],
    [4, 20, 3],
    [4, 21, 7],
    [4, 22, 3],
    [4, 23, 0],
    [5, 0, 2],
    [5, 1, 1],
    [5, 2, 0],
    [5, 3, 3],
    [5, 4, 0],
    [5, 5, 0],
    [5, 6, 0],
    [5, 7, 0],
    [5, 8, 2],
    [5, 9, 0],
    [5, 10, 4],
    [5, 11, 1],
    [5, 12, 5],
    [5, 13, 10],
    [5, 14, 5],
    [5, 15, 7],
    [5, 16, 11],
    [5, 17, 6],
    [5, 18, 0],
    [5, 19, 5],
    [5, 20, 3],
    [5, 21, 4],
    [5, 22, 2],
    [5, 23, 0],
    [6, 0, 1],
    [6, 1, 0],
    [6, 2, 0],
    [6, 3, 0],
    [6, 4, 0],
    [6, 5, 0],
    [6, 6, 0],
    [6, 7, 0],
    [6, 8, 0],
    [6, 9, 0],
    [6, 10, 1],
    [6, 11, 0],
    [6, 12, 2],
    [6, 13, 1],
    [6, 14, 3],
    [6, 15, 4],
    [6, 16, 0],
    [6, 17, 0],
    [6, 18, 0],
    [6, 19, 0],
    [6, 20, 1],
    [6, 21, 2],
    [6, 22, 2],
    [6, 23, 6],
  ].map(function (item) {
    return [item[1], item[0], item[2] || "-"];
  });

  const boxPlotData = [
    [
      850, 740, 900, 1070, 930, 850, 950, 980, 980, 880, 1000, 980, 930, 650,
      760, 810, 1000, 1000, 960, 960,
    ],
    [
      960, 940, 960, 940, 880, 800, 850, 880, 900, 840, 830, 790, 810, 880, 880,
      830, 800, 790, 760, 800,
    ],
    [
      880, 880, 880, 860, 720, 720, 620, 860, 970, 950, 880, 910, 850, 870, 840,
      840, 850, 840, 840, 840,
    ],
    [
      890, 810, 810, 820, 800, 770, 760, 740, 750, 760, 910, 920, 890, 860, 880,
      720, 840, 850, 850, 780,
    ],
    [
      890, 840, 780, 810, 760, 810, 790, 810, 820, 850, 870, 870, 810, 740, 810,
      940, 950, 800, 810, 870,
    ],
  ];

  const xAxisDataBar = ["Jan", "Fev", "Mar", "Abr", "Mai", "Jun"];
  const seriesDataBar = [120, 200, 150, 80, 70, 110];

  const panes = [
    {
      menuItem: "Tab 1",
      render: () => (
        <Tab.Pane>
          <Exponential
            originalData={exponentialData}
            filterValue={filterValue}
          />
          <Heatmap hours={heatmapHours} days={heatmapDays} data={heatmapData} />
          <Dynamic />
          <Boxplot originalData={boxPlotData} />
        </Tab.Pane>
      ),
    },
    {
      menuItem: "Tab 2",
      render: () => (
        <Tab.Pane>
          <Bar
            xAxisType="category"
            xAxisData={xAxisDataBar}
            yAxisType="value"
            seriesData={seriesDataBar}
            seriesType="bar"
          />
          <Boxplot originalData={boxPlotData} />
          <Heatmap hours={heatmapHours} days={heatmapDays} data={heatmapData} />
          <Dynamic />
        </Tab.Pane>
      ),
    },
  ];

  const handleFilterChange = (value) => {
    setFilterValue(value);
  };

  const handleMonthChange = (selectedMonths) => {
    setSelectedMonths(selectedMonths);
  };

  useEffect(() => {
    console.log(selectedMonths);
  }, [selectedMonths]);

  return (
    <div className="container-main">
      <Sidebar
        onFilterChange={handleFilterChange}
        onMonthChange={handleMonthChange}
        xAxisDataBar={xAxisDataBar}
      />
      <div className="chart-container">
        <Tab panes={panes} />
      </div>
    </div>
  );
}

export default App;
