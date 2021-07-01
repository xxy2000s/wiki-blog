<template>
  <!-- <el-badge :value="12"
              class="item">

      <div data-v-d09d0394=""
           data-v-5051a45a=""
           class="tag-wrap green">
        <div data-v-d09d0394=""
             class="arrow"></div>
        <div data-v-d09d0394=""
             class="dot-wrap">
          <div data-v-d09d0394=""
               class="dot"></div>
        </div>
        <div data-v-d09d0394=""
             class="tag-text-wrap isNotCateFlag">javascript</div>
      </div>
    </el-badge> -->

  <!-- <div data-v-d09d0394=""
           data-v-5051a45a=""
           class="tag-wrap green">
        <div data-v-d09d0394=""
             class="arrow"></div>
        <div data-v-d09d0394=""
             class="dot-wrap">
          <div data-v-d09d0394=""
               class="dot"></div>
        </div>
        <div data-v-d09d0394=""
             class="tag-text-wrap isNotCateFlag">javascript</div>
      </div> -->
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

<style scoped>
.tag-wrap[data-v-d09d0394] {
  display: inline-block;
  margin-right: 5px;
}
.green .arrow[data-v-d09d0394] {
  border-color: transparent #07c145 transparent transparent;
}

.tag-wrap .arrow[data-v-d09d0394] {
  display: inline-block;
  width: 0;
  height: 0;
  border-width: 9px;
  border-style: solid;
  border-color: transparent #1da1f2 transparent transparent;
}
.green .arrow[data-v-d09d0394] {
  border-color: transparent #07c145 transparent transparent;
}
.tag-wrap .arrow[data-v-d09d0394] {
  display: inline-block;
  width: 0;
  height: 0;
  border-width: 9px;
  border-style: solid;
}
.green .dot-wrap[data-v-d09d0394],
.green .tag-text-wrap[data-v-d09d0394] {
  background-color: #07c145;
}
.tag-wrap .dot-wrap[data-v-d09d0394] {
  display: inline-block;
  width: 6px;
  height: 18px;
  background-color: #1da1f2;
}
.green .dot-wrap[data-v-d09d0394],
.green .tag-text-wrap[data-v-d09d0394] {
  background-color: #07c145;
}
.tag-wrap .dot-wrap .dot[data-v-d09d0394] {
  background-color: #fff;
  margin-top: 7px;
  vertical-align: center;
  height: 4px;
  width: 4px;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  -webkit-box-shadow: 0 0 0 1px rgb(0 0 0 / 30%);
  box-shadow: 0 0 0 1px rgb(0 0 0 / 30%);
  border-radius: 50%;
}

.green .dot-wrap[data-v-d09d0394],
.green .tag-text-wrap[data-v-d09d0394] {
  background-color: #07c145;
}
.tag-wrap .tag-text-wrap[data-v-d09d0394] {
  display: inline-block;
  vertical-align: top;
  color: #fff;
  padding: 0 5px;
  height: 18px;
  line-height: 18px;
  border-bottom-right-radius: 5px;
  border-top-right-radius: 5px;
}
</style>
