import { useState } from "react"
import { Button, Container, Table } from "react-bootstrap"
import { OikosProduct } from "../models/MarketModels"


function Realm() {
    const [products, setProducts] = useState<OikosProduct[]>([
        { id: 1, name: "Grãos", baseValue: 5, value: 5 },
        { id: 2, name: "Carne", baseValue: 5, value: 5 },
        { id: 3, name: "Madeira", baseValue: 5, value: 5 },
        { id: 4, name: "Ferro", baseValue: 5, value: 5 },
        { id: 5, name: "Agua", baseValue: 5, value: 5 }
    ])
    return (
        <Container>
            <Table bordered className="mt-3 text-center ">
                <thead>
                    <th>Nome</th>
                    <th>Valor</th>
                    <th>Em estoque loja</th>
                    <th>Em estoque próprio</th>
                    <th>Comprar</th>
                    <th>Vender</th>
                </thead>
                <tbody>
                    {products.map(product => {
                        return (<tr>
                            <td>{product.name}</td>
                            <td>{product.value} Moedas</td>
                            <td>0 Unidades</td>
                            <td>0 Unidades</td>
                            <td><Button className="mx-1" variant="success">1</Button><Button className="mx-1" variant="success">10</Button></td>
                            <td><Button className="mx-1" variant="danger">1</Button><Button className="mx-1" variant="danger">10</Button></td>
                        </tr>)
                    })}
                </tbody>
            </Table>
        </Container>
    )
}

export default Realm