export interface Van{
    id:number,
    name: string,
    dec: string ,
    price: number,
    type: "Simple" | "Luxury" | "Rugged";
    imgUrl: string,
}