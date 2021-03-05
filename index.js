const { Pool } = require('pg');

const config = {
    user: 'postgres',
    host: 'localhost',
    password: 'TbD2021*',
    database: 'library'
};

const pool = new Pool(config);

const getBooks = async () => {
    try {
        const res = await pool.query('select * from books');
        console.log(res.rows);
        pool.end();   
    } catch (error) {
        console.log(error);
    }    
};

const insertUser = async () => {
    try {
        const text = 'INSERT INTO users(username, password) VALUES($1, $2)';
        const values = ['John', 'johnCash1'];
        const res =  await pool.query(text, values);
        console.log(res);
        pool.end();   
    } catch (error) {
        console.log(error);
    }    
};
const deleteUser = async () => {
    try {
        const text = 'DELETE FROM users WHERE username = $1';
        const value = ['John'];
        const res = await pool.query(text, value);
        console.log(res);
        pool.end();   
    } catch (error) {
        console.log(error);
    }    
}

const editUser = async () => {
    try {
        const text = 'UPDATE users SET username = $1 WHERE username = $2';    
        const values = ['Alex', 'Bruce'];
        const res = await pool.query(text, values);
        console.log(res);
        pool.end();
    } catch (error) {
        console.log(error);
    }
};

//editUser();

//deleteUser();

//insertUser();

//getBooks();