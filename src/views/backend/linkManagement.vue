<template>
  <el-main>
    <div
      style="
        display: flex;
        justify-content: space-between;
        margin-bottom: 10px;
        align-items:center
      "
    >
        <h1 style="text-align:center;color:#2c3e50">管理清单链接</h1>

      <router-link :to="'/management/link'" style="padding-right: 20px">
        <el-button
          style="padding-right: 20px; background-color: #4ab3f4; color: #fff;posision:relative"
          >新建</el-button
        >
      </router-link>
    </div>
    <el-table :data="tableData" ref="tableData" border style="width: 100%">
      <el-table-column prop="id" label="#" width="60" align="center">
      </el-table-column>
      <el-table-column prop="title" label="链接名" width="200" align="center">
      </el-table-column>
      <el-table-column prop="url" label="链接地址" width="280" align="center">
      </el-table-column>
      <el-table-column prop="sort" label="链接类别" width="150" align="center">
      </el-table-column>
      <el-table-column prop="img" label="图片地址" width="280" align="center">
      </el-table-column>
      <el-table-column prop="desc" label="描述" width="250" align="center">
      </el-table-column>
      <el-table-column prop="process" label="进度(%)" width="80" align="center">
      </el-table-column>
      <el-table-column
        prop="created_at"
        label="创建日期"
        width="180"
        align="center"
      >
      </el-table-column>
      <el-table-column label="操作" align="center">
        <template v-slot="scope">
          <el-button
            type="success"
            style="padding-right: 20px"
            @click="
              dialogFormVisible = true;
              test(scope.row.id);
              showCurrentLink(scope.row.id);
            "
            >编辑</el-button
          >
        </template>
      </el-table-column>
    </el-table>

    <el-dialog v-model="dialogFormVisible">
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
                ruleForm.id,
                ruleForm.title,
                ruleForm.url,
                sort,
                ruleForm.img,
                ruleForm.process,
                ruleForm.desc
              )
            "
            >提交修改</el-button
          >
          <el-button @click="dialogFormVisible = false">取消</el-button>
        </el-form-item>
      </el-form>
    </el-dialog>
  </el-main>
</template>

<script>
import { getAllLinks, updateLink } from "../../api/Link.js";
import { ref, onMounted } from "vue";
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
      tableData: [],
      dialogFormVisible: false,
      ruleForm: {
        title: "",
        url: "",
        img: "",
        sort: "",
        desc: "",
        process: "",
        id: "",
      },
    };
  },
  mounted() {
    this.showLinkList();
  },
  methods: {
    submitForm(formName, id, title, url, sort, img, process, desc) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          this.updateLink(id, title, url, sort, img, process, desc);
          this.dialogFormVisible = false;
          alert("submit!");
        } else {
          alert("Error!");
          return false;
        }
      });
    },
    test(id) {
      this.ruleForm.id = id;
      console.log(id);
    },
    showLinkList() {
      getAllLinks()
        .then((res) => {
          this.tableData = [];
          for (let i = 0; i < res.length; i++) {
            let result = new Array();

            result["id"] = i + 1;
            result["title"] = res[i].title;
            result["url"] = res[i].url;
            result["img"] = res[i].img;
            result["sort"] = res[i].sort;
            result["desc"] = res[i].desc;
            result["process"] = res[i].process;
            result["created_at"] = res[i].created_at;
            this.tableData.push(result);
          }
        })
        .catch((err) => {
          console.log("get all links error");
        });
    },
    updateLink(id, title, url, sort, img, process, desc) {
      updateLink(id, title, url, sort, img, process, desc)
        .then((res) => {
          console.log(process);
          console.log("Successfully update link");
          this.showLinkList();
        })
        .catch((err) => {
          console.log("update link error");
        });
    },
    showCurrentLink(id) {
      this.ruleForm.title = this.tableData[id - 1].title;
      this.ruleForm.url = this.tableData[id - 1].url;
      this.ruleForm.img = this.tableData[id - 1].img;
      this.ruleForm.sort = this.tableData[id - 1].sort;
      this.ruleForm.desc = this.tableData[id - 1].desc;
      this.ruleForm.process = this.tableData[id - 1].process;
      console.log(this.ruleForm);
    },
  },
};
</script>

<style></style>
