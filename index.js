"use-strict"

// const http = require('http')
// const port = 3000

// const requestHandler = (request, response) => {
// 	console.log(request.url)
// 	response.end('Hello Node.js Server!')
// }

// const server = http.createServer(requestH0andler)



// server.listen(port, (err) => {
// 	if (err) {
// 		return console.log('something\'s up', err)
// 	}
// 	console.log('server is listening on ${port}')
// })

const path = require('path'); 
const express = require('express');
const exphbs = require('express-handlebars');
// const y2m = require('youtube-to-mp3')
const bodyParser = require('body-parser');
const fs = require('fs');
const ytdl = require('ytdl-core');
const port = 3000;

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
	extended: true
}))


app.get('/',(request, response) => {
	response.render('home',{});
	// response.render('home', {
	// 	name:'Mutasem'
	// })
	// console.log('damn');
});

app.post('/',(request, response) => {
	var url = request.body.link;
	ytdl(url)
  .pipe(fs.createWriteStream('test.mp4'));
//mp3
// app.post('/',(request, response) => {
// 	var url = request.body.link;
// 	ytdl(url, {filter: 'audioonly'})
//   .pipe(fs.createWriteStream('test.mp3'));
	// ytdl(link, {filter:function(format){
	// 	return format.container === 'mp3';
	// }}).pipe(fs.createWriteStream('test.mp3'));
	// y2m.prototype.videoDownlad('V-_c0o8LAaM','downloads');
	// console.log(link)
});

app.engine('.hbs', exphbs({
	defaultLayout: 'main',
	extname: '.hbs',
	layoutsDir: path.join(__dirname, 'views/layout')
}));

app.set('view engine', '.hbs');
app.set('views', path.join(__dirname, 'views'));



app.listen(port);