import { setproductoActivo } from "../../main";
import { handleGetProductLocalStorage } from "../persistence/localstorage"
import { openModal } from "./modal";

/* Se encarga de traer elementos y llamar al render */
export const handleGetProductsToStore =()=>{
const products= handleGetProductLocalStorage();
handleRenderList(products);
}

/* Filtra y renderiza la seccion */
export const handleRenderList=(productsIn)=>{
    const burgers = productsIn.filter((el)=>el.categoria == "Hamburguesas");
    const papas = productsIn.filter((el)=>el.categoria == "Papas");
    const bebidas = productsIn.filter((el)=>el.categoria == "Bebidas");
    
    /* Renderiza los elementos de la seccion */
    const renderProductGroup =(products,title)=>{
        if(products.length > 0){
            const productsHTML = products.map((product,index)=>{
                return `
                <div class="containerTargetItem" id="product-${product.categoria}-${index}">
                <div>
                <img src='${product.imagen}'/>
                <div>
                <h2>${product.nombre}</h2>
                </div>
                <div class="targetProps">
                <p><b>Precio:</b> $ ${product.precio}</p>
                <p><b>Categoria:</b> ${product.categoria}</p>
                </div>

                </div>
                </div> `;
            })
            return `
            <section class="sectionStore">
            <div class="containerTitleSection">
            <h3>${title}</h3>
            </div>
            <div class="containerProductStore">
            ${productsHTML.join("")}  
            </div>

            </section>
            `;
        }else{
            return ""
        }
    }
    /* Renderizar cada producto */
    const appContainer = document.getElementById("storeContainer");
    appContainer.innerHTML=`
    ${renderProductGroup(burgers,"Hamburguesas")}
    ${renderProductGroup(papas,"Papas")}
    ${renderProductGroup(bebidas,"Bebidas")}

    `;
    const addEvents = (productsIn) =>{
        productsIn.forEach((element,index) => {
            const productContainer = document.getElementById(
                `product-${element.categoria}-${index}`);
            productContainer.addEventListener("click",()=>{
                setproductoActivo(element);
                openModal();
            })
        });
    }
    addEvents(burgers);
    addEvents(papas);
    addEvents(bebidas);
}