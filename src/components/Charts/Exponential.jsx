import React, { useEffect } from "react";
import { regression } from "echarts-stat";
import * as echarts from "echarts";
import PropTypes from "prop-types";

const Exponential = ({
  title,
  filterValue,
  originalData,
  regressionType,
  subtext,
  sublink,
  center,
  tooltipTrigger,
  tooltipAxisPointerType,
  xAxisSplitLineLineStyleType,
  yAxisSplitLineLineStyleType,
  seriesNameScatter,
  seriesTypeScatter,
  seriesDataSetIndexScatter,
  seriesNameLine,
  seriesTypeLine,
  seriesSmoothLine,
  seriesDataSetIndexLine,
  seriesSymbolSize,
  seriesSymbol,
  seriesLabelShow,
  serieFontSize,
  serieLabelLayoutDx,
  serieEncodeLabel,
  serieEncodeTooltip,
}) => {
  useEffect(() => {
    createChartExponential();
  }, [originalData, filterValue]);

  const createChartExponential = () => {
    const transformedData = regression(regressionType, originalData);

    const formattedTransformedData = transformedData.points.map((item) => ({
      value: item,
    }));

    const filteredData = originalData.map(([x, y]) => [
      x,
      y * (filterValue / 100),
    ]);

    const option = {
      dataset: [
        {
          source: originalData,
        },
        {
          source: filteredData, 
        },
      ],
      title: {
        text: title,
        subtext: subtext,
        sublink: sublink,
        left: center,
      },
      tooltip: {
        trigger: tooltipTrigger,
        axisPointer: {
          type: tooltipAxisPointerType,
        },
      },
      xAxis: {
        splitLine: {
          lineStyle: {
            type: xAxisSplitLineLineStyleType,
          },
        },
      },
      yAxis: {
        splitLine: {
          lineStyle: {
            type: yAxisSplitLineLineStyleType,
          },
        },
      },
      series: [
        // {
        //   name: seriesNameScatter,
        //   type: seriesTypeScatter,
        //   datasetIndex: seriesDataSetIndexScatter,
        // },
        {
          name: seriesNameLine,
          type: seriesTypeLine,
          smooth: seriesSmoothLine,
          datasetIndex: seriesDataSetIndexLine,
          symbolSize: seriesSymbolSize,
          symbol: seriesSymbol,
          label: { show: seriesLabelShow, fontSize: serieFontSize },
          labelLayout: { dx: serieLabelLayoutDx },
          encode: { label: serieEncodeLabel, tooltip: serieEncodeTooltip },
        },
      ],
    };

    const chart = echarts.init(
      document.getElementById("exponential-container")
    );
    chart.setOption(option);
  };

  return <div id="exponential-container" />;
};

Exponential.propTypes = {
  title: PropTypes.string.isRequired,
  originalData: PropTypes.array.isRequired,
  regressionType: PropTypes.string,
  subtext: PropTypes.string,
  sublink: PropTypes.string,
  center: PropTypes.string,
  tooltipTrigger: PropTypes.string,
  tooltipAxisPointerType: PropTypes.string,
  xAxisSplitLineLineStyleType: PropTypes.string,
  yAxisSplitLineLineStyleType: PropTypes.string,
  seriesNameScatter: PropTypes.string,
  seriesTypeScatter: PropTypes.string,
  seriesDataSetIndexScatter: PropTypes.number,
  seriesNameLine: PropTypes.string,
  seriesTypeLine: PropTypes.string,
  seriesSmoothLine: PropTypes.bool,
  seriesDataSetIndexLine: PropTypes.number,
  seriesSymbolSize: PropTypes.number,
  seriesSymbol: PropTypes.string,
  seriesLabelShow: PropTypes.bool,
  serieFontSize: PropTypes.number,
  serieLabelLayoutDx: PropTypes.number,
  serieEncodeLabel: PropTypes.number,
  serieEncodeTooltip: PropTypes.number,
};

Exponential.defaultProps = {
  title: "Exponential",
  originalData: [],
  regressionType: "exponential",
  subtext: "By ecStat.regression",
  sublink: "https://github.com/ecomfe/echarts-stat",
  center: "center",
  tooltipTrigger: "axis",
  tooltipAxisPointerType: "cross",
  xAxisSplitLineLineStyleType: "dashed",
  yAxisSplitLineLineStyleType: "dashed",
  seriesNameScatter: "scatter",
  seriesTypeScatter: "scatter",
  seriesDataSetIndexScatter: 0,
  seriesNameLine: "line",
  seriesTypeLine: "line",
  seriesSmoothLine: true,
  seriesDataSetIndexLine: 1,
  seriesSymbolSize: 0.1,
  seriesSymbol: "circle",
  seriesLabelShow: true,
  serieFontSize: 16,
  serieLabelLayoutDx: -20,
  serieEncodeLabel: 2,
  serieEncodeTooltip: 1,
};

export default Exponential;
