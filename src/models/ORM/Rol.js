import { DataTypes, Model } from 'sequelize'
import { sequelize } from '../../database/db'

class Rol extends Model {}
Rol.init({
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    name: DataTypes.STRING
}, { 
    sequelize, 
    modelName: 'rol', 
    tableName: 'roles'
});

export default Rol