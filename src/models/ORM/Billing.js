import { DataTypes, Model } from 'sequelize'
import { sequelize } from '../../database/db'

class Billing extends Model {}
Billing.init({
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    currencyValue: {
        type: DataTypes.INTEGER,
        allowNull: true,
        validate: {
            isInt: true
        }
    },
    copValue: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    created_at: DataTypes.STRING,
    updated_at: DataTypes.STRING,
}, { 
    sequelize, 
    modelName: 'billing', 
    tableName: 'billings',
    timestamps: false,
    underscored: true
});

export default Billing