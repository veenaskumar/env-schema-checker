import dotenv from "dotenv"
import path from "path"
import { fileURLToPath } from "url";
import fs from "fs"

//TASK



const loadEnvAndSchema=(envPath,schemaPath)=>{
    const __filePath = process.cwd()
    const envPathDirectory = path.resolve(__filePath,envPath)
    const envData = dotenv.config({path:envPathDirectory})

    const schemaPathDirectory = path.resolve(__filePath,schemaPath)
    const schemaData = JSON.parse(fs.readFileSync(schemaPathDirectory))
    checkEnvAndSchema(envData.parsed,schemaData)
}

const checkEnvAndSchema=(envData,schemaData)=>{
    console.log(envData)
    let error=[]
    for(const [key,type] of Object.entries(schemaData)){
        let value = process.env[key]
        console.log(value)
        if(value===undefined){
            error.push(`---> undefined value for ${key}`)
        }
        if(Array.isArray(type)){
            if(!type.includes(value)){
                error.push(`---> Not a correct value for ${key}`)
            }
        }
    }
    if(error.length==0){
        console.log("The schema is verified successfully")
    }
    else{
        console.log("Errors")
        error.forEach((index)=>console.log(error))
    }
}

const validateEnv=({envPath,schemaPath})=>{
    try{
        if(!envPath || !schemaPath){
            throw new Error("Env Path and Schema path is mandatory")
        }
        loadEnvAndSchema(envPath,schemaPath)
    }
    catch(error){
        console.log(error.message)
    }
}


    
    



