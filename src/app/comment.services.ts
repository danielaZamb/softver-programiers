import { Injectable } from "@angular/core";
import { Comment } from "./comment/comment.model";

@Injectable()
export class CommentServices {

    comments : Comment[] = [
        //Foto de ThisIsEngineering de Pexels: https://www.pexels.com/es-es/foto/blusa-sin-mangas-mujer-en-negro-3861954/
        new Comment("Son los mejores proveedores de ingenieros de software.", "https://images.pexels.com/photos/3861954/pexels-photo-3861954.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1", "Product Owner, Kites S.A.S"), 
        //Foto de Andrea Piacquadio de Pexels: https://www.pexels.com/es-es/foto/hombre-en-traje-negro-chaqueta-posicion-y-sonriente-3777557/
        new Comment("Excelente trabajo en pruebas performance, smoke test y E2E.", "https://images.pexels.com/photos/3777557/pexels-photo-3777557.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1", "Lider TI, Flowers Shop"), 
        //Foto de pranav digwal de Pexels: https://www.pexels.com/es-es/foto/hombre-vestido-con-chaqueta-de-traje-formal-negro-32976/
        new Comment("El equipo de ingenieros tiene un alto conocimiento.", "https://images.pexels.com/photos/32976/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1", "Lider técnico - SkyCompany")
    ];
}