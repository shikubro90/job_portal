import mongoose from "mongoose";
import color from "colors"

const bdConnect = async (req, res) => {
    try {
        
        if (await mongoose.connect(process.env.DATABASE)) {
            console.log("Data base running".bgGreen)
        } else {
            console.log("Database running fails")
        }
    } catch (error) {
        console.log(`Database running failed ${error}`.bgBlue)
    }
}

export default bdConnect;