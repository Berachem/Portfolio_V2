import fs from 'fs';
import http from 'http';
import path from 'path';

// Base URL et liste des fichiers à télécharger
const baseUrl = 'http://vwryeac.cluster030.hosting.ovh.net/IG/opendata/assets/projects_videos/';
const videos = [
    'countdown.webm',
    'Croisade_Trailer.mp4',
    'Demo_Carbuviz.mp4',
    'Demo_GIG-Bot.mp4',
    'demoazul.mp4',
    'demoeco.mp4',
    'demographes.mp4',
    'demokontabl.mp4',
    'demoloop.mp4',
    'demounesco.mp4',
    'demozarza.mp4',
    'saveTheCatsDemo.mp4',
    'space_invader_demo.mp4'
];

// Chemin vers le répertoire des vidéos
const videosDir = path.resolve('src/assets/videos');

// Vérifier si le dossier existe, sinon le créer
if (!fs.existsSync(videosDir)) {
    fs.mkdirSync(videosDir, { recursive: true });
    console.log(`Created directory: ${videosDir}`);
}

// Télécharger chaque fichier
videos.forEach((fileName) => {
    const url = `${baseUrl}${fileName}`;
    const filePath = path.join(videosDir, fileName);
    
    http.get(url, (response) => {
        if (response.statusCode === 200) {
            const file = fs.createWriteStream(filePath);
            response.pipe(file);
            file.on('finish', () => {
                console.log(`Downloaded: ${filePath}`);
                file.close();
            });
        } else {
            console.error(`Failed to download ${fileName}. Status code: ${response.statusCode}`);
        }
    }).on('error', (err) => {
        console.error(`Error downloading ${fileName}: ${err.message}`);
    });
});
