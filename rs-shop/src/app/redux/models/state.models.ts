export interface ISubCategories{
  id: string,
  name: string,
}

export interface IStateCategory {
  id: string,
  name: string,
  subCategories: ISubCategories[],
}

export interface IStateSubCategory {
  id: string,
  name: string,
  imageUrls: string[],
  rating: number,
  availableAmount: number,
  price: number,
  description: string,
  isInCart: boolean,
  isFavorite: boolean,
}

export interface IAppState {
  categories: IStateCategory[],
}

export interface IGoods {
  id: string,
  name: string,
  imageUrls: string[],
  rating: number,
  availableAmount: number,
  price: number,
  description: string,
  isInCart: boolean,
  isFavorite: boolean,
  category?: string,
  subCategory?: string,
}

export interface IGoodsDetailed {
  id: string,
  name: string,
  imageUrls: string[],
  rating: number,
  availableAmount: number,
  price: number,
  description: string,
  isInCart: boolean,
  isFavorite: boolean,
  category: string,
  subCategory: string,
}

// -----------------------------------correct-------------------------------
