import { Describable, Playable } from './interfaces.js';
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
    getCurrentTime() {
        return this.currentTime;
    }
    setCurrentTime(time) {
        if (time >= 0 && time <= this.duracao) {
            this.currentTime = time;
        }
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
export class AdVideo extends Video {
    anunciante;
    skippableAfterSeconds;
    isSkipped = false;
    constructor(id, titulo, duracao, autor, anunciante, skippable) {
        super(id, titulo, duracao, autor);
        this.anunciante = anunciante;
        this.skippableAfterSeconds = skippable;
    }
    play() {
        console.log(`📣 Anúncio de ${this.anunciante} - "${this.getTitulo()}"`);
        if (this.skippableAfterSeconds > 0) {
            console.log(`(Este anúncio pode ser pulado após ${this.skippableAfterSeconds} segundos)`);
            setTimeout(() => {
                if (!this.isSkipped) {
                    console.log(`Anúncio de ${this.anunciante} concluído.`);
                }
            }, this.skippableAfterSeconds * 1000);
        }
        super.play();
    }
    info() {
        return `Anúncio: "${this.getTitulo()}" por ${this.anunciante} | Duração: ${this.duracao}s`;
    }
    skip() {
        this.isSkipped = true;
        console.log(`➡️ Anúncio pulado.`);
        this.stop();
    }
}
export class LiveStream extends Video {
    concurrentViewers;
    isLive = true;
    constructor(id, titulo, autor, viewers) {
        super(id, titulo, Infinity, autor); // Duração infinita
        this.concurrentViewers = viewers;
    }
    getConcurrentViewers() {
        return this.concurrentViewers;
    }
    play() {
        console.log(`🔴 AO VIVO: ${this.getTitulo()} (Espectadores: ${this.concurrentViewers})`);
        this.isLive = true;
        this.views++;
    }
    info() {
        return `AO VIVO - "${this.getTitulo()}" por ${this.autor} | Espectadores: ${this.concurrentViewers}`;
    }
    stop() {
        console.log(`⏹️ Transmissão ao vivo de ${this.getTitulo()} foi encerrada.`);
        this.isLive = false;
    }
}
//# sourceMappingURL=video.js.map