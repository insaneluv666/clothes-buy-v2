import { Request, Response } from 'express';
import { Product, ProductDetailed, ProductForm, ProductShort } from '@models/products.model';
import { v4 as uuidv4 } from 'uuid';

import { AppDataSource } from '@config/database'; // путь к твоему data-source

// Получение всех продуктов
export const getProducts = async (req: Request, res: Response): Promise<void> => {
    try {
        const productRepository = AppDataSource.getRepository(Product);
        const products = await productRepository.find();

        const shortProducts: ProductShort[] = products.map(product => ({
            id: product.id,
            name: product.name,
            price: product.price,
            category: product.category,
            brand: product.brand,
            mainImage: product.images[0] || '',
            rating: product.rating,
        }));

        res.json(shortProducts);
    } catch (error) {
        console.error('Error fetching products:', error);
        res.status(500).json({ message: 'Error fetching products', error });
    }
};

// Получение продукта по ID
export const getProduct = async (req: Request, res: Response): Promise<void> => {
    try {
        const { id } = req.params;

        if (!id) {
            res.status(400).json({ message: 'Product ID is required' });
            return;
        }

        const productRepository = AppDataSource.getRepository(Product);
        const product = await productRepository.findOne({ where: { id } });

        if (!product) {
            res.status(404).json({ message: 'Product not found' });
            return;
        }

        const detailedProduct: ProductDetailed = {
            id: product.id,
            name: product.name,
            price: product.price,
            category: product.category,
            brand: product.brand,
            mainImage: product.images[0] || '',
            rating: product.rating,
            description: product.description,
            stock: product.stock,
            images: product.images,
            specifications: product.specifications,
            reviewCount: product.reviewCount,
        };

        res.json(detailedProduct);
    } catch (error) {
        console.error('Error fetching product:', error);
        res.status(500).json({ message: 'Error fetching product', error });
    }
};

// Добавление нового продукта
export const addProduct = async (req: Request, res: Response): Promise<void> => {
    try {
        const productRepository = AppDataSource.getRepository(Product);

        // Валидация данных запроса
        const { name, price, category, brand, description, stock, images, specifications } = req.body;

        if (!name || !price || !category || !brand || !description) {
            res.status(400).json({ message: 'Missing required fields: name, price, category, brand, description' });
            return;
        }

        // Создание нового продукта
        const newProduct = productRepository.create({
            id: uuidv4(),
            name,
            price,
            category,
            brand,
            description,
            stock: stock || 0,
            images: images || [],
            specifications: specifications || {},
            rating: 0, // Начальное значение рейтинга
            reviewCount: 0, // Начальное значение количества отзывов
        });

        // Сохранение продукта
        const result = await productRepository.save(newProduct);
        res.status(201).json(result);
    } catch (error) {
        console.error('Error adding product:', error);
        res.status(500).json({ message: 'Error adding product', error });
    }
};
