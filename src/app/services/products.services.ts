import { Injectable } from '@angular/core';
import {
    HttpClient,
    HttpErrorResponse,
    HttpParams,
} from '@angular/common/http';
import { catchError, delay, Observable, retry, tap, throwError } from 'rxjs';
import { FormProducts, ProductsProps } from '../models/products';
import { ErrorService } from './error.service';
import { ɵValue } from '@angular/forms';

@Injectable({
    // Нужно для регистрации в основном модуле
    providedIn: 'root',
})
export class ProductsServices {
    constructor(private http: HttpClient, private errorService: ErrorService) {}

    fetchedProducts: ProductsProps[] = [];

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

                // Заносим полученные данные в массив
                tap((products) => {
                    this.fetchedProducts = products;
                }),
            );
    }

    // Создание кастомизированного отображения ошибки
    private errorHandler(error: HttpErrorResponse) {
        // вызываем метод, который передает текст ошибки
        this.errorService.handleError(error.message);
        // возвращаем ошибку
        return throwError(() => error.message);
    }

    // Работа с сервером

    // Загрузка данных на сервер
    create(product: {
        image?: ɵValue<FormProducts['image']>;
        price?: ɵValue<FormProducts['price']>;
        rating?: ɵValue<FormProducts['rating']>;
        description?: ɵValue<FormProducts['description']>;
        title?: ɵValue<FormProducts['title']>;
        category?: ɵValue<FormProducts['category']>;
    }): Observable<ProductsProps> {
        return this.http
            .post<ProductsProps>('https://fakestoreapi.com/products', product)
            .pipe(
                // Введенные данные добавляем в массив
                tap((data) => {
                    this.fetchedProducts.push(data);
                }),
            );
    }
}
