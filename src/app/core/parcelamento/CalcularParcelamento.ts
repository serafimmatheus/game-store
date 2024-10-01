import { QTDE_MAX_PARCELAS, TAXA_JUROS_MENSAL } from './../constants'
import type Parcelamento from './Parcelamento'

export default class CalcularParcelamento {
  executar(
    valor: number,
    quantidadeParcelas: number = QTDE_MAX_PARCELAS,
    taxaJuros: number = TAXA_JUROS_MENSAL
  ): Parcelamento {
    if (quantidadeParcelas < 2 || quantidadeParcelas > QTDE_MAX_PARCELAS) {
      throw new Error('Quantidade de parcelas inválida')
    }

    const totalComJuros = this.calcularJurosComposto(
      valor,
      taxaJuros,
      quantidadeParcelas
    )

    return {
      valorTotal: this.comDuasCasasDecimais(totalComJuros),
      valorParcela: this.comDuasCasasDecimais(
        totalComJuros / quantidadeParcelas
      ),
      quantidadeParcelas,
      taxaJuros,
    }
  }

  private calcularJurosComposto(
    valorTotal: number,
    taxaMensal: number,
    quantidadeParcelas: number
  ): number {
    return valorTotal * (1 + taxaMensal) ** quantidadeParcelas
  }

  private comDuasCasasDecimais(valor: number): number {
    return Math.round(valor * 100) / 100
  }
}
