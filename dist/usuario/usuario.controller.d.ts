import { UsuarioService } from './usuario.service';
export declare class UsuarioController {
    private readonly usuarioService;
    constructor(usuarioService: UsuarioService);
    listar(): Promise<import("../entities/usuario.entity").Usuario[]>;
    criar({ nome, email, telefone }: any): Promise<import("../entities/usuario.entity").Usuario>;
}
