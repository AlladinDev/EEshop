import React from 'react'
interface GridProductProps {
    products: { images: string[], title: string, price: number ,id:number}[],
    heading: string,
    SideIcon: React.ReactNode,
    gridConfiguration: string
}
export const GridProductView: React.FC<GridProductProps> = ({ products, heading, SideIcon, gridConfiguration }) => {
    console.log(products)
    return (
        <div className=''>
            <div className='flex justify-between px-2 items-center py-3'>
                <h2 className='whitespace-nowrap text-2xl font-bold'>{heading}</h2>
                <h2>{SideIcon}</h2>
            </div>
            <div className={`w-full grid ${gridConfiguration}  `}>
                {products.map((item: { images: (string)[],id:number,title: string, price: number }, key: React.Key | null | undefined) => (
                    <div key={key} className='border border-black' data-id={item.id}>
                        <div data-id={item.id}> 
                            <img src={item.images[0].split('"')[1]} alt="" />
                        </div>
                        <div  data-id={item.id} className='p-2 flex justify-around items-center'>
                            <h2>{item.title}</h2>
                            <h2 className='p-2 font-bold'>Rs:{item.price * 5}</h2>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}


