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
            len: [1,255]
        }
    },
}, { 
    sequelize, 
    modelName: 'currency',
    tableName: 'currencies',
    timestamps: false,
    underscored: true
});

export default Currency