import { Video } from "./video.js";
export declare class LiveStream extends Video {
    private concurrentViewers;
    private isLive;
    constructor(id: string, titulo: string, autor: string, viewers: number);
    getConcurrentViewers(): number;
    play(): void;
    info(): string;
    stop(): void;
}
//# sourceMappingURL=livestream.d.ts.map