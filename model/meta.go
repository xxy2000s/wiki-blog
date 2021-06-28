package model

type Meta struct {
	AID      string `json:"aid" gorm:"type:varchar(50);not null"`
	TID        uint   `json:"tid" gorm:"not null"`
}