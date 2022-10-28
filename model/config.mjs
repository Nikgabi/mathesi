import { Sequelize } from 'sequelize';

const sequelize = new Sequelize(
    {
        hostname: 'dpg-cdcrc5un6mpsbhf4dni0-a',
        port: 5432,
        database: 'booklist',
        username: 'booklist_user',
        password: 'hpnIzyf1hQUwdQqlG9ZGt6rZIAImGQ9C',
        Internal Database URL:'postgres://booklist_user:hpnIzyf1hQUwdQqlG9ZGt6rZIAImGQ9C@dpg-cdcrc5un6mpsbhf4dni0-a/booklist'
    });

export default sequelize