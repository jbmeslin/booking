import { ApolloServer } from 'apollo-server-express'
import { ApolloServerPluginDrainHttpServer } from 'apollo-server-core'
import express from 'express'
import http from 'http'
import {schema} from "./schema";



async function listen(port: number) {
    const app = express()
    const httpServer = http.createServer(app)

    const server = new ApolloServer({
        schema,
        plugins: [ApolloServerPluginDrainHttpServer({ httpServer })],
    })
    await server.start()

    server.applyMiddleware({ app })

    return new Promise((resolve, reject) => {
        httpServer.listen(port).once('listening', resolve).once('error', reject)
    })
}

async function main() {
    try {
        await listen(4000)
        console.log('🚀 Server is ready at http://localhost:4000/graphql')
    } catch (err) {
        console.error('💀 Error starting the node server', err)
    }
}

void main()