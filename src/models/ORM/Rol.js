import { DataTypes, Model } from 'sequelize'
import { sequelize } from '../../database/db'
import Congregacion from './Congregacion';

class Rol extends Model {}
Rol.init({
    id: {
        type: DataTypes.BIGINT,
        primaryKey: true,
        autoIncrement: true
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    congregacion_id: {
        type: DataTypes.BIGINT,
        allowNull: false
    }
}, { 
    sequelize, 
    modelName: 'rol', 
    tableName: 'roles',
    timestamps: false 
});

Rol.belongsTo(Congregacion, { as: 'congregacion', foreignKey: 'congregacion_id' });


export default Rol