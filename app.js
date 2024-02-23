const express = require('express');
const session = require('express-session');
const axios = require('axios');
const path = require('path');

const app = express();
const port = 3000;

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.static('public'));

app.use(session({
  secret: 'cestmoncodesecret', // Une chaîne aléatoire pour sécuriser la session, changez-la en une valeur unique
  resave: true,
  saveUninitialized: true
}));

app.get('/', (req, res) => {
  const apiData = req.session.apiData;
  if(req.session.apiData){
    res.render('index', { apiData });
  }
  else{
    res.render('index');
  }
});

app.get('/api-data', async (req, res) => {
    try {
        // URL de l'API que vous souhaitez appeler
        const apiUrl = 'https://jsonplaceholder.typicode.com/posts/1';
        const response = await axios.get(apiUrl)

        //console.log(response.data)

        req.session.apiData = 'Valeur de maVariable';
        res.redirect('/');
    } catch (error) {
      // Gérer les erreurs
        console.error('Erreur de requête:', error);
        res.status(500).json({ error: 'Erreur lors de la requête vers l\'API' });
    }
  });

app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});
