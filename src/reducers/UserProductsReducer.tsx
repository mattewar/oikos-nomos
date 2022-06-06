import { OikosMarketAction, OikosUserContextModel } from "../models/MarketModels";
import { saveUser } from '../interface/ApiInterface'

export const userProductReducer = (state: OikosUserContextModel, action: OikosMarketAction) => {
    let index = state.products.findIndex(a => a.product.id === action.product.id)
    let products = state.products;
    switch (action.type) {
        case 'BUY':
            state.balance -= action.totalValue;
            if (index === -1) {
                state.products.push({ quantity: 0, product: action.product });
                index = state.products.findIndex(a => a.product.id === action.product.id)
            }
            products[index].quantity += action.quantity
            state.products = products
            break;
        case 'SELL':
            state.balance += action.totalValue;
            if (index === -1) {
                state.products.push({ quantity: 0, product: action.product });
                index = state.products.findIndex(a => a.product.id === action.product.id)
            }
            products[index].quantity -= action.quantity
            state.products = products
            break;
        default:
            break;
    }
    state.name = state.name.valueOf()
    saveUser(state)
    return Object.create(state);
}

export enum Types {
    Buy = 'BUY',
    Sell = 'SELL',
}
