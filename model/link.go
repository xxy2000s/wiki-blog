package model

type Link struct {
	ID uint `json:"id" gorm:"primary_key;AUTO_INCREMENT"`
	Title string `json:"title" gorm:"not null;type:varchar(200)"`
	Url string `json:"url" gorm:"not null;type:varchar(200)"`
	Img string `json:"img" gorm:"not null;type:varchar(200);default:'/src/assets/imgs/stream.jpg'"`
	Sort string `json:"sort" gorm:"not null;type:varchar(200);default:'frontend'"`
	Desc string `json:"desc" gorm:"type:varchar(200);default:'outer link'"`
	Process int `json:"process" gorm:"type:int; default:0"`
	CreatedAt Time `json:"created_at" gorm:"type:timestamp"`
}