export interface IProduct {
    id: number;
    title: string;
    description: string;
    price: number;
    discountPercentage: number;
    rating: number;
    stock: number;
    brand: string;
    category: string;
    thumbnail: string;
    images: string[];
}

export interface IHero {
    title: string;
    image: string;
    url: string;
}

export interface IMessage {
    [key: string]: string;
}

export interface ICartItem {
    id: number;
    quantity: number;
    title: string;
    brand: string;
    image: string;
    price: number;
}
export interface IAction {
    type: string;
    payload: ICartItem;
}

export interface ICartDict {
    [key: number]: ICartItem;
}
export interface IUser {
    id: number;
    token: string;
    name?: string;
    image?: string;
    email: string;
}

export interface IOrder {
    id: number;
    user_id: number;
    createdAt: string;
    items: ICartItem[];
    total: number;
}

export interface ICart {
    cartItems: ICartItem[];
    totalItems: number;
}

export interface ISearchBar {
    clicked: boolean;
    searchPhrase: string;
}
