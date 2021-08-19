import { DataTypes, Model } from 'sequelize'
import { sequelize } from '../../database/db'
import Rol from './Rol'
import Congregacion from './Congregacion'

class User extends Model {}
User.init({
    id: {
        type: DataTypes.BIGINT,
        primaryKey: true,
        autoIncrement: true
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false
    },
    active: {
        type: DataTypes.BOOLEAN,
        allowNull: false
    },
    rol_id: {
        type: DataTypes.BIGINT,
        allowNull: false
    },
    congregacion_id: {
        type: DataTypes.BIGINT,
        allowNull: false
    }
}, { sequelize, modelName: 'user', tableName: 'users' });

User.belongsTo(Rol, { as: 'rol', foreignKey: 'rol_id' });
User.belongsTo(Congregacion, { as: 'congregacion', foreignKey: 'congregacion_id' });


export default User