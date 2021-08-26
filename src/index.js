import express from 'express'
import morgan from 'morgan'
import cors from 'cors';
import session from 'express-session'
import { config as dotenv } from "dotenv"
import congregacionesRoutes from './routes/congregaciones'
import rolesRoutes from './routes/roles'
import usersRoutes from './routes/users'
import estadoscRoutes from './routes/estadosContactos'
import estadosfRoutes from './routes/estadosFacturaciones'
import monedasRoutes from './routes/monedas'
import contactosRoutes from './routes/contactos'
import typescardRoutes from './routes/typesCard'
import cardsRoutes from './routes/cards'
import facturacionesRoutes from './routes/facturaciones'
import bodyParser from 'body-parser'
import { sequelize } from './database/db'

const app = express()

//DOTENV PARA LEER VARIABLES GLOBALES .ENV
dotenv()

app.set('port', process.env.APP_PORT)
app.use(morgan('dev'))
app.use(cors())
app.use( session({secret: '123456', resave: true, saveUninitialized: true}) );
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

//usar rutas
app.use('/api/congregaciones', congregacionesRoutes)
app.use('/api/roles', rolesRoutes)
app.use('/api/users', usersRoutes)
app.use('/api/estadoscontacto', estadoscRoutes)
app.use('/api/estadosfacturacion', estadosfRoutes)
app.use('/api/monedas', monedasRoutes)
app.use('/api/contactos', contactosRoutes)
app.use('/api/typescard', typescardRoutes)
app.use('/api/cards', cardsRoutes)
app.use('/api/facturaciones', facturacionesRoutes)

app.listen(app.get('port'), () => {
	console.log('Server iniciado en puerto: '+app.get('port'))
	//sequelize.sync({force:true})
})

//USERS
//@HAIMETUTOYO

export default app