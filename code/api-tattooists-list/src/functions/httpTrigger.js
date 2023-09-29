const { app } = require('@azure/functions');
const { MongoClient } = require("mongodb");

const cosmosDbConnectionString = 'mongodb://mongodbaccount:h3QGGjg0JNgJGpFsScxooBd0XduaIbgVEf7rcNAPkj9bbXw9sTWFOqvCnGdGItuIDOq5PW8HEGp9ACDbhhyHdw%3D%3D@mongodbaccount.mongo.cosmos.azure.com:10255/?ssl=true&retrywrites=false&maxIdleTimeMS=120000&appName=@mongodbaccount@';
const client = new MongoClient(cosmosDbConnectionString);

app.http('httpTrigger', {
    methods: ['GET'],
    authLevel: 'anonymous',
    handler: async (request, context) => {
        context.log(`Http function processed request for url "${request.url}"`);

        try {
            await client.connect();

            const db = client.db('Les-Gorgones');
            const collection = db.collection('Tattooists');

            const documents = await collection.find({}).toArray();

            return {
                body: JSON.stringify(documents),
                headers: {
                    'Content-Type': 'application/json',
                },
            };
        } catch (error) {
            context.error(error);
            return {
                status: 500,
                body: 'Internal Server Error',
            };
        }
    }
});
