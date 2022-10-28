import { Sequelize } from 'sequelize';

const connection ='postgres://booklist_user:hpnIzyf1hQUwdQqlG9ZGt6rZIAImGQ9C@dpg-cdcrc5un6mpsbhf4dni0-a/booklist'
const sequelize = new Sequelize(
    {
        connection
    });

export default sequelize