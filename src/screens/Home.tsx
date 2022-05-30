import { Link } from "react-router-dom"

function Home() {

    return (
        <>
            <Link to="/">
                <div>home</div></Link>

            <Link to="/realm">
                <div>reino</div></Link>

        </>
    )
}

export default Home