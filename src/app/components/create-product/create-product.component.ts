import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
    FormControl,
    FormGroup,
    FormsModule,
    ReactiveFormsModule,
    Validators,
} from '@angular/forms';
import { FocusDirective } from '../../directives/focus.directive';
import { ProductsServices } from '../../services/products.services';
import { ModalService } from '../../services/modal.service';
import { FormProducts } from '../../models/products';

@Component({
    selector: 'app-create-product',
    standalone: true,
    imports: [CommonModule, ReactiveFormsModule, FormsModule, FocusDirective],
    templateUrl: './create-product.component.html',
    styleUrls: ['./create-product.component.scss'],
})
export class CreateProductComponent {
    constructor(
        public productsServices: ProductsServices,
        private modalService: ModalService,
    ) {}

    // Создаем форму
    form = new FormGroup<FormProducts>({
        // Создаем необходимые поля
        title: new FormControl('', {
            nonNullable: true,
            // Создаем валидацию
            validators: [Validators.required, Validators.minLength(6)],
        }),
        price: new FormControl(0, { nonNullable: true }),
        description: new FormControl('', { nonNullable: true }),
        category: new FormControl('', { nonNullable: true }),
        image: new FormControl('', { nonNullable: true }),
        rating: new FormControl({ rate: 0, count: 0 }, { nonNullable: true }),
    });

    // Для тоже чтобы мы в шаблоне могли сразу обратиться к title.errors['minlength'] (К примеру)
    get title() {
        return this.form.controls.title as FormControl;
    }

    onsubmit() {
        console.log('hello');
        this.productsServices
            .create({
                ...this.form.value,
            })
            // Для работы запроса, stream обязательно должен быть подписан на событие,
            // иначе не будут выполняться запросы
            .subscribe(() => {
                // После успешной отправки данных, закрыть модальное окно
                this.modalService.closeModal();
            });
    }
}
