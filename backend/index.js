require("dotenv").config()
const DB_URL=process.env.DB_URl
const PORT=process.env.PORT
const {Application}=require("./app/server")
new Application(PORT,DB_URL)