const mysql = require('mysql2');
var conn = mysql.createConnection({ 
    host : 'localhost',  
    user : 'root',
    password : '1234',
    database : 'homework'
}); // 실제는 이렇게 비밀번호 적나라하게 적으면 절대 안됨
conn.connect(); // mysql과 연결

module.exports = db;