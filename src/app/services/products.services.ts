import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ProductsProps } from '../models/products';

@Injectable({
    // Нужно для регистрации в основном модуле
    providedIn: 'root',
})
export class ProductsServices {
    constructor(private http: HttpClient) {}

    getAll(): Observable<ProductsProps[]> {
        return this.http.get<ProductsProps[]>('https://fakestoreapi.com/products');
    }
}
