import { createContext, useState } from "react";

import testimage from '../images/nike-hero.png';

export const ShopContext = createContext();

const testData = [
    {
        id : 1, 
        image : testimage, 
        title : 'Men Air Running Shoe',
        price: 130,
        category: 'ladies',
        description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Asperiores nulla eos fuga maiores dolore, cum facere aperiam doloremque praesentium totam expedita quibusdam excepturi necessitatibus autem perspiciatis sunt eligendi minima quam.',
    },
    {
        id : 2, 
        image : testimage, 
        title : 'FitHit Men Non-Slippery Shoe',
        price: 130,
        category: 'ladies',
        description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Asperiores nulla eos fuga maiores dolore, cum facere aperiam doloremque praesentium totam expedita quibusdam excepturi necessitatibus autem perspiciatis sunt eligendi minima quam.',
    },
    {
        id : 3, 
        image : testimage, 
        title : 'Men Air Running Shoe',
        price: 130,
        category: 'ladies',
        description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Asperiores nulla eos fuga maiores dolore, cum facere aperiam doloremque praesentium totam expedita quibusdam excepturi necessitatibus autem perspiciatis sunt eligendi minima quam.',
    },
    {
        id : 4, 
        image : testimage, 
        title : 'FitHit Men Non-Slippery Shoe',
        price: 130,
        category: 'ladies',
        description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Asperiores nulla eos fuga maiores dolore, cum facere aperiam doloremque praesentium totam expedita quibusdam excepturi necessitatibus autem perspiciatis sunt eligendi minima quam.',
    }
]

export function ShopContextProvider({children}) {
    const [products, setProducts] = useState(testData);

    return (
        <ShopContext.Provider value={products}>
            {children}
        </ShopContext.Provider>
    )
}