import Link from "next/link";
import Image from "next/image";
import Search from "./Search";

const DashboardHeader = () => {
  return (
    <header className="h-[104px]">
      <div className="flex items-center justify-between p-4 mx-auto">
        <Link href="/">
          <Image src="/logo.svg" alt="" width={70} height={70} />
        </Link>

        <div className="md:block hidden">
          <Search />
        </div>

        <Image
          src="/dash/avatar-14.png"
          alt=""
          width={70}
          height={70}
          className="object-cover rounded-full object-center"
        />
      </div>
    </header>
  );
};
export default DashboardHeader;
