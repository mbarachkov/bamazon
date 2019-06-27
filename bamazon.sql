DROP DATABASE IF EXISTS bamazon;
CREATE DATABASE bamazon;

USE bamazon;

CREATE TABLE products(
	id INT NOT NULL AUTO_INCREMENT,
    product_name VARCHAR(50) NOT NULL,
    department_name VARCHAR(30) NOT NULL,
    price INTEGER(5) NOT NULL,
    stock_quantity INTEGER(10) NOT NULL,
    PRIMARY KEY (id)
);

INSERT INTO products (product_name, department_name, price, stock_quantity) VALUES ('SHAMWOW', 'As Seen On TV', 20, 100);
INSERT INTO products (product_name, department_name, price, stock_quantity) VALUES ('Nails', 'Hardware', 5, 2000);
INSERT INTO products (product_name, department_name, price, stock_quantity) VALUES ('Hammer', 'Hardware', 15, 500);
INSERT INTO products (product_name, department_name, price, stock_quantity) VALUES ('LED TV', 'Electronics', 1400, 28);
INSERT INTO products (product_name, department_name, price, stock_quantity) VALUES ('IPad', 'Electronics', 300, 50);
INSERT INTO products (product_name, department_name, price, stock_quantity) VALUES ('Hydroflask', 'Outdoors', 30, 200);
INSERT INTO products (product_name, department_name, price, stock_quantity) VALUES ('Sleeping Bag', 'Outdoors', 100, 30);
INSERT INTO products (product_name, department_name, price, stock_quantity) VALUES ('Tent', 'Outdoors', 200, 20);
INSERT INTO products (product_name, department_name, price, stock_quantity) VALUES ('Cheerios', 'Food', 7, 150);
INSERT INTO products (product_name, department_name, price, stock_quantity) VALUES ('Poptarts', 'food', 8, 50);
INSERT INTO products (product_name, department_name, price, stock_quantity) VALUES ('Flexseal', 'As Seen On TV', 40, 250);

SELECT * FROM products;