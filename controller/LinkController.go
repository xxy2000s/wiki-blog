package controller

import (
	"github.com/gin-gonic/gin"
	"github.com/jinzhu/gorm"
	"log"
	"strconv"
	"wiki/common"
	"wiki/model"
	"wiki/response"
	"wiki/vo"
)

type ILinkController interface {
	RestController
}

type LinkController struct {
	DB *gorm.DB
}

func (l LinkController) Create(ctx *gin.Context){
	var requestLink vo.CreateLinkRequest
	if err:=ctx.ShouldBind(&requestLink); err!=nil{
			log.Print(err.Error())
			response.Fail(ctx, nil, "链接数据验证错误")
			return
	}
	link := model.Link{
		Title: requestLink.Title,
		Url: requestLink.Url,
		Img: requestLink.Img,
		Sort: requestLink.Sort,
		Process: requestLink.Process,
		Desc: requestLink.Desc,
	}

	if err:=l.DB.Create(&link).Error;err!=nil{
		println("chuang jian error")
			panic(err)
			return
	}
	response.Success(ctx ,gin.H{"link":link}, "创建链接成功")

}

func (l LinkController) Show(ctx *gin.Context){
	postId := ctx.Params.ByName("id")

	var link model.Link
	if l.DB.Where("id = ?", postId).First(&link).RecordNotFound() {
		response.Fail(ctx, nil, "文章不存在")
		return
	}
	response.Success(ctx, gin.H{"link": link}, "查询成功")
}
func (l LinkController) ShowByS(ctx *gin.Context){
	sort := ctx.Params.ByName("sort")
	var link model.Link
	var links []model.Link
	if l.DB.Where("sort = ?", sort).First(&link).RecordNotFound(){
		response.Fail(ctx, nil, "链接类别不存在")
		return
	}
	l.DB.Where("sort = ?", sort).Find(&links)
	response.Success(ctx, gin.H{"links":links}, "查询类别"+sort+"成功")
}
func (l LinkController) ShowAllLinks(ctx *gin.Context){
	var links []model.Link
	l.DB.Find(&links)
	response.Success(ctx, gin.H{"links": links}, "查询成功")
}


func (l LinkController) Update(ctx *gin.Context){
	var requestLink vo.UpdateLinkRequest
	if err := ctx.ShouldBind(&requestLink); err != nil {
		response.Fail(ctx,nil, "数据验证错误")
		return
	}
	linkId,_ := strconv.Atoi(ctx.Params.ByName("id"))
	var link model.Link
	if l.DB.Where("id = ?", linkId).First(&link).RecordNotFound(){
		response.Fail(ctx, nil, "链接不存在")
		return
	}
	if err:=l.DB.Model(&link).Where("id = ?", linkId).Update(requestLink).Error;err!=nil{
		response.Fail(ctx, nil, "更新失败")
		return
	}
	response.Success(ctx, gin.H{"link":link}, "更新成功")
}

func (l LinkController) Delete(ctx *gin.Context){
	linkId, _ := strconv.Atoi(ctx.Params.ByName("id"))
	var link model.Link
	if l.DB.Where("id = ?", linkId).First(&link).RecordNotFound(){
		response.Fail(ctx, nil, "链接不存在")
		return
	}
	l.DB.Delete(&link)
	response.Success(ctx, gin.H{"link":link}, "删除成功")
}

func NewLinkController() LinkController {
	db := common.GetDB()
	db.AutoMigrate(model.Link{})
	return LinkController{DB: db}
}