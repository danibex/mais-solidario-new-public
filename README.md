# Mais Solidário
> A aplicação é um ecommerce de bolsas de estudos que utiliza as tecnologias: React, Nextjs, Tailwindcss e Postgresql.

# Pré Visualização


# Instalação e uso

## Criar Banco de dados e tabelas
* Rode o comando a seguir no postgresql para criar o banco de dados postgresql
~~~ sql
/*CRIAÇÃO DO BANCO DE DADOS*/
CREATE DATABASE "MaisSolidarioNew"
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
~~~

## Atualize as variaveis de ambiente
* No arquivo .env na pasta raiz da aplicação atualize as variáveis de ambiente
~~~ .env
POSTGRES_USER=postgres
POSTGRES_PW=umaSenhaForte
POSTGRES_DB=MaisSolidarioNew
POSTGRES_PORT=5432
~~~

### Atualize o host do banco de dados
* Caminho do host ./src/models/conectarAoBanco.js linha 4
> Se o banco de dados estiver na mesma máquina que a aplicação colocar localhost

# Para uma experiência completa na aplicação atualize o token de autenticação Asaas antes de continuar (instruções no final)

## Instale as dependências
* Navegue até a pasta raiz da aplicação através do terminal e rode o comando
~~~ bash
npm i
~~~

## Faça o build da aplicação
* Rode o comando abaixo para fazer o build
~~~ bash
npm run build
~~~

## Inicie a aplicação
~~~ bash
npm start
~~~


# Atualizar o token de autenticação Asaas
1. Navegue até a página de testes do asaas https://sandbox.asaas.com/ e crie uma conta
2. No seu painel vá até configurações
3. Acesse a página de integração e gere um novo token
> É possível visualizar o token apenas uma vez
> Cada token gerado invalida o token anterior
4. Navegue até a pasta ./src/pages/api/gerarPagamento.js e substitua a palavra token pelo token gerado na linha 38
5. Navegue até a pasta ./src/pages/api/formularioFinalizarCadastro.js e substitua a palavra token pelo token gerado na linha 11