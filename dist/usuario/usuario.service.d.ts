import { Repository } from 'typeorm';
import { Usuario } from '../entities/usuario.entity';
export declare class UsuarioService {
    private usuarioRepository;
    constructor(usuarioRepository: Repository<Usuario>);
    criar(nome: string, email: string, telefone: string): Promise<Usuario>;
    listar(): Promise<Usuario[]>;
}
