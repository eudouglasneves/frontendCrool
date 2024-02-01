export interface Product{
    title : string
    price : number
    categoryID : number
    category : {
        id: number
        name: string
    }
}