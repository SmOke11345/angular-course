import { Component } from '@angular/core';
import { ProductsServices } from './services/products.services';
import { RouterModule } from '@angular/router';
import { AsyncPipe, NgForOf, NgIf, TitleCasePipe } from '@angular/common';
import { ProductComponent } from './components/product/product.component';
import { HttpClientModule } from '@angular/common/http';
import { ErrorsComponent } from './components/errors/errors.component';
import { FormsModule } from '@angular/forms';
import { FilterProductsPipe } from './pipes/filter-products.pipe';
import { ModalComponent } from './components/modal/modal.component';
import { CreateProductComponent } from './components/create-product/create-product.component';
import { NavigationComponent } from './components/navigation/navigation.component';

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
        NavigationComponent,
    ],
    // Нужно добавлять провайдер для связи компонента с сервисом
    providers: [ProductsServices],
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
})
export class AppComponent {}
