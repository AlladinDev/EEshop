
import { MenuWithIcon } from '../common/MenuWithIcon';

const menuDetails = [{
  heading: {
    name: <span className="p-3">Grocery</span>,
  },
  menuItems: [
    { itemName: 'Detergent' },
    { itemName: 'Utensils' },
    { itemName: 'Soaps' },
    { itemName: 'Shampoos' },
    { itemName: 'Dental Products' },
    { itemName: 'Baby Products' },
  ],
},
{
  heading: {
    name: <span className="p-3">Electronics</span>,
  },
  menuItems: [
    { itemName: 'Tvs' },
    { itemName: 'Musical Items' },
    { itemName: 'Vaccum Cleaner' },
    { itemName: 'Fridge' },
    { itemName: 'Washing Machine' },
    { itemName: 'Air Conditioner' },
  ],
},
{
  heading: {
    name: <span className="p-3">Fashion</span>,
  },
  menuItems: [
    { itemName: 'Mens Clothing' },
    { itemName: 'Female Clothing' },
    { itemName: 'Mens Casual Shirts' },
    { itemName: 'Mens Formal Shirts' },
    { itemName: 'Mens Kurtas' },
    { itemName: 'Female Formal Clothes' },
  ],
},
{
  heading: {
    name: <span className="p-3">Fashion</span>,
  },
  menuItems: [
    { itemName: 'Mens Clothing' },
    { itemName: 'Female Clothing' },
    { itemName: 'Mens Casual Shirts' },
    { itemName: 'Mens Formal Shirts' },
    { itemName: 'Mens Kurtas' },
    { itemName: 'Female Formal Clothes' },
  ],
},
{
  heading: {
    name: <span className="p-3">Fashion</span>,
  },
  menuItems: [
    { itemName: 'Mens Clothing' },
    { itemName: 'Female Clothing' },
    { itemName: 'Mens Casual Shirts' },
    { itemName: 'Mens Formal Shirts' },
    { itemName: 'Mens Kurtas' },
    { itemName: 'Female Formal Clothes' },
  ],
},
{
  heading: {
    name: <span className="p-3">Fashion</span>,
  },
  menuItems: [
    { itemName: 'Mens Clothing' },
    { itemName: 'Female Clothing' },
    { itemName: 'Mens Casual Shirts' },
    { itemName: 'Mens Formal Shirts' },
    { itemName: 'Mens Kurtas' },
    { itemName: 'Female Formal Clothes' },
  ],
},
];
const menuItemImages=[
  '../../grocery.png',
  '../../electronic-gadgets.png',
  '../../fashionPic.png',
   '../../fashionPic.png',
    '../../fashionPic.png'
]

 const SecondNavbar: React.FC = () => {
  return (
    <div
      style={{ scrollbarWidth: 'none' }}
      className="bg-white w-auto mx-2 px-2 shadow-md shadow-gray-200 static my-2 min-h-[25vh] max-sm:overflow-x-auto max-sm:overflow-y-hidden max-h-[190px] flex snap-x scroll-snap-type-x mandatory justify-around items-center  "
    >
      {[...Array(5)].map((_, index) => (
        <div
          key={index}
          className="w-40  relative flex-shrink-1 flex flex-col justify-center items-center aspect-square bg-white scroll-snap align-center"
        >
          <img src={menuItemImages[index]} alt="" className="h-[70%]" />

          <MenuWithIcon position={index==0?'dropdown':'dropdown-end'} {...menuDetails[index]} />
        </div>
      ))}
    </div>
  );
};
export default SecondNavbar