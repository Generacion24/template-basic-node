const app = require("./app")
const sequelize = require("./utils/connection")

const PORT = process.env.PORT || 8080 

const main = ()=>{

    try{
        sequelize.sync()
        console.log("DB connected 😎😎👏")
        app.listen(PORT)
        console.log(`Server running on ${PORT} 💥👏`)
    }catch(error){
        console.error(error)
    }

}

main()