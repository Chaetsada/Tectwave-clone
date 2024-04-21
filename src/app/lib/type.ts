export interface ProductProp{
    filter: any
    id:number,
    title:string,
    category:string,
    description:string,
    price:number,
    link:string,
    thumbnail:string,
    images:string[],
    related:{
        tag:string,
        image:string,
        name:string,
        desc:string,
        price:number,
        link:string,
    }[]
}


export interface AccordianProp{
    id:number,
    title:string,
    content:string,
}

export type ArticleProps = {
    id:number,
    title:string,
    description:string,
    date:string,
    link:string,
    thumbnail:string,
}