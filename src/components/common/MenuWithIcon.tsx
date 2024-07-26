import React from 'react'
interface MenuWithIcon {
    heading:{name?:React.ReactNode,icon?:React.ReactNode};
    position:string;
    menuItems: { icon?: React.ReactNode; itemName: string }[];
}
export const MenuWithIcon: React.FC<MenuWithIcon> = (props) => {
    const { heading, menuItems ,position} = props
    return (
       
            <div className={`dropdown ${position} dropdown-hover  m-0 p-0`}>
                <div tabIndex={0} role="button" className=" px-6 transition-all rounded-md flex  gap-2 items-center ">
                {heading?.icon}
                {heading?.name}
                </div>
               <div>
               <table tabIndex={0} className="dropdown-content border menu bg-base-100  z-[10] min-w-60  shadow">
                    {
                        menuItems.map((item, key) => (
                            <tr key={key} className='text-xl p-2 cursor-pointer whitespace-nowrap'>
                                <td className='p-3'>{item.icon}</td>
                                <td >{item.itemName}</td>
                            </tr>
                        ))
                    }
                </table>
               </div>
            </div>
    
    )
}
