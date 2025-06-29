export interface Artist {
  id: string;
  name: string;
  imagePath: string;
  prompt: string;
  category: string[];
  birthYear?: number | null;
  deathYear?: number | null;
  notes?: string;
  firstName?: string;
  lastName?: string;
}
