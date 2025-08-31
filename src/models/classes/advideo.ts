import { Video } from "./video.js";

export class AdVideo extends Video {
  private anunciante: string;
  private skippableAfterSeconds: number;
  private isSkipped: boolean = false;

  constructor(id: string, titulo: string, duracao: number, autor: string, anunciante: string, skippable: number) {
    super(id, titulo, duracao, autor);
    this.anunciante = anunciante;
    this.skippableAfterSeconds = skippable;
  }

  public play(): void {
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

  public info(): string {
    return `Anúncio: "${this.getTitulo()}" por ${this.anunciante} | Duração: ${this.getCurrentTime()}s`;
  }

  public skip(): void {
    this.isSkipped = true;
    console.log(`➡️ Anúncio pulado.`);
    this.stop();
  }
}