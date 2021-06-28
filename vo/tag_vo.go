package vo

type CreateTagRequest struct {
	ID        uint   `json:"id"`
	Name      string `json:"name" binding:"required"`
	Count     int `json:"count"`
}