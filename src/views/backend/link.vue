<template>
  <el-main>
    <h1 style="text-align: center; color: #2c3e50">为清单提供链接</h1>
    <el-form
      :model="ruleForm"
      :rules="rules"
      ref="ruleForm"
      label-width="100px"
      class="demo-ruleForm"
    >
      <el-form-item label="链接名称" prop="title">
        <el-input v-model="ruleForm.title"></el-input>
      </el-form-item>
      <el-form-item label="链接地址" prop="url">
        <el-input type="textarea" v-model="ruleForm.url"></el-input>
      </el-form-item>
      <el-form-item label="链接类别" prop="sort">
        <!-- <el-select v-model="ruleForm.sort" placeholder="请选择链接类别">
          <el-option label="区域一" value="shanghai"></el-option>
          <el-option label="区域二" value="beijing"></el-option>
        </el-select> -->
        <el-autocomplete
          class="inline-input"
          v-model="sort"
          :fetch-suggestions="querySearch"
          placeholder="请输入内容"
          @select="handleSelect"
        ></el-autocomplete>
      </el-form-item>
      <el-form-item label="图片链接" prop="img">
        <el-input type="textarea" v-model="ruleForm.img"></el-input>
      </el-form-item>
      <el-form-item label="当前进度" prop="process">
        <el-slider v-model="ruleForm.process" :step="10" show-stops>
        </el-slider>
      </el-form-item>
      <el-form-item label="链接描述" prop="desc">
        <el-input type="textarea" v-model="ruleForm.desc"></el-input>
      </el-form-item>

      <el-form-item>
        <el-button
          type="primary"
          @click="
            submitForm(
              'ruleForm',
              ruleForm.title,
              ruleForm.url,
              sort,
              ruleForm.img,
              ruleForm.process,
              ruleForm.desc
            )
          "
          >立即创建</el-button
        >
        <el-button @click="resetForm('ruleForm')">重置</el-button>
        <router-link to="/management/links">
          <el-button type="success" style="float: right">管理链接</el-button>
        </router-link>
      </el-form-item>
    </el-form></el-main
  >
</template>

<script>
import { ref, onMounted } from "vue";
import { createLink, getAllLinks } from "../../api/Link.js";
export default {
  setup() {
    const restaurants = ref([]);
    const querySearch = (queryString, cb) => {
      var results = queryString
        ? restaurants.value.filter(createFilter(queryString))
        : restaurants.value;
      // 调用 callback 返回建议列表的数据
      cb(results);
    };

    const createFilter = (queryString) => {
      return (restaurant) => {
        return (
          restaurant.value.toLowerCase().indexOf(queryString.toLowerCase()) ===
          0
        );
      };
    };
    function showAllLinks() {
      getAllLinks()
        .then((res) => {
          let result = [];
          let mp = new Map();
          for (let i = 0; i < res.length; i++) {
            if (mp.has(res[i].sort)) {
              continue;
            }
            let tmp = { value: res[i].sort };
            result.push(tmp);
            mp.set(res[i].sort, 1);
          }
          restaurants.value = result;
          console.log(restaurants);
        })
        .catch((err) => {
          console.log("get all links error");
        });
    }
    const loadAll = () => {
      showAllLinks();
    };
    const handleSelect = (item) => {
      console.log(item);
    };
    onMounted(() => {
      loadAll();
      // restaurants.value = loadAll();
    });
    return {
      restaurants,
      sort: ref(""),
      querySearch,
      createFilter,
      loadAll,
      handleSelect,
    };
  },

  data() {
    return {
      ruleForm: {
        title: "",
        url: "",
        sort: "",
        img: "",
        process: 0,
        desc: "",
      },
      // querySearch:["frontend", 'test'],
      rules: {
        title: [{ required: true, message: "请输入链接名称", trigger: "blur" }],
        url: [{ required: true, message: "请输入链接地址", trigger: "blur" }],
        sort: [{ message: "请选择链接类别" }],
        img: [
          {
            message: "请输入图片地址",
            trigger: "blur",
          },
        ],
        desc: [{ message: "请填写链接描述", trigger: "blur" }],
      },
    };
  },
  methods: {
    submitForm(formName, title, url, sort, img, process, desc) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          console.log(process);
          this.send(title, url, sort, img, process, desc);
          this.resetForm(formName);
          alert("submit!");
        } else {
          alert("Error!");
          return false;
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    },
    send(title, url, sort, img, process, desc) {
      createLink(title, url, sort, img, process, desc)
        .then((res) => {
          console.log("Successfully create link " + title);
        })
        .catch((err) => {
          console.log(err);
          console.log("create link error");
        });
    },
  },
};
</script>

<style></style>
