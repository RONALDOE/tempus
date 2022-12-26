use sys;
drop database if exists tempus;
create database tempus;
use tempus;

create table users(
id int auto_increment,
username varchar (15) not null unique,
psswd varchar (250) not null,
primary key(id)
);

insert into users (username,psswd) values ('ronasuer','$2a$04$sYZNaJC/ibvi1HpYI.gO9etK6khytMH0mlq8pl6LU3.jcNHcOhinq');

select * from users