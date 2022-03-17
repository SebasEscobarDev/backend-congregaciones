import { DataTypes, Model } from 'sequelize'
import { sequelize } from '../../database/db'

class Master extends Model {}
Master.init({
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
    phone: {
        type: DataTypes.STRING,
        allowNull: false
    },
    image: {
        type: DataTypes.STRING,
        allowNull: false
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            len: [3,255]
        }
    },
    active: DataTypes.BOOLEAN,
    created_at: DataTypes.STRING,
    updated_at: DataTypes.STRING
}, { 
    sequelize,
    modelName: 'master',
    tableName: 'masters',
    timestamps: false
});

export default Master