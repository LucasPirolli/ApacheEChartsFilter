import React, { useEffect } from "react";
import { regression } from "echarts-stat";
import * as echarts from "echarts";
import PropTypes from "prop-types";

const Bar = ({
  xAxisType,
  xAxisData,
  yAxisType,
  seriesData,
  seriesType,
  filteredSeriesData,
}) => {
  useEffect(() => {
    createChartBar();
  }, [filteredSeriesData]);

  const createChartBar = () => {
    const option = {
      xAxis: {
        type: xAxisType,
        data: xAxisData,
      },
      yAxis: {
        type: yAxisType,
      },
      series: [
        {
          data: filteredSeriesData || seriesData,
          type: seriesType,
        },
      ],
    };

    const chart = echarts.init(document.getElementById("bar-container"));
    chart.setOption(option);
  };

  return <div id="bar-container" />;
};

Bar.propTypes = {
  xAxisType: PropTypes.string.isRequired,
  xAxisData: PropTypes.array.isRequired,
  yAxisType: PropTypes.string.isRequired,
  seriesData: PropTypes.array.isRequired,
  seriesType: PropTypes.string.isRequired,
  filteredSeriesData: PropTypes.array, // Novo prop para os dados filtrados
};

// Bar.defaultProps = {
//    xAxisType: PropTypes.string.isRequired,
//   xAxisData: PropTypes.array.isRequired,
//   yAxisType: PropTypes.string.isRequired,
//   seriesData: PropTypes.array.isRequired,
//   seriesType: PropTypes.string.isRequired,
//   filteredSeriesData: PropTypes.array, // Novo prop para os dados filtrados
// };

export default Bar;
