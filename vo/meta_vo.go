package vo

type CreateMetaRequest struct {
	AID string `json:"aid" binding:"required"`
	TID uint `json:"tid" binding:"required"`
}