
<template>
<el-calendar>
  <template #dateCell="{data}">
    <div>
    <el-button v-if="data.isSelected" @click="show(data);dialogFormVisible = true">新建</el-button>
    <el-button v-if="data.isSelected" @click="show(data);tableVisible = true">查看</el-button>
    <p :class="data.isSelected ? 'is-selected' : ''" >
      {{ data.day.split('-').slice(1).join('-') }} {{ data.isSelected ? '✔️' : '' }}
    </p>
    </div>
  </template>
</el-calendar>

<el-dialog v-model="tableVisible">
<el-table :data="tableData" style="width: 100%" v-model="tableVisible">
      <el-table-column
        prop="start"
        label="start"
        width="100">
      </el-table-column>
    <el-table-column
        prop="end"
        label="end"
        width="100"
>
      </el-table-column>
      <el-table-column
        prop="type"
        label="分类"
        width="90">
      </el-table-column>
      <el-table-column
        prop="content"
        label="TODO"
        width="180">
      </el-table-column>
  </el-table>
</el-dialog>

<el-dialog v-model="dialogFormVisible">
  <el-form ref="form" :model="form" label-width="80px">

     <el-form-item label="活动时间">
    <el-col :span="11">
      <el-time-picker placeholder="start" v-model="form.date1" style="width: 100%;"></el-time-picker>
    </el-col>
    <el-col class="line" :span="2">-</el-col>
    <el-col :span="11">
      <el-time-picker placeholder="end" v-model="form.date2" style="width: 100%;"></el-time-picker>
    </el-col>
    </el-form-item>

  <el-form-item label="分类">
    <el-select v-model="form.type" placeholder="请选择类别">
      <el-option label="实习" value="internship"></el-option>
      <el-option label="待办" value="emergency"></el-option>
    </el-select>
  </el-form-item>

   <el-form-item label="TODO">
    <el-input type="textarea" v-model="form.content"></el-input>
  </el-form-item>

  <el-form-item>
    <router-link to="/blogs">
    <el-button type="primary" @click="dialogFormVisible=false">提交</el-button>
    </router-link>
    <el-button @click="dialogFormVisible = false">取消</el-button>
  </el-form-item>
  </el-form>
</el-dialog>
</template>

<script>
    export default{
       data(){
        return{
            //id: "",
            dialogFormVisible: false,
            tableVisible:false,
            form: {
              type: '',
              content: "",
              date1:"",
              date2:"",
            },
            tableData:[
              { 
                start:"19:31:23",
                end:"20:23:21",
                type:"daily",
                content:"完成todolist 设计"
              },
              { 
                start:"19:31:23",
                end:"20:23:21",
                type:"daily",
                content:"完成todolist 设计"
              },
              { 
                start:"19:31:23",
                end:"20:23:21",
                type:"daily",
                content:"完成todolist 设计"
              },
            ]
        }
    },
    methods:{
        show(params){
            console.log(params)
        }
    } 
    }
</script>

<style>
.is-selected {
    color: #1989FA;
  }
</style>
