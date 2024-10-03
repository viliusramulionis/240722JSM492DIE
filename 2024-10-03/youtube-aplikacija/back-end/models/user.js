import mongoose, { Schema } from 'mongoose';

// Users modelis
export default mongoose.model('User', new Schema({
    name: {
        type: String,
        required: true, //Nurodome, kad reiksme yra reikalaujama
        minLength: 3, // Minimalaus vartotojo vardo ilgis
        maxLength: 20 // Maksimalus vartotojo vardo ilgis
    },
    email: {
        type: String,
        unique: true, //Nurodymas, jog kolekcijoje ši reikšmė privalės būti unikali (t.y nesikartoti)
        required: true,
        match: [/^\S+@\S+\.\S+$/, "Įveskite galiojantį el. pašto adresą"] // El. pasto adreso formato validavimas
    },
    password: {
        type: String,
        required: true
    },
    coverPhoto: {
        type: String,
        required: true
    },
    userThumbnail: {
        type: String,
        required: true
    },
    description: String,
    updatedAt: {
        type: Date,
        default: Date.now()
    },
    createdAt: {
        type: Date,
        default: Date.now()
    }
}));