import Swal from "sweetalert2";
import { productoActivo } from "../../main";
import { handleGetProductLocalStorage, setInLocalStorage } from "../persistence/localstorage";
import { closeModal } from "../views/modal";
import { handleGetProductsToStore, handleRenderList } from "../views/store";

/* PRODUCTOS */

export const handleSaveOrModifyElements = () => {
  const nombre = document.getElementById("nombre").value,
    imagen = document.getElementById("img").value,
    precio = document.getElementById("precio").value,
    categoria = document.getElementById("categoria").value;
  let object = null;
  if (productoActivo) {
    object = {
      ...productoActivo,
      nombre,
      imagen,
      precio,
      categoria,
    }
  } else {
    object = {
      id: new Date().toISOString(),
      nombre,
      imagen,
      precio,
      categoria,
    };
  }
  Swal.fire({
    title: "Correcto!",
    text: "Producto guardado con exito!",
    icon: "success"
  });
  setInLocalStorage(object);
  handleGetProductsToStore();
  closeModal();
}

/* ELIMINAR ELEMENTO */
export const handleDeleteElement = () => {
  Swal.fire({
    title: "You sure?",
    text: "You won't be able to revert this!",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    confirmButtonText: "Yes, delete it!"
  }).then((result) => {
    if (result.isConfirmed) {
      const products = handleGetProductLocalStorage();
      const result = products.filter((el) => el.id != productoActivo.id);
      /* Setear nuevo array */
      localStorage.setItem("products", JSON.stringify(result));
      const newProducts = handleGetProductLocalStorage();
      handleRenderList(newProducts);
      closeModal();
      Swal.fire({
        title: "Deleted!",
        text: "Your file has been deleted.",
        icon: "success"
      });
    }
  });


}