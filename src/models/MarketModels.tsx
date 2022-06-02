
export interface OikosProduct {
    id: number,
    name: string,
    baseValue: number
}
export interface OikosBagProduct {
    product: OikosProduct,
    quantity: number
}

export interface OikosUserContextModel {
    name: string,
    balance: number,
    products: OikosBagProduct[]
}

export interface OikosMarketAction {
    type: string,
    product: OikosProduct,
    quantity: number,
    totalValue: number
}