import Presentation from "./entities/presentation"
import ProductBaseUnit from "./value-objects/product-base-unit"
import ProductId from "./value-objects/product-id"
import ProductName from "./value-objects/product-name"
import ProductPresentation from "./value-objects/product-presentation"

export default class Product {
    private readonly productId: ProductId
    private readonly productName: ProductName
    private readonly baseUnit:ProductBaseUnit
    private productPresentation:Presentation[]

    constructor(productId:string, productName: string, baseUnit:string, productPresentation: Presentation[]) {
        this.productId = new ProductId(productId)
        this.productName = new ProductName(productName)
        this.baseUnit = new ProductBaseUnit(baseUnit)
        this.productPresentation = productPresentation
    }

    public  static build (id:string, name:string, baseUnit:string, presentation: Array<{id: string, name: string, type: string, netQuantity: number, unitOfMeasure: string}>):Product {
        const arrayPrresentation = new ProductPresentation(presentation)
        const newProduct = new Product(id, name, baseUnit, arrayPrresentation.getValue())

        return newProduct
    }

    public toPrimitives() {
      return {
        _id: this.productId.getValue(),
        product_name: this.productName.getValue(),
        product_base_unit: this.baseUnit.getValue(),
        presentations: this.productPresentation.map(p =>
          p.toPrimitives()
        )
      }
    }
}

