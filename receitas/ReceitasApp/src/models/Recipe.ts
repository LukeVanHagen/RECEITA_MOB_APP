export interface Recipe {
  id?: string; // Optional ID for the recipe
  titulo: string; // Title of the recipe
  ingredientes: string[]; // List of ingredients
  modoPreparo: string; // Preparation method
  foto: string; // URL of the recipe photo
  curtidas: number; // Number of likes
  usuario: string; // User ID of the recipe creator
  criadoEm: firebase.firestore.Timestamp; // Timestamp of when the recipe was created
}