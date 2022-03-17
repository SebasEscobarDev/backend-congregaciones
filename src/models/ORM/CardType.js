import { DataTypes, Model } from 'sequelize'
import { sequelize } from '../../database/db'

class CardType extends Model {}
CardType.init({
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            isAlpha: true,
            len: [3,255]
        }
    },
    fields: DataTypes.JSON
}, { 
    sequelize, 
    modelName: 'cardtype',
    tableName: 'cardstypes',
    timestamps: false
});

export default CardType