import { Video } from "./video.js";
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
        this.getConcurrentViewers();
    }
    info() {
        return `AO VIVO - "${this.getTitulo()}" por ${this.getCurrentAutor()} | Espectadores: ${this.concurrentViewers}`;
    }
    stop() {
        console.log(`⏹️ Transmissão ao vivo de ${this.getTitulo()} foi encerrada.`);
        this.isLive = false;
    }
}
//# sourceMappingURL=livestream.js.map