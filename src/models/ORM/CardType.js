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
            len: [3,255]
        }
    },
    fields: DataTypes.JSON
}, { 
    sequelize, 
    modelName: 'cardtype',
    tableName: 'cardstypes',
    timestamps: false,
    underscored: true
});

export default CardType