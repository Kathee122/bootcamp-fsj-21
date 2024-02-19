//Types se refiere a tipos de datos
//Types -> string, number, boolean, array
type producto = {
    id:number,
    nombre:string,
    descripcion:string
}

export class Catalogo{
    protected productos:producto[];
    protected numCatalogo:number;

    constructor(listaProductos:producto[],numCatalogo:number){
        this.productos = listaProductos;
        this.numCatalogo = numCatalogo;
    }

    menuCatalogo():producto[]{
            return this.productos;
    }
}


