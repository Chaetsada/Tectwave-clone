export interface ProductProp {
    filter: any
    id: number,
    title: string,
    category: string,
    description: string,
    price: number,
    link: string,
    thumbnail: string,
    images: string[],
    related: relatedProduct[]
}


export interface relatedProduct {
    category: string;
    thumbnail: string;
    title: string;
    description: string;
    price: number;
    link: string;
}[]


export interface AccordianProp {
    id: number,
    title: string,
    content: string,
}

export type ArticleProps = {
    id: number,
    title: string,
    description: string,
    date: string,
    link: string,
    thumbnail: string,
}