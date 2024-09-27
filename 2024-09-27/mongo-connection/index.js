import mongoose from 'mongoose';

try {
    await mongoose.connect('mongodb://127.0.0.1:27017/pirma_duombaze');
    console.log('Connected!')
} catch {
    console.log('Prisijungimas nepavyko');
}

const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

// Deklaruojam duomenų schemą (laukelio pavadinimas ir duomens tipas)
const BlogPost = new Schema({
  author: ObjectId,
  title: String,
  body: String,
  date: Date
});

// Priskiriame schemą priemo modelio, o grąžintą objektą galime valdyti
const Post = mongoose.model('Post', BlogPost);

// Kai modelis yra sukurtas:

// Naujo įrašo kūrimas
// Pirmas būdas:

const post = new Post();

post.title = 'Nuostabus įrašas';
post.body = 'Šiandien žiniose...';
post.labas = 'Hello'; // Reikšmė nebus pridėta nes ji nėra nurodyta schemoje

await post.save();

// Antras būdas:
Post.create({
    title: 'Create metodu sukurtas įrašas',
    body: 'Panoramoje matysite...',
    date: new Date()
});


// DUOMENŲ PAĖMIMAS IŠ MODELIO KOLEKCIJOS

// Scenarijus A) Visi įrašai (Grąžinant masyvą):
// Post.find().lean().exec().then(resp => console.log(console.log(resp)));

// Scenarijus B) Filtruojame vieną įrašą:
// console.log(await Post.findOne({ title: 'Nuostabus įrašas' }));

// Scenarijus C) Filtruojame įrašą pagal ID:
console.log(await Post.findById('66f66d8c15d61c4617dbb71b'));


// DUOMENŲ MODIFIKAVIMAS:
// VARIANTAS A)
// Pirmiausiai susirandame įrašą

const postUpdate = await Post.findById('66f66d8c15d61c4617dbb71b');

// Nurodome pakitimus

postUpdate.title = 'Modifikuotas įrašas';

// Juos išsaugome
await postUpdate.save();

console.log(await Post.findById('66f66d8c15d61c4617dbb71b'));

// VARIANTAS B)
await Post.findByIdAndUpdate('66f66d8c15d61c4617dbb71b', {
    title: 'Vienoje eilutėje modifikuotas įrašo pavadinimas'
});

// ĮRAŠO IŠTRYNIMAS:
// VARIANTAS A):

try {
    const deletePost = await Post.findById('66f66e514c79186c51df96f6');

    await deletePost.deleteOne();

    console.log('Įrašas sėkmingai ištrintas');

} catch {
    console.log('Nepavyko ištrinti įrašo');
}

// VARIANTAS B):
await Post.findByIdAndDelete('66f66e514c79186c51df96f6');
