import { ClientInterface } from './client.interface';
import { OrderInterface } from './order.intarface';
import { ProductInterface } from './product.intarface';

export interface Row
  extends ProductInterface,
    ClientInterface,
    OrderInterface {
      selected: boolean;
    }
