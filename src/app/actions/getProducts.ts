'use server'
import { promises as fs } from 'fs'

export default async function getProducts() {
    const jsonData = await fs.readFile(process.cwd() + '/app/data/products.json', 'utf8');
    const data = JSON.parse(jsonData);
    return data;


}