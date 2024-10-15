
import { renderCategories } from "./src/services/categoria";
import { handleSearch } from "./src/services/searchBar";
import { openModal } from "./src/views/modal";
import { handleGetProductsToStore } from "./src/views/store";
import './style.css'

/* Aplicacion */
export let categoriaActiva = null;
export const setcategoriaActivo = (categoriaIn) => {
  categoriaActiva = categoriaIn;
};

export let productoActivo = null;
export const setproductoActivo = (productoIn) => {
  productoActivo = productoIn;
};

handleGetProductsToStore();
renderCategories();

/* HEADER */

//Agregar producto
const buttonAdd = document.getElementById("buttonAddElement");
buttonAdd.addEventListener("click", () => {
  openModal();
})

/* ButtonSearch */
const buttonSearch = document.getElementById('buttonSearch');
buttonSearch.addEventListener("click",()=>{
handleSearch();
});
