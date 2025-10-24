import dotenv from "dotenv"
import path from "path"
import { fileURLToPath } from "url";

//TASK
//1) for now i only consider the root dir env
//2) future release need to consider the all env files across the project

// construct absolute path of the .env file
const filename = fileURLToPath(import.meta.url)
const dirname = path.dirname(filename)
const absolutePath = path.resolve(dirname,"../tests/.env")

dotenv.config({
        path:absolutePath
    }
)

console.log(process.env.PORT)

