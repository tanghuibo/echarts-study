<template>
  <div>
    <el-form ref="form" :model="form" label-width="80px">
      <el-form-item label="数据">
        <vue-json-editor
          v-model="form.echartsData"
          :expandedOnStart="true"
          lang="zh"
          mode="code"
        ></vue-json-editor>
      </el-form-item>
      <el-form-item label="宽度">
        <el-input v-model="form.width" />
      </el-form-item>
      <el-form-item label="高度">
        <el-input v-model="form.height" />
      </el-form-item>
    </el-form>
    <div class="charts-block">
      <v-charts
        v-if="showFlag"
        ref="vchart"
        v-model="form.echartsData"
        :width="form.width"
        :height="form.height"
      />
      <el-button @click="flash">刷新</el-button>
      <el-button>下载</el-button>
    </div>
  </div>
</template>

<style>
.charts-block {
  text-align: center;
}
</style>
<script>
import VueJsonEditor from "vue-json-editor";

import VCharts from "./components/VCharts";
export default {
  components: {
    VCharts,
    VueJsonEditor
  },
  mounted() {
    setTimeout(() => {
      this.option.title.text = "ECharts 高级示例";
    }, 2000);
  },
  methods: {
    flash() {
      this.showFlag = false;
      this.$nextTick(() => {
        this.showFlag = true;
      });
    }
  },
  watch: {
    "form.width": {
      handler() {
        this.flash();
      }
    },
    "form.height": {
      handler() {
        this.flash();
      }
    }
  },
  data() {
    return {
      showFlag: true,
      form: {
        echartsData: {
          title: {
            text: "ECharts 入门示例"
          },
          tooltip: {},
          legend: {
            data: ["销量"]
          },
          xAxis: {
            data: ["衬衫", "羊毛衫", "雪纺衫", "裤子", "高跟鞋", "袜子"]
          },
          yAxis: {},
          series: [
            {
              name: "销量",
              type: "bar",
              data: [5, 20, 36, 10, 10, 20]
            }
          ]
        },
        width: "500px",
        height: "500px"
      }
    };
  }
};
</script>
