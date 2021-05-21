<template>
    <div class="order">
        <h3>基于Vditor的markdown编辑器</h3>
        <div id="vditor">test</div>
    </div>
</template>
<script>
import Vditor from "vditor"
import "vditor/dist/index.css"
export default {
    data(){
        return{
            contentEditor:""
        }
    },
    mounted(){
        this.contentEditor = new Vditor("vditor",{
            height:360,
            toolbarConfig:{
                pin:true
            },
            cache:{
                enable:false
            },
            after:()=>{
                this.contentEditor.setValue("hello,Vditor+Vue!")
            }
        })
    },
    methods:{
 
    }
}
</script>