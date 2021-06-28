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

type ICategoryController interface {
	RestController
}

type CategoryController struct {
	DB *gorm.DB
}

func (c CategoryController) Create(ctx *gin.Context){
	var requestCategory vo.CreateCategoryRequest
	if err:=ctx.ShouldBind(&requestCategory);err!=nil{
		log.Print(err.Error())
		response.Fail(ctx, nil, "分类验证错误")
		return
	}
	
	categoryPost := model.Category{
		ID: requestCategory.ID,
		Name: requestCategory.Name,
		Count: requestCategory.Count,
		Order: requestCategory.Order,
		Parent: requestCategory.Parent,
	}

	if err:=c.DB.Create(&categoryPost).Error;err!=nil{
		log.Print("创建分类失败")
		panic(err)
		return
	}
	response.Success(ctx, nil, "创建分类成功")
}

func (c CategoryController) Update(ctx *gin.Context){
	var requestCategory vo.CreateCategoryRequest

	if err := ctx.ShouldBind(&requestCategory); err != nil {
		response.Fail(ctx,nil, "数据验证错误，分类名称必填")
		return
	}
	categoryId, _ := strconv.Atoi(ctx.Params.ByName("id"))
	var category model.Category
	if c.DB.Where("id = ?", categoryId).First(&category).RecordNotFound(){
		response.Fail(ctx, nil, "分类不存在")
		return
	}
	if err := c.DB.Model(&category).Update(requestCategory).Error;err!=nil{
		response.Fail(ctx, nil, "更新失败")
		return
	}
	response.Success(ctx, gin.H{"category": category}, "更新成功")
}

func (c CategoryController) Show(ctx *gin.Context){
	categoryId, _ := strconv.Atoi(ctx.Params.ByName("id"))
	var category model.Category
	if c.DB.Where("id = ?", categoryId).First(&category).RecordNotFound(){
		response.Fail(ctx, nil, "分类不存在")
		return
	}
	response.Success(ctx, gin.H{"category": category}, "查询成功")

}

func (c CategoryController) ShowByName(ctx *gin.Context){
	categoryName := ctx.Params.ByName("name")
	var category model.Category
	if c.DB.Where("name = ?", categoryName).First(&category).RecordNotFound(){
		response.Fail(ctx, nil, "分类不存在")
		return
	}
	response.Success(ctx, gin.H{"category": category}, "查询成功")

}

func (c CategoryController) ShowAllCategories(ctx *gin.Context){
	var categories []model.Category
	c.DB.Find(&categories)
	response.Success(ctx, gin.H{"categories":categories}, "查询成功")
}

func (c CategoryController) Delete(ctx *gin.Context) {
	categoryId, _ := strconv.Atoi(ctx.Params.ByName("id"))
	var category model.Category
	if c.DB.Where("id = ?", categoryId).First(&category).RecordNotFound(){
		response.Fail(ctx, nil, "分类不存在")
		return
	}
	c.DB.Delete(category)
	response.Success(ctx, gin.H{"category": category}, "成功")

}

func NewCategoryController() CategoryController {
	db := common.GetDB()
	db.AutoMigrate(model.Category{})
	return CategoryController{DB: db}
}
