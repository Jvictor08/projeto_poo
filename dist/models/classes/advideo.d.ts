import { Video } from "./video.js";
export declare class AdVideo extends Video {
    private anunciante;
    private skippableAfterSeconds;
    private isSkipped;
    constructor(id: string, titulo: string, duracao: number, autor: string, anunciante: string, skippable: number);
    play(): void;
    info(): string;
    skip(): void;
}
//# sourceMappingURL=advideo.d.ts.map