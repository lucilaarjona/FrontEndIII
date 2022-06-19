const productos = [
    {id: 3, nombre: "Pera", tieneStock: true},
    {id: 1, nombre: "Manzana", tieneStock: false},
    {id: 2, nombre: "Banana", tieneStock: false},
    {id: 4, nombre: "Durazno", tieneStock: true},
    {id: 5, nombre: "Ananá", tieneStock: false},
    {id: 6, nombre: "Mandarina", tieneStock: true},
];


const displayProductos = (argumento)=>{
    if(argumento === 1){
        return(
            <ul>
            <span>En Stock</span>
           {
               productos.map((product)=>{
                   if (!product.tieneStock){
                       return (
                           <li key={product.id}>{product.nombre}</li>
                       )
                   }
               })
           }
       </ul>
        )
    }else if (argumento === 2){
        return(
            <ul>
            <span>Sin Stock</span>
           {
               productos.map(product =>{
                if(product.tieneStock){
                    return (
                        <li key={product.id}>{product.nombre}</li>
                    )
                }
               })
           }
       </ul>
        )
    }
}
const App = (
    <div>
    {displayProductos(1)} 
    {displayProductos(2)} 
    </div> ) 

const hookedElement = document.getElementById("root");
ReactDOM.render(App, hookedElement)

