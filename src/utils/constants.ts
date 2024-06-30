export const ICON_BOTTOM_TAB_SIZE: number = 24;
export const ICON_BOTTOM_TAB_COLOR: string = "#F1F1F1";
export const PRIMARY_COLOR = "#243550";
export const SECONDARY_COLOR = "#f57eb6";
export const SUCCESS_COLOR = "#00AAF2";

// ROUTE names
export const PRODUCT_LIST = "ProductList";
export const INTRO = "Intro";
export const HOME = "Home";
export const PROFILE = "Profile";
export const CART = "Cart";
export const NOTIFICATION = "Notification";
export const PRODUCT_DETAIL = "ProductDetail";
// It would be useful when header'll rendering by every screen and search bar must be hidden.
export const ROUTES_WITH_SEARCHBAR = [INTRO];

// bottom tabs icons dictionary
export const ICONS: any = {
    [INTRO]: "home-outline",
    [CART]: "cart-outline",
    [PROFILE]: "person-circle-outline",
    [NOTIFICATION]: "notifications-outline",
};
