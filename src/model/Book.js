const { Schema, model } = require("mongoose")

const BookSchema = Schema({
  nombre: String,
  edicion: String 

})

module.exports = model('Book', BookSchema)
