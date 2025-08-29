import { Video } from './video.js';
export class Playlist {
    videos = [];
    currentIndex = 0;
    add(video) {
        this.videos.push(video);
    }
    remove(id) {
        this.videos = this.videos.filter(video => video.getId() !== id);
    }
    getCurrent() {
        if (this.videos.length === 0) {
            return null;
        }
        return this.videos[this.currentIndex];
    }
    hasNext() {
        return this.currentIndex < this.videos.length - 1;
    }
    hasPrevious() {
        return this.currentIndex > 0;
    }
    getVideos() {
        return [...this.videos]; // Retorna uma cópia para evitar modificações externas
    }
    setNextIndex() {
        this.currentIndex++;
    }
    setPreviousIndex() {
        this.currentIndex--;
    }
    setCurrentIndex(index) {
        if (index >= 0 && index < this.videos.length) {
            this.currentIndex = index;
        }
    }
    getCurrentIndex() {
        return this.currentIndex;
    }
}
//# sourceMappingURL=playlist.js.map