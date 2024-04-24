"use server"
import { promises as fs } from 'fs';

export default async function getProduct(){
    const file = await fs.readFile(process.cwd() + '/json/products.json', 'utf8');
    const data = await JSON.parse(file);


    return data
}
