<template>
  <el-main>
    <div
      style="
        display: flex;
        justify-content: center;
        padding-left: 350px;
        margin-bottom: 10px;
      "
    >
      <el-input
        class="input-new-tag"
        v-if="inputVisible"
        v-model="inputValue"
        ref="saveTagInput"
        size="small"
        @keyup.enter="handleInputConfirm"
        @blur="handleInputConfirm"
      >
      </el-input>

      <el-button v-else class="button-new-tag" size="small" @click="showInput"
        >+ New Tag</el-button
      >
    </div>

    <el-table :data="tableData" ref="tableData" border style="width: 100%">
      <el-table-column prop="id" label="#" width="60" align="center">
      </el-table-column>
      <el-table-column prop="name" label="分类名称" width="300" align="center">
      </el-table-column>
      <el-table-column prop="count" label="数量" width="100" align="center">
      </el-table-column>
      <el-table-column
        prop="parent"
        label="上级分类"
        width="100"
        align="center"
      >
      </el-table-column>

      <el-table-column
        prop="created_at"
        label="创建日期"
        width="380"
        align="center"
      >
      </el-table-column>
      <el-table-column label="操作">
        <template v-slot="scope">
          <router-link
            :to="'/editor/' + scope.row.aid"
            style="padding-right: 20px"
          >
            <el-button type="success" style="padding-right: 20px"
              >编辑</el-button
            >
          </router-link>
          <router-link
            :to="'/detail/' + scope.row.aid"
            style="padding-right: 20px"
          >
            <el-button type="info" style="padding-right: 20px">查看</el-button>
          </router-link>
          <el-button type="danger" @click="deleteArticle(scope.row.aid)">
            删除</el-button
          >
        </template>
      </el-table-column>
    </el-table>
  </el-main>
</template>

<script>
import { getAllCategories } from "../../api/Category.js";
export default {
  data() {
    return {
      tableData: [],
      inputVisible: false,
      inputValue: "",
    };
  },
  mounted() {
    this.init();
  },
  methods: {
    showInput() {
        this.inputVisible = true;
        this.$nextTick(_ => {
          this.$refs.saveTagInput.$refs.input.focus();
        });
      },
      handleInputConfirm() {
        let inputValue = this.inputValue;
        this.inputVisible = false;
        this.inputValue = '';
      },
    showAllCategories() {
      getAllCategories()
        .then((res) => {
          for (let i = 0; i < res.length; i++) {
            let result = new Array();
            result["id"] = i + 1;
            result["name"] = res[i].name;
            result["count"] = res[i].count;
            result["order"] = res[i].order;
            result["parent"] = res[i].parent;
            result["created_at"] = res[i].created_at;
            this.tableData.push(result);
          }
          console.log(this.tableData);
        })
        .catch((err) => {
          console.log("get all categories error");
        });
    },
    createCategory(c_name) {
      createCategory(c_name)
        .then((res) => {
          console.log("Successfully create category " + c_name);
        })
        .catch((err) => {
          console.log("Create category error");
        });
    },
    init() {
      this.showAllCategories();
    },
  },
};
</script>

<style></style>
