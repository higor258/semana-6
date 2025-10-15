import express from 'express';

const app = express();

app.get('/' , (req, res) => {
    res.send('tu ta na pagina principal');
});

app.post('/' , (req, res) => {
    res.send('tu ta na pagiana principal com post');
});


app.listen(3333 , () => {
	
console.log('servidor rodando na porta  http://localhost:3333');
});