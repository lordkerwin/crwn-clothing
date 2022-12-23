import { CART_ACTION_TYPES } from "./cart.types";

export const CART_INITIAL_STATE = {
    isCartOpen: false,
    cartItems: [],
}

export const cartReducer = (state = CART_INITIAL_STATE, action = {}) => {
    const { type, payload } = action;

    switch (type) {
        case CART_ACTION_TYPES.SET_IS_CART_OPEN:
            return {
                ...state,
                isCartOpen: payload,
            }
        case CART_ACTION_TYPES.SET_CART_ITEMS:
            return {
                ...state,
                cartItems: payload,
            }
        case CART_ACTION_TYPES.REMOVE_ITEM:
            return {
                ...state,
                // cartItems: removeItemFromCart(state.cartItems, action.payload),
            }
        case CART_ACTION_TYPES.CLEAR_ITEM:
            return {
                ...state,
                // cartItems: clearItemFromCart(state.cartItems, action.payload),
            }
        case CART_ACTION_TYPES.CLEAR_CART:
            return {
                ...state,
                cartItems: [],
            }
        default:
            return state
    }
}