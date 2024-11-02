const express = require('express');
const path = require('path');
const hbs = require('hbs');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 8080;


app.set('view engine', 'hbs');
hbs.registerPartials(__dirname + '/views/partials')
app.set('views', path.join(__dirname, 'views'));

app.use(express.static(path.join(__dirname, 'visual')));


app.get('/', (req, res) => {
  res.render('home' , {
    nombre: 'Johny Chiroy',
    titulo:'Portafolio'
  } )
});

app.get('/contactos', (req, res) => {
  res.render('contactos', {
    nombre: 'Johny Chiroy',
    titulo:'Contacto'
  } )
});

app.get('/habilidades', (req, res) => {
  res.render('habilidades', {
    nombre: 'Johny Chiroy',
    titulo:'Habilidades'
  } )
});

app.get('/educacion', (req, res) => {
  res.render('educacion', {
    nombre: 'Johny Chiroy',
    titulo:'Estudios'
  } )
});

app.get('/pro1', (req, res) => {
  res.render('pro1', {
    nombre: 'Johny Chiroy',
    titulo:'MRU y MRUV'
  } )
});

app.get('/pro2', (req, res) => {
  res.render('pro2', {
    nombre: 'Johny Chiroy',
    titulo:'Jubilación IPM'
  } )
});

app.get('/pro3', (req, res) => {
  res.render('pro3', {
    nombre: 'Johny Chiroy',
    titulo:'Principios Éticos'
  } )
});

app.get('/pro4', (req, res) => {
  res.render('pro4', {
    nombre: 'Johny Chiroy',
    titulo:'Gestión Tienda'
  } )
});

app.get('/pro5', (req, res) => {
  res.render('pro5', {
    nombre: 'Johny Chiroy',
    titulo:'Analizador Léxico'
  } )
});

app.get('/pro6', (req, res) => {
  res.render('pro6', {
    nombre: 'Johny Chiroy',
    titulo:'Probabilidades'
  } )
});

app.get('/pro7', (req, res) => {
  res.render('pro7', {
    nombre: 'Johny Chiroy',
    titulo:'Control Órdenes'
  } )
});

app.get('/pro8', (req, res) => {
  res.render('pro8', {
    nombre: 'Johny Chiroy',
    titulo:'Calculadora'
  } )
});

app.get('/portafolio', (req, res) => {
  res.render('portafolio', {
    nombre: 'Johny Chiroy',
    titulo:'Proyectos'
  } )
});

app.listen(port, () => {
    console.log(`Servidor corriendo en el puerto ${port}`);
  });
  