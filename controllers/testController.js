import color from 'colors'

const testPostController = async (req, res) => {
    try {
        const { name } = req.body
        res.status(200).send(`Your name is ${name}`.bgGreen)
    } catch (error) {
        console.log(error)
    }
}

export default {testPostController}