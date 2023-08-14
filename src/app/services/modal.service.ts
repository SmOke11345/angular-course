import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
    providedIn: 'root',
})
export class ModalService {
    // new BehaviorSubject в отличие от BehaviorSubject идет с исходным значением
    isVisible$ = new BehaviorSubject<boolean>(false);

    openModal() {
        this.isVisible$.next(true);
    }

    closeModal() {
        this.isVisible$.next(false);
    }
}
