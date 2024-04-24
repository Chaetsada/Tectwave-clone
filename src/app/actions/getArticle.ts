"use server"
import { promises as fs } from 'fs';

export default async function getArticle(){
    const file = await fs.readFile(process.cwd() + '/json/articles.json', 'utf8');
    const data = await JSON.parse(file);


    return data
}
