import { Stat } from "@/constants/dummy";
import { formatNumberWithCommas } from "@/lib/utils";

const StatsCard = ({ stat }: { stat: Stat }) => {
  return (
    <div className="rounded-xl shadow-input">
      <div className="flex items-center justify-between p-4 gap-2">
        <div className="space-y-2">
          <p className="text-xl text-rose-100">
            {formatNumberWithCommas(stat.value)}
          </p>
          <p className="text-sm text-[#717579]">{stat.label}</p>
        </div>
        <div className="w-[36px] aspect-square relative grid place-content-center">
          <img src="/icons/ribbon.svg" alt="" />
          {stat.color && (
            <span
              className="w-4 aspect-square rounded-full border-2 border-white absolute top-0 end-0"
              style={{
                background: stat.color,
              }}
            ></span>
          )}
        </div>
      </div>
      <img src={stat.icon} alt="" className="w-full block mb-5" />
    </div>
  );
};
export default StatsCard;
