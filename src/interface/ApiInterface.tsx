import { OikosUserContextModel } from "../models/MarketModels";

export async function saveUser(state: OikosUserContextModel) {
    localStorage.setItem("userData", JSON.stringify(state))
}


export function getUser(): OikosUserContextModel | undefined {
    var data = localStorage.getItem("userData")
    if (data === null)
        return undefined;
    return JSON.parse(data);
}
