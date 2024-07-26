import React from 'react'
const GetProductId = (e: React.MouseEvent): { id: number, NoElementFound: boolean } => {
    const targetElement = e.target as HTMLElement
    console.log('inside get product id')
    console.log('tARGET IS',targetElement.parentNode)
    if (!targetElement.parentElement)
        return { id: 0, NoElementFound: true }
    const id = targetElement.parentElement.getAttribute('data-id')
    if (!id)
        return { id: 0, NoElementFound: true }
    return { id: Number(id), NoElementFound:false }
}

export default GetProductId
