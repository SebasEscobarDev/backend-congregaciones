import { DataTypes, Model } from 'sequelize'
import { sequelize } from '../../database/db'

class BillingStatus extends Model {}
BillingStatus.init({
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    name: DataTypes.STRING,
    plural_name: DataTypes.STRING
}, { 
    sequelize, 
    modelName: 'billingstatus', 
    tableName: 'billingstatuses'
});


export default BillingStatus