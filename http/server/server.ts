import "reflect-metadata";

import fastify from 'fastify'
import AdsRoutes from '../../http/routes/AdsRoutes';

const server = fastify()

server.register(AdsRoutes)

server.listen({ port: 3000, host: '0.0.0.0' }, (err, address) => {
  if (err) {
    console.error(err)
    process.exit(1)
  }
  console.log(`Server listening at ${address}`)
})