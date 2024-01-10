const express = require('express');
const app = express();
const port = 3000;

// Configuration d'EJS comme moteur de vue
app.set('view engine', 'ejs');

// Dossier pour les fichiers statiques (comme l'image)
app.use(express.static('public'));

app.get('/', (req, res) => {
    // Rendre la vue index.ejs
    res.render('index');
});

app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});
