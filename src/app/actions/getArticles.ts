'use server'
import { promises as fs } from 'fs'


export default async function getArticles() {
    const jsonData = await fs.readFile(process.cwd() + '/src/app/data/articles.json', 'utf8');
    const data = JSON.parse(jsonData);
    return data;
}