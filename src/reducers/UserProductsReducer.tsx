import { OikosMarketAction, OikosUserContextModel } from "../models/MarketModels";

export const userProductReducer = (state: OikosUserContextModel, action: OikosMarketAction) => {
    switch (action.type) {
        case 'BUY':
            state.balance -= action.totalValue;
            if (state.products.find(a => a.product.id === action.product.id) === undefined) {
                state.products.push({ quantity: 0, product: action.product });
            }
            state.products.find(a => a.product.id === action.product.id)!.quantity += action.quantity
            console.log(1,state)
            return Object.create(state);
        case 'SELL':
            state.balance += action.totalValue;
            if (state.products.find(a => a.product.id === action.product.id) === undefined) {
                state.products.push({ quantity: 0, product: action.product });
            }
            state.products.find(a => a.product.id === action.product.id)!.quantity -= action.quantity
            return Object.create(state);
        default:
            return state;
    }
}

export enum Types {
    Buy = 'BUY',
    Sell = 'SELL',
}
