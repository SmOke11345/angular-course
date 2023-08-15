import { Route } from '@angular/router';
import { ProductPageComponent } from './pages/product-page/product-page.component';
import { AboutPageComponent } from './pages/about-page/about-page.component';

export const appRoutes: Route[] = [
    // Создаем роутинг
    {
        path: '',
        component: ProductPageComponent,
    },
    {
        path: 'about',
        component: AboutPageComponent,
    },
];
