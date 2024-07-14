import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import Image from 'next/image';
import React from 'react';
import { IoLocationOutline } from 'react-icons/io5';
import { Button } from '../ui/button';
import { CgReadme } from 'react-icons/cg';
import { Badge } from '../ui/badge';

const EventCard = () => {
  return (
    <div className="relative">
      <div className=" bg-white mt-5 md:mt-5">
        <h1 className="pt-10 px-10">Most Visited Destination</h1>
        <div className="grid grid-cols-1 gap-8 px-20 pt-5 md:grid-cols-3">
          <Card>
            <CardHeader className="relative h-[220px] w-full overflow-hidden rounded-md">
              <div className="object-cover">
                <Image
                  src="/images/prambanan.png"
                  alt="thumbnail"
                  width={600}
                  height={100}
                />
              </div>
            </CardHeader>
            <CardContent>
              <div className="text-left font-bold text-lg pb-2 pt-3">
                <h3>Prambanan Jazz</h3>
              </div>
              <div className="inline-flex gap-2">
                <IoLocationOutline size={20} />
                <h2 className="text-black pb-3">Yogyakarta</h2>
              </div>
              <hr />
            </CardContent>
            <CardDescription>
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
            </CardDescription>
            <CardFooter>
              <div className="pt-3 text-justify">
                <h3 className="pb-6">
                  The Prambanan Jazz Festival is more than just a musical event.
                  It is a celebration of art, history, and community. It draws
                  jazz enthusiasts, culture lovers, and travelers from around
                  the world, all eager to witness the harmonious blend of music
                  and history. Whether you're a jazz aficionado or simply
                  looking for a unique cultural experience, the Prambanan Jazz
                  Festival promises an enchanting evening under the stars,
                  surrounded by the ancient splendor of one of Indonesia's most
                  iconic landmarks.
                </h3>
                <Button className="bg-orange-400 text-black font-bold rounded-full">
                  Details
                </Button>
              </div>
            </CardFooter>
          </Card>
          <Card>
            <CardHeader className="relative h-[220px] w-full overflow-hidden rounded-md">
              <div className="object-cover">
                <Image
                  src="/images/wtf.jpg"
                  alt="thumbnail"
                  width={600}
                  height={100}
                />
              </div>
            </CardHeader>
            <CardContent>
              <div className="text-left font-bold text-lg pb-2 pt-3">
                <h3>We The Fest</h3>
              </div>
              <div className="inline-flex gap-2">
                <IoLocationOutline size={20} />
                <h2 className="text-black pb-3">Jakarta</h2>
              </div>
              <hr />
            </CardContent>
            <CardDescription>
              <div className="flex justify-between px-6 pb-3">
                <Badge
                  variant="outline"
                  className="rounded-lg bg-[#4CCD99] text-sm text-black font-bold"
                >
                  Music
                </Badge>
                <h2 className="text-black text-2xl font-bold">550 K</h2>
              </div>
              <hr />
            </CardDescription>
            <CardFooter>
              <div className="pt-3 text-justify">
                <h3 className="pb-6">
                  We The Fest is a vibrant summer festival that celebrates
                  music, arts, fashion, and food, creating a dynamic and
                  unforgettable experience for all attendees. Held annually,
                  this multi-day extravaganza transforms its venue into a lively
                  playground of creativity and entertainment. We The Fest is not
                  just a festival. It's a celebration of everything that makes
                  summer magical. Whether you're there to dance to your favorite
                  tunes, admire cutting-edge art, discover new fashion trends,
                  or indulge in delicious food.
                </h3>
                <Button className="bg-orange-400 text-black font-bold rounded-full">
                  Details
                </Button>
              </div>
            </CardFooter>
          </Card>
          <Card>
            <CardHeader className="relative h-[220px] w-full overflow-hidden rounded-md">
              <div className="object-cover">
                <Image
                  src="/images/konser.jpg"
                  alt="thumbnail"
                  width={600}
                  height={100}
                />
              </div>
            </CardHeader>
            <CardContent>
              <div className="text-left font-bold text-lg pb-2 pt-3">
                <h3>Bandung Summer Festival</h3>
              </div>
              <div className="inline-flex gap-2">
                <IoLocationOutline size={20} />
                <h2 className="text-black pb-3">Bandung</h2>
              </div>
              <hr />
            </CardContent>
            <CardDescription>
              <div className="flex justify-between px-6 pb-3">
                <Badge
                  variant="outline"
                  className="rounded-lg bg-[#4CCD99] text-sm text-black font-bold"
                >
                  Music
                </Badge>
                <h2 className="text-black text-2xl font-bold">200 K</h2>
              </div>
              <hr />
            </CardDescription>
            <CardFooter>
              <div className="pt-3 text-justify">
                <h3 className="pb-6">
                  The Bandung Summer Festival is a lively and exhilarating
                  celebration of music set in the vibrant city of Bandung,
                  Indonesia. This annual event is a must-attend for music
                  enthusiasts, offering a diverse and exciting lineup of
                  performances that capture the spirit of summer. The Bandung
                  Summer Festival is the ultimate summer destination for music
                  lovers. With its diverse lineup, vibrant atmosphere, and wide
                  range of activities, it offers a unique and unforgettable
                  experience. Whether you're there to dance the night away,
                  explore new sounds, or simply enjoy the festive spirit.
                </h3>
                <Button className="bg-orange-400 text-black font-bold rounded-full">
                  Details
                </Button>
              </div>
            </CardFooter>
          </Card>
          <Card>
            <CardHeader className="relative h-[220px] w-full overflow-hidden rounded-md">
              <div className="object-cover">
                <Image
                  src="/images/f1.jpg"
                  alt="thumbnail"
                  width={600}
                  height={100}
                />
              </div>
            </CardHeader>
            <CardContent>
              <div className="text-left font-bold text-lg pb-2 pt-3">
                <h3>F1 Mandalika Indonesia</h3>
              </div>
              <div className="inline-flex gap-2">
                <IoLocationOutline size={20} />
                <h2 className="text-black pb-3">Mandalika</h2>
              </div>
              <hr />
            </CardContent>
            <CardDescription>
              <div className="flex justify-between px-6 pb-3">
                <Badge
                  variant="outline"
                  className="rounded-lg bg-[#4CCD99] text-sm text-black font-bold"
                >
                  Sport
                </Badge>
                <h2 className="text-black text-2xl font-bold">325 K</h2>
              </div>
              <hr />
            </CardDescription>
            <CardFooter>
              <div className="pt-3 text-justify">
                <h3 className="pb-6">
                  The F1 Mandalika Grand Prix is an exhilarating addition to the
                  Formula 1 calendar, taking place on the picturesque Mandalika
                  International Street Circuit in Indonesia. This prestigious
                  event not only showcases the pinnacle of motorsport but also
                  highlights the natural beauty and cultural richness of
                  Indonesia. The F1 Mandalika Grand Prix is set to become a
                  highlight of the Formula 1 season, offering an unparalleled
                  blend of high-octane racing, cultural immersion, and natural
                  beauty. The Mandalika Grand Prix an extraordinary experience
                  that captures the excitement of Formula 1 and the charm of
                  Indonesia.
                </h3>
                <Button className="bg-orange-400 text-black font-bold rounded-full">
                  Details
                </Button>
              </div>
            </CardFooter>
          </Card>
          <Card>
            <CardHeader className="relative h-[220px] w-full overflow-hidden rounded-md">
              <div className="object-cover">
                <Image
                  src="/images/scr.jpg"
                  alt="thumbnail"
                  width={600}
                  height={100}
                />
              </div>
            </CardHeader>
            <CardContent>
              <div className="text-left font-bold text-lg pb-2 pt-3">
                <h3>Semarang Run Colors</h3>
              </div>
              <div className="inline-flex gap-2">
                <IoLocationOutline size={20} />
                <h2 className="text-black pb-3">Sport</h2>
              </div>
              <hr />
            </CardContent>
            <CardDescription>
              <div className="flex justify-between px-6 pb-3">
                <Badge
                  variant="outline"
                  className="rounded-lg bg-[#4CCD99] text-sm text-black font-bold"
                >
                  Sport
                </Badge>
                <h2 className="text-black text-2xl font-bold">100 K</h2>
              </div>
              <hr />
            </CardDescription>
            <CardFooter>
              <div className="pt-3 text-justify">
                <h3 className="pb-6">
                  The Semarang Run Colors is a vibrant and energetic event that
                  combines the thrill of a fun run with a burst of colorful
                  festivities, creating a unique and joyful experience for
                  participants of all ages. Held annually in the bustling city
                  of Semarang, Indonesia, this event is a celebration of health,
                  happiness, and community spirit. Semarang Run Colors is a
                  must-attend event that combines the joy of running with the
                  exhilaration of a color festival. It's a day of fun, fitness,
                  and friendship, where participants come together to celebrate
                  life in all its vibrant colors.
                </h3>
                <Button className="bg-orange-400 text-black font-bold rounded-full">
                  Details
                </Button>
              </div>
            </CardFooter>
          </Card>
          <Card>
            <CardHeader className="relative h-[220px] w-full overflow-hidden rounded-md">
              <div className="object-cover">
                <Image
                  src="/images/football.jpg"
                  alt="thumbnail"
                  width={600}
                  height={100}
                />
              </div>
            </CardHeader>
            <CardContent>
              <div className="text-left font-bold text-lg pb-2 pt-3">
                <h3>Indonesia vs Singapore</h3>
              </div>
              <div className="inline-flex gap-2">
                <IoLocationOutline size={20} />
                <h2 className="text-black pb-3">Jakarta</h2>
              </div>
              <hr />
            </CardContent>
            <CardDescription>
              <div className="flex justify-between px-6 pb-3">
                <Badge
                  variant="outline"
                  className="rounded-lg bg-[#4CCD99] text-sm text-black font-bold"
                >
                  Sport
                </Badge>
                <h2 className="text-black text-2xl font-bold">150 K</h2>
              </div>
              <hr />
            </CardDescription>
            <CardFooter>
              <div className="pt-3 text-justify">
                <h3 className="pb-6">
                  The Indonesia vs. Singapore football match is a highly
                  anticipated encounter that showcases the intense rivalry and
                  rich football traditions of both nations. These matches,
                  whether part of a regional tournament, friendly fixture, or
                  World Cup qualifier, draw passionate fans and promise
                  thrilling, high-stakes action on the field. The Indonesia vs.
                  Singapore football match is more than just a game; it's a
                  celebration of regional football excellence, passionate fan
                  culture, and the enduring rivalry between two proud nations.
                  For fans, players, and coaches alike, an Indonesia vs.
                  Singapore match is an event to be eagerly anticipated and
                  cherished.
                </h3>
                <Button className="bg-orange-400 text-black font-bold rounded-full">
                  Details
                </Button>
              </div>
            </CardFooter>
          </Card>
          <Card>
            <CardHeader className="relative h-[220px] w-full overflow-hidden rounded-md">
              <div className="object-cover">
                <Image
                  src="/images/nusa.png"
                  alt="thumbnail"
                  width={600}
                  height={100}
                />
              </div>
            </CardHeader>
            <CardContent>
              <div className="text-left font-bold text-lg pb-2 pt-3">
                <h3>Nusa Penida Trip</h3>
              </div>
              <div className="inline-flex gap-2">
                <IoLocationOutline size={20} />
                <h2 className="text-black pb-3">Bali</h2>
              </div>
              <hr />
            </CardContent>
            <CardDescription>
              <div className="flex justify-between px-6 pb-3">
                <Badge
                  variant="outline"
                  className="rounded-lg bg-[#4CCD99] text-sm text-black font-bold"
                >
                  Holiday
                </Badge>
                <h2 className="text-black text-2xl font-bold">750 K</h2>
              </div>
              <hr />
            </CardDescription>
            <CardFooter>
              <div className="pt-3 text-justify">
                <h3 className="pb-6">
                  A trip to Nusa Penida, Bali, offers an unforgettable adventure
                  filled with stunning landscapes, crystal-clear waters, and
                  vibrant marine life. This picturesque island, located
                  southeast of Bali, is a paradise for nature lovers, adventure
                  seekers, and anyone looking to experience the unspoiled beauty
                  of Indonesia. A trip to Nusa Penida is a journey into the
                  heart of natural beauty and tranquility. With its stunning
                  landscapes, vibrant marine life, and endless opportunities for
                  adventure, Nusa Penida is a must-visit destination for anyone
                  traveling to Bali.
                </h3>
                <Button className="bg-orange-400 text-black font-bold rounded-full">
                  Details
                </Button>
              </div>
            </CardFooter>
          </Card>
          <Card>
            <CardHeader className="relative h-[220px] w-full overflow-hidden rounded-md">
              <div className="object-cover">
                <Image
                  src="/images/bromo.png"
                  alt="thumbnail"
                  width={600}
                  height={100}
                />
              </div>
            </CardHeader>
            <CardContent>
              <div className="text-left font-bold text-lg pb-2 pt-3">
                <h3>Bromo Mountain Private Tour</h3>
              </div>
              <div className="inline-flex gap-2">
                <IoLocationOutline size={20} />
                <h2 className="text-black pb-3">Malang</h2>
              </div>
              <hr />
            </CardContent>
            <CardDescription>
              <div className="flex justify-between px-6 pb-3">
                <Badge
                  variant="outline"
                  className="rounded-lg bg-[#4CCD99] text-sm text-black font-bold"
                >
                  Holiday
                </Badge>
                <h2 className="text-black text-2xl font-bold">500 K</h2>
              </div>
              <hr />
            </CardDescription>
            <CardFooter>
              <div className="pt-3 text-justify">
                <h3 className="pb-6">
                  A private tour of Mount Bromo offers an exclusive and
                  personalized adventure to one of Indonesia’s most iconic and
                  breathtaking natural wonders. Located in East Java, Mount
                  Bromo is part of the Bromo Tengger Semeru National Park and is
                  renowned for its stunning landscapes, active volcano, and the
                  mesmerizing views at sunrise. A private tour ensures a
                  tailored experience, allowing you to explore this magnificent
                  destination at your own pace and comfort. 
                </h3>
                <Button className="bg-orange-400 text-black font-bold rounded-full">
                  Details
                </Button>
              </div>
            </CardFooter>
          </Card>
          <Card>
            <CardHeader className="relative h-[220px] w-full overflow-hidden rounded-md">
              <div className="object-cover">
                <Image
                  src="/images/diving.png"
                  alt="thumbnail"
                  width={600}
                  height={100}
                />
              </div>
            </CardHeader>
            <CardContent>
              <div className="text-left font-bold text-lg pb-2 pt-3">
                <h3>Diving Karimun Jawa</h3>
              </div>
              <div className="inline-flex gap-2">
                <IoLocationOutline size={20} />
                <h2 className="text-black pb-3">Jepara</h2>
              </div>
              <hr />
            </CardContent>
            <CardDescription>
              <div className="flex justify-between px-6 pb-3">
                <Badge
                  variant="outline"
                  className="rounded-lg bg-[#4CCD99] text-sm text-black font-bold"
                >
                  Holiday
                </Badge>
                <h2 className="text-black text-2xl font-bold">1.450 K</h2>
              </div>
              <hr />
            </CardDescription>
            <CardFooter>
              <div className="pt-3 text-justify">
                <h3 className="pb-6">
                  Dive into the crystal-clear waters of Karimunjawa, where
                  vibrant coral reefs and diverse marine life await. As you
                  snorkel, you'll be surrounded by schools of colorful fish,
                  stunning coral formations, and the serene beauty of untouched
                  nature. With warm waters and excellent visibility, this
                  idyllic archipelago offers the perfect setting for both
                  beginners and experienced snorkelers. Explore secluded spots
                  like Menjangan Kecil and the captivating reef near the main
                  island, where you can encounter everything from clownfish to
                  majestic sea turtles. 
                </h3>
                <Button className="bg-orange-400 text-black font-bold rounded-full">
                  Details
                </Button>
              </div>
            </CardFooter>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default EventCard;
