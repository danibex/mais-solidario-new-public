class FiltroFormularioPrincipal {
    nome_curso: string;
    nivel: string;
    cidade: string;
    instituicao: string;
    turno: string;
    inicio: string;
    tipo: string;
    preco_com_desconto: number;
    modalidade: object;
  
      constructor(nome_curso: string, nivel: string, cidade: string, instituicao: string, turno: string, inicio: string, tipo: string, preco_com_desconto: number, modalidade: object) {
          this.nome_curso = nome_curso || null;
          this.nivel = nivel || null;
          this.cidade = cidade || null;
          this.instituicao = instituicao || null;
          this.turno = turno || null;
          this.inicio = inicio || null;
          this.tipo = tipo || null;
          this.preco_com_desconto = preco_com_desconto || null;
          this.modalidade = modalidade || null;
      }
  }

export default FiltroFormularioPrincipal