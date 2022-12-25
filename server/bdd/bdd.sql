use sys;
drop database if exists tempus;
create database tempus;
use tempus;

create table users(
id int auto_increment,
username varchar (15) not null unique,
psswd varchar (35) not null,
primary key(id)
);

insert into users (username,psswd) values ('ronasuer','vdreanoivh');

select * from users