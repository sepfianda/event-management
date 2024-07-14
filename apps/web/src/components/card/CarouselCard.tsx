import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import Image from 'next/image';
import { IoLocationOutline } from 'react-icons/io5';
import { Badge } from '../ui/badge';
import { Button } from '../ui/button';

const CarouselCard = () => {
  return (
    <div>
      <Carousel>
        <CarouselContent className="mx-10 gap-5 border ">
          <CarouselItem className="md:basis-1/2 lg:basis-1/3 ">
          <div className='container border-black'>
            <div className="object-cover">
              <Image
                src="/images/hero.jpg"
                alt="thumbnail"
                width={600}
                height={100}
              />
            </div>
            <div className="text-left font-bold text-lg pb-2 pt-3">
              <h3>Prambanan Jazz</h3>
            </div>
            <div className="inline-flex gap-2">
              <IoLocationOutline size={20} />
              <h2 className="text-black pb-3">Yogyakarta</h2>
            </div>
            <hr />
            <div className="flex justify-between px-6 pb-3">
              <Badge
                variant="outline"
                className="rounded-lg bg-[#4CCD99] text-sm text-black font-bold"
              >
                Music
              </Badge>
              <h2 className="text-black text-2xl font-bold">500 K</h2>
            </div>
            <hr />
            <div className="pt-3 text-justify">
              <h3 className="pb-6">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum
                doloribus quo odit fugiat cumque dolorem officia, doloremque
                nesciunt quos nam, asperiores dolores dignissimos id, tempore
                animi velit sunt est accusamus?
              </h3>
              <Button className="bg-orange-400 text-black font-bold rounded-full">
                Details
              </Button>
            </div>
            </div>
          </CarouselItem>
        </CarouselContent>
      </Carousel>
    </div>
  );
};

export default CarouselCard;
