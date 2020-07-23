import React from 'react';
import SQLite from "react-native-sqlite-storage";
SQLite.DEBUG(true);
SQLite.enablePromise(true);

const database_name = "trivia.db";
const database_version = "1.0";
const database_displayname = "Trivia App";
// const database_size = 200000;

export async function getConnection(props) {
    const errorCB = (err) => {
        console.log("SQL Error: " + err);
    }

    const openCB = () => {
        console.log("Database OPENED");
    }

    let db = await SQLite.openDatabase(database_name, database_version, database_displayname, 200000, openCB, errorCB);
    return db;
}