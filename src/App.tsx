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

function App() {
  return (
    <BrowserRouter>
    <Header></Header>
      <Routes>
        <Route path="/realm" element={<Realm />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
