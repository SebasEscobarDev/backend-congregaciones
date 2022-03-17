import { DataTypes, Model } from 'sequelize'
import { sequelize } from '../../database/db'

class Contact extends Model {}
Contact.init({
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    from: DataTypes.STRING,
    name: {
        type: DataTypes.STRING,
        allowNull: true,
        validate: {
            len: [3,255]
        }
    },
    phone: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            len: [3,255]
        }
    },
    country: DataTypes.STRING,
    last_send: DataTypes.STRING,
    created_at: DataTypes.STRING,
    updated_at: DataTypes.STRING,
}, {
    sequelize, 
    modelName: 'contact', 
    tableName: 'contacts'
})

export default Contact