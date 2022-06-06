import './App.css';
import {
  HashRouter,
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
      <HashRouter >
        <Header></Header>
        <Routes>
          <Route path="/realm" element={<Realm />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </HashRouter>
    </UserProvider>
  );
}

export default App;
