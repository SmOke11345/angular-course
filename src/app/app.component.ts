import { Component, OnInit } from '@angular/core';
import { ProductsProps } from './models/products';
import { ProductsServices } from './services/products.services';
import { RouterModule } from '@angular/router';
import { AsyncPipe, NgForOf, NgIf, TitleCasePipe } from '@angular/common';
import { ProductComponent } from './components/product/product.component';
import { HttpClientModule } from '@angular/common/http';
import { Observable, tap } from 'rxjs';
import { ErrorsComponent } from './components/errors/errors.component';

@Component({
    standalone: true,
    imports: [
        RouterModule,
        HttpClientModule,
        TitleCasePipe,
        ProductComponent,
        NgForOf,
        NgIf,
        AsyncPipe,
        ErrorsComponent,
    ],

    // Нужно добавлять провайдер для связи компонента с сервисом
    providers: [ProductsServices],
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
    title = 'angular-course';

    // products: ProductsProps[] = [];

    products$: Observable<ProductsProps[]>;

    loading = false;

    // Подключение сервиса
    constructor(private productsService: ProductsServices) {}

    ngOnInit(): void {
        this.loading = true;
        // this.productsService.getAll().subscribe((products) => {
        //     // В созданный выше массив вносим полученные данные
        //     this.products = products;
        //     this.loading = false;
        // });
        // или
        this.products$ = this.productsService.getAll().pipe(
            tap(() => {
                this.loading = false;
            }),
        );
    }
}
