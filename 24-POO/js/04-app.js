class Cliente{

    #nombre;

    setNombre(nombre){
        this.#nombre = nombre;
    }

    getNombre(){
        return this.#nombre;
    }
}

const markin = new Cliente();
markin.setNombre("Markin");
console.log(markin.getNombre());
