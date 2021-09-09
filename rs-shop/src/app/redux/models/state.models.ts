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
  categoriesAndGoods: any,
}

export interface IGoodsOfCategory {
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

// -----------------------------------correct-------------------------------
