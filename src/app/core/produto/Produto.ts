import type Comentarios from './Comentarios'
import type Especificacoes from './Especificacoes'
import type Precificavel from './Precificavel'

export default interface Produto extends Precificavel {
  id: string
  nome: string
  descricao: string
  marca: string
  modelo: string
  imagem: string
  nota: number
  videoReview: string
  categoria: string
  estoque: number
  vendas: number
  avaliacao: number
  tags: string[]
  especificacoes: Especificacoes
  comentarios: Comentarios[]
}
