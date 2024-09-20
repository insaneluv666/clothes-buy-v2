import { DataSource } from 'typeorm';
import { Product } from '@models/products.model';

export const AppDataSource = new DataSource({
    type: 'postgres',
    host: process.env.DB_HOST || 'localhost',
    port: parseInt(process.env.DB_PORT || '5432'),
    username: process.env.DB_USER || 'postgres',
    password: process.env.DB_PASSWORD || 'mysecretpassword',
    database: process.env.DB_NAME || 'ecommerce',
    entities: [Product],
    synchronize: false,
    logging: ['error', 'warn', 'schema'],
    migrations: ['src/migrations/*.ts'],
    migrationsTableName: 'migrations',
});

export const connectDatabase = async (): Promise<void> => {
    try {
        await AppDataSource.initialize();
        console.log('Data Source has been initialized!');
    } catch (error) {
        console.error('Error during Data Source initialization:', error);
        process.exit(1);
    }
};
