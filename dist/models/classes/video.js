export class Video {
    id;
    titulo;
    duracao; // em segundos
    autor;
    views;
    currentTime;
    constructor(id, titulo, duracao, autor) {
        this.id = id;
        this.titulo = titulo;
        this.duracao = duracao;
        this.autor = autor;
        this.views = 0;
        this.currentTime = 0;
    }
    getTitulo() {
        return this.titulo;
    }
    getId() {
        return this.id;
    }
    getViews() {
        return this.views;
    }
    setView(novosViwers) {
        return this.views += novosViwers;
    }
    getCurrentTime() {
        return this.currentTime;
    }
    setCurrentTime(time) {
        if (time >= 0 && time <= this.duracao) {
            this.currentTime = time;
        }
    }
    getCurrentAutor() {
        return this.autor;
    }
    play() {
        this.views++;
        console.log(`▶️ Reproduzindo: ${this.titulo} (Duração: ${this.duracao}s)`);
        this.currentTime = 0;
    }
    pause() {
        console.log(`⏸️ Pausado: ${this.titulo} em ${this.currentTime}s`);
    }
    stop() {
        console.log(`⏹️ Parado: ${this.titulo}`);
        this.currentTime = 0;
    }
    info() {
        return `"${this.titulo}" por ${this.autor} | Views: ${this.views}`;
    }
}
//# sourceMappingURL=video.js.map