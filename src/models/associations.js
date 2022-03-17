import Billing from './ORM/Billing'
import BillingStatus from './ORM/BillingStatus'
import Card from './ORM/Card'
import CardType from './ORM/CardType'
import Contact from './ORM/Contact'
import ContactStatus from './ORM/ContactStatus'
import Currency from './ORM/Currency'
import Master from './ORM/Master'
import Rol from './ORM/Rol'

Master.belongsTo(Rol,               { as:'rol',             foreignKey: 'rol_id' })
Master.hasMany(Contact,             { as:'contacts',        foreignKey: 'master_id' })
Master.hasMany(Billing,             { as:'billings',        foreignKey: 'master_id' })
Currency.hasMany(Billing,           { as:'billings',        foreignKey: 'currency_id' })
Contact.belongsTo(ContactStatus,    { as:'status',          foreignKey: 'contactstatus_id' })
Contact.belongsTo(Master,           { as:'master',          foreignKey: 'master_id' })
CardType.hasMany(Card,              { as:'card',            foreignKey: 'cardtype_id' })
Card.belongsTo(CardType,            { as:'cardtype',        foreignKey: 'cardtype_id' })
Card.hasMany(Billing,               { as:'billings',        foreignKey: 'card_id' })
Billing.belongsTo(Contact,          { as:'contact',         foreignKey: 'contact_id' })
Billing.belongsTo(Master,           { as:'master',          foreignKey: 'master_id' })
Billing.belongsTo(Card,             { as:'card',            foreignKey: 'card_id' })
Billing.belongsTo(Currency,         { as:'currency',        foreignKey: 'currency_id' })
Billing.belongsTo(BillingStatus,    { as:'billingstatus',   foreignKey: 'billingstatus_id' })