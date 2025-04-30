import Container from '@/components/shared/Container';
import Image from 'next/image';

const stores = [
  {
    id: 1,
    name: 'Store 1',
    address: '3030 SW 8th St Miami Miami, Florida 33135 United States',
    hours: [
      {
        day:"Mon",
        hoursAvailable: "09:00AM - 07:00PM"
      },
      {
        day:"Tue",
        hoursAvailable: "09:00AM - 07:00PM"
      },
      {
        day:"Wed",
        hoursAvailable: "09:00AM - 07:00PM"
      },
      {
        day:"Thu",
        hoursAvailable: "09:00AM - 07:00PM"
      },
      {
        day:"Fri",
        hoursAvailable: "09:00AM - 07:00PM"
      },
      {
        day:"Sat",
        hoursAvailable: "10:00AM - 04:00PM"
      },
      {
        day:"Sun",
        hoursAvailable: "10:00AM - 04:00PM"
      }
    ],
    image: '/stores/store1.jpg',
  },
  {
    id: 2,
    name: 'Store 2',
    address: '3030 SW 8th St Miami Miami, Florida 33135 United States',
    hours: [
      {
        day:"Mon",
        hoursAvailable: "09:00AM - 07:00PM"
      },
      {
        day:"Tue",
        hoursAvailable: "09:00AM - 07:00PM"
      },
      {
        day:"Wed",
        hoursAvailable: "09:00AM - 07:00PM"
      },
      {
        day:"Thu",
        hoursAvailable: "09:00AM - 07:00PM"
      },
      {
        day:"Fri",
        hoursAvailable: "09:00AM - 07:00PM"
      },
      {
        day:"Sat",
        hoursAvailable: "10:00AM - 04:00PM"
      },
      {
        day:"Sun",
        hoursAvailable: "10:00AM - 04:00PM"
      }
    ],    image: '/stores/store2.jpg',
  },
  {
    id: 3,
    name: 'Store 3',
    address: '3030 SW 8th St Miami Miami, Florida 33135 United States',
    hours: [
      {
        day:"Mon",
        hoursAvailable: "09:00AM - 07:00PM"
      },
      {
        day:"Tue",
        hoursAvailable: "09:00AM - 07:00PM"
      },
      {
        day:"Wed",
        hoursAvailable: "09:00AM - 07:00PM"
      },
      {
        day:"Thu",
        hoursAvailable: "09:00AM - 07:00PM"
      },
      {
        day:"Fri",
        hoursAvailable: "09:00AM - 07:00PM"
      },
      {
        day:"Sat",
        hoursAvailable: "10:00AM - 04:00PM"
      },
      {
        day:"Sun",
        hoursAvailable: "10:00AM - 04:00PM"
      }
    ],    image: '/stores/store3.jpg',
  },
];

export default function page() {
  return (
    <Container>
      <h1 className="text-2xl font-bold text-center mb-8">Our Stores</h1>
      <div className="space-y-8">
        {stores.map((store) => (
          <div
            key={store.id}
            className="flex flex-col md:flex-row justify-between items-center gap-3 border-2 border-[#F82BA9] rounded-[20px] p-6"
          >
            <div className="">
              <Image
                src={store.image}
                alt={store.name}
                width={300}
                height={200}
                className=""
              />
            </div>
            <div className=' text-[#160E4B] space-y-4'>
            <h2 className="text-[24px]  ">{store.name}</h2>
            <p className="text-[10px] w-[131px]">{store.address}</p>
            </div>
            <div className="">
              <ul className="  list-disc list-inside">
              {store.hours.map((hour, index) => (
                <div key={index} className='text-[#160E4B] text-[10px]'>
                <p className="text-center">
                 {hour.day}
                </p>
                <li  className="text-center">
                  {hour.hoursAvailable}
                </li>
                </div>
              ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </Container>
  );
}
