import { Usuario } from './usuario';
import { Comentario } from './comentario';
export class Materia {
    _id: string;
    titulo: string;
    texto: string;
    link: string;
    criadorId: string;
    _comentarios: Comentario[];
    _creator: Usuario;
}