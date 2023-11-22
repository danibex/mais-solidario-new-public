function gerarNumerosAleatoriosSemRepeticao(quantidade, minimo, maximo) {
    if (quantidade > (maximo - minimo + 1)) {
      return null;
    }
    const numerosPossiveis = [];
    for (let i = minimo; i <= maximo; i++) {
      numerosPossiveis.push(i);
    }
    const numerosAleatorios = [];
    for (let i = 0; i < quantidade; i++) {
      const indiceAleatorio = Math.floor(Math.random() * numerosPossiveis.length);
      const numeroAleatorio = numerosPossiveis.splice(indiceAleatorio, 1)[0];
      numerosAleatorios.push(numeroAleatorio);
    }
    return numerosAleatorios;
  }

module.exports = gerarNumerosAleatoriosSemRepeticao

/*
const quantidade = 3;
const minimo = 10;
const maximo = 20;

const numerosGerados = gerarNumerosAleatoriosSemRepeticao(quantidade, minimo, maximo);
console.log(numerosGerados);
*/
