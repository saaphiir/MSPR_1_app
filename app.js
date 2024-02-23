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

function requeteApi(){
  return {
    "id": 1,
    "espece": "Loup",
    "description": "Le loup gris commun, appelé également le loup européen ou le loup vulgaire, est un mammifère carnivore de la famille des canidés.",
    "famille": "Mammifère",
    "nom_latin": "Canis lupus lupus",
    "taille_str": "0,90 à 1,10 m pour les femelles; 1 à 1,30 m pour les mâles",
    "taille_min": 0.90,  // Taille en mètre
    "taille_max": 1.10,
    "region_str": "Eurasie",
    "habitat": "Le loup gris commun vit dans les forêts tempérées, les massifs montagneux (Alpes), les plaines, les grandes steppes eurasiennes, les environnements escarpés et isolés.",
    "fun_fact": "Les loups solitaires sont le plus souvent des loups qui ont été chassés de leur meute.",
    "photo_presentation_url": "https://ilsera.com/BtzImages/Est_ce_naturel_Loup.jpg"
  }
}

app.get('/', (req, res) => {
  if(req.session.apiData){
    setTimeout(function(){ // vérifier si on peut enlever le timeout apres pull API et affichage des données
      res.render('index', { apiData: req.session.apiData});
  }, 1000);
  }
  else{
    res.render('index');
  }
});

app.get('/api-data', async (req, res) => {
    try {
        // const apiUrl = 'https://jsonplaceholder.typicode.com/posts/1';
        // const response = await axios.get(apiUrl)

        req.session.apiData = requeteApi();
        res.redirect('/');
    } catch (error) {
        console.error('Erreur de requête:', error);
        res.status(500).json({ error: 'Erreur lors de la requête vers l\'API' });
    }
  });

app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});
