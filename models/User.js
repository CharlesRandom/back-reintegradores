const mongoose = require('mongoose')
const Schema = mongoose.Schema
const plm = require('passport-local-mongoose')

const userSchema = new Schema({
  name:String,
  lastname:String,
  country:String,
  email:{
    type:String,
    unique:true
  },
  userType:{
    type:String,
    enum:["Donatario","Organización","Visitante"]
  },
  donationOrigin:{
    type:String,
    enum:["Público","Privado"]
  },
  donationType:{
    type:String,
    enum:["Gub","Int", "Fil", "IP"]
  },
  person:{
    type:String,
    enum:["Física", "Moral"]
  },
  constanciaFiscal:String,
  actaConstitutiva:String,
  CURP:String,
  RFC:String,
  address:String,
  birthdate:Date,
  gender:{
    type:String,
    enum:["Femenino", "Masculino"]
  },
},{
  timestamps:{
    createdAt:true,
    updatedAt:true
  }
})

userSchema.plugin(plm,{usernameField:'email'})

module.exports = mongoose.model('User', userSchema)