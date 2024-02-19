console.log("hola fsj21");

//promesas -> con promise, como se hacia anteriormente

/*function miPromesa(){
   return new Promise((resolve,reject) =>{

        setTimeout(() =>{
            const exito = true;
            if(exito){
                resolve("funciono")
            }else{
                reject(new Error("no funciono :("))
            }
        },1000)
    })
}
miPromesa()
.then((resultado) =>{
    console.log("Estado: ",resultado);
})


.catch((error) =>{
    console.error("Estado: ",error);
})*/

//Metodo Fetch => sirve para pedir cosas y es un metodo asincrono el cual se encarga de mandar a buscar datos a una API
async function miFetch(){
    try{
    let respuesta = await fetch('https://pokeapi.co/api/v2/pokemon/ditto')

    if(!respuesta.ok){
        throw new Error("ocurrio un error"+respuesta.status)
    }else{
        let data = await respuesta.json()
        console.log(data);
    }
       
    }catch(error){
        //si falla por x motivo,mostrame un error
        console.error("tienes un error")

        alert("Disculpas la peticion fallo")
    }
}
 miFetch()