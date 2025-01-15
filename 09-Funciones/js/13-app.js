//MÉTODOS DE PROPIEDAD
const reproductor = {
    cancion: "",
    reproducir: id => console.log(`Reproduciendo canción con el ID: ${id}`),
    pausar: () => console.log("Pausando...."),
    crearPlaylist: name => console.log(`Creando la playlist de ${name}`),
    reproducirPlaylist: name => console.log(`Reproduciendo la playlist de ${name}`),
    
    set nuevaCancion(cancion){
        this.cancion = cancion
        console.log(`Añadiendo ${cancion}`); 
    },
    
    get obtenerCancion(){
        console.log(`${this.cancion}`); 
    }

}

reproductor.borrar = id => console.log(`Borrando canción con el ID: ${id}`)

reproductor.nuevaCancion = "505";
reproductor.obtenerCancion;

reproductor.reproducir(30);
reproductor.pausar();
reproductor.borrar(30);
reproductor.crearPlaylist("Artic Monkeys");
reproductor.reproducirPlaylist("Artic Monkeys");
