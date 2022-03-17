import { DataTypes, Model } from 'sequelize'
import { sequelize } from '../../database/db'

class Currency extends Model {}
Currency.init({
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            isAlpha: true,
            len: [3,255]
        }
    },
}, { 
    sequelize, 
    modelName: 'currency',
    tableName: 'currencies'
});

export default Currency