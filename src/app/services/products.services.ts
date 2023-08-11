import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpParams } from '@angular/common/http';
import { catchError, delay, Observable, retry, throwError } from 'rxjs';
import { ProductsProps } from '../models/products';
import { ErrorService } from './error.service';

@Injectable({
    // Нужно для регистрации в основном модуле
    providedIn: 'root',
})
export class ProductsServices {
    constructor(private http: HttpClient, private errorService: ErrorService) {}

    getAll(): Observable<ProductsProps[]> {
        return this.http
            .get<ProductsProps[]>('https://fakestoreapi.com/products', {
                params: new HttpParams({
                    fromString: 'limit=5',
                    // fromObject: {
                    //     limit: 5,
                    // }
                }),
            })
            .pipe(
                delay(1000),

                // Вдруг с первого раза не получиться получить данные, а с последующих получиться
                retry(3),

                // Отлавливаем ошибку и отправляем текст ошибки в метод errorHandler
                catchError(this.errorHandler.bind(this)),
            );
    }

    // Создание кастомизированного отображения ошибки
    private errorHandler(error: HttpErrorResponse) {
        // вызываем метод, который передает текст ошибки
        this.errorService.handleError(error.message);
        // возвращаем ошибку
        return throwError(() => error.message);
    }
}
