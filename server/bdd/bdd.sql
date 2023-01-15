USE sys;
DROP DATABASE IF EXISTS tempus;

CREATE DATABASE tempus;
USE tempus;

CREATE TABLE Employees(
_idEmployee INT AUTO_INCREMENT,
_name VARCHAR(35) NOT NULL,
_lastName VARCHAR(70) NOT NULL,
_idNumber VARCHAR(15) NOT NULL UNIQUE,
_cellphone VARCHAR(15) NOT NULL UNIQUE,
_email VARCHAR(35) NOT NULL UNIQUE,
PRIMARY KEY (_idEmployee)
);

CREATE TABLE Users(
_idUser INT AUTO_INCREMENT,
_userName VARCHAR(35) NOT NULL UNIQUE,
_password VARCHAR(255) NOT NULL,
_idEmployee INT NOT NULL,
_idCustomer INT NOT NULL,
PRIMARY KEY (_idUser),
FOREIGN KEY (_idEmployee) REFERENCES Employees(_idEmployee)
);

CREATE TABLE Roles(
_idRole INT AUTO_INCREMENT,
_roleName VARCHAR (40) NOT NULL,
_roleDescription VARCHAR(250) NULL,
PRIMARY KEY (_idRole)
);

CREATE TABLE  Billing_Plans(
_idPlan INT AUTO_INCREMENT,
_planType VARCHAR(50) NOT NULL,
_pricePerMonth FLOAT NOT NULL,
_pricePerYear FLOAT NOT NULL,
_storage VARCHAR (10) NOT NULL,
_maxAccountsNumber INT NOT NULL,
_maxGroupsNumber INT NOT NULL,
PRIMARY KEY (_idPlan)
);
CREATE TABLE Proyects(
_idProyect INT AUTO_INCREMENT,
_proyectName VARCHAR(35) NOT NULL,
_proyectDescription VARCHAR(255) NOT NULL,
_startDate DATETIME NOT NULL,
_proyectDeadline DATETIME NOT NULL,
_finishDate DATETIME NULL,
_proyectImage BLOB,
PRIMARY KEY (_idProyect)
);

CREATE TABLE Tasks (
  _idTask INT AUTO_INCREMENT,
  _taskName VARCHAR(255) NOT NULL,
  _taskDescription VARCHAR(255) NOT NULL,
  _taskDeadline DATETIME NOT NULL,
  _taskStatus VARCHAR(50) NOT NULL,
  _designatedEmployee INT NOT NULL,
  PRIMARY KEY (_idTask),
  FOREIGN KEY (_designatedEmployee) REFERENCES Employees(_idEmployee)

);

CREATE TABLE Payment_Methods(
_idPaymentMethod INT AUTO_INCREMENT,
_paymentMethodName VARCHAR(35) NOT NULL,
PRIMARY KEY (_idPaymentMethod)
);



CREATE TABLE User_Roles(
_idUser INT,
_idRole INT,
FOREIGN KEY (_idUser) REFERENCES Users(_idUser),
FOREIGN KEY (_idRole) REFERENCES Roles(_idRole)
);

CREATE TABLE Customers(
_idCustomer INT AUTO_INCREMENT,
_selectedPlan INT NOT NULL,
_emailCustomer VARCHAR(35) NOT NULL,
_cellphoneCustomer VARCHAR(15) NOT NULL,
_isEnterprise BOOL NOT NULL,
_isProyect BOOL NOT NULL,
PRIMARY KEY (_idCustomer),
FOREIGN KEY (_selectedPlan) REFERENCES Billing_Plans(_idPlan)

);

#GREMIOS
CREATE TABLE Guilds(
_idGuild INT AUTO_INCREMENT,
_guildName VARCHAR(35) NOT NULL,
_guildImage BLOB NULL,
_customerManager INT NOT NULL,
PRIMARY KEY (_idGuild),
FOREIGN KEY (_customerManager) REFERENCES Customers(_idCustomer)
);


CREATE TABLE WorkGroups (
  _idGroup INT AUTO_INCREMENT,
  _groupName VARCHAR(50) NOT NULL,
  _groupLeader INT NOT NULL,
  _groupTask INT NOT NULL,
  PRIMARY KEY (_idGroup),
  FOREIGN KEY (_groupLeader) REFERENCES Employees(_idEmployee),
  FOREIGN KEY (_groupTask) REFERENCES Tasks(_idTask)
);



CREATE TABLE Messages (
  _idMessage INT AUTO_INCREMENT,
  _sender INT NOT NULL,
  _recipient INT NOT NULL,
  _message TEXT NOT NULL,
  _sendDate DATETIME NOT NULL,
  PRIMARY KEY (_idMessage),
  FOREIGN KEY (_sender) REFERENCES Employees(_idEmployee),
  FOREIGN KEY (_recipient) REFERENCES Employees(_idEmployee)
);



CREATE TABLE File_Uploads (
_idUpload INT AUTO_INCREMENT,
_fileType VARCHAR(10) NOT NULL,
_fileName VARCHAR(100) NOT NULL,
_file BLOB NOT NULL,
_fileWeight BIGINT NOT NULL,
_idProyect INT NOT NULL,
_idTask INT NOT NULL,
_timestamp DATETIME NOT NULL,
PRIMARY KEY (_idUpload),
FOREIGN KEY (_idProyect) REFERENCES Proyects(_idProyect),
FOREIGN KEY (_idTask) REFERENCES Tasks(_idTask)
);


CREATE TABLE Invoices(
_idInvoice INT AUTO_INCREMENT,
_invoiceAmount FLOAT NOT NULL,
_idCustomer INT NOT NULL,
PRIMARY KEY (_idInvoice),
FOREIGN KEY (_idCustomer) REFERENCES Customers(_idCustomer)
);

CREATE TABLE Payments(
_idPayment INT AUTO_INCREMENT,
_idCustomer INT NOT NULL,
_amount FLOAT NOT NULL,
_idPaymentMethod INT NOT NULL,
_lastUpdate DATETIME NOT NULL,
PRIMARY KEY (_idPayment),
FOREIGN KEY (_idPaymentMethod) REFERENCES Payment_Methods(_idPaymentMethod)
);

use tempus;
INSERT INTO Employees (_name, _lastName, _idNumber, _cellphone, _email) VALUES
('Juan', 'Pérez', '1234567890', '1234567890', 'juan@example.com'),
('María', 'Rodríguez', '0987654321', '0987654321', 'maria@example.com');

INSERT INTO Users (_userName, _password, _idEmployee, _idCustomer) VALUES
('juan', 'password123', 1, 1),
('maria', 'password456', 2, 2);

INSERT INTO Roles (_roleName, _roleDescription) VALUES
('Administrador', 'Tiene acceso a todas las funciones del sistema'),
('Empleado', 'Tiene acceso limitado a ciertas funciones del sistema');

INSERT INTO Billing_Plans (_planType, _pricePerMonth, _pricePerYear, _storage, _maxAccountsNumber, _maxGroupsNumber) VALUES
('Básico', 10.99, 99.99, '1GB', 5, 2),
('Premium', 20.99, 199.99, '10GB', 25, 10);

INSERT INTO Proyects (_proyectName, _proyectDescription, _startDate, _proyectDeadline, _finishDate, _proyectImage) VALUES
('Proyecto 1', 'Descripción del proyecto 1', '2022-01-01', '2022-03-01', NULL, NULL),
('Proyecto 2', 'Descripción del proyecto 2', '2022-02-01', '2022-04-01', NULL, NULL);

INSERT INTO Tasks (_taskName, _taskDescription, _taskDeadline, _taskStatus) VALUES
('Tarea 1', 'Descripción de la tarea 1', '2022-01-15', 'Pendiente'),
('Tarea 2', 'Descripción de la tarea 2', '2022-02-15', 'Pendiente');

INSERT INTO Payment_Methods (_paymentMethodName) VALUES
('Tarjeta de crédito'),
('PayPal');

INSERT INTO User_Roles (_idUser, _idRole) VALUES
(1, 1),
(2, 2);

INSERT INTO Customers (_selectedPlan, _emailCustomer, _cellphoneCustomer, _isEnterprise, _isProyect) VALUES
(1, 'customer1@example.com', '1234567890', 0, 0),
(2, 'customer2@example.com', '0987654321', 1, 1);

INSERT INTO Guilds (_guildName, _guildImage, _customerManager) VALUES
('Gremio 1', NULL, 1),
('Gremio 2', NULL, 2);

INSERT INTO WorkGroups (_groupName, _groupLeader, _groupTask) VALUES
('Grupo 1', 1, 1),
('Grupo 2', 2, 2);

SELECT * FROM Users WHERE _userName ='juan' and _password = 'password123'


