import { Describable, Playable } from './interfaces.js';

export class Video implements Playable, Describable {
  private id: string;
  private titulo: string;
  private duracao: number; // em segundos
  private autor: string;
  private views: number;
  private currentTime: number;

  constructor(id: string, titulo: string, duracao: number, autor: string) {
    this.id = id;
    this.titulo = titulo;
    this.duracao = duracao;
    this.autor = autor;
    this.views = 0;
    this.currentTime = 0;
  }

  public getTitulo(): string {
    return this.titulo;
  }

  public getId(): string {
    return this.id;
  }

  public getViews(): number {
    return this.views;
  }

  public getCurrentTime(): number {
    return this.currentTime;
  }

  public setCurrentTime(time: number): void {
    if (time >= 0 && time <= this.duracao) {
      this.currentTime = time;
    }
  }

  public play(): void {
    this.views++;
    console.log(`▶️ Reproduzindo: ${this.titulo} (Duração: ${this.duracao}s)`);
    this.currentTime = 0;
  }

  public pause(): void {
    console.log(`⏸️ Pausado: ${this.titulo} em ${this.currentTime}s`);
  }

  public stop(): void {
    console.log(`⏹️ Parado: ${this.titulo}`);
    this.currentTime = 0;
  }

  public info(): string {
    return `"${this.titulo}" por ${this.autor} | Views: ${this.views}`;
  }
}

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
    return `Anúncio: "${this.getTitulo()}" por ${this.anunciante} | Duração: ${this.duracao}s`;
  }

  public skip(): void {
    this.isSkipped = true;
    console.log(`➡️ Anúncio pulado.`);
    this.stop();
  }
}

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
    this.views++;
  }

  public info(): string {
    return `AO VIVO - "${this.getTitulo()}" por ${this.autor} | Espectadores: ${this.concurrentViewers}`;
  }

  public stop(): void {
    console.log(`⏹️ Transmissão ao vivo de ${this.getTitulo()} foi encerrada.`);
    this.isLive = false;
  }
}