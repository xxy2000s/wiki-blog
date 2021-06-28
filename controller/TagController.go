package controller

import (
	"github.com/gin-gonic/gin"
	"github.com/jinzhu/gorm"
	"log"
	"wiki/common"
	"wiki/model"
	"wiki/response"
	"wiki/vo"
)

type ItagController interface {
	RestController
}

type TagController struct {
	DB *gorm.DB
}

func (t TagController) Create(ctx *gin.Context){
	var requestTag vo.CreateTagRequest
	if err:=ctx.ShouldBind(&requestTag);err!=nil{
		log.Print(err.Error())
		response.Fail(ctx, nil, "标签验证错误")
		return
	}

	TagPost := model.Tag{
		ID :requestTag.ID,
		Name: requestTag.Name,
		Count: requestTag.Count,
	}

	if err:=t.DB.Create(&TagPost).Error;err!=nil{
		log.Print("创建分类失败")
		panic(err)
		return
	}
	response.Success(ctx, nil, "分类创建成功")

}

func (t TagController) Update(ctx *gin.Context) {
	var requestTag vo.CreateTagRequest
	if err:=ctx.ShouldBind(&requestTag);err!=nil{
		log.Print(err.Error())
		response.Fail(ctx, nil, "标签验证错误")
		return
	}

	tagId := ctx.Params.ByName("id")
	var tag model.Tag
	if t.DB.Where("id = ?", tagId).First(&tag).RecordNotFound(){
		response.Fail(ctx, nil, "标签不存在")
		return
	}
	if err:=t.DB.Model(&tag).Update(requestTag).Error; err!=nil{
		response.Fail(ctx, nil, "更新失败")
		return
	}
	response.Success(ctx, gin.H{"tag": tag}, "更新成功")

}

func (t TagController) Show(ctx *gin.Context) {
	tagId := ctx.Params.ByName("id")
	var tag model.Tag
	if t.DB.Where("id = ?", tagId).First(&tag).RecordNotFound(){
		response.Fail(ctx, nil, "标签不存在")
		return
	}
	response.Success(ctx, gin.H{"tag":tag}, "查询成功")
}

func (t TagController) ShowByName(ctx *gin.Context) {
	tagId := ctx.Params.ByName("name")
	var tag model.Tag
	if t.DB.Where("name = ?", tagId).First(&tag).RecordNotFound(){
		response.Fail(ctx, nil, "标签不存在")
		return
	}
	response.Success(ctx, gin.H{"tag":tag}, "查询成功")
}

func (t TagController) ShowAll(ctx *gin.Context){
	var tags []model.Tag
	t.DB.Find(&tags)
	//var names []string
	//fmt.Println(tags)
	//for i:=0;i<len(tags);i++{
	//	names = append(names, tags[i].Name)
	//}
	response.Success(ctx, gin.H{"tags":tags}, "查询成功")
}

func (t TagController) Delete(ctx *gin.Context) {
	tagId := ctx.Params.ByName("id")
	var tag model.Tag
	if t.DB.Where("id = ?", tagId).First(&tag).RecordNotFound(){
		response.Fail(ctx, nil, "标签不存在")
		return
	}
	t.DB.Delete(&tag)
	response.Success(ctx, gin.H{"tag": tag}, "删除成功")
}


func NewTagController() TagController{
	db:=common.GetDB()
	db.AutoMigrate(model.Tag{})
	return TagController{DB:db}
}