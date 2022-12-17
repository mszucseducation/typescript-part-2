interface IProduct {
    id: number
    name: string
    image: string
    price: number
}

export const initialProducts: IProduct[] = [ 
    {   id: 1,
        name: 'keyboard',
        image: '../../productImages/image001.png',
        price: 200
    },
    { 
        id: 2,
        name: 'headphones',
        image: '../../productImages/image002.png',
        price: 300
    },
    { 
        id: 3,
        name: 'mouse',
        image: '../../productImages/image003.png',
        price: 100
    }
]