import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Body,
  Param,
} from '@nestjs/common';
import { CategoriaService } from './categoria.service';

@Controller('categorias')
export class CategoriaController {
  constructor(private readonly categoriaService: CategoriaService) {}

  // POST - Criar categoria
  @Post()
  async criar(@Body() { nome, descricao }: any) {
    return this.categoriaService.criar(nome, descricao);
  }

  // GET - Listar todas
  @Get()
  async listar() {
    return this.categoriaService.listar();
  }

  // GET - Buscar por ID
  @Get(':id')
  async buscarPorId(@Param('id') id: number) {
    return this.categoriaService.buscarPorId(id);
  }

  // PUT - Atualizar
  @Put(':id')
  async atualizar(
    @Param('id') id: number,
    @Body() { nome, descricao }: any,
  ) {
    return this.categoriaService.atualizar(id, nome, descricao);
  }

  // DELETE - Deletar
  @Delete(':id')
  async deletar(@Param('id') id: number) {
    return this.categoriaService.deletar(id);
  }
}
