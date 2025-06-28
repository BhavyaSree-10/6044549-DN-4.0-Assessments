USE RetailStore;
GO

IF OBJECT_ID('Products', 'U') IS NOT NULL DROP TABLE Products;
GO
CREATE TABLE Products (ProductID INT PRIMARY KEY, ProductName VARCHAR(100),Category VARCHAR(50),
    Price DECIMAL(10, 2)
);
INSERT INTO Products VALUES
(1, 'Laptop', 'Electronics', 75000),
(2, 'Smartphone', 'Electronics', 40000),
(3, 'Tablet', 'Electronics', 30000),
(4, 'TV', 'Electronics', 50000),
(5, 'Shirt', 'Clothing', 1500),
(6, 'Jeans', 'Clothing', 2000),
(7, 'Jacket', 'Clothing', 3000),
(8, 'Shoes', 'Clothing', 2500),
(9, 'Blender', 'Appliances', 3500),
(10, 'Microwave', 'Appliances', 8000),
(11, 'Toaster', 'Appliances', 3000);

SELECT ProductID,ProductName,Category,Price,
ROW_NUMBER() OVER (PARTITION BY Category ORDER BY Price DESC) AS RowNum
FROM Products;

SELECT ProductID,ProductName,Category,Price,
RANK() OVER (PARTITION BY Category ORDER BY Price DESC) AS PriceRank,
DENSE_RANK() OVER (PARTITION BY Category ORDER BY Price DESC) AS PriceDenseRank
FROM Products;

WITH RankedProducts AS (
    SELECT ProductID,ProductName,Category,Price,
    ROW_NUMBER() OVER (PARTITION BY Category ORDER BY Price DESC) AS RowNum FROM Products
)
SELECT * FROM RankedProducts WHERE RowNum <= 3;





