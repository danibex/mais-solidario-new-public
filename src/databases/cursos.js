// import Curso from "../../core/curso"
const Curso = require("../core/curso")
const cursos = [
    new Curso(
        1,
        'Engenharia de Software',
        '/caminho/para/imagem.jpg',
        'Superior',
        'Integral',
        1500,
        'Presencial',
        true,
        true,
        10,
        false,
        'https://mapa.localizacao.com',
        true,
        'Descrição do curso...',
        'São Paulo',
        'São Paulo',
        'Rua Exemplo, 123'
        ),
]

console.log(cursos[0])