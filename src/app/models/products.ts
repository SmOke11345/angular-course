import { FormControl } from '@angular/forms';

export interface ProductsProps {
    id?: number;
    title: string;
    price: number;
    description: string;
    category: string;
    image: string;
    rating: RatingProps;
}

interface RatingProps {
    rate: number;
    count: number;
}

// Для типизации формы
export interface FormProducts {
    title: FormControl<string>;
    price: FormControl<number>;
    description: FormControl<string>;
    category: FormControl<string>;
    image: FormControl<string>;
    rating: FormControl<RatingProps>;
}
