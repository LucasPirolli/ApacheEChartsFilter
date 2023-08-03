import React, { useEffect } from "react";
import * as echarts from "echarts";
import PropTypes from "prop-types";

const Heatmap = ({
  title,
  center,
  hours,
  days,
  data,
  tooltipPosition,
  gridHeight,
  gridTop,
  xAxisType,
  xAxisSplitAreaShow,
  yAxisType,
  yAxisSplitAreaShow,
  visualMapMin,
  visualMapMax,
  visualMapCalculable,
  visualMapOrient,
  visualMapLeft,
  visualMapBottom,
  seriesName,
  seriesType,
  seriesLabelShow,
  emphasisItemStyleShadowBlur,
  emphasisItemStyleShadowColor,
}) => {
  useEffect(() => {
    createChartHeatmap();
  });

  const createChartHeatmap = () => {
    const option = {
      title: {
        text: title,
        left: center,
      },
      tooltip: {
        position: tooltipPosition,
      },
      grid: {
        height: gridHeight,
        top: gridTop,
      },
      xAxis: {
        type: xAxisType,
        data: hours,
        splitArea: {
          show: xAxisSplitAreaShow,
        },
      },
      yAxis: {
        type: yAxisType,
        data: days,
        splitArea: {
          show: yAxisSplitAreaShow,
        },
      },
      visualMap: {
        min: visualMapMin,
        max: visualMapMax,
        calculable: visualMapCalculable,
        orient: visualMapOrient,
        left: visualMapLeft,
        bottom: visualMapBottom,
      },
      series: [
        {
          name: seriesName,
          type: seriesType,
          data: data,
          label: {
            show: seriesLabelShow,
          },
          emphasis: {
            itemStyle: {
              shadowBlur: emphasisItemStyleShadowBlur,
              shadowColor: emphasisItemStyleShadowColor,
            },
          },
        },
      ],
    };

    const chart = echarts.init(document.getElementById("heatmap-container"));
    chart.setOption(option);
  };

  return <div id="heatmap-container" />;
};

Heatmap.propTypes = {
  title: PropTypes.string,
  center: PropTypes.string,
  hours: PropTypes.array.isRequired,
  days: PropTypes.array.isRequired,
  data: PropTypes.array.isRequired,
  tooltipPosition: PropTypes.string,
  gridHeight: PropTypes.string,
  gridTop: PropTypes.string,
  xAxisType: PropTypes.string,
  xAxisSplitAreaShow: PropTypes.bool,
  yAxisType: PropTypes.string,
  yAxisSplitAreaShow: PropTypes.bool,
  visualMapMin: PropTypes.number,
  visualMapMax: PropTypes.number,
  visualMapCalculable: PropTypes.bool,
  visualMapOrient: PropTypes.string,
  visualMapLeft: PropTypes.string,
  visualMapBottom: PropTypes.string,
  seriesName: PropTypes.string,
  seriesType: PropTypes.string,
  seriesLabelShow: PropTypes.bool,
  emphasisItemStyleShadowBlur: PropTypes.number,
  emphasisItemStyleShadowColor: PropTypes.string,
};

Heatmap.defaultProps = {
  title: "Heatmap",
  center: "center",
  hours: [],
  days: [],
  data: [],
  tooltipPosition: "top",
  gridHeight: "50%",
  gridTop: "10%",
  xAxisType: "category",
  xAxisSplitAreaShow: true,
  yAxisType: "category",
  yAxisSplitAreaShow: true,
  visualMapMin: 0,
  visualMapMax: 10,
  visualMapCalculable: true,
  visualMapOrient: "horizontal",
  visualMapLeft: "center",
  visualMapBottom: "15%",
  seriesName: "Punch Card",
  seriesType: "heatmap",
  seriesLabelShow: true,
  emphasisItemStyleShadowBlur: 10,
  emphasisItemStyleShadowColor: "rgba(0, 0, 0, 0.5)",
};

export default Heatmap;
