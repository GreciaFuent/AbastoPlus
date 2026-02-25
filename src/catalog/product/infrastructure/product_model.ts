import { prop, getModelForClass } from "@typegoose/typegoose";

class Presentation {
    @prop({ required: true, type: String })
    public _id!: string;

    @prop({ required: true, type: String })
    public presentation_name!: string;

    @prop({ required: true, type: String })
    public presentation_type!: string;

    @prop({ required: true, type: Number })
    public presentation_net_quantity!: number;

    @prop({ required: true, type: String })
    public presentation_unit_of_measure!: string;
}

class Product {
    @prop({ required: true, type: String })
    public _id!: string;

    @prop({ required: true, type: String })
    public product_name!: string;

    @prop({ required: true, type: String })
    public product_base_unit!: string;

    @prop({ type: () => [Presentation], default: [] })
    public presentations!: Presentation[];
}

export const ProductModel = getModelForClass(Product);