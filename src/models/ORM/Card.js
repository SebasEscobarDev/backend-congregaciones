import { DataTypes, Model } from 'sequelize'
import { sequelize } from '../../database/db'

class Card extends Model {}
Card.init({
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    active: DataTypes.BOOLEAN,
    values: DataTypes.JSON
}, { 
    sequelize, 
    modelName: 'card',
    tableName: 'cards',
    timestamps: false,
    underscored: true
});

export default Card