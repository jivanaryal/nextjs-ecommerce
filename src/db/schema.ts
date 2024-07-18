import { serial, text, pgTable, pgSchema } from "drizzle-orm/pg-core";
export const schema = pgSchema("schema");
export const colors = schema.enum("colors", ["red", "green", "blue"]);
export const mySchemaUsers = schema.table("users", {
  id: serial("id").primaryKey(),
  name: text("name"),
  color: colors("color").default("red"),
});
