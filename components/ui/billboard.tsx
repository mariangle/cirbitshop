import { Billboard } from "@/common.types";
import CirbitLogo from "./cirbit-logo";

interface BillboardProps {
  data: Billboard;
}

const Billboard: React.FC<BillboardProps> = ({
  data
}) => {
  return ( 
    <div className='h-40 md:h-48 border-b grid content-center text-center bg-primary'>
        <div className="flex items-center justify-center">
          <div className="w-32 md:w-36">
            <CirbitLogo 
              color="white"
            />
          </div>
        </div>
    </div>
   );
};

export default Billboard;