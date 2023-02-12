const mongoose = require('mongoose');

const stringConnection = async() =>{
    try {
        await mongoose.connect ('mongodb+srv://wnoack:Wnoack1987@cluster0.b9utksm.mongodb.net/test');
        console.log('tai conectao a la BBDD');
    } catch(error) {
        console.log(error);
        throw new Error('Falló la conexión');
    }
}

module.exports={
    stringConnection
}