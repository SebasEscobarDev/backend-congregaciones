import { DataTypes, Model } from 'sequelize'
import { sequelize } from '../../database/db'
import Congregacion from './Congregacion'

class Moneda extends Model {}
Moneda.init({
    id: {
        type: DataTypes.BIGINT,
        primaryKey: true,
        autoIncrement: true
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    congregacion_id: {
        type: DataTypes.BIGINT,
        allowNull: false
    }
}, { 
    sequelize, 
    modelName: 'moneda',
    tableName: 'monedas',
    timestamps: false 
});

Moneda.belongsTo(Congregacion, { as: 'congregacion', foreignKey: 'congregacion_id' });


export default Moneda