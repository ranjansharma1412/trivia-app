import React from 'react';
import { getConnection } from '../dbConfig';

//INSERT IN HISTORY TABLE
export async function insertGameHistory(name, best_cricketer, flag_colors, game_date) {
    let db = await getConnection();
    let isExist = await checkTableExist("history");
    return new Promise((resolve, reject) => {
        let insetQRY = "INSERT INTO history (name,best_cricketer,flag_colors,game_date) VALUES (?,?,?,?)"
        if (isExist) {
            db.transaction(tx => {
                tx.executeSql(insetQRY, [name, best_cricketer, flag_colors, game_date], (tx, results) => {
                    resolve(results);
                });
            });
        }
    });
}

//CREATE TABLE IF NOT EXISTS
export async function checkTableExist(table_name) {
    let db = await getConnection();
    return new Promise((resolve, reject) => {
        let query = "SELECT * FROM sqlite_master WHERE name =? and type='table'";

        let create_hisory_table = "CREATE TABLE IF NOT EXISTS history(id INTEGER PRIMARY KEY AUTOINCREMENT, memo VARCHAR(50),name VARCHAR(255),best_cricketer VARCHAR(50),flag_colors VARCHAR(255),game_date VARCHAR(255))";
        db.transaction(tx => {
            tx.executeSql(query, [table_name], (txn, results) => {
                const { rows } = results;
                if (rows.length > 0) {
                    resolve(true)
                } else {
                    tx.executeSql(create_hisory_table, [], (txtxn, results) => {
                    });
                    resolve(false);
                }

            });
        });
    });
}


//SELECT ALL GAME HISTORY
export async function selectAllGameHistory(category_type) {
    let db = await getConnection();
    return new Promise((resolve, reject) => {
        db.transaction(tx => {
            tx.executeSql('SELECT * FROM history ', [], (tx, results) => {
                const { rows } = results;
                var temp = [];
                for (let i = 0; i < rows.length; ++i) {
                    temp.push(rows.item(i));
                }
                resolve(temp);
            });
        });
    });
}