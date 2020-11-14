/*
export class SellItem {
  constructor(
    public id: number,
    public name: string,
    public console: string,
    public type: string
  ) {}
}
*/


export interface SellItem {
  id: number;
  name: string;
  console: string;
  type: string;
  condition: string;
}
