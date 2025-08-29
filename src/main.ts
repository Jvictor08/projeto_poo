import { Video, AdVideo, LiveStream } from './video.js';
import { Playlist } from './playlist.js';
import { Player } from './player.js';

// Criando os vídeos
const video1 = new Video('v1', 'A Aventura de Programar', 300, 'DevJedi');
const adVideo1 = new AdVideo('ad1', 'Anúncio: Compre agora!', 15, 'ShopFast Inc.', 5);
const video2 = new Video('v2', 'Padrões de Projeto', 600, 'Arquiteto Codificador');
const liveStream1 = new LiveStream('live1', 'Live: Construindo um App com React', 'LiveCoder', 1500);
const video3 = new Video('v3', 'Tópicos de Algoritmos', 450, 'Professor Tech');
const adVideo2 = new AdVideo('ad2', 'Anúncio: Novo Carro', 25, 'Auto Motors', 10);

// Criando a playlist e adicionando os vídeos
const playlist = new Playlist();
playlist.add(adVideo1);
playlist.add(video1);
playlist.add(video2);
playlist.add(liveStream1);
playlist.add(video3);
playlist.add(adVideo2);

// Criando o player com a playlist
const player = new Player(playlist);

console.log('--- Cenário 1: Fluxo Básico de Reprodução ---');
player.play(); // Toca o primeiro vídeo (anúncio)
console.log(`Info do vídeo atual: ${playlist.getCurrent()?.info()}`);
console.log('');

player.next(); // Pula para o próximo (vídeo normal)
console.log(`Info do vídeo atual: ${playlist.getCurrent()?.info()}`);
console.log('');

player.next(); // Pula para o próximo (vídeo normal)
console.log(`Info do vídeo atual: ${playlist.getCurrent()?.info()}`);
console.log('');

player.next(); // Pula para a live
console.log(`Info do vídeo atual: ${playlist.getCurrent()?.info()}`);
console.log('');

console.log('--- Cenário 2: Histórico e Modos ---');
console.log('Histórico de vídeos assistidos:');
console.log(player.getHistory());
console.log('');

player.setShuffle(true);
player.setLoop(true);

console.log('Navegando com Shuffle e Loop ativados...');
player.next(); // Toca um vídeo aleatório
player.next(); // Toca outro vídeo aleatório

console.log('');
console.log('--- Cenário 3: Demonstração de Polimorfismo ---');
const items = [video1, adVideo1, liveStream1];
items.forEach(item => {
  console.log(item.info());
  item.play();
  console.log('---');
});