export interface Brand {
  id: string
  brandLogoImg: string
  brandImg: string
  brandName: string
  isPremiun: string
  largeCategoryName: string
  smallCategoryName: string
  brandStartCost: BrandStartCost
  brandPromotion: string
  brandPromotionIcon: string
}

export interface BrandStartCost {
  totalFree: string
  standatdArea: string
}
