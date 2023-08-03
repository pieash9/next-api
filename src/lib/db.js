const { DB_USER, DB_PASS } = process.env;

export const connectionStr = `mongodb+srv://${DB_USER}:${DB_PASS}@cluster0.fiktc6e.mongodb.net/productDB?retryWrites=true&w=majority`;
