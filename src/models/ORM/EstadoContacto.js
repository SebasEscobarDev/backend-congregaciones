import { DataTypes, Model } from 'sequelize'
import { sequelize } from '../../database/db'
import Congregacion from './Congregacion'

class EstadoContacto extends Model {}
EstadoContacto.init({
    id: {
        type: DataTypes.BIGINT,
        primaryKey: true,
        autoIncrement: true
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    plural_name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    congregacion_id: {
        type: DataTypes.BIGINT,
        allowNull: false
    }
}, { 
    sequelize, 
    modelName: 'estadocontacto', 
    tableName: 'estadoscontacto',
    timestamps: false 
});

EstadoContacto.belongsTo(Congregacion, { as: 'congregacion', foreignKey: 'congregacion_id' });


export default EstadoContacto