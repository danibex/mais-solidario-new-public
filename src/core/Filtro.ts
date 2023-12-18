class Filtro {
    tipo?: string;
    nome?: string;
    nivel?: string;
    cidade?: string;
    faculdade?: string;
    turno?: string;
    pretencao?: number;
    presencial?: boolean;
    hibrido?: boolean;
    online?: boolean;


    constructor(tipo: string, nome: string, faculdade: string, cidade: string, pretencao: number, presencial: boolean, hibrido: boolean, online: boolean, nivel?: string, turno?: string) {
        this.tipo = tipo,
        this.nome = nome,
        this.faculdade = faculdade,
        this.cidade = cidade,
        this.pretencao = pretencao,
        this.presencial = presencial,
        this.hibrido = hibrido,
        this.online = online,
        this.nivel = nivel,
        this.turno = turno
    }
}

export default Filtro