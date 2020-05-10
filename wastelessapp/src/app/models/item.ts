export class Item {
  ItemName: string;
  Quantity: number;
  Calories: number;
  PurchaseDate: string;
  ExpirationDate: string;
  ConsumptionDate: string;

  constructor(iN:string,q:number,c:number,pD:string,eD:string,cD:string ) {
    this.ItemName = iN;
    this.Quantity = q;
    this.Calories = c;
    this.PurchaseDate = pD;
    this.ExpirationDate = eD;
    this.ConsumptionDate = cD;
  }


}

