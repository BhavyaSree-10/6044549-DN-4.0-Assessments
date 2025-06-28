USE EmployeeDB;

IF OBJECT_ID('Employees', 'U') IS NOT NULL DROP TABLE Employees;

IF OBJECT_ID('Departments', 'U') IS NOT NULL DROP TABLE Departments;

CREATE TABLE Departments (
    DepartmentID INT PRIMARY KEY,
    DepartmentName VARCHAR(100)
);

CREATE TABLE Employees (
    EmployeeID INT PRIMARY KEY IDENTITY(1,1),
    FirstName VARCHAR(50),
    LastName VARCHAR(50),
    DepartmentID INT FOREIGN KEY REFERENCES Departments(DepartmentID),
    Salary DECIMAL(10,2),
    JoinDate DATE
);
INSERT INTO Departments (DepartmentID, DepartmentName) VALUES
(1, 'HR'),(2, 'Finance'),(3, 'IT'),(4, 'Marketing');

INSERT INTO Employees (FirstName, LastName, DepartmentID, Salary, JoinDate) VALUES
('John', 'Doe', 1, 5000.00, '2020-01-15'),('James', 'Smith', 2, 6000.00, '2019-03-22'),
('Michael', 'Johnson', 3, 7000.00, '2018-07-30'),('Era', 'Davis', 4, 5500.00, '2021-11-05');


SELECT * FROM Employees;
IF OBJECT_ID('sp_InsertEmployee', 'P') IS NOT NULL
    DROP PROCEDURE sp_InsertEmployee;
GO
CREATE PROCEDURE sp_InsertEmployee
    @FirstName NVARCHAR(50),
    @LastName NVARCHAR(50),
    @DepartmentID INT,
    @Salary MONEY,
    @JoinDate DATE
AS
BEGIN
    INSERT INTO Employees (FirstName, LastName, DepartmentID, Salary, JoinDate)
    VALUES (@FirstName, @LastName, @DepartmentID, @Salary, @JoinDate);
END;
GO

EXEC sp_InsertEmployee
    @FirstName = 'Alice',
    @LastName = 'Brown',
    @DepartmentID = 1,
    @Salary = 5200.00,
    @JoinDate = '2022-09-01';

SELECT * FROM Employees;



