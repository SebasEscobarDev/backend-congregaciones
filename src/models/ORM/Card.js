import { DataTypes, Model } from 'sequelize'
import { sequelize } from '../../database/db'
import TypeCard from './TypeCard'
import Congregacion from './Congregacion'

class Card extends Model {}
Card.init({
    id: {
        type: DataTypes.BIGINT,
        primaryKey: true,
        autoIncrement: true
    },
    active: {
        type: DataTypes.BOOLEAN,
        allowNull: false
    },
    values: {
        type: DataTypes.JSON,
        allowNull: false,
    },
    typecard_id: {
        type: DataTypes.BIGINT,
        allowNull: false
    },
    congregacion_id: {
        type: DataTypes.BIGINT,
        allowNull: false
    }
}, { 
    sequelize, 
    modelName: 'user', 
    tableName: 'users',
    timestamps: false
});

Card.belongsTo(TypeCard, { as: 'typecard', foreignKey: 'typecard_id' });
Card.belongsTo(Congregacion, { as: 'congregacion', foreignKey: 'congregacion_id' });


export default Card