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
                "Find items by ID",
                "exit"
            ]
        })
        .then(function (answer) {
            switch (answer.action) {
                case "Find items by ID":
                    productSearch();
                    break;

                case "exit":
                    connection.end();
                    break;
            }
        });
}

// function productSearch() {
//     inquirer
//         .prompt({
//             name: "PRIMARY KEY",
//             type: "input",
//             message: "What is the ID of the product you are looking for?"
//         })
//         .then(function (answer) {
//             var query = "SELECT * FROM products WHERE ?";
//             connection.query(query, { products: answer.product_name }, function (err, res) {
//                 if (err) throw err;
//                 for (var i = 0; i < res.length; i++) {
//                     console.log(res[i].product_name);
//                 }
//                 runSearch();
//             });
//         });
// }

function productSearch() {
    inquirer
      .prompt({
        type: "input",
        message: "What is the ID of the item you are looking for?",
        name: "id"
      }).then(answer => {
        connection.query("SELECT * FROM products WHERE ?", answer, (err, data)=> {
          if(err) throw err;
          console.table(data);
          runSearch();
        });
      });
  }