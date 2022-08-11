const pegaArquivo = require('../index');
const arrayResult = [
  {
    FileList: 'https://developer.mozilla.org/pt-BR/docs/Web/API/FileList'
  }
]
describe ('pegaArquivo::', () => {
  it('deve ser uma funçãoo', () => {
    expect(typeof pegaArquivo).toBe('function');
  })
  it('deve retornar array com resultados', async () => {
    const caminhoDoArquivo = './test/arquivos/texto1.md'
    const resultado = await pegaArquivo(caminhoDoArquivo)
    expect(resultado).toEqual(arrayResult);
  })
  it ('deve retornar mensagem "nao há links"', async () => {
    const caminhoDoArquivo = './test/arquivos/textoSemlink.md'
    const resultado = await pegaArquivo(caminhoDoArquivo)
    expect(resultado).toBe('não há links');
  }) 
})
