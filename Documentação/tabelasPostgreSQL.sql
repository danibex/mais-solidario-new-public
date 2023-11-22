/*CRIAÇÃO DO BANCO DE DADOS*/
CREATE DATABASE "Mais Solidario New"
    WITH
    OWNER = postgres
    ENCODING = 'UTF8'
    CONNECTION LIMIT = -1
    IS_TEMPLATE = False;
/*TABELA USUARIO*/
CREATE TABLE usuario_cliente (
    id         SERIAL PRIMARY KEY NOT NULL,
    nome       VARCHAR(50) NOT NULL,
    email      VARCHAR(40) NOT NULL,
    nascimento DATE NOT NULL,
    estado     VARCHAR(20) NOT NULL,
    cidade     VARCHAR(40) NOT NULL,
    endereco   TEXT NOT NULL,
    bairro     TEXT NOT NULL,
    numero     VARCHAR(10) NOT NULL
);
/*DADOS DA CONTA GOOGLE DO USUÁRIO*/
CREATE TABLE google_cliente (
    uid         TEXT PRIMARY KEY NOT NULL,
    displayName VARCHAR(50) NOT NULL,
    email       VARCHAR(40) NOT NULL,
    photoURL    TEXT,
    id_usuario  INTEGER NOT NULL REFERENCES usuario_cliente (id)
);
/*TABELA DE DADOS DE USUÁRIO NO ASAAS*/
CREATE TABLE asaas_cliente (
    id            VARCHAR(30) PRIMARY KEY,
    name          VARCHAR(50) NOT NULL,
    cpfCnpj       VARCHAR(15) NOT NULL,
    email         VARCHAR(40) NOT NULL,
    mobilePhone   VARCHAR(20) NOT NULL,
    address       VARCHAR(50) NOT NULL,
    addressNumber VARCHAR(10) NOT NULL,
    postalCode    VARCHAR(10),
    id_usuario    INTEGER NOT NULL REFERENCES usuario_cliente (id)
);
/*TABELA PARCEIROS*/
CREATE TABLE parceiros(
    id                   SERIAL PRIMARY KEY NOT NULL,
    nome                 VARCHAR(100),
    caminho_imagem       VARCHAR(100),
    recomendacao_porcentagem    REAL,
    preco_curso_mais_barato     REAL,
    sobre_faculdade      TEXT,
    sobre_campus         TEXT,
    sobre_ead            TEXT,
    sobre_presencial     TEXT
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
    id_parceiro INTEGER REFERENCES parceiros (id)
);
/*DADOS DE CRIAÇÃO DE COBRANÇA*/
CREATE TABLE pagamento_cobranca (
    id                      VARCHAR(25) PRIMARY KEY,
    billingType             VARCHAR(20) NOT NULL,
    value                   REAL,
    dueDate                 VARCHAR(10) NOT NULL,
    description             TEXT NOT NULL,
    id_curso                INTEGER REFERENCES cursos (id),
    id_customerAsaas        VARCHAR(30) REFERENCES asaas_cliente (id),
    id_usuarioMaisSolidario INTEGER REFERENCES usuario_cliente (id),
    id_usuarioGoogle        TEXT REFERENCES google_cliente (uid)
);
/*DADOS DA COMPRA*/
CREATE TABLE compra (
    id          SERIAL PRIMARY KEY,
    id_usuario_cliente  INTEGER REFERENCES usuario_cliente (id),
    id_curso    INTEGER REFERENCES cursos (id),
    id_cobranca VARCHAR(25) REFERENCES pagamento_cobranca (id)
);
/*STATUS DE PAGAMENTO*/
CREATE TABLE pagamento_status (
    id          SERIAL PRIMARY KEY,
    event       VARCHAR(30),
    value       REAL,
    description TEXT,
    billingType VARCHAR(20),
    status      VARCHAR(20),
    id_asaas    VARCHAR(30) REFERENCES asaas_cliente (id),
    id_cobranca VARCHAR(25) REFERENCES pagamento_cobranca (id)
);