import ItemListContainer from './componentes/ItemListContainer'
import Router from './app/Router';

const App = () => {

    return(
        <div className="box">
            <Router />
            <ItemListContainer gretting= {"Bienvenidos"}/>

        </div>
    )
}

export default App;

