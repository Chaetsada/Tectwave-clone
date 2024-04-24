export interface ProductProp {
 
    id: number,
    title: string,
    category: string,
    description: string,
    price: number,
    link: string,
    thumbnail: string,
    images: string[],
    
}


export interface AccordianProp {
    id: number,
    title: string,
    content: string,
}

export interface ArticleProps {
    id: number,
    title: string,
    description: string,
    date: string,
    link: string,
    thumbnail: string,
}