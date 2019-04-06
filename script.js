
var request = new XMLHttpRequest();

request.open('GET', 'https://api.vagalume.com.br/rank.php?apikey=660a4395f992ff67786584e238f501aa&type=art&period=week&periodVal=201134&scope=all&limit=3', true);
request.onload = function () {

const app = document.getElementById('root');

const caixas = document.createElement('div');
caixas.setAttribute('class', 'caixas');

app.appendChild(caixas);

  var data = JSON.parse(this.response);

  if (request.status >= 200 && request.status < 400) {
    data.art.week.all.forEach(musicas => {
        const card = document.createElement('div');
        card.setAttribute('class', 'card');

        const play = document.createElement('a');
        play.setAttribute('id', 'imagem');
        play.setAttribute('href', musicas.url);
        $(play).append('<img src="images/play.png"></img>');
  
        const nome = document.createElement('h1');
        nome.textContent = musicas.name;

        const img = document.createElement('img');
        img.src = musicas.pic_medium;    
  
        caixas.appendChild(card);
        card.appendChild(play);
        card.appendChild(img);
        card.appendChild(nome);
      });
    } else {
      const errorMessage = document.createElement('marquee');
      errorMessage.textContent = 'Ocorreu um erro!';
      app.appendChild(errorMessage);
    }
  }
  request.send();s