class Curso {
    constructor(id, nome, caminho_imagem, nivel, turno, preco, modalidade, mais_cursado, tem_desconto, desconto_porcentagem, em_promocao, url_localizacao_mapa, alta_empregabilidade, sobre, estado, cidade, endereco) {
      this.id = id;
      this.nome = nome;
      this.caminho_imagem = caminho_imagem || ''; // Valor padrão para caminho_imagem se não for fornecido
      this.nivel = nivel || '';
      this.turno = turno || '';
      this.preco = preco || 0; // Valor padrão para preco se não for fornecido
      this.modalidade = modalidade || '';
      this.mais_cursado = mais_cursado || false; // Valor padrão para mais_cursado se não for fornecido
      this.tem_desconto = tem_desconto || false;
      this.desconto_porcentagem = desconto_porcentagem || 0;
      this.em_promocao = em_promocao || false;
      this.url_localizacao_mapa = url_localizacao_mapa || '';
      this.alta_empregabilidade = alta_empregabilidade || false;
      this.sobre = sobre || '';
      this.estado = estado || '';
      this.cidade = cidade || '';
      this.endereco = endereco || '';
    }
  }
  
  module.exports = Curso;