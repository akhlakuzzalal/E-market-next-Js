import Image from 'next/image';
import { useState } from 'react';
import img2 from '../../public/images/product2.png';
import img3 from '../../public/images/product3.png';
import img1 from '../../public/images/products1.png';
const Banner = () => {
  const [img, setImg] = useState(img1);
  const changeImage = () => {
    if (img === img1) {
      setImg(img2);
    } else if (img === img2) {
      setImg(img3);
    } else if (img === img3) {
      setImg(img1);
    }
  };
  setTimeout(() => {
    changeImage();
  }, 3000);
  return (
    <div className="h-[65vh] banner grid grid-cols-2">
      <div className="space-y-3 flex flex-col justify-center ml-10">
        <h1 className="flex items-end">
          <span className="text-rose-500 text-8xl">A</span>
          <div className="waviy">
            <span style={{ '--i': '1' }}>c</span>
            <span style={{ '--i': '2' }}>c</span>
            <span style={{ '--i': '3' }}>e</span>
            <span style={{ '--i': '4' }}>s</span>
            <span style={{ '--i': '5' }}>s</span>
            <span style={{ '--i': '6' }}>o</span>
            <span style={{ '--i': '7' }}>r</span>
            <span style={{ '--i': '8' }}>i</span>
            <span style={{ '--i': '9' }}>e</span>
            <span style={{ '--i': '10' }}>s</span>
          </div>
        </h1>
        <h6>A smart marketing system.</h6>
        <h6>
          We Provide <span className="text-rose-500 text-3xl">100%</span> pure
          products and home delevary
        </h6>
        <div>
          <button className="btn hover:scale-125 duration-300">
            Explore More
          </button>
        </div>
      </div>
      <div className="flex h-full items-center justify-center">
        <Image src={img} alt="product" width={'550px'} height="400px" />
      </div>
    </div>
  );
};

export default Banner;
