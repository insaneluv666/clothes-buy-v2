import { Router } from 'express';
import { getProducts, getProduct, addProduct } from '@controllers/productController';

const router = Router();

/**
 * @swagger
 * components:
 *   schemas:
 *     ProductCategory:
 *       type: string
 *       enum: [electronics, clothing, books, home, beauty, sports, other]
 *
 *     ProductShort:
 *       type: object
 *       properties:
 *         id:
 *           type: string
 *         name:
 *           type: string
 *         price:
 *           type: number
 *         category:
 *           $ref: '#/components/schemas/ProductCategory'
 *         brand:
 *           type: string
 *         mainImage:
 *           type: string
 *         rating:
 *           type: number
 *
 *     ProductDetailed:
 *       allOf:
 *         - $ref: '#/components/schemas/ProductShort'
 *         - type: object
 *           properties:
 *             description:
 *               type: string
 *             stock:
 *               type: integer
 *             images:
 *               type: array
 *               items:
 *                 type: string
 *             specifications:
 *               type: object
 *               additionalProperties:
 *                 type: string
 *             reviewCount:
 *               type: integer
 *
 *     Product:
 *       allOf:
 *         - $ref: '#/components/schemas/ProductDetailed'
 *         - type: object
 *           required:
 *             - name
 *             - price
 *             - category
 *             - brand
 *             - description
 *             - stock
 *             - images
 *
 *     ProductForm:
 *       type: object
 *       properties:
 *         name:
 *           type: string
 *         price:
 *           type: number
 *         category:
 *           $ref: '#/components/schemas/ProductCategory'
 *         brand:
 *           type: string
 *         description:
 *           type: string
 *         stock:
 *           type: integer
 *         images:
 *           type: array
 *           items:
 *             type: string
 *         specifications:
 *           type: object
 *           additionalProperties:
 *             type: string
 *       required:
 *         - name
 *         - price
 *         - category
 *         - brand
 *         - description
 */

/**
 * @swagger
 * tags:
 *   - name: Products
 *     description: Product management API
 */

/**
 * @swagger
 * /api/products:
 *   get:
 *     tags: [Products]
 *     summary: Get a list of products
 *     responses:
 *       200:
 *         description: A list of products
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/ProductShort'
 */
router.get('/', getProducts);

/**
 * @swagger
 * /api/products/{id}:
 *   get:
 *     tags: [Products]
 *     summary: Get a product by id
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Detailed product information
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ProductDetailed'
 *       404:
 *         description: Product not found
 */
router.get('/:id', getProduct);

/**
 * @swagger
 * /api/products:
 *   post:
 *     tags: [Products]
 *     summary: Add a new product
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/ProductForm'
 *     responses:
 *       201:
 *         description: Created product
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Product'
 */
router.post('/', addProduct);

export default router;
