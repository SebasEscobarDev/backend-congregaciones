import express from 'express'
import morgan from 'morgan'
import cors from 'cors';
import session from 'express-session'
import { config as dotenv } from "dotenv"
import { sequelize } from './database/db'
import rolesRoutes from './routes/roles'
import contactStatusRoutes from './routes/contactStatus'
import billingStatusRoutes from './routes/billingStatus'
import mastersRoutes from './routes/masters'
import contactsRoutes from './routes/contacts'
import currenciesRoutes from './routes/currencies'
import cardsTypesRoutes from './routes/cardsTypes'
import cardsRoutes from './routes/cards'
import billingsRoutes from './routes/billings'
//Incluir asociasiones de tablas
require('./models/associations')

const app = express()
//DOTENV PARA LEER VARIABLES GLOBALES .ENV
dotenv()

app.set('port', process.env.APP_PORT)
app.use(morgan('dev'))
app.use(cors())
app.use( session({secret: '123456', resave: true, saveUninitialized: true}) );
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//usar rutas
app.use('/api/roles', rolesRoutes)
app.use('/api/contact/status', contactStatusRoutes)
app.use('/api/billing/status', billingStatusRoutes)
app.use('/api/masters', mastersRoutes)
app.use('/api/contacts', contactsRoutes)
app.use('/api/currencies', currenciesRoutes)
app.use('/api/cards/types', cardsTypesRoutes)
app.use('/api/cards', cardsRoutes)
app.use('/api/billings', billingsRoutes)

app.listen(app.get('port'), () => {
	console.log('Server iniciado en puerto: '+app.get('port'))
	sequelize.sync({ force:true }).then( () => {
		console.log( "DB SYNC TRUE" )
	}).catch(error => {
		console.log( 'se ha producido un error', error )
	})
})

export default app