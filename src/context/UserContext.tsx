import React, { createContext, useReducer } from 'react';
import { OikosUserContextModel } from '../models/MarketModels';
import { userProductReducer } from '../reducers/UserProductsReducer';



const initialState : OikosUserContextModel = {
  products: [],
  name: "mattewar",
  balance: 100,
}

const UserContext = createContext<{
    state: OikosUserContextModel;
    dispatch: React.Dispatch<any>;
  }>({
    state: initialState,
    dispatch: () => null
  });
  
  const UserProvider = (props : any) => {
    const [state, dispatch] = useReducer(userProductReducer, initialState);
  
    return (
      <UserContext.Provider value={{state, dispatch}}>
        {props.children}
      </UserContext.Provider>
    )
  }
  
  export { UserContext, UserProvider };