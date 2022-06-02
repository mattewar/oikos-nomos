import './App.css';
import {
  BrowserRouter,
  Route,
  Routes
} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './screens/Home';
import Realm from './screens/Realm';
import Header from './screens/Header';
import { UserProvider } from './context/UserContext';
import { OikosUserContextModel } from './models/MarketModels';

function App() {
  const initialState : OikosUserContextModel = {
    products: [],
    name: "mattewar",
    balance: 100,
  }
  
  return (
    <UserProvider value={initialState}>
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <Header></Header>
        <Routes>
          <Route path="/realm" element={<Realm />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </UserProvider>
  );
}

export default App;
