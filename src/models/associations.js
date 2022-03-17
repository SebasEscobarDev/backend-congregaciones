import Billing from './ORM/Billing'
import BillingStatus from './ORM/BillingStatus'
import Card from './ORM/Card'
import CardType from './ORM/CardType'
import Contact from './ORM/Contact'
import ContactStatus from './ORM/ContactStatus'
import Currency from './ORM/Currency'
import Master from './ORM/Master'
import Rol from './ORM/Rol'

Master.belongsTo(Rol)
Master.hasMany(Contact)
Master.hasMany(Billing)
Currency.hasMany(Billing)
Contact.belongsTo(ContactStatus)
Contact.belongsTo(Master)
CardType.hasMany(Card)
Card.belongsTo(CardType)
Card.hasMany(Billing)
Billing.belongsTo(Contact)
Billing.belongsTo(Master)
Billing.belongsTo(Card)
Billing.belongsTo(Currency)
Billing.belongsTo(BillingStatus)