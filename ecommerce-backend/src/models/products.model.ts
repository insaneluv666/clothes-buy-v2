import {Entity, PrimaryGeneratedColumn, Column, PrimaryColumn} from 'typeorm';

export enum ProductCategory {
    ELECTRONICS = 'electronics',
    CLOTHING = 'clothing',
    BOOKS = 'books',
    HOME = 'home',
    BEAUTY = 'beauty',
    SPORTS = 'sports',
    OTHER = 'other'
}

@Entity()
export class Product {
    @PrimaryColumn('uuid')
    id!: string;

    @Column()
    name!: string;

    @Column('text')
    description!: string;

    @Column('decimal', { precision: 10, scale: 2 })
    price!: number;

    @Column({
        type: 'enum',
        enum: ProductCategory,
        default: ProductCategory.OTHER
    })
    category!: ProductCategory;

    @Column('int')
    stock!: number;

    @Column()
    brand!: string;

    @Column('simple-array')
    images!: string[];

    @Column('simple-json', { nullable: true })
    specifications?: Record<string, string>;

    @Column('decimal', { precision: 3, scale: 2, default: 0 })
    rating!: number;

    @Column('int', { default: 0 })
    reviewCount!: number;
}

export interface ProductShort {
    id: string;
    name: string;
    price: number;
    category: ProductCategory;
    brand: string;
    mainImage: string;
    rating: number;
}

export interface ProductDetailed extends ProductShort {
    description: string;
    stock: number;
    images: string[];
    specifications?: Record<string, string>;
    reviewCount: number;
}

export type ProductForm = Omit<Product, 'id' | 'rating' | 'reviewCount'>;
