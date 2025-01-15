//MÉTODOS DE PROPIEDAD

const reproductor = {
    reproducir: function(id){
        console.log(`Reproduciendo canción con el ID: ${id}`);  
    },
    pausar: function(){
        console.log("Pausando....");  
    },
    crearPlaylist: function(name){
        console.log(`Creando la playtlist de ${name}`);
    },
    reproducirPlaylist: function(name){
        console.log(`Reproduciendo la playlist de ${name}`);
        
    }
}

reproductor.reproducir(30);
reproductor.pausar();

reproductor.borrar = function(id){
    console.log(`Borrando canción con el ID: ${id}`);
}

reproductor.borrar(30)
reproductor.crearPlaylist("Artic Monkeys")
reproductor.reproducirPlaylist("Artic Monkeys")