import cors from 'cors';
import express from 'express';
import { graphqlHTTP } from 'express-graphql';
import { DataSource } from 'typeorm';

import { Users } from './entities/Users.entity';
import { schema } from './schema';


async function main() {
  const AppDataSource = new DataSource({
    type: 'mysql',
    database: 'graphqlcrud',
    username: 'root',
    password: 'root',
    logging: true,
    synchronize: false,
    entities: [Users],
  });

  await AppDataSource.initialize();

  const app = express();

  app.use(cors());
  app.use(express.json());
  app.use(
    '/graphql',
    graphqlHTTP({
      schema,
      graphiql: true,
    })
  );

  app.listen(3001, () => console.log('✨ SERVER IS RUNNING ON PORT 3001 🚀'));
}


main().catch((err) => console.error(`🔥 ${err}`));
