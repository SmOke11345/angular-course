import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ErrorService } from '../../services/error.service';

@Component({
    selector: 'app-errors',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './errors.component.html',
    styleUrls: ['./errors.component.scss'],
})
export class ErrorsComponent {
    constructor(public errorService: ErrorService) {}
}
