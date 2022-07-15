import "./App.css";
import NavBar from "./components/NavBar";
import ItemListContainer from "./components/ItemListContainer";
import Promises from "./components/promise";
import Mapeo from "./components/map";

function App() {
  const title = "Titulo de Tienda";
  const data = {
    title: title,
    amount: 4,
    mensaje: "¡En un futuro incluiremos productos que podrá añadir!",
  };
  return (
    <>
      <NavBar data={data} />
      <ItemListContainer greeting={data.mensaje} />
      <Mapeo />
      <Promises />
     

    </>
 );
}

export default App;

