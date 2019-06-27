const mysql = require("mysql");

const connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "password",
    database: "bamazon"
});

connection.connect((err) => {
    if (err) throw err;
    afterConnection();
});
function afterConnection() {
    connection.query("SELECT * FROM products", (err, data) => {
        if (err) throw err;
        console.log(data[0])
        connection.end();
    })
}

