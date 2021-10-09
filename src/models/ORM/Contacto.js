import { DataTypes, Model } from 'sequelize'
import { sequelize } from '../../database/db'
import EstadoContacto from './EstadoContacto'
import User from './User'
import Congregacion from './Congregacion'

class Contacto extends Model {}
Contacto.init({
    id: {
        type: DataTypes.BIGINT,
        primaryKey: true,
        autoIncrement: true
    },
    from: {
        type: DataTypes.STRING,
        allowNull: false
    },
    name: {
        type: DataTypes.STRING,
        allowNull: true
    },
    phone: {
        type: DataTypes.BIGINT,
        allowNull: false
    },
    country: {
        type: DataTypes.STRING,
        allowNull: true
    },
    estadocontacto_id: {
        type: DataTypes.BIGINT,
        allowNull: false
    },
    last_send: {
        type: DataTypes.DATE,
        allowNull: true
    },
    user_id: {
        type: DataTypes.BIGINT,
        allowNull: false
    },
    congregacion_id: {
        type: DataTypes.BIGINT,
        allowNull: false
    },
    created_at: {
        type: DataTypes.STRING,
        allowNull: false
    },
    updated_at: {
        type: DataTypes.STRING,
        allowNull: false
    },
}, { 
    sequelize, 
    modelName: 'contacto', 
    tableName: 'contactos',
    timestamps: false,
})

Contacto.belongsTo(EstadoContacto, { as: 'estado', foreignKey: 'estadocontacto_id' })
Contacto.belongsTo(User, { as: 'user', foreignKey: 'user_id', constraints: false })
Contacto.belongsTo(Congregacion, { as: 'congregacion', foreignKey: 'congregacion_id' })

export default Contacto