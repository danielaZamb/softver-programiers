import { Injectable } from "@angular/core";
import { Servicio } from "./servicio.model";

@Injectable()
export class ServicioServices {

    servicios: Servicio[] = [
        //Foto de ThisIsEngineering de Pexels: https://www.pexels.com/es-es/foto/mujer-codificacion-en-computadora-3861958
        new Servicio("Backend", "https://images.pexels.com/photos/3861958/pexels-photo-3861958.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1", "Trabajamos en la arquitectura interna del sitio que asegura que todos elementos desarrollen la función correctamente.", "Ver", "/login"),
        //<!--Foto de Antonio Batinić de Pexels: https://www.pexels.com/es-es/foto/internet-tecnologia-ordenador-texto-4164418/-->
        new Servicio("Frontend", "https://images.pexels.com/photos/4164418/pexels-photo-4164418.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1", "Construcción y diseño de la interfaz de usuario de un sitio web o aplicación creando páginas web interactivas y visualmente atractivas.", "Ver", "/login"),
        //Foto de ThisIsEngineering de Pexels: https://www.pexels.com/es-es/foto/ingeniero-de-software-femenino-codificacion-en-computadora-3861972/
        new Servicio("Automatización", "https://images.pexels.com/photos/3861972/pexels-photo-3861972.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1", "Evaluamos el desempeño del software e identificamos los cuellos de botella a través de pruebas de rendimiento, carga y estrés.", "Ver", "/login"),
        //Foto de olia danilevich de Pexels: https://www.pexels.com/es-es/foto/hombre-escritorio-ordenador-portatil-trabajando-4974914
        new Servicio("Infraestructura", "https://images.pexels.com/photos/4974914/pexels-photo-4974914.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1", "La infraestructura de TI puede implementarse en un sistema de cloud computing o en las instalaciones de la empresa On Premise.", "Ver", "/login")
    ]

    setButtonValue(buttonValue : string) {
        this.servicios.forEach(element => {
            element.btoName = buttonValue;
        });
    }

}