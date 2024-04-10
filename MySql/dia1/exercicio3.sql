create database db_escola;
use db_escola;

create table tb_aluno(
id bigint auto_increment primary key,
nome varchar(255) not null, 
nota decimal not null,
serie bigint not null, 
 turno varchar(255)
);

INSERT INTO tb_aluno(nome,nota,serie,turno)
VALUES("Cher", 8.2, 5,"manhã");
INSERT INTO tb_aluno(nome,nota,serie,turno)
VALUES("Madonna",9.5,9,"noite");
INSERT INTO tb_aluno(nome,nota,serie,turno)
VALUES("Beyonce",10.0, 3,"tarde");
INSERT INTO tb_aluno(nome,nota,serie,turno)
VALUES("Britney Spears",5.2, 8,"tarde");
INSERT INTO tb_aluno(nome,nota,serie,turno)
VALUES("Mariah Carey",6.5, 4,"tarde");
INSERT INTO tb_aluno(nome,nota,serie,turno)
VALUES("Rihanna",7.7, 4,"noite");
INSERT INTO tb_aluno(nome,nota,serie,turno)
VALUES("Kelly Clarkson",8.2, 7, "noite");
INSERT INTO tb_aluno(nome,nota,serie,turno)
VALUES("Lady Gaga",7.8, 8,"noite");

SELECT * from tb_aluno;

SELECT * from tb_aluno where nota > 7.0;
SELECT * from tb_aluno where nota < 7.0;

UPDATE tb_produto SET nota = 9.9 WHERE id = 2;