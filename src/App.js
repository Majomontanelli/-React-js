//import { Navbar } from 'react-bootstrap';
import NavBar from "./componentes/NavBar";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ItemListContainer from './componentes/ItemListContainer';
import Cart from './pages/Cart';

const App = () => {

    return(
        <div className="box">
            <BrowserRouter>
                <NavBar />
                <Routes>
                    <Route path="/" element={ <ItemListContainer greeting= {"Bienvenidos"}/>} />
                    <Route path="/category" element={<ItemListContainer />} />
                    <Route path="/cart" element={<Cart />} />
                </Routes>  
            </BrowserRouter>
        </div>
    )
}

export default App;

