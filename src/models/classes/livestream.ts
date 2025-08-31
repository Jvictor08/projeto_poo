import { Video } from "./video.js";

export class LiveStream extends Video {
  private concurrentViewers: number;
  private isLive: boolean = true;

  constructor(id: string, titulo: string, autor: string, viewers: number) {
    super(id, titulo, Infinity, autor); // Duração infinita
    this.concurrentViewers = viewers;
  }

  public getConcurrentViewers(): number {
    return this.concurrentViewers;
  }

  public play(): void {
    console.log(`🔴 AO VIVO: ${this.getTitulo()} (Espectadores: ${this.concurrentViewers})`);
    this.isLive = true;
    this.getConcurrentViewers();
  }

  public info(): string {
    return `AO VIVO - "${this.getTitulo()}" por ${this.getCurrentAutor()} | Espectadores: ${this.concurrentViewers}`;
  }

  public stop(): void {
    console.log(`⏹️ Transmissão ao vivo de ${this.getTitulo()} foi encerrada.`);
    this.isLive = false;
  }
}