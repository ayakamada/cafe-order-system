// Drink型を定義
export interface IDrink {
  id: number;
  code: string;
  name: string;
  price: number;
  img: string;
}

// JSONデータの型を定義
export interface IDrinksData {
  drinks: IDrink[];
}
