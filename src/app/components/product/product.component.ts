import { Component, Input } from '@angular/core';
import { ProductsProps } from '../../models/products';
import {
    CurrencyPipe,
    DecimalPipe,
    NgClass,
    NgIf,
    NgOptimizedImage,
    NgStyle,
} from '@angular/common';

@Component({
    // standalone -- Компоненты Angular, помеченные как автономные, не нужно объявлять в NgModule.
    // Такие компоненты напрямую управляют своими собственными зависимостями шаблона
    // (компонентами, директивами и каналами, используемыми в шаблоне) через свойство imports.
    standalone: true,

    selector: 'app-product',
    templateUrl: './product.component.html',
    imports: [
        NgOptimizedImage,
        DecimalPipe,
        CurrencyPipe,
        NgIf,
        NgClass,
        NgStyle,
    ],
})
export class ProductComponent {
    // @Input() -- используется для получения параметра.
    // Говорит в какое свойство должны быть переданы параметры,
    // также можно это свойство назвать внутри @Input('hello')
    @Input() products: ProductsProps;
    // P.S. смотреть tsconfig.json

    details = false;
}
