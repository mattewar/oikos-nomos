import { useContext } from "react";
import { Button, Container, Table } from "react-bootstrap"
import { UserContext } from "../context/UserContext";
import { OikosProduct } from "../models/MarketModels"
import { Types } from "../reducers/UserProductsReducer";


function Realm() {
    const products: OikosProduct[] = ([
        { id: 1, name: "Grãos", baseValue: 5 },
        { id: 2, name: "Carne", baseValue: 5 },
        { id: 3, name: "Madeira", baseValue: 5 },
        { id: 4, name: "Ferro", baseValue: 5 },
        { id: 5, name: "Agua", baseValue: 5 }
    ])
    const { state, dispatch } = useContext(UserContext);

    return (
        <Container>
            <Table bordered className="mt-3 text-center ">
                <thead>
                    <tr>
                        <th>Nome</th>
                        <th>Valor</th>
                        <th>Em estoque loja</th>
                        <th>Em estoque próprio</th>
                        <th>Comprar</th>
                        <th>Vender</th>
                    </tr>
                </thead>
                <tbody>
                    {products.map(product => {
                        let userProduct = state.products.find(a => a.product.id === product.id)
                        let quantity = 0;
                        if (userProduct !== undefined) {
                            quantity = userProduct.quantity
                        }
                        return (<tr>
                            <td>{product.name}</td>
                            <td>{product.baseValue} Moedas</td>
                            <td>0 Unidades</td>
                            <td>{quantity} Unidades</td>
                            <td>
                                <Button className="mx-1" variant="success"
                                    onClick={() => {
                                        dispatch({
                                            type: Types.Buy,
                                            quantity: 1,
                                            product: product,
                                            totalValue: product.baseValue
                                        })
                                    }}>1</Button>
                                <Button className="mx-1" variant="success"
                                    onClick={() => {
                                        dispatch({
                                            type: Types.Buy,
                                            quantity: 10,
                                            product: product,
                                            totalValue: product.baseValue * 10
                                        })
                                    }}>10</Button>
                            </td>
                            <td>
                                <Button className="mx-1" variant="danger"
                                    onClick={() => {
                                        dispatch({
                                            type: Types.Sell,
                                            quantity: 1,
                                            product: product,
                                            totalValue: product.baseValue
                                        })
                                    }}>1</Button>
                                <Button className="mx-1" variant="danger"
                                    onClick={() => {
                                        dispatch({
                                            type: Types.Sell,
                                            quantity: 10,
                                            product: product,
                                            totalValue: product.baseValue * 10
                                        })
                                    }}>10</Button>
                            </td>
                        </tr>)
                    })}
                </tbody>
            </Table>
        </Container>
    )
}

export default Realm