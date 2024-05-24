CREATE DATABASE db_generation_rpg;

USE db_generation_rpg;

CREATE TABLE tb_classes (
    id_classe INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(50),
    descricao VARCHAR(255)
);

CREATE TABLE tb_personagens (
    id_personagem INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(100),
    poder_ataque INT,
    poder_defesa INT,
    id_classe INT,
    FOREIGN KEY (id_classe) REFERENCES tb_classes(id_classe)
);

-- Inserir registros na tabela tb_classes
INSERT INTO tb_classes (nome, descricao) VALUES
('Guerreiro', 'Classe especializado em combate'),
('Mago', 'Classe especializada em magia'),
('Arqueiro', 'Classe especializada arco e flecha'),
('Cavaleiro', 'Classe especializada em cavalheria'),
('Assassino', 'Classe especializada em assassinatos');

-- Inserir registros na tabela tb_personagens
INSERT INTO tb_personagens (nome, poder_ataque, poder_defesa, id_classe) VALUES
('Lana', 2500, 1800, 1),
('Link', 1800, 2200, 3),
('Nokolai', 2100, 1500, 4),
('Vito', 3000, 1900, 1),
('Erna', 1700, 2500, 2),
('Sven', 2200, 2000, 5),
('Yrsa', 2700, 1700, 1),
('Zola', 1900, 2100, 3);

-- Personagens com poder de ataque maior que 2000
SELECT * FROM tb_personagens WHERE poder_ataque > 2000;

-- Personagens com poder de defesa entre 1000 e 2000
SELECT * FROM tb_personagens WHERE poder_defesa BETWEEN 1000 AND 2000;

-- Personagens que contenham a letra 'C' no nome
SELECT * FROM tb_personagens WHERE nome LIKE '%C%';

-- INNER JOIN entre tb_personagens e tb_classes
SELECT p.*, c.nome AS classe 
FROM tb_personagens p 
INNER JOIN tb_classes c ON p.id_classe = c.id_classe;

-- INNER JOIN com filtro por classe ('Arqueiro' como exemplo)
SELECT p.*, c.nome AS classe 
FROM tb_personagens p 
INNER JOIN tb_classes c ON p.id_classe = c.id_classe 
WHERE c.nome = 'Arqueiro';