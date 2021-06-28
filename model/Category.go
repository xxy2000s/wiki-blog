package model


type Category struct {
	ID        uint   `json:"id" gorm:"primary_key"`
	Name      string `json:"name" gorm:"type:varchar(50);not null;unique"`
	Count     int `json:"count" gorm:"type:int;default:0"`
	Order	  int 	 `json:"order" gorm:"type:int;default:0"`
	Parent	  int 	 `json:"parent" gorm:"type:int;default:0"`
	CreatedAt Time   `json:"created_at" gorm:"type:timestamp"`
	UpdatedAt Time   `json:"updated_at" gorm:"type:datetime"`
}
