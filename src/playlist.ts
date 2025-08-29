import { Video } from './video.js';

export class Playlist {
  private videos: Video[] = [];
  private currentIndex: number = 0;

  public add(video: Video): void {
    this.videos.push(video);
  }

  public remove(id: string): void {
    this.videos = this.videos.filter(video => video.getId() !== id);
  }

  public getCurrent(): Video | null {
    if (this.videos.length === 0) {
      return null;
    }
    return this.videos[this.currentIndex];
  }

  public hasNext(): boolean {
    return this.currentIndex < this.videos.length - 1;
  }

  public hasPrevious(): boolean {
    return this.currentIndex > 0;
  }

  public getVideos(): Video[] {
    return [...this.videos]; // Retorna uma cópia para evitar modificações externas
  }

  public setNextIndex(): void {
    this.currentIndex++;
  }

  public setPreviousIndex(): void {
    this.currentIndex--;
  }

  public setCurrentIndex(index: number): void {
    if (index >= 0 && index < this.videos.length) {
      this.currentIndex = index;
    }
  }

  public getCurrentIndex(): number {
    return this.currentIndex;
  }
}