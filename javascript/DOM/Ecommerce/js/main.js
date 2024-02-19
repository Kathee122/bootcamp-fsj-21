const carrito = document.querySelector('#carrito');
const contenedorCarrito = document.querySelector('#lista-carrito tbody');
const listaCursos = document.querySelector('#lista-cursos');
let cursosCarrito = [];

listaCursos.addEventListener('click',agregarCurso)
function agregarCurso(e){
    e.preventDefault()
    let cursoSeleccionado = e.target.parentElement.parentElement;
    leerDatosCurso(cursoSeleccionado);
}

function leerDatosCurso(curso){
    console.log(curso.querySelector('a').getAttribute('data-id'));

    const infoCurso = {
        id: curso.querySelector('a').getAttribute('data-id'),
        imagen: curso.querySelector('img').src,
        titulo: curso.querySelector('h4').textContent,
        precio: curso.querySelector('h5').textContent,
        cantidad: 1
        
    }

    //ver si el curso ya existe
    const existe = cursosCarrito.some( curso => curso.id === infoCurso.id)

    if(existe){
         cursosCarrito.map( curso => {
            if(curso.id === infoCurso.id){
                curso.cantidad += 1
                return curso;//va a dejar el curso en el array actualizado con cantidad+1
            }
        });
       // cursosCarrito = [...cursosActualizados] otra manera de actualizar, los 3 puntos es para que no sobreescriba datos
    }else{
        cursosCarrito.push(infoCurso);
    }
   //console.log(cursosCarrito);
    pintarCarritoHTML();
    
}

function pintarCarritoHTML(){
    //limpiar carrito
    limpiarCarritoHTML();
    //Metodo MAP arrays = Recorrer el array y devolver o ejecutar algo con cada posicion
    cursosCarrito.map( (curso) => {
        //creamos el elemento tr de la tabla
        const fila = document.createElement('tr');
        //asignamos un valor con innerHtml a esa fila
        fila.innerHTML = `<td><img src="${curso.imagen}"></td> 
        <td>${curso.titulo}</td>
        <td>${curso.precio}</td>
        <td>${curso.cantidad}</td>
        <td><button type="button" class="btn btn-danger" onclick = "eliminarCurso(${curso.id})">x</button></td>
        `

        //agrego la fila al contenedor del carrito(tbody)
        contenedorCarrito.appendChild(fila)
    })
}

function limpiarCarritoHTML(){
    while(contenedorCarrito.firstChild){
        contenedorCarrito.removeChild(contenedorCarrito.firstChild)
    }
}

function vaciarCarrito(e){
    e.preventDefault();
    cursosCarrito = [];
    limpiarCarritoHTML();
}

function eliminarCurso(id){
    cursosCarrito.map( curso => {
        if(curso.id == id){
            //console.log("idEncontrado");
            if(curso.cantidad > 1){
                curso.cantidad -= 1
                return curso;//va a dejar el curso en el array actualizado con cantidad+1
            }else{
                cursosCarrito = cursosCarrito.filter(curso => curso.id != id);
            }
            
        }
    });
    pintarCarritoHTML();
}

