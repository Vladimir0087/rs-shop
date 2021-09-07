export interface IStateCategory {
  id: string,
  name: string,
  subCategories: { id: string, name: string }[],
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
  subCategories: IStateSubCategory[],
}

// -----------------------------------correct-------------------------------
