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

@Component({
    selector: 'app-create-product',
    standalone: true,
    imports: [CommonModule, ReactiveFormsModule, FormsModule, FocusDirective],
    templateUrl: './create-product.component.html',
    styleUrls: ['./create-product.component.scss'],
})
export class CreateProductComponent {
    // Создаем форму
    form = new FormGroup({
        // Создаем необходимые поля
        title: new FormControl<string>(
            '',
            // Создаем валидацию
            [Validators.required, Validators.minLength(6)],
        ),
    });

    // Для тоже чтобы мы в шаблоне могли сразу обратиться к title.errors['minlength'] (К примеру)
    get title() {
        return this.form.controls.title as FormControl;
    }

    onsubmit() {
        console.log(this.form.value);
    }
}
