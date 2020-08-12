# Modulo de Banco de dados.

Eu usei um container com MariaDB e o Adminer.

```
docker stack deploy -c docker-compose.yml mariadb 
```

## Aula de tabelas

### Conexão com o DB

```sql
mysql - h localhost - u root - p 
```

ou **via container: Localhost:8080**

### Mostrar os DB, criar e entrar na tabela
```sql 
SHOW DATABASE;
CREATE DATABASE sisteamDeCadastro;
USE sisteamDeCadastro;
```
### Criar tabelas e colunas
```sql
CREATE TABLE usuarios(
  nome VARCHAR(50),
  email VARCHAR(100),
  idade INT
);
```

### Mostrar Tabelas
```sql
SHOW TABLES;
```
### Descrição da tabela 
```sql
DESC usuarios;
```

## Aula de INSERT, SELECT e WHERE

### Inserir um dado
```sql
 INSERT INTO usuarios(nome, email, idade) VALUES(
   "Guilherme",
  "gui@email.com",
  20
 );
```
### Selecionar os dados do usuários 
```sql
SELECT * FROM usuarios;
```
Tabelas do usuários:

| nome      |      email      | idade |
| :-------- | :-------------: | ----: |
| Guilherme |  gui@email.com  |    20 |
| Lucas     | lucas@email.com |    30 |
| João      | joao@email.com  |     8 |
| Luana     | luana@email.com |     8 |

### Listar usuários por idade

```sql
SELECT * FROM usuarios WHERE idade=8;
```

Lista com usuários com 8 anos:

| nome  |      email      | idade |
| :---- | :-------------: | ----: |
| João  | joao@email.com  |     8 |
| Luana | luana@email.com |     8 |

Lista com usuários com nome igual a Lucas:

```sql
SELECT * FROM usuarios WHERE nome = "Lucas";
```

| nome  |      email      | idade |
| :---- | :-------------: | ----: |
| Lucas | lucas@email.com |    30 |

Lista de usuários com idade maior que 18:

```sql
SELECT * FROM usuarios WHERE idade > 18;
```
| nome      |      email      | idade |
| :-------- | :-------------: | ----: |
| Guilherme |  gui@email.com  |    20 |
| Lucas     | lucas@email.com |    30 |

## Aula de DELETE

### Apagar registros dentro de uma tabela

Ver tabela de usuários:
```sql
SELECT * FROM usuarios;
```

| nome      |      email      | idade |
| :-------- | :-------------: | ----: |
| Guilherme |  gui@email.com  |    20 |
| Lucas     | lucas@email.com |    30 |
| João      | joao@email.com  |     8 |
| Luana     | luana@email.com |     8 |

Apagar todos os registros da tabelas

```sql
DELETE FROM usuarios;
```

Apagar registros específicos da tabelas

```sql
DELETE FROM usuarios WHERE nome = "Luana";

SELECT * FROM usuarios;
```

| nome      |      email      | idade |
| :-------- | :-------------: | ----: |
| Guilherme |  gui@email.com  |    20 |
| Lucas     | lucas@email.com |    30 |
| João      | joao@email.com  |     8 |

## Aula de UPDATE

### Editar registros dentro de uma tabela

Editar todos os registros da tabelas

```sql
UPDATE usuarios SET nome = "Teste";
```

Editar registros específicos da tabelas

```sql
UPDATE usuarios SET nome = "João da Silva" WHERE nome = "João";

SELECT * FROM usuarios;
```

| nome          |      email      | idade |
| :------------ | :-------------: | ----: |
| Guilherme     |  gui@email.com  |    20 |
| Lucas         | lucas@email.com |    30 |
| João da Silva | joao@email.com  |     8 |
