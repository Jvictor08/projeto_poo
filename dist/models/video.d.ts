import { Describable, Playable } from './interfaces.js';
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
    getCurrentTime(): number;
    setCurrentTime(time: number): void;
    play(): void;
    pause(): void;
    stop(): void;
    info(): string;
}
export declare class AdVideo extends Video {
    private anunciante;
    private skippableAfterSeconds;
    private isSkipped;
    constructor(id: string, titulo: string, duracao: number, autor: string, anunciante: string, skippable: number);
    play(): void;
    info(): string;
    skip(): void;
}
export declare class LiveStream extends Video {
    private concurrentViewers;
    private isLive;
    constructor(id: string, titulo: string, autor: string, viewers: number);
    getConcurrentViewers(): number;
    play(): void;
    info(): string;
    stop(): void;
}
//# sourceMappingURL=video.d.ts.map