const mongoose = require('mongoose')
mongoose.Promise = global.Promise
module.exports = mongoose.connect('mongodb://localhost/mymoney')

mongoose.Error.messages.general.require = "O atributo '{PATH}' é obrigatório."
mongoose.Error.messages.Number.min = "O '{VALUE}' informado é menor do que o limite '{MIN}'."
mongoose.Error.messages.Number.max = "O '{VALUE}' informado é maior do que o limite '{MAX}'."
mongoose.Error.messages.String.enum = "'{VALUE}' inválido para o atributo '{PATH}'."