import React, { useEffect, useRef } from "react";
import PropTypes from "prop-types";
import * as echarts from "echarts";

const Dynamic = ({
  title,
  center,
  tooltipTrigger,
  tooltipAxisPointerType,
  tooltipLabelBgColor,
  toolboxDataViewReadOnly,
  dataZoomShow,
  dataZoomStart,
  dataZoomEnd,
  xAxisTypeFirst,
  xAxisBoundaryGapFirst,
  xAxisNameFirst,
  xAxisTypeSecondary,
  xAxisBoundaryGapSecondary,
  yAxisTypeLeft,
  yAxisScaleLeft,
  yAxisNameLeft,
  maxLeft,
  minLeft,
  boundaryGapLeft,
  yAxisTypeRight,
  yAxisScaleRight,
  yAxisNameRight,
  maxRight,
  minRight,
  boundaryGapRight,
  seriesNameBar,
  seriesTypeBar,
  seriesXindexBar,
  seriesYindexBar,
  seriesNameLine,
  seriesTypeLine,
}) => {
  const chartRef = useRef(null);

  useEffect(() => {
    const myChart = echarts.init(chartRef.current);

    const categories = (() => {
      let now = new Date();
      let res = [];
      let len = 10;
      while (len--) {
        res.unshift(now.toLocaleTimeString().replace(/^\D*/, ""));
        now = new Date(+now - 2000);
      }
      return res;
    })();

    const categories2 = (() => {
      let res = [];
      let len = 10;
      while (len--) {
        res.push(10 - len - 1);
      }
      return res;
    })();

    const data = (() => {
      let res = [];
      let len = 10;
      while (len--) {
        res.push(Math.round(Math.random() * 1000));
      }
      return res;
    })();

    const data2 = (() => {
      let res = [];
      let len = 0;
      while (len < 10) {
        res.push(+(Math.random() * 10 + 5).toFixed(1));
        len++;
      }
      return res;
    })();

    const option = {
      title: {
        text: title,
        left: center,
      },
      tooltip: {
        trigger: tooltipTrigger,
        axisPointer: {
          type: tooltipAxisPointerType,
          label: {
            backgroundColor: tooltipLabelBgColor,
          },
        },
      },
      toolbox: {
        feature: {
          dataView: {
            readOnly: toolboxDataViewReadOnly,
          },
        },
      },
      dataZoom: {
        show: dataZoomShow,
        start: dataZoomStart,
        end: dataZoomEnd,
      },
      xAxis: [
        {
          type: xAxisTypeFirst,
          boundaryGap: xAxisBoundaryGapFirst,
          data: categories,
          name: xAxisNameFirst,
        },
        {
          type: xAxisTypeSecondary,
          boundaryGap: xAxisBoundaryGapSecondary,
          data: categories2,
        },
      ],
      yAxis: [
        {
          type: yAxisTypeLeft,
          scale: yAxisScaleLeft,
          name: yAxisNameLeft,
          max: maxLeft,
          min: minLeft,
          boundaryGap: boundaryGapLeft,
        },
        {
          type: yAxisTypeRight,
          scale: yAxisScaleRight,
          name: yAxisNameRight,
          max: maxRight,
          min: minRight,
          boundaryGap: boundaryGapRight,
        },
      ],
      series: [
        {
          name: seriesNameBar,
          type: seriesTypeBar,
          xAxisIndex: seriesXindexBar,
          yAxisIndex: seriesYindexBar,
          data: data,
        },
        {
          name: seriesNameLine,
          type: seriesTypeLine,
          data: data2,
        },
      ],
    };

    let count = 11;
    setInterval(() => {
      let axisData = new Date().toLocaleTimeString().replace(/^\D*/, "");
      data.shift();
      data.push(Math.round(Math.random() * 1000));
      data2.shift();
      data2.push(+(Math.random() * 10 + 5).toFixed(1));
      categories.shift();
      categories.push(axisData);
      categories2.shift();
      categories2.push(count++);
      myChart.setOption({
        xAxis: [
          {
            data: categories,
          },
          {
            data: categories2,
          },
        ],
        series: [
          {
            data: data,
          },
          {
            data: data2,
          },
        ],
      });
    }, 2100);

    myChart.setOption(option);

    return () => {
      myChart.dispose();
    };
  }, [
    title,
    center,
    tooltipTrigger,
    tooltipAxisPointerType,
    tooltipLabelBgColor,
    toolboxDataViewReadOnly,
    dataZoomShow,
    dataZoomStart,
    dataZoomEnd,
    xAxisTypeFirst,
    xAxisBoundaryGapFirst,
    xAxisNameFirst,
    xAxisTypeSecondary,
    xAxisBoundaryGapSecondary,
    yAxisTypeLeft,
    yAxisScaleLeft,
    yAxisNameLeft,
    maxLeft,
    minLeft,
    boundaryGapLeft,
    yAxisTypeRight,
    yAxisScaleRight,
    yAxisNameRight,
    maxRight,
    minRight,
    boundaryGapRight,
    seriesNameBar,
    seriesTypeBar,
    seriesXindexBar,
    seriesYindexBar,
    seriesNameLine,
    seriesTypeLine,
  ]);

  return <div id="dynamic-container" ref={chartRef} />;
};

Dynamic.propTypes = {
  title: PropTypes.string,
  center: PropTypes.string,
  tooltipTrigger: PropTypes.string,
  tooltipAxisPointerType: PropTypes.string,
  tooltipLabelBgColor: PropTypes.string,
  toolboxDataViewReadOnly: PropTypes.bool,
  dataZoomShow: PropTypes.bool,
  dataZoomStart: PropTypes.number,
  dataZoomEnd: PropTypes.number,
  xAxisTypeFirst: PropTypes.string,
  xAxisBoundaryGapFirst: PropTypes.bool,
  xAxisNameFirst: PropTypes.string,
  xAxisTypeSecondary: PropTypes.string,
  xAxisBoundaryGapSecondary: PropTypes.bool,
  yAxisTypeLeft: PropTypes.string,
  yAxisScaleLeft: PropTypes.bool,
  yAxisNameLeft: PropTypes.string,
  maxLeft: PropTypes.number,
  minLeft: PropTypes.number,
  boundaryGapLeft: PropTypes.array,
  yAxisTypeRight: PropTypes.string,
  yAxisScaleRight: PropTypes.bool,
  yAxisNameRight: PropTypes.string,
  maxRight: PropTypes.number,
  minRight: PropTypes.number,
  boundaryGapRight: PropTypes.array,
  seriesNameBar: PropTypes.string.isRequired,
  seriesTypeBar: PropTypes.string.isRequired,
  seriesXindexBar: PropTypes.number,
  seriesYindexBar: PropTypes.number,
  seriesNameLine: PropTypes.string.isRequired,
  seriesTypeLine: PropTypes.string.isRequired,
};

Dynamic.defaultProps = {
  title: "Dynamic Data",
  center: "center",
  tooltipTrigger: "axis",
  tooltipAxisPointerType: "cross",
  tooltipLabelBgColor: "#283b56",
  toolboxDataViewReadOnly: false,
  dataZoomShow: false,
  dataZoomStart: 0,
  dataZoomEnd: 100,
  xAxisTypeFirst: "category",
  xAxisBoundaryGapFirst: true,
  xAxisNameFirst: "Time",
  xAxisTypeSecondary: "category",
  xAxisBoundaryGapSecondary: true,
  yAxisTypeLeft: "value",
  yAxisScaleLeft: true,
  yAxisNameLeft: "Price",
  maxLeft: 30,
  minLeft: 0,
  boundaryGapLeft: [0.2, 0.2],
  yAxisTypeRight: "value",
  yAxisScaleRight: true,
  yAxisNameRight: "Order",
  maxRight: 1200,
  minRight: 0,
  boundaryGapRight: [0.2, 0.2],
  seriesNameBar: "Dynamic Bar",
  seriesTypeBar: "bar",
  seriesXindexBar: 1,
  seriesYindexBar: 1,
  seriesNameLine: "Dynamic Line",
  seriesTypeLine: "line",
};

export default Dynamic;
