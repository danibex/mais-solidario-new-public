/*CRIAÇÃO DO BANCO DE DADOS*/
CREATE DATABASE "Mais Solidario New"
    WITH
    OWNER = postgres
    ENCODING = 'UTF8'
    CONNECTION LIMIT = -1
    IS_TEMPLATE = False;
/*TABELA USUARIO*/ /**/
CREATE TABLE usuario (
    id         SERIAL PRIMARY KEY,
    uid_google         TEXT,
    id_asaas            VARCHAR(30),
    nome       VARCHAR(200),
    email       VARCHAR(200),
    telefone   VARCHAR(20),
    photoURL    TEXT,
    cpfCnpj       VARCHAR(15),
    nascimento VARCHAR(15),
    estado     VARCHAR(20),
    cidade     VARCHAR(40),
    endereco   TEXT,
    bairro     TEXT,
    numero     VARCHAR(10),
    cep    VARCHAR(10)
);
/*DADOS DE CRIAÇÃO DE COBRANÇA*/  /**/
CREATE TABLE pagamento_cobranca (
    id                      VARCHAR(25) PRIMARY KEY,
    billingType             VARCHAR(20) NOT NULL,
    value                   REAL,
    dueDate                 VARCHAR(10) NOT NULL,
    description             TEXT NOT NULL,
    id_curso                INTEGER REFERENCES cursos (id),
    id_usuario INTEGER REFERENCES usuario (id)
); 
/*DADOS DA COMPRA*/ /**/
CREATE TABLE compra (
    id          SERIAL PRIMARY KEY,
    id_usuario  INTEGER REFERENCES usuario (id),
    id_curso    INTEGER REFERENCES cursos (id),
    id_cobranca VARCHAR(25) REFERENCES pagamento_cobranca (id)
);
/*STATUS DE PAGAMENTO*/ /**/
CREATE TABLE pagamento_status (
    id          VARCHAR(25) PRIMARY KEY,
    event       VARCHAR(30),
    value       REAL,
    description TEXT,
    billingType VARCHAR(20),
    status      VARCHAR(20),
    id_usuario  VARCHAR(25) REFERENCES usuario (id),
    id_cobranca VARCHAR(25) REFERENCES pagamento_cobranca (id)
);

/*TABELA PARCEIROS*/
CREATE TABLE parceiros(
    id                   SERIAL PRIMARY KEY NOT NULL,
    nome                 VARCHAR(100),
    caminho_imagem       VARCHAR(100),
    sobre_faculdade      TEXT,
    sobre_campus         TEXT,
    sobre_ead            TEXT,
    sobre_presencial     TEXT,
    recomendacao_porcentagem    REAL,
    preco_curso_mais_barato     REAL
);
/*TABELA DE CURSOS*/
CREATE TABLE cursos (
    id                   SERIAL PRIMARY KEY NOT NULL,
    nome                 VARCHAR(100),
    caminho_imagem       VARCHAR(100),
    nivel                VARCHAR(20),
    turno                VARCHAR(15),
    preco                REAL,
    modalidade           VARCHAR(20),
    mais_cursado         BOOLEAN,
    em_promocao          BOOLEAN,
    desconto_porcentagem REAL,
    url_localizacao_mapa TEXT,
    alta_empregabilidade BOOLEAN,
    sobre                TEXT,
    estado               VARCHAR(20),
    cidade               VARCHAR(40),
    endereco             TEXT,
    latitude             VARCHAR(15),
    longitude            VARCHAR(15),
    semestres            INTEGER,
    inicio               VARCHAR(12),
    economia_total       REAL,
    id_parceiro INTEGER REFERENCES parceiros (id)
);