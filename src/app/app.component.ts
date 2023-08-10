import { Component, OnInit } from '@angular/core';
import { ProductsProps } from './models/products';
import { ProductsServices } from './services/products.services';
import { RouterModule } from '@angular/router';
import { NgForOf, TitleCasePipe } from '@angular/common';
import { ProductComponent } from './components/product/product.component';
import { HttpClientModule } from '@angular/common/http';

@Component({
    standalone: true,
    imports: [RouterModule, HttpClientModule, TitleCasePipe, ProductComponent, NgForOf],

    // Нужно добавлять провайдер для связи компонента с сервисом
    providers: [ProductsServices],
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
    title = 'angular-course';

    products: ProductsProps[] = [];

    // Подключение сервиса
    constructor(private productsService: ProductsServices) {}

    ngOnInit(): void {
        this.productsService.getAll().subscribe((products) => {
            // В созданный выше массив вносим полученные данные
            this.products = products;
        });
    }
}
