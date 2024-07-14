import * as ExpoSQLite from "expo-sqlite";

const db = ExpoSQLite.openDatabase("sessions.db");

export const init = () =>
    new Promise((resolve: any, reject: any) => {
        db.transaction((tx) => {
            tx.executeSql(
                `CREATE TABLE IF NOT EXISTS sessions (localId TEXT PRIMARY KEY NOT NULL, email TEXT NOT NULL, token TEXT NOT NULL)`,
                [],
                (_, result) => resolve(result),
                (_, error) => reject(error)
            );
        });
    });

export const insertSession = ({ email, localId, token }: { email: string; localId: string; token: string }) =>
    new Promise((resolve: any, reject: any) => {
        db.transaction((tx) =>
            tx.executeSql(
                `INSERT INTO sessions (email, localId, token) VALUES (?,?,?)`,
                [email, localId, token],
                (_, result) => resolve(result),
                (_, error) => reject(error)
            )
        );
    });

export const fetchSession = () =>
    new Promise((resolve: any, reject: any) => {
        db.transaction((tx) =>
            tx.executeSql(
                `SELECT * from sessions`,
                [],
                (_, result) => resolve(result),
                (_, error) => reject(error)
            )
        );
    });

export const truncateSession = () =>
    new Promise((resolve: any, reject: any) => {
        db.transaction((tx) => {
            tx.executeSql(
                "DELETE from sessions",
                [],
                (_, result) => resolve(result),
                (_, error) => reject(error)
            );
        });
    });
