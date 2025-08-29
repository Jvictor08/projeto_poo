import { Playlist } from './playlist.js';
import { Video } from './video.js';
export class Player {
    playlist;
    state = 'stopped';
    loop = false;
    shuffle = false;
    shuffleOrder = [];
    history = [];
    constructor(playlist) {
        this.playlist = playlist;
    }
    play() {
        const currentVideo = this.playlist.getCurrent();
        if (currentVideo) {
            currentVideo.play();
            this.state = 'playing';
            this.history.push(currentVideo.getTitulo());
        }
        else {
            console.log('Nenhum vídeo na playlist.');
        }
    }
    pause() {
        const currentVideo = this.playlist.getCurrent();
        if (currentVideo && this.state === 'playing') {
            currentVideo.pause();
            this.state = 'paused';
        }
    }
    stop() {
        const currentVideo = this.playlist.getCurrent();
        if (currentVideo) {
            currentVideo.stop();
            this.state = 'stopped';
        }
    }
    next() {
        if (this.state === 'stopped' || this.state === 'paused') {
            this.play();
            return;
        }
        if (this.shuffle) {
            const nextIndex = this.shuffleOrder.shift();
            if (nextIndex !== undefined) {
                this.playlist.setCurrentIndex(nextIndex);
                this.play();
            }
            else if (this.loop) {
                this.generateShuffleOrder();
                this.next();
            }
            else {
                this.stop();
                console.log('Fim da playlist embaralhada.');
            }
        }
        else {
            if (this.playlist.hasNext()) {
                this.playlist.setNextIndex();
                this.play();
            }
            else if (this.loop) {
                this.playlist.setCurrentIndex(0);
                this.play();
            }
            else {
                this.stop();
                console.log('Fim da playlist.');
            }
        }
    }
    previous() {
        if (this.shuffle) {
            // Simplificação: no modo shuffle, o previous pode voltar para o item anterior na lista,
            // mas não seguiria uma lógica de pilha (history).
            const currentVideo = this.playlist.getCurrent();
            const lastPlayedIndex = this.shuffleOrder.find(index => this.playlist.getVideos()[index].getId() === currentVideo.getId());
            if (lastPlayedIndex !== undefined && lastPlayedIndex > 0) {
                this.playlist.setCurrentIndex(this.shuffleOrder[lastPlayedIndex - 1]);
                this.play();
            }
            else {
                console.log('Não é possível voltar no modo shuffle.');
            }
        }
        else if (this.playlist.hasPrevious()) {
            this.playlist.setPreviousIndex();
            this.play();
        }
        else {
            console.log('Já está no primeiro vídeo.');
        }
    }
    setLoop(on) {
        this.loop = on;
        console.log(`Modo loop: ${on ? 'Ativado' : 'Desativado'}`);
    }
    setShuffle(on) {
        this.shuffle = on;
        if (on) {
            this.generateShuffleOrder();
            console.log('Modo shuffle: Ativado');
        }
        else {
            console.log('Modo shuffle: Desativado');
            this.shuffleOrder = [];
        }
    }
    generateShuffleOrder() {
        const videoIndexes = Array.from({ length: this.playlist.getVideos().length }, (_, i) => i);
        this.shuffleOrder = videoIndexes.sort(() => Math.random() - 0.5);
        this.shuffleOrder = this.shuffleOrder.filter(index => index !== this.playlist.getCurrentIndex());
        this.shuffleOrder.unshift(this.playlist.getCurrentIndex());
    }
    getHistory() {
        return [...this.history]; // Retorna uma cópia
    }
}
//# sourceMappingURL=player.js.map