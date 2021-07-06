package model

import "github.com/jinzhu/gorm"

type User struct {
	gorm.Model
	Name string `gorm:"type:varchar(20);not null" form:"name"`
	Password  string `gorm:"size:255;not null" form:"password"`
}