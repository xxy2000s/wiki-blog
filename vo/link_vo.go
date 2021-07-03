package vo

type CreateLinkRequest struct {
	Title string `json:"title" binding:"required"`
	Url string `json:"url" binding:"required"`
	Img string `json:"img" `
	Sort string `json:"sort" `
	Process int `json:"process" `
	Desc string `json:"desc"`
}

type UpdateLinkRequest struct {
	Title string `json:"title"`
	Url string `json:"url" `
	Img string `json:"img" `
	Sort string `json:"sort" `
	Process int `json:"process" `
	Desc string `json:"desc"`
}
