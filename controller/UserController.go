package controller

import (
	"fmt"
	"github.com/gin-gonic/gin"
	"golang.org/x/crypto/bcrypt"
	"log"
	"net/http"
	"wiki/common"
	"wiki/model"
	"wiki/response"
)

func Register(ctx *gin.Context) {
	DB := common.GetDB()
	//使用map获取请求参数
	var requestUser = model.User{}
	ctx.Bind(&requestUser)

	//获取参数
	//name := ctx.PostForm("name")
	//password := ctx.PostForm("password")
	name := requestUser.Name
	password := requestUser.Password
	//数据验证
	fmt.Print("name ",name)
	fmt.Print("password ",password)

	//创建用户
	hasePassword, err := bcrypt.GenerateFromPassword([]byte(password), bcrypt.DefaultCost)
	if err != nil {
		response.Response(ctx, http.StatusUnprocessableEntity, 500, nil, "加密失败")
		return
	}

	newUser := model.User{
		Name:      name,
		Password:  string(hasePassword),
	}
	DB.Create(&newUser)

	//返回结果
	//发放token
	token, err := common.ReleaseToken(newUser)
	if err != nil {
		response.Response(ctx, http.StatusUnprocessableEntity, 500, nil, "系统异常")
		log.Printf("token generate error: %v", err)
		return
	}
	//返回结果
	response.Success(ctx, gin.H{"token": token}, "注册成功")
}

func Login(ctx *gin.Context) {
	DB := common.GetDB()
	//获取数据
	//使用map获取请求参数
	var requestUser = model.User{}
	ctx.Bind(&requestUser)

	//获取参数
	name := requestUser.Name
	password := requestUser.Password
	//数据验证
	fmt.Println("登录用户为 ",name)
	//判断用户是否存在
	var user model.User
	DB.Where("name = ?", name).First(&user)
	if user.ID == 0 {
		response.Response(ctx, http.StatusUnprocessableEntity, 400, nil, "用户不存在")
		return
	}

	//判断密码是否正确
	if err := bcrypt.CompareHashAndPassword([]byte(user.Password), []byte(password)); err != nil {
		response.Response(ctx, http.StatusBadRequest, 400, nil, "密码错误")
		return
	}

	//发放token
	token, err := common.ReleaseToken(user)
	if err != nil {
		response.Response(ctx, http.StatusUnprocessableEntity, 500, nil, "系统异常")
		log.Printf("token generate error: %v", err)
		return
	}
	//返回结果
	response.Success(ctx, gin.H{"token": token}, "登录成功")
}