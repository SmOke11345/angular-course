import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateProductComponent } from '../../components/create-product/create-product.component';
import { ErrorsComponent } from '../../components/errors/errors.component';
import { FilterProductsPipe } from '../../pipes/filter-products.pipe';
import { ModalComponent } from '../../components/modal/modal.component';
import { ProductComponent } from '../../components/product/product.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Observable, tap } from 'rxjs';
import { ProductsProps } from '../../models/products';
import { ProductsServices } from '../../services/products.services';
import { ModalService } from '../../services/modal.service';
import { NavigationComponent } from '../../components/navigation/navigation.component';

@Component({
    selector: 'app-product-page',
    standalone: true,
    imports: [
        CommonModule,
        CreateProductComponent,
        ErrorsComponent,
        FilterProductsPipe,
        ModalComponent,
        ProductComponent,
        ReactiveFormsModule,
        FormsModule,
        NavigationComponent,
    ],
    templateUrl: './product-page.component.html',
    styleUrls: ['./product-page.component.scss'],
})
export class ProductPageComponent implements OnInit {
    title = 'angular-course';

    // products: ProductsProps[] = [];

    products$: Observable<ProductsProps[]>;

    loading = false;

    // Создание фильтрации
    filter = '';

    // Подключение сервиса
    constructor(
        public productsService: ProductsServices,
        public modalService: ModalService,
    ) {}

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
