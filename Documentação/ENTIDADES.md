11/11/2023 26º dia de desenvolvimento

# Entidades

### Usuário
id: 
nome:
email: 
nascimento:
estado:
cidade:
endereço:
bairro:
numero:

### Google
* uid: chave_primária
* displayName:
* email
* photoURL 
* id_usuario: chave secundária

### Asaas
* id: não é autoincremento (obtido com a requição do envio de formulário de pagamento)
* name:
* cpfCnpj
* email
* mobilePhone
* address
* addressNumber
* postalCode
* observations
* id_usuario: chave secundária

## Curso
* id: chave_primária
* nome (string 50):
* caminho_imagem
* nivel (string 20): Graduação, Pós-Graduação, Técnico, Escola;
* turno (string 15): manhã, tarde, noite, integral
* preço (real):
* modalidade (string 15): Presencial, Híbrido, Online.
* mais_cursado (boolean):
* desconto_porcentagem (real/float): 
* em_promocao (boolean): 
* url_localizacao_map
* alta_empregabilidade (boolean)
* sobre TEXT (descrição sobre o curso)
* estado
* cidade
* endereço
* latitude
* longitude

# Pagamento Cobrança
* id (id retornado pelo asaas)
* billingType:
* value
* dueDate
* description
* id_curso (chave secundária)
* id_customerAsaas
* id_usuarioMaisSolidario
* id_usuarioGoogle

# Compra
* id (chave primaria)
* id_usuario (chave secundária)
* id_curso
* id_cobranca

# Pagamento Status (webhook)
* id
* event
* value
* description
* billingType
* status
* id_asaas: chave secundária
* id_cobranca




// FALTAM CRIAR AS TABELAS ABAIXO

# Avaliação
* id
* nota 0 - 5 (estrelas) (real/float):
* ensino
* professores
* atendimento
* materiais
* id_curso (id secundário)

## Parceiro
* id: primary_key
* nome (string 50):
* sobre_faculdade
* sobre o campus
* sobre_ead
* sobre_presencial
* id_curso

## Descrição Parceiro
* id
* como_funciona_ead
* como_funciona_presencial
* id_parceiro

# Tags
* id
* nome (humanas, exatas....)
* id_curso 



## Notícias
id (primary_key):
tag_nome (string 30):
titulo (string 100):
autor (string 50):

## Depoimentos
id (primary_key):
nome (string 30):
profissao (string 30):
depoimento (text):

## Perguntas Frequentes
* id (primary_key):
* 

## 


(OLHAR DEPOIS COM CALMA)
## Quem somos?
## Política e Privacidade
* Termmos De Uso
* Politica de Reembolso

