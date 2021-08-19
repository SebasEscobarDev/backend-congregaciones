import { DataTypes, Model } from 'sequelize'
import { sequelize } from '../../database/db'
import Congregacion from './Congregacion';

class TypeCard extends Model {}
TypeCard.init({
    id: {
        type: DataTypes.BIGINT,
        primaryKey: true,
        autoIncrement: true
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    fields: {
        type: DataTypes.JSON,
        allowNull: false,
    },
    congregacion_id: {
        type: DataTypes.BIGINT,
        allowNull: false
    }
}, { 
    sequelize, 
    modelName: 'typecard',
    tableName: 'typescard',
    timestamps: false 
});

TypeCard.belongsTo(Congregacion, { as: 'congregacion', foreignKey: 'congregacion_id' });


export default TypeCard