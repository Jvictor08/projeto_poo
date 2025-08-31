import { Video } from "./video.js";
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
        return `Anúncio: "${this.getTitulo()}" por ${this.anunciante} | Duração: ${this.getCurrentTime()}s`;
    }
    skip() {
        this.isSkipped = true;
        console.log(`➡️ Anúncio pulado.`);
        this.stop();
    }
}
//# sourceMappingURL=advideo.js.map