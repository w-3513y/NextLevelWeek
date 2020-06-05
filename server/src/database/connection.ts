import knex from 'knex';
import path from 'path'; //library para lidar com caminhos 

const connection = knex({
    client: 'sqlite3',
    connection:{
        filename: path.resolve(__dirname, 'database.sqlite'), //padroniza o caminho independente do sistema operacional
    },
    useNullAsDefault: true,
});

export default connection;

//Migrations: histórico do banco de dados