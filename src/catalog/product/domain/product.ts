class Product {
    private readonly productId: string
    private readonly productName: string
    private readonly baseUnit:string

    constructor(productId:string, productName: string, baseUnit:string) {
        this.productId = productId
        this.productName = productName
         this.baseUnit = baseUnit
    }

    public  static build (id:string, name:string, baseUnit:string):Product {
        const newProduct = new Product(id, name, baseUnit)

        return newProduct
    }
}