import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Categoria } from '../entities/categoria.entity';

@Injectable()
export class CategoriaService {
  constructor(
    @InjectRepository(Categoria)
    private categoriaRepository: Repository<Categoria>,
  ) {}

  // CREATE
  async criar(nome: string, descricao: string): Promise<Categoria> {
    const categoria = this.categoriaRepository.create({ nome, descricao });
    return this.categoriaRepository.save(categoria);
  }

  // READ - Listar todas
  async listar(): Promise<Categoria[]> {
    return this.categoriaRepository.find();
  }

  // READ - Buscar por ID
  async buscarPorId(id: number): Promise<Categoria | null> {
    return this.categoriaRepository.findOne({ where: { id } });
  }

  // UPDATE
  async atualizar(
    id: number,
    nome: string,
    descricao: string,
  ): Promise<Categoria | null> {
    await this.categoriaRepository.update(id, { nome, descricao });
    return this.buscarPorId(id);
  }

  // DELETE
  async deletar(id: number): Promise<{ mensagem: string }> {
    await this.categoriaRepository.delete(id);
    return { mensagem: 'Categoria deletada com sucesso' };
  }
}
