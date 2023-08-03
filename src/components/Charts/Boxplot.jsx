import React, { useEffect, useRef } from "react";
import PropTypes from "prop-types";
import * as echarts from "echarts";

const Boxplot = ({
  title,
  center,
  boxText,
  boxTextBgColor,
  boxTextBorderWidth,
  boxTextStyleFontSize,
  boxTextLeft,
  boxTextTop,
  originalData,
  transformType,
  transformConfigItemName,
  datasetFromDataSetIndex,
  datasetFromTransformResult,
  tooltipTrigger,
  tooltipAxisPointerType,
  gridLeft,
  gridRight,
  gridBottom,
  yAxisType,
  yAxisBoundaryGap,
  yAxisNameGap,
  yAxisSplitAreaShow,
  yAxisSplitLineShow,
  xAxisType,
  xAxisName,
  xAxisSplitAreaShow,
  seriesName,
  seriesType,
  seriesDataSetIndex,
  seriesNameButtles,
  seriesTypeButtles,
  seriesEncodeButtlesX,
  seriesEncodeButtlesY,
  seriesDataSetIndexButtles,
}) => {
  const chartRef = useRef(null);

  useEffect(() => {
    const createChart = () => {
      const chart = echarts.init(chartRef.current);
      const option = {
        title: [
          {
            text: title,
            left: center,
          },
          {
            text: boxText,
            borderColor: boxTextBgColor,
            borderWidth: boxTextBorderWidth,
            textStyle: {
              fontSize: boxTextStyleFontSize,
            },
            left: boxTextLeft,
            top: boxTextTop,
          },
        ],
        dataset: [
          {
            source: originalData,
          },
          {
            transform: {
              type: transformType,
              config: {
                itemNameFormatter: function (params) {
                  return transformConfigItemName + params.value;
                },
              },
            },
          },
          {
            fromDatasetIndex: datasetFromDataSetIndex,
            fromTransformResult: datasetFromTransformResult,
          },
        ],
        tooltip: {
          trigger: tooltipTrigger,
          axisPointer: {
            type: tooltipAxisPointerType,
          },
        },
        grid: {
          left: gridLeft,
          right: gridRight,
          bottom: gridBottom,
        },
        yAxis: {
          type: yAxisType,
          boundaryGap: yAxisBoundaryGap,
          nameGap: yAxisNameGap,
          splitArea: {
            show: yAxisSplitAreaShow,
          },
          splitLine: {
            show: yAxisSplitLineShow,
          },
        },
        xAxis: {
          type: xAxisType,
          name: xAxisName,
          splitArea: {
            show: xAxisSplitAreaShow,
          },
        },
        series: [
          {
            name: seriesName,
            type: seriesType,
            datasetIndex: seriesDataSetIndex,
          },
          {
            name: seriesNameButtles,
            type: seriesTypeButtles,
            encode: { x: seriesEncodeButtlesX, y: seriesEncodeButtlesY },
            datasetIndex: seriesDataSetIndexButtles,
          },
        ],
      };
      chart.setOption(option);
    };

    createChart();
  }, [
    title,
    center,
    boxText,
    boxTextBgColor,
    boxTextBorderWidth,
    boxTextStyleFontSize,
    boxTextLeft,
    boxTextTop,
    originalData,
    transformType,
    transformConfigItemName,
    datasetFromDataSetIndex,
    datasetFromTransformResult,
    tooltipTrigger,
    tooltipAxisPointerType,
    gridLeft,
    gridRight,
    gridBottom,
    yAxisType,
    yAxisBoundaryGap,
    yAxisNameGap,
    yAxisSplitAreaShow,
    yAxisSplitLineShow,
    xAxisType,
    xAxisName,
    xAxisSplitAreaShow,
    seriesName,
    seriesType,
    seriesDataSetIndex,
    seriesNameButtles,
    seriesTypeButtles,
    seriesEncodeButtlesX,
    seriesEncodeButtlesY,
    seriesDataSetIndexButtles,
  ]);

  return <div id="boxplot-container" ref={chartRef} />;
};

Boxplot.propTypes = {
  title: PropTypes.string.isRequired,
  center: PropTypes.string.isRequired,
  boxText: PropTypes.string.isRequired,
  boxTextBgColor: PropTypes.string.isRequired,
  boxTextBorderWidth: PropTypes.number.isRequired,
  boxTextStyleFontSize: PropTypes.number.isRequired,
  boxTextLeft: PropTypes.string.isRequired,
  boxTextTop: PropTypes.string.isRequired,
  // originalData: PropTypes.array.isRequired,
  transformType: PropTypes.string.isRequired,
  transformConfigItemName: PropTypes.string.isRequired,
  datasetFromDataSetIndex: PropTypes.number.isRequired,
  datasetFromTransformResult: PropTypes.number.isRequired,
  tooltipTrigger: PropTypes.string.isRequired,
  tooltipAxisPointerType: PropTypes.string.isRequired,
  gridLeft: PropTypes.string.isRequired,
  gridRight: PropTypes.string.isRequired,
  gridBottom: PropTypes.string.isRequired,
  yAxisType: PropTypes.string.isRequired,
  yAxisBoundaryGap: PropTypes.bool.isRequired,
  yAxisNameGap: PropTypes.number.isRequired,
  yAxisSplitAreaShow: PropTypes.bool.isRequired,
  yAxisSplitLineShow: PropTypes.bool.isRequired,
  xAxisType: PropTypes.string.isRequired,
  xAxisName: PropTypes.string.isRequired,
  xAxisSplitAreaShow: PropTypes.bool.isRequired,
  seriesName: PropTypes.string.isRequired,
  seriesType: PropTypes.string.isRequired,
  seriesDataSetIndex: PropTypes.number.isRequired,
  seriesNameButtles: PropTypes.string.isRequired,
  seriesTypeButtles: PropTypes.string.isRequired,
  seriesEncodeButtlesX: PropTypes.number.isRequired,
  seriesEncodeButtlesY: PropTypes.number.isRequired,
  seriesDataSetIndexButtles: PropTypes.number.isRequired,
};

Boxplot.defaultProps = {
  title: "Michelson-Morley Experiment",
  center: "center",
  boxText: "upper: Q3 + 1.5 * IQR \nlower: Q1 - 1.5 * IQR",
  boxTextBgColor: "#999",
  boxTextBorderWidth: 1,
  boxTextStyleFontSize: 14,
  boxTextLeft: "10%",
  boxTextTop: "90%",
  originalData: [],
  transformType: "boxplot",
  transformConfigItemName: "expr",
  datasetFromDataSetIndex: 1,
  datasetFromTransformResult: 1,
  tooltipTrigger: "item",
  tooltipAxisPointerType: "shadow",
  gridLeft: "10%",
  gridRight: "10%",
  gridBottom: "15%",
  yAxisType: "category",
  yAxisBoundaryGap: true,
  yAxisNameGap: 30,
  yAxisSplitAreaShow: false,
  yAxisSplitLineShow: false,

  xAxisType: "value",
  xAxisName: "km/s minus 299,000",
  xAxisSplitAreaShow: true,

  seriesName: "boxplot",
  seriesType: "boxplot",
  seriesDataSetIndex: 1,

  seriesNameButtles: "outlier",
  seriesTypeButtles: "scatter",
  seriesEncodeButtlesX: 1,
  seriesEncodeButtlesY: 0,
  seriesDataSetIndexButtles: 2,
};

export default Boxplot;
