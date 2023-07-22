// Drink型を定義
export interface IDrink {
  id: string;
  name: string;
  price: number;
  img: string;
}

// JSONデータの型を定義
export interface IDrinksData {
  drinks: IDrink[];
}
