CREATE TABLE asaas (
    id            TEXT    PRIMARY KEY,
    name          TEXT    NOT NULL,
    cpfCnpj       TEXT    NOT NULL,
    email         TEXT    NOT NULL,
    mobilePhone   TEXT    NOT NULL,
    address       TEXT    NOT NULL,
    addressNumber TEXT    NOT NULL,
    postalCode    TEXT,
    observations  TEXT,
    id_usuario    INTEGER NOT NULL
                          REFERENCES usuario (id) 
);

CREATE TABLE compra (
    id          INTEGER PRIMARY KEY AUTOINCREMENT,
    id_usuario  INTEGER REFERENCES usuario (id),
    id_curso    INTEGER REFERENCES cursos (id),
    id_cobranca TEXT    REFERENCES pagamento_cobranca (id) 
);

CREATE TABLE cursos (
    id                   INTEGER PRIMARY KEY AUTOINCREMENT                              NOT NULL,
    nome                 TEXT,
    caminho_imagem       TEXT,
    nivel                TEXT,
    turno                TEXT,
    preco                REAL,
    modalidade           TEXT,
    mais_cursado         INTEGER,
    em_promocao          INTEGER,
    desconto_porcentagem INTEGER,
    url_localizacao_mapa TEXT,
    alta_empregabilidade INTEGER,
    sobre                TEXT,
    estado               TEXT,
    cidade               TEXT,
    endereco             TEXT,
    latitude             REAL,
    longitude            REAL,
    desconto             REAL
);

CREATE TABLE google (
    uid         TEXT    PRIMARY KEY
                        NOT NULL,
    displayName TEXT    NOT NULL,
    email       TEXT    NOT NULL,
    photoURL    TEXT,
    id_usuario  INTEGER REFERENCES usuario (id) 
                        NOT NULL
);

CREATE TABLE pagamento_cobranca (
    id                      TEXT    PRIMARY KEY,
    billingType             TEXT    NOT NULL,
    value                   REAL,
    dueDate                 TEXT    NOT NULL,
    description             TEXT    NOT NULL,
    id_curso                INTEGER REFERENCES cursos (id),
    id_customerAsaas        TEXT    REFERENCES asaas (id),
    id_usuarioMaisSolidario INTEGER REFERENCES usuario (id),
    id_usuarioGoogle        TEXT    REFERENCES google (uid) 
);

CREATE TABLE pagamento_status (
    id          INTEGER PRIMARY KEY AUTOINCREMENT,
    event       TEXT,
    value       REAL,
    description TEXT,
    billingType TEXT,
    status      TEXT,
    id_asaas    TEXT    REFERENCES asaas (id),
    id_cobranca TEXT    REFERENCES pagamento_cobranca (id) 
);

CREATE TABLE usuario (
    id         INTEGER PRIMARY KEY AUTOINCREMENT
                       NOT NULL,
    nome       TEXT    NOT NULL,
    email      TEXT    NOT NULL,
    nascimento TEXT    NOT NULL,
    estado     TEXT    NOT NULL,
    cidade     TEXT    NOT NULL,
    endereco   TEXT    NOT NULL,
    bairro     TEXT    NOT NULL,
    numero     TEXT    NOT NULL
);
