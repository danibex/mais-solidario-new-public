class Filtro {
    tipo?: string;
    nome?: string;
    faculdade?: string;
    cidade?: string;
    pretencao?: string;
    presencial?: boolean;
    hibrido?: boolean;
    online?: boolean;

    constructor(tipo: string, nome: string, faculdade: string, cidade: string, pretencao: string, presencial: boolean, hibrido: boolean, online: boolean) {
        this.tipo = tipo,
        this.nome = nome,
        this.faculdade = faculdade,
        this.cidade = cidade,
        this.pretencao = pretencao,
        this.presencial = presencial,
        this.hibrido = hibrido,
        this.online = online
    }
}

export default Filtro