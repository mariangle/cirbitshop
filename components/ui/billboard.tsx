import { Billboard } from "@/common.types";

interface BillboardProps {
  data: Billboard;
}

const Billboard: React.FC<BillboardProps> = ({
  data
}) => {
  return ( 
    <div className="overflow-hidden max-w-screen-xl mx-auto">
      <div style={{ backgroundImage: `url(${data?.imageUrl})` }} className="relative aspect-square md:aspect-[2.4/1] overflow-hidden bg-cover">
        <div className="h-full w-full flex flex-col justify-center items-center text-center gap-y-8">
          <div className="font-bold text-3xl sm:text-5xl lg:text-6xl sm:max-w-xl max-w-xs text-white">
            {data?.label}
          </div>
        </div>
      </div>
    </div>
   );
};

export default Billboard;