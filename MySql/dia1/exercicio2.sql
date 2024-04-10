create database db_ecommerce;
use db_ecommerce;

create table tb_produto(
id bigint auto_increment primary key,
nome varchar(255) not null, 
preco bigint not null,
quantidade bigint not null, 
cor varchar(255)
);

INSERT INTO tb_produto(nome, preco,quantidade,cor)
VALUES("calculadora", 5000, 500,"rosa");
INSERT INTO tb_produto(nome, preco,quantidade,cor)
VALUES("relógio",500, 50,"roxo");
INSERT INTO tb_produto(nome, preco,quantidade,cor)
VALUES("caneca",150, 35,"azul");
INSERT INTO tb_produto(nome, preco,quantidade,cor)
VALUES("garrafa",525, 80,"verde");
INSERT INTO tb_produto(nome, preco,quantidade,cor)
VALUES("garfo",350, 45,"vermelho");
INSERT INTO tb_produto(nome, preco,quantidade,cor)
VALUES("faca",255, 40,"vermelho");
INSERT INTO tb_produto(nome, preco,quantidade,cor)
VALUES("colher",290, 50, "vermelho");
INSERT INTO tb_produto(nome, preco,quantidade,cor)
VALUES("copo",300, 55,"azul");

SELECT * from tb_produto;

SELECT * from tb_produto where preco > 500;
SELECT * from tb_produto where preco < 500;

UPDATE tb_produto SET preco = 600 WHERE id = 2;