export interface Game {
  id: number;
  name: string;
  price: number;
  console: string;
  year: number;
  condition: string;
  imageLocation: string;
}

export interface GameConsole {
  id: number;
  name: string;
  price: number;
  condition: string;
  imageLocation: string
}

export interface GameProduct {
  id: number;
  name: string;
  price: number;
  condition: string;
  type: string;
  console: string;
  year: number;
  imageLocation: string;
}
