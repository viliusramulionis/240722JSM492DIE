import express from 'express';
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

const app = express();

app.use(express.urlencoded());

app.get('/', async (req, res) => {
    res.json(await Post.find());
});

app.get('/:id', async (req, res) => {
    res.json(await Post.findById(req.params.id));
});

app.post('/', async (req, res) => {
    res.json(await Post.create(req.body));
});

app.put('/:id', async (req, res) => {
    res.json(await Post.findByIdAndUpdate(req.params.id, req.body));
});

app.delete('/:id', async (req, res) => {
    res.json(await Post.findByIdAndDelete(req.params.id));
});

app.listen(3000, () => console.log('Serveris įjungtas'));