const express = require('express');
const app = express();
const port = 3000;

const superheroes = [
	[{name: "batman",
	powers: ['bats', 'rats', 'smoker-voice'],
	city: "gotham"}],
	[{name: "superman",
	powers: ['x-ray vision', 'flight', 'invulnerability'],
	city: "metropolis"}],
	[{name: "hulk",
	powers: ['radiation', 'anger', 'smash'], 
	city: "brooklyn"}],
	]

app.get('/', (req, res) => {
	res.redirect('./superheroes');
})

app.get('/superheroes', (req, res) => {
	res.send(superheroes);
})

app.get('/superheroes/:index', (req, res) => {
	res.send(superheroes[req.params.index]);
})

app.listen(3000, () => {
	console.log("here to save the day at" + port);
})