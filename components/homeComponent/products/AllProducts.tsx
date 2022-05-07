import Image from 'next/image';
import { BsFillCartPlusFill, BsFillEyeFill } from 'react-icons/bs';
import img from '../../../public/images/catagories/e3.jpg';

const AllProducts = () => {
  const products = [1, 2, 3, 4, 5, 6, 7, 8];
  return (
    <div className="grid grid-cols-4 gap-6">
      {products.map((product) => (
        <div
          key={product}
          className="group relative max-w- mx-5 md:mx-0  rounded overflow-hidden  hover:scale-105 duration-500 bg-gray-100 dark:bg-dark_primary"
        >
          <div className="absolute invisible  top-2/4 left-2 group-hover:visible transition-all ease-in duration-100 z-50">
            <BsFillCartPlusFill
              size={30}
              color={'white'}
              className="mb-3 bg-[#666666] p-1 rounded-sm cursor-pointer"
            />
            <BsFillEyeFill
              size={30}
              color={'white'}
              className="mb-3 bg-[#666666] p-1 rounded-sm cursor-pointer"
            />
          </div>
          <div className="w-full flex justify-center ">
            <div
              style={{
                position: 'relative',
                height: '192px',
                width: '80%',
              }}
            >
              <Image src={img} alt="Sunset in the mountains" layout="fill" />
            </div>
          </div>
          <div className="px-6 py-4">
            <h6 className="text-yellow-500 font-thin dark:text-yellow-500 text-center">
              $ {'20'}
            </h6>
            <div className=" text-sm mb-2 text-center dark:text-dark_text">
              {'name'}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default AllProducts;
