create database Flutua;
use Flutua;

create table Plano (
idPlano int primary key auto_increment,
nome varchar(45),
tipo varchar(45),
valor float(2));

create table Computador (
idComputador int primary key auto_increment,
nome_cpu varchar(45),
placa_video varchar(45),
ram varchar(45),
armazenamento varchar(45),
fk_idPlano int,
foreign key (fk_idPlano) references Plano(idPlano));

create table Usuario (
idUsuario int primary key auto_increment,
nome varchar(45),
sobrenome varchar(45),
dataNasc date,
email varchar(45),
senha varchar(45),
fk_idPlanoUsuario int,
foreign key (fk_idPlanoUsuario) references Plano(idPlano));

create table Avaliacao (
idAvaliacao int primary key auto_increment,
qtdEstrelas int,
mensagem varchar(200),
fk_idUsuario int unique,
foreign key (fk_idUsuario) references Usuario(idUsuario));








insert into Plano (nome, tipo, valor) values
('Básico', 'Diário', 10.00),
('Básico', 'Semanal', 25.00),
('Básico', 'Mensal', 50.00),
('Game', 'Diário', 20.00),
('Game', 'Semanal', 35.00),
('Game', 'Mensal', 70.00),
('Avançado', 'Diário', 30.00),
('Avançado', 'Semanal', 45.00),
('Avançado', 'Mensal', 90.00);

insert into Computador(nome_cpu, placa_video, ram, armazenamento, fk_idPlano) values
('4vCPU', 'Tesla T4 2GB', '8GB', '50GB', 1),
('4vCPU', 'Tesla T4 2GB', '8GB', '100GB', 2),
('4vCPU', 'Tesla T4 2GB', '8GB', '250GB', 3),
('8vCPU', 'Tesla T4 8GB', '16GB', '150GB', 4),
('8vCPU', 'Tesla T4 8GB', '16GB', '250GB', 5),
('8vCPU', 'Tesla T4 8GB', '16GB', '500GB', 6),
('8vCPU', 'Tesla T4 15GB', '32GB', '250GB', 7),
('8vCPU', 'Tesla T4 15GB', '32GB', '500GB', 8),
('8vCPU', 'Tesla T4 15GB', '32GB', '1TB', 9);

select * from Plano join Computador on idPlano = fk_idPlano;
