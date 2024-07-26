import React from 'react'
interface NotFoundProps {
    message: string
}
const NotFound: React.FC<NotFoundProps> = ({ message }: NotFoundProps) => {
    return (
        
            <span className=' p-2 rounded-box text-2xl font-bold flex justify-center items-center bg-white min-w-40  aspect-video shadow-sm shadow-gray-500 '>{message}</span>
    )
}

export default NotFound
