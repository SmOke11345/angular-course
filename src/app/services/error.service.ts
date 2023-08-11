// Данный компонент был создан при помощи CLI команды (nx generate service services/error --skip-tests),
// тоже что и в Laravel

import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
    providedIn: 'root',
})
export class ErrorService {
    // Сначала подписываемся на события, затем создаем для него какие-либо действия
    error$ = new Subject();

    handleError(message: string) {
        this.error$.next(message);
    }

    clearError() {
        this.error$.next(null);
    }
}
