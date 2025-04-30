import Image from "next/image"
import { FC } from "react"
import Container from "../shared/Container"

interface IProps {

}
const Trustedby: FC<IProps> = () => {
  return (
    <Container className="bg-[#FEEDF7] rounded-3xl mt-20  ">
      <p className="text-[#160E4B] font-bold text-3xl text-center ">Trusted by over <span className="text-[#F82BA9]">4.5k+ </span>companies
      </p>
      <div className="w-full grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 py-5">
      <Image
          src={"/home/comp6.svg"}
          alt=""
          width={146}
          height={51}
        />
        <Image
          src={"/home/comp1.svg"}
          alt=""
          width={146}
          height={51}
        />
        <Image
          src={"/home/comp2.svg"}
          alt=""
          width={146}
          height={51}
        />
        <Image
          src={"/home/comp3.svg"}
          alt=""
          width={146}
          height={51}
        />
        <Image
          src={"/home/comp4.svg"}
          alt=""
          width={146}
          height={51}
        />
        <Image
          src={"/home/comp5.svg"}
          alt=""
          width={146}
          height={51}
        />
      </div>
    </Container>
  )
}

export default Trustedby
