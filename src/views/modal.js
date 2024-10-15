import { productoActivo, setproductoActivo } from "../../main";
import { handleDeleteElement, handleSaveOrModifyElements } from "../services/product";

/* POPUP */

//guardar o modificar elementos
const acceptButton = document.getElementById("acceptButton");
acceptButton.addEventListener("click", () => {
  handleSaveOrModifyElements();
})

const buttonCancel = document.getElementById("cancelButton");
buttonCancel.addEventListener("click", () => {
  closeModal();
});

/* Abrir cerrar pop up */
export const openModal = () => {
  const modal = document.getElementById("modalPopUp");
  modal.style.display = "flex";
  const buttonDelete = document.getElementById("deleteButton");
  if (productoActivo) {
    buttonDelete.style.display = "block"
  } else {
    buttonDelete.style.display = "none"
  }

  if (productoActivo) {
    const nombre = document.getElementById("nombre"),
      imagen = document.getElementById("img"),
      precio = document.getElementById("precio"),
      categoria = document.getElementById("categoria");
    nombre.value = productoActivo.nombre;
    imagen.value = productoActivo.imagen;
    precio.value = productoActivo.precio;
    categoria.value = productoActivo.categoria;
  }
};

export const closeModal = () => {
  const modal = document.getElementById("modalPopUp");
  modal.style.display = "none";
  setproductoActivo(null);
  resetModal();
}

const resetModal = () => {
  const nombre = document.getElementById("nombre"),
    imagen = document.getElementById("img"),
    precio = document.getElementById("precio"),
    categoria = document.getElementById("categoria");
  nombre.value = "";
  imagen.value = "";
  precio.value = "0";
  categoria.value = "Seleccione una categoria";
}
const deleteButton = document.getElementById("deleteButton");
deleteButton.addEventListener("click", () => {
  handlebuttonDelete();
})

const handlebuttonDelete = () => {
  handleDeleteElement();
}