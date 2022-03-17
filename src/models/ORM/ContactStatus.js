import { DataTypes, Model } from 'sequelize'
import { sequelize } from '../../database/db'

class ContactStatus extends Model {}
ContactStatus.init({
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    name: DataTypes.STRING,
    plural_name: DataTypes.STRING
}, { 
    sequelize, 
    modelName: 'contactstatus', 
    tableName: 'contactstatuses',
    timestamps: false
});

export default ContactStatus