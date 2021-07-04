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

type IMetaController interface {
	RestController
}

type MetaController struct {
	DB *gorm.DB
}

func (m MetaController) Create(ctx *gin.Context){
	var requestMeta vo.CreateMetaRequest
	if err:=ctx.ShouldBind(&requestMeta);err!=nil{
		log.Print(err.Error())
		response.Fail(ctx, nil, "文章标签验证错误")
		return
	}

	metaPost := model.Meta{
		AID :requestMeta.AID,
		TID: requestMeta.TID,
	}

	if err:=m.DB.Create(&metaPost).Error;err!=nil{
		log.Print("创建文章分类失败")
		panic(err)
		return
	}
	response.Success(ctx, nil, "文章分类创建成功")

}
func (m MetaController) Update(ctx *gin.Context){
	var requestMeta vo.CreateMetaRequest
	if err:=ctx.ShouldBind(&requestMeta);err!=nil{
		log.Print(err.Error())
		response.Fail(ctx, nil, "文章分类验证错误")
		return
	}
	aid := ctx.Params.ByName("id")
	tid := ctx.Params.ByName("tid")
	var meta model.Meta

	if m.DB.Where("a_id = ?", aid).Where("t_id = ?", tid).First(&meta).RecordNotFound(){
		response.Fail(ctx, nil, "文章标签不存在")
		return
	}
	if err:=m.DB.Model(&meta).Where("a_id = ?", aid).Where("t_id = ?", tid).Update(requestMeta).Error;err!=nil{
		response.Fail(ctx, nil, "更新失败")
	}
	response.Success(ctx, gin.H{"meta":meta}, "更新成功")


}
func (m MetaController) Show(ctx *gin.Context){
	aid := ctx.Params.ByName("id")
	var meta model.Meta
	if m.DB.Where("a_id = ?", aid).First(&meta).RecordNotFound(){
		response.Fail(ctx, nil, "文章标签不存在")
		return
	}
	var metas []model.Meta
	m.DB.Where("a_id = ?", aid).Find(&metas)
	t := NewCategoryController()
	var tagNames []model.Tag
	for i:=0;i<len(metas);i++{
		var tagName model.Tag
		t.DB.Where("id = ?", metas[i].TID).First(&tagName)
		tagNames = append(tagNames, tagName)
	}

	//var tags []uint
	//for i:=0;i<len(metas);i++{
	//	tags = append(tags,metas[i].TID)
	//}
	response.Success(ctx, gin.H{"tags":metas, "tagNames":tagNames}, "查询成功")
}

func (m MetaController) ShowByTag(ctx *gin.Context){
	tid := ctx.Params.ByName("tid")
	var meta model.Meta
	if m.DB.Where("t_id = ?", tid).Find(&meta).RecordNotFound(){
			response.Fail(ctx, nil, "关系不存在")
	}
	var metas []model.Meta
	m.DB.Where("t_id = ?", tid).Find(&metas)
	response.Success(ctx, gin.H{"metas":metas}, "关系查找成功")
}

func (m MetaController) Delete(ctx *gin.Context){
	aid := ctx.Params.ByName("id")
	tid := ctx.Params.ByName("tid")
	var meta model.Meta
	if m.DB.Where("a_id = ?", aid).Where("t_id = ?", tid).First(&meta).RecordNotFound(){
		response.Fail(ctx, nil, "文章标签不存在")
		return
	}
	m.DB.Where("a_id = ?", aid).Where("t_id = ?", tid).Delete(&meta)
	response.Success(ctx, gin.H{"meta":meta}, "删除成功")
}

func NewMetaController() MetaController{
	db:=common.GetDB()
	db.AutoMigrate(model.Meta{})
	return MetaController{DB:db}
}