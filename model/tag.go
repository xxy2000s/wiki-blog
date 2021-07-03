package model

//autoIncrement好像没生效,要自己去数据库设置
type Tag struct {
	ID        uint   `json:"id" gorm:"type:int;not null;AUTO_INCREMENT"`
	Name      string `json:"name" gorm:"type:varchar(50);not null;unique"`
	Count     int `json:"count" gorm:"type:int;default:0"`
}