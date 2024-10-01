export default class Moeda {
  formatar(valor: number, localizacao = 'pt-BR', moeda = 'BRL'): string {
    return (valor ?? 0).toLocaleString(localizacao, {
      style: 'currency',
      currency: moeda,
    })
  }
}
