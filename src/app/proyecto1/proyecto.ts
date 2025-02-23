export class Proyecto {
    nombre: String;
    texto: String[];
    imagenes: String[];
    imagen: String;
    subtitulo: String;
    constructor( nombre: String, texto: String[], imagenes: String[], imagen: String , subtitulo: String) {
        this.nombre = nombre;
        this.texto = texto;
        this.imagenes = imagenes;
        this.imagen = imagen;
        this.subtitulo = subtitulo;
    }
}
