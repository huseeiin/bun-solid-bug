"use server";
import { AkeboshiHimari, Database } from "../../Himari-sql/example/lib";

const table = `
CREATE TABLE IF NOT EXISTS ids (
    id TEXT
);
`;

const db = new AkeboshiHimari(new Database("db.sqlite"), table);
export const _get = async () => {
  return db.all("SELECT * FROM ids");
};

export function add() {
  "use server";

  db.db.prepare("INSERT INTO ids VALUES (?)").run(crypto.randomUUID());
}

export function del(id: string) {
  db.db.prepare("DELETE * FROM ids WHERE id = ?").run(id);
}
