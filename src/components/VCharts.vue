<template>
  <div>
    <div id="main" :style="{ ...styleSize, display: 'inline-block' }" />
  </div>
</template>

<script>
import styleUtils from "@/utils/styleUtils.js";
import echarts from "echarts";
export default {
  props: {
    width: {
      type: [String, Number],
      default: 500
    },
    height: {
      type: [String, Number],
      default: 500
    },
    value: {
      type: Object,
      default: null
    }
  },
  computed: {
    styleSize() {
      return {
        width: styleUtils.toSizeString(this.width),
        height: styleUtils.toSizeString(this.height)
      };
    }
  },
  mounted() {
    if (this.value) {
      this.dataRender(this.value);
    }
  },
  watch: {
    value: {
      handler(newValue) {
        this.dataRender(newValue);
      },
      deep: true
    }
  },
  methods: {
    dataRender(data) {
      let myChart = echarts.init(document.getElementById("main"));
      // 使用刚指定的配置项和数据显示图表。
      myChart.setOption(data);
    }
  }
};
</script>

<style></style>
