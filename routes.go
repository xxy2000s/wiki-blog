package main

import (
	"github.com/gin-gonic/gin"
	"wiki/controller"
	"wiki/middleware"
)

func CollectRoute(r *gin.Engine) *gin.Engine{
	r.Use(middleware.CORSMiddleware(), middleware.RecoveryMiddleware())
	//r.POST("/api/auth/register", controller.Register)
	//r.POST("/api/auth/login", controller.Login)
	//r.GET("/api/auth/info", middleware.AuthMiddleware() ,controller.Info)

	categoryRoutes := r.Group("/categories")
	categoryController := controller.NewCategoryController()
	categoryRoutes.POST("", categoryController.Create)
	categoryRoutes.PUT("/:id", categoryController.Update) //替换
	categoryRoutes.GET("/:id", categoryController.Show)
	categoryRoutes.GET("/name/:name", categoryController.ShowByName)
	categoryRoutes.DELETE("/:id", categoryController.Delete)
	categoryRoutes.GET("", categoryController.ShowAllCategories)

	postRoutes := r.Group("/posts")
	//postRoutes.Use(middleware.AuthMiddleware())
	postController := controller.NewPostController()
	postRoutes.POST("", postController.Create)
	postRoutes.PUT("/:id", postController.Update) //替换
	postRoutes.GET("/:id", postController.Show)
	postRoutes.GET("/categories/:cid", postController.ShowC)
	postRoutes.DELETE("/:id", postController.Delete)
	postRoutes.POST("/page/list", postController.PageList)


	metaRoutes := r.Group("/metas")
	metaController := controller.NewMetaController()
	metaRoutes.POST("", metaController.Create)
	metaRoutes.PUT("/:id/:tid", metaController.Update)
	metaRoutes.GET("/:id", metaController.Show)
	metaRoutes.GET("/tag/:tid", metaController.ShowByTag)
	metaRoutes.DELETE("/:id/:tid", metaController.Delete)

	tagRoutes := r.Group("/tags")
	tagController := controller.NewTagController()
	tagRoutes.POST("", tagController.Create)
	tagRoutes.PUT("/:id", tagController.Update)
	tagRoutes.GET("/:id", tagController.Show)
	tagRoutes.GET("/name/:name", tagController.ShowByName)
	tagRoutes.DELETE("/:id", tagController.Delete)
	tagRoutes.GET("", tagController.ShowAll)


	linkRoutes := r.Group("/links")
	linkController := controller.NewLinkController()
	linkRoutes.POST("", linkController.Create)
	linkRoutes.GET("", linkController.ShowAllLinks)
	linkRoutes.GET("/sort/:sort", linkController.ShowByS)
	linkRoutes.GET("/:id", linkController.Show)
	linkRoutes.PUT("/:id", linkController.Update)
	linkRoutes.DELETE("/:id", linkController.Delete)

	return r
}