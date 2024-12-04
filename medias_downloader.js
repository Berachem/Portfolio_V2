import fs from 'fs';
import http from 'http';


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

videos.forEach((fileName) => {
    const url = `${baseUrl}${fileName}`;
    const path = `./public/videos/${fileName}`;
    
    http.get(url, (response) => {
        if (response.statusCode === 200) {
            const file = fs.createWriteStream(path);
            response.pipe(file);
            file.on('finish', () => {
                console.log(`Downloaded: ${path}`);
                file.close();
            });
        } else {
            console.error(`Failed to download ${fileName}. Status code: ${response.statusCode}`);
        }
    }).on('error', (err) => {
        console.error(`Error downloading ${fileName}: ${err.message}`);
    });
});
