import { Video } from './video.js';
export declare class Playlist {
    private videos;
    private currentIndex;
    add(video: Video): void;
    remove(id: string): void;
    getCurrent(): Video | null;
    hasNext(): boolean;
    hasPrevious(): boolean;
    getVideos(): Video[];
    setNextIndex(): void;
    setPreviousIndex(): void;
    setCurrentIndex(index: number): void;
    getCurrentIndex(): number;
}
//# sourceMappingURL=playlist.d.ts.map