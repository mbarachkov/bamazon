const mysql = require("mysql");
const inquirer = require("inquirer")

const connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "password",
    database: "bamazon"
});

connection.connect((err) => {
    if (err) throw err;
    runSearch();
});


function runSearch() {
    inquirer
        .prompt({
            name: "action",
            type: "list",
            message: "What would you like to do?",
            choices: [
                "View all available Items",
                "Find items by ID",
                "exit"
            ]
        })
        .then(function (answer) {
            switch (answer.action) {
                case "View all available Items":
                    allProducts();
                    break;

                case "Find items by ID":
                    productSearch();
                    break;

                case "exit":
                    connection.end();
                    break;
            }
        });
}

function allProducts() {
    connection.query("SELECT product_name FROM products", function(err, res) {
      if (err) throw err;
  
      // Log all results of the SELECT statement
      console.table(res);
      connection.end();
    });
  }

function productSearch() {
    inquirer
        .prompt({
            type: "input",
            message: "What is the ID(1-10) of the item you are looking for?",
            name: "id"
        }).then(answer => {
            connection.query("SELECT * FROM products WHERE ?", answer, (err, data) => {
                if (err) throw err;
                console.table(data);
                amountSearch()
            });
        });
}

function amountSearch() {
    inquirer
        .prompt({
            type: "input",
            message: "How many of this item are you looking for?",
            name: "stock_quantity"
        }).then((answer) => {
            connection.query("SELECT * FROM products WHERE ?", answer, (err, data) => {
                var amount = parseInt(data.stock_quantity);
                if (err) throw err;
                else if (amount > answer) {
                    console.log("we cannot fufill that order, it must be under" + answer.stock_quantity);
                } else {
                    console.log("we can fufill that order")
                    runSearch();
                }
            });

        });
}