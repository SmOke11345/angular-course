import { Pipe, PipeTransform } from '@angular/core';
import { ProductsProps } from '../models/products';

@Pipe({
    name: 'filterProducts',
    standalone: true,
})
export class FilterProductsPipe implements PipeTransform {
    transform(products: ProductsProps[], search: string): ProductsProps[] {
        return products.filter((product) => {
            return product.title.toLowerCase().includes(search.toLowerCase());
        });
    }
}
