import { Pipe, PipeTransform } from '@angular/core';
import { ProductsProps } from '../models/products';

@Pipe({
    name: 'filterProducts',
    standalone: true,
})
export class FilterProductsPipe implements PipeTransform {
    transform(products: ProductsProps[], search: string): ProductsProps[] {
        if (search.length === 0) {
            return products;
        }
        return products.filter((product) => {
            return product.title.toLowerCase().includes(search.toLowerCase());
        });
    }
}
