package main

import (
	"github.com/gin-gonic/gin"
	"github.com/spf13/viper"
	"os"
	_ "github.com/go-sql-driver/mysql"
	"wiki/common"
)


func main(){
	InitConfig()
	db := common.InitDB()
	defer db.Close()
	r := gin.New()
	r = CollectRoute(r)
	port := viper.GetString("server.port")
	r.Run(":" + port)
	//r := gin.New()
	//r.Use(gin.Logger())
	//r.Use(gin.Recovery())
	//r.GET("/articles/:id", getArti)
}

func InitConfig()  {
	workDir, _ := os.Getwd()
	viper.SetConfigName("application")
	viper.SetConfigType("yml")
	viper.AddConfigPath(workDir+"/config")
	err := viper.ReadInConfig()
	if err!=nil{
		panic("读取配置错误")
	}
	
}