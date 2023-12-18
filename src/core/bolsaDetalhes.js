class bolsaDetalhes {
    constructor(
      alta_empregabilidade,
      caminho_imagem_parceiro,
      cidade,
      desconto_porcentagem,
      endereco,
      estado,
      id,
      id_parceiro,
      mais_cursado,
      modalidade,
      nivel,
      nome_curso,
      nome_parceiro,
      preco,
      preco_com_desconto,
      preco_curso_mais_barato,
      recomendacao_porcentagem,
      sobre_campus,
      sobre_curso,
      sobre_ead,
      sobre_faculdade,
      sobre_presencial,
      turno,
      url_localizacao_mapa
    ) {
      this.alta_empregabilidade = alta_empregabilidade || "";
      this.caminho_imagem_parceiro = caminho_imagem_parceiro || "";
      this.cidade = cidade || "";
      this.desconto_porcentagem = desconto_porcentagem || "";
      this.endereco = endereco || "";
      this.estado = estado || "";
      this.id = id || "";
      this.id_parceiro = id_parceiro || "";
      this.mais_cursado = mais_cursado || "";
      this.modalidade = modalidade || "";
      this.nivel = nivel || "";
      this.nome_curso = nome_curso || "";
      this.nome_parceiro = nome_parceiro || "";
      this.preco = preco || "";
      this.preco_com_desconto = preco_com_desconto || "";
      this.preco_curso_mais_barato = preco_curso_mais_barato || "";
      this.recomendacao_porcentagem = recomendacao_porcentagem || "";
      this.sobre_campus = sobre_campus || "";
      this.sobre_curso = sobre_curso || "";
      this.sobre_ead = sobre_ead || "";
      this.sobre_faculdade = sobre_faculdade || "";
      this.sobre_presencial = sobre_presencial || "";
      this.turno = turno || "";
      this.url_localizacao_mapa = url_localizacao_mapa || "";
    }
  }

  module.exports = bolsaDetalhes