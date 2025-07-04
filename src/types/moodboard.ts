
export interface Album {
  id: string;
  title: string;
  category: string;
  image: string;
  vendor: string;
}

export interface MoodboardItem {
  id: string;
  album: Album;
  zoneId: string;
}

export interface DropZone {
  id: string;
  label: string;
  category: string;
}
