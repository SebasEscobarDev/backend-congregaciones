import { DataTypes, Model } from 'sequelize'
import { sequelize } from '../../database/db'
import Congregacion from './Congregacion'

class EstadoFacturacion extends Model {}
EstadoFacturacion.init({
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
    modelName: 'estadofacturacion', 
    tableName: 'estadosfacturacion',
    timestamps: false 
});

EstadoFacturacion.belongsTo(Congregacion, { as: 'congregacion', foreignKey: 'congregacion_id' });


export default EstadoFacturacion