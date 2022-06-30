const mongoose = require('mongoose');

module.exports = async () => {
    const connectionParams = {
        useNewUrlParser: true,
        useUnifiedTopology: true
    };

    try {
        await mongoose.connect(process.env.DB, connectionParams);
        console.log('Connected successfully to the database!');
    } catch (error) {
        console.log('Could not connect to the database!');
    }
}