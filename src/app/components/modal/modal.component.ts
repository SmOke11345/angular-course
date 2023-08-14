import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateProductComponent } from '../create-product/create-product.component';
import { ModalService } from '../../services/modal.service';

@Component({
    selector: 'app-modal',
    standalone: true,
    imports: [CommonModule, CreateProductComponent],
    templateUrl: './modal.component.html',
    styleUrls: ['./modal.component.scss'],
})
export class ModalComponent {
    @Input() title: string;

    constructor(public modalService: ModalService) {}
}
