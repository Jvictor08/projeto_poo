import type { Describable } from '../interfaces/describable.js';
import type { Playable } from '../interfaces/playable.js';
export declare class Video implements Playable, Describable {
    private id;
    private titulo;
    private duracao;
    private autor;
    private views;
    private currentTime;
    constructor(id: string, titulo: string, duracao: number, autor: string);
    getTitulo(): string;
    getId(): string;
    getViews(): number;
    setView(novosViwers: number): number;
    getCurrentTime(): number;
    setCurrentTime(time: number): void;
    getCurrentAutor(): string;
    play(): void;
    pause(): void;
    stop(): void;
    info(): string;
}
//# sourceMappingURL=video.d.ts.map