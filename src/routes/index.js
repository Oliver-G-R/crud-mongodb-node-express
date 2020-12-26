const express = require('express')
const router = express.Router()

/**
 * Se requiere el modelo de la tabla que se hizo para almacenar los contactos,
 * para llenarlos con los datos que trae el seridor desde el cliente.
 */
const contactSchema = require('../models/contacts') 

/**
 * Se obtiene la información de la base de datos cada vez que una petición get
 * aparezca, de esta manera si el usuario carga '/' se obtendrán los datos y se mandarán
 * a la vista de inicio.
 */
router.get('/', async(req, res) => {
    const contacts = await contactSchema.find()

    res.render('index', { contacts, title: 'Contactos' })
})

/**
 * Al ser una petición que demora algo de tiempo para conectar
 * la base de datos, se usa async await para ejecutar código después 
 * de que se cumpla la petición.
 */
router.post('/add', async(req, res) => {
    const contact = new contactSchema(req.body)
    await contact.save()

    res.redirect('/')
})

router.post('/update:id', async(req, res) => {
    const { id } = req.params
    await contactSchema.update({_id:id}, req.body)
    res.redirect('/')
})
/**
 * En el caso que la ruta sea /delete/:id, esta va cargar una nueva petición a la base de datos
 * para eliminar un documento con el id pasado como parámetro.
 * 
 * Este id al ser único y que va cambiar diferentes veces, se le especifica a la rura con :id, que 
 * lo que se le va pasar como parámetro get será un valor cambiante. 
 * 
 * De esta manera se logra que la ruta siempre funcione y el servidro no la tome como inexistente.
 */
router.get('/delete/:id', async(req, res) => {
    const { id } = req.params
    await contactSchema.remove({ _id: id })
    res.redirect('/')
})

router.get('/edit/:id', async(req, res) => {
    const { id } = req.params
    const currentContact = await contactSchema.findById(id)

    res.render('edit',  {currentContact , title: 'Editando'} )
})



module.exports = router