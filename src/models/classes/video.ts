import type { Describable } from '../interfaces/describable.js';
import type { Playable } from '../interfaces/playable.js';

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

  public setView(novosViwers: number): number {
    return this.views += novosViwers
  }

  public getCurrentTime(): number {
    return this.currentTime;
  }

  public setCurrentTime(time: number): void {
    if (time >= 0 && time <= this.duracao) {
      this.currentTime = time;
    }
  }

  public getCurrentAutor() {
    return this.autor
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

