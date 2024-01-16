type Pictures = {
    url: string
}[]

export interface Results {
    id: string
    thumbnail: string
    currency_id: "ARS" | "BOB" | "USD" | "COP" | "BRL"
    title: string
    price: number
    pictures: Pictures
    condition: "new" | "used"
}
