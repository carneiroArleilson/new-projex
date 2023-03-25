import { ProductInterface } from "./product.intarface";

export interface OrderInterface{
  id: number,
  clients?: string[],
  products?: ProductInterface[],
  total?: number
}
