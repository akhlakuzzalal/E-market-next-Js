import Image from 'next/image';
import offer from '../../public/images/offer.png';

const BigOffers = () => {
  return (
    <div className="my-20">
      <div style={{ width: '100%', height: '280px', position: 'relative' }}>
        <Image className="h-fit" src={offer} alt="offer" layout="fill" />
      </div>
    </div>
  );
};

export default BigOffers;
