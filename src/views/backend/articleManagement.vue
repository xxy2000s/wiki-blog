<template>

  <el-main>
    <div style="display: flex; justify-content: center;padding-left:350px;margin-bottom:10px">
      <router-link :to="'/article'" style="padding-right: 20px">
        <el-button  style="padding-right: 20px;background-color:#4ab3f4;color: #fff;">新建</el-button>
      </router-link>
    </div>
    <el-table :data="tableData" ref="tableData" border style="width: 100%">
      <el-table-column prop="id" label="#" width="60" align="center">
      </el-table-column>
      <el-table-column prop="name" label="文章" width="300"> </el-table-column>
      <el-table-column prop="category" label="分类" width="180" align="center">
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
import { getArticleList } from "../../api/getArticleList.js";
import { deleteArticle } from "../../api/Article.js";
import { ref } from "vue";
export default {
  data() {
    return {
      tableData: [],
    };
  },
  mounted() {
    this.showArticleList();
  },
  methods: {
    showArticleList() {
      getArticleList(1)
        .then((res) => {
          this.tableData = []
          for (let i = 0; i < res.length; i++) {
            let result = new Array();
            result["id"] = i + 1;
            result["name"] = res[i].title;
            result["category"] = res[i].Category.name;
            result["created_at"] = res[i].created_at;
            result["aid"] = res[i].id;
            this.tableData.push(result);
          }
        })
        .catch((err) => {
          console.log("get article list error");
        });
    },
    deleteArticle(aid) {
      deleteArticle(aid)
        .then((res) => {
          console.log("delete succefully");
          this.showArticleList()
        })
        .catch((err) => {
          console.log("delete failed");
        });
    },
  },
};
</script>

<style>

</style>
