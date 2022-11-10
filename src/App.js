import NavBar from './componentes/NavBar';
import ItemListContainer from './componentes/ItemListContainer'

const App = () => {
    return(
        <div className="box">
            <NavBar />
            <ItemListContainer gretting= {"Bienvenidos"}/>

        </div>
    )
}

export default App;

