package vo


type CreatePostRequest struct {
	CategoryId uint      `json:"category_id" binding:"required"`
	Title      string `json:"title" binding:"required,max=50"`
	HeadImg    string `json:"head_img"`
	Content    string `json:"content" binding:"required"`
}

type UpdatePostRequest struct {
	CategoryId uint      `json:"category_id"`
	Title      string `json:"title" `
	HeadImg    string `json:"head_img"`
	Content    string `json:"content" binding:"required"`
}