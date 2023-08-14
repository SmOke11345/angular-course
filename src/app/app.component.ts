import { Component, OnInit } from '@angular/core';
import { ProductsProps } from './models/products';
import { ProductsServices } from './services/products.services';
import { RouterModule } from '@angular/router';
import { AsyncPipe, NgForOf, NgIf, TitleCasePipe } from '@angular/common';
import { ProductComponent } from './components/product/product.component';
import { HttpClientModule } from '@angular/common/http';
import { Observable, tap } from 'rxjs';
import { ErrorsComponent } from './components/errors/errors.component';
import { FormsModule } from '@angular/forms';
import { FilterProductsPipe } from './pipes/filter-products.pipe';
import { ModalComponent } from './components/modal/modal.component';
import { CreateProductComponent } from './components/create-product/create-product.component';
import { ModalService } from './services/modal.service';

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
        FormsModule,
        FilterProductsPipe,
        ModalComponent,
        CreateProductComponent,
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

    // Создание фильтрации
    filter = '';

    // Подключение сервиса
    constructor(private productsService: ProductsServices, public modalService: ModalService) {}

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
