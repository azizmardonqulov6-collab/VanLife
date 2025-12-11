export interface Van{
    id:number,
    name: string,
    price: number,
    type: "Simple" | "Luxury" | "Rugged";
    imgUrl: string,
}