import { DataTypes, Model } from 'sequelize'
import { sequelize } from '../../database/db'
import Contacto from './Contacto'
import User from './User'
import Card from './Card'
import Moneda from './Moneda'
import EstadoFacturacion from './EstadoFacturacion'
import Congregacion from './Congregacion'

class Facturacion extends Model {}
Facturacion.init({
    id: {
        type: DataTypes.BIGINT,
        primaryKey: true,
        autoIncrement: true
    },
    contacto_id: {
        type: DataTypes.BIGINT,
        allowNull: false
    },
    user_id: {
        type: DataTypes.BIGINT,
        allowNull: false
    },
    card_id: {
        type: DataTypes.BIGINT,
        allowNull: false
    },
    moneda_id: {
        type: DataTypes.BIGINT,
        allowNull: false
    },
    valor: {
        type: DataTypes.DECIMAL(19,4),
        allowNull: false
    },
    valor_check: {
        type: DataTypes.DECIMAL(19,4),
        allowNull: true
    },
    estado_id: {
        type: DataTypes.BIGINT,
        allowNull: false
    },
    congregacion_id: {
        type: DataTypes.BIGINT,
        allowNull: false
    }
}, { sequelize, modelName: 'facturacion', tableName: 'facturaciones' });

Facturacion.belongsTo(Contacto, { as: 'contacto', foreignKey: 'contacto_id' });
Facturacion.belongsTo(User, { as: 'user', foreignKey: 'user_id' });
Facturacion.belongsTo(Card, { as: 'card', foreignKey: 'card_id' });
Facturacion.belongsTo(Moneda, { as: 'moneda', foreignKey: 'moneda_id' });
Facturacion.belongsTo(EstadoFacturacion, { as: 'estado', foreignKey: 'estado_id' });
Facturacion.belongsTo(Congregacion, { as: 'congregacion', foreignKey: 'congregacion_id' });


export default Facturacion