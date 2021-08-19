import { DataTypes, Model } from 'sequelize'
import { sequelize } from '../../database/db'

class Congregacion extends Model {}
Congregacion.init({
    id: {
        type: DataTypes.BIGINT,
        primaryKey: true,
        autoIncrement: true
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    active: {
        type: DataTypes.BOOLEAN,
        allowNull: false
    }
}, { 
    sequelize, 
    modelName: 'congregacion', 
    tableName: 'congregaciones',
    timestamps: false,
});

export default Congregacion