import './App.css';
import {
  BrowserRouter,
  Route,
  Link,
  Routes
} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './screens/Home';
import Realm from './screens/Realm';

function App() {
  console.log(1);
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/realm" element={<Realm />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
