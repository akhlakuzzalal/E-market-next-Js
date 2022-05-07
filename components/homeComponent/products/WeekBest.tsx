import Image from 'next/image';
import img from '../../../public/images/catagories/e4.jpg';

const WeekBest = () => {
  return (
    <div className="bg-[#f5efe3] shadow-xl rounded-lg px-3 py-6 space-y-6">
      <div
        className="flex justify-center items-center rounded-2xl"
        style={{
          position: 'relative',
          height: '300px',
          width: '100%',
        }}
      >
        <Image className="rounded-2xl" src={img} alt="product" layout="fill" />
      </div>
      <h3>Product Name</h3>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima libero
        suscipit veniam possimus provident voluptatum recusandae, aliquam
        tempora harum mollitia?
      </p>
      <div className="flex items-center justify-between">
        <button className="text-white bg-primary hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center">
          Add to cart
        </button>
        <button className="text-white bg-primary hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center">
          View Details
        </button>
      </div>
    </div>
  );
};

export default WeekBest;
