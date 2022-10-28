import { Sequelize } from 'sequelize';

const sequelize = new Sequelize(
    {
        host: 'dpg-cdcrc5un6mpsbhf4dni0-a',
        url: process.env.DATABASE_URL ,
        port: 5432,
        database: 'postgres',
        schema: 'booklist',
        dialect: 'postgres',
        username: 'booklist_user',
        password: 'hpnIzyf1hQUwdQqlG9ZGt6rZIAImGQ9C',
        logging: false,
        define: {
            timestamps: false,
            freezeTableName: true
        }
    });

export default sequelize