package vo


type CreateCategoryRequest struct {
	ID uint `json:"id"`
	Name string `json:"name"`
	Count     int `json:"count"`
	Order	  int 	 `json:"order"`
	Parent	  int 	 `json:"parent"`
}

