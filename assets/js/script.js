// Patrón Módulo utilizando IIFE
const videoModule = (() => {
    // Función privada para mostrar el video en el iframe
    const mostrarVideo = (url, id) => {
        const iframe = document.getElementById(id);
        if (iframe) {
            iframe.setAttribute('src', url);
        }
    };

    // Función pública que recibe la URL y el ID
    return {
        insertarVideo: (url, id) => {
            mostrarVideo(url, id);
        }
    };
})();

// Clase Multimedia
class Multimedia {
    // Constructor que protege el atributo url
    constructor(url) {
        this.#url = url; // Atributo privado

        // Método para obtener la URL
        this.getUrl = () => this.#url;

        // Método para establecer el inicio
        this.setInicio = () => "Este método es para realizar un cambio en la URL del video";
    }

    // Método privado para la URL
    #url; // Definido como privado
}

// Clase Reproductor que hereda de Multimedia
class Reproductor extends Multimedia {
    constructor(url, id) {
        super(url);
        this.#id = id; // Atributo privado

        // Método para reproducir multimedia
        this.playMultimedia = () => {
            videoModule.insertarVideo(this.getUrl(), this.#id);
        };

        // Método para establecer el inicio en la URL
        this.setInicio = (tiempo) => {
            const nuevaUrl = `${this.getUrl()}&start=${tiempo}`; 
            videoModule.insertarVideo(nuevaUrl, this.#id);
        };
    }

    // Método privado para el id
    #id; // Definido como privado
}

// Instanciando la clase Reproductor para música, película y serie
const reproductorMusica = new Reproductor("https://www.youtube.com/embed/LDU_Txk06tM?si=u_vX647TZ7_-HG9j", "musica");
const reproductorPeliculas = new Reproductor("https://www.youtube.com/embed/bmVGwOP_zi8?si=d55jQUmFl75uMK41", "peliculas");
const reproductorSeries = new Reproductor("https://www.youtube.com/embed/CLqoYSvnl_U?si=NCYmlaruPXl4rjTM", "series");

// Llamando al método playMultimedia para cada instancia
reproductorMusica.playMultimedia();
reproductorPeliculas.playMultimedia();
reproductorSeries.playMultimedia();

// Ejemplo de uso del método setInicio
reproductorMusica.setInicio(60); // El video de música iniciará en el segundo 60
reproductorPeliculas.setInicio(32); // El video de películas iniciará en el segundo 32
reproductorSeries.setInicio(20); // El video de series iniciará en el segundo 20
