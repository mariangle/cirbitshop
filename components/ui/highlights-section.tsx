import { HIGHLIGHTS } from "@/lib/constants";
import { LucideIcon } from "lucide-react";

const HighlightsSection = () => {
  return (
    <div className="bg-grey-light py-6 mb-4">
      <div className="mx-auto max-w-screen-md">
        <div className='grid grid-cols-1 md:grid-cols-3 gap-4 my-8'>
          {HIGHLIGHTS.map((highlight, index) => (
              <Highlight data={highlight} key={index} />
          ))}
        </div>
      </div>
    </div>
  )
}

interface HighlightProps {
    data: {
      title: string;
      description: string;
      icon: LucideIcon;
    };
  }
  
const Highlight: React.FC<HighlightProps> = ({ 
    data 
}) => {
  const { title, description, icon: IconComponent } = data;

  return (
    <div>
      <div className="flex items-center justify-center">
        <div className="p-1.5 rounded-full border-gray-500 border-2 ">
          <IconComponent size={20} className="text-gray-600"/>
        </div>
      </div>
      <div className="text-center">
        <h4 className="font-bold my-2 text-gray-800">{title}</h4>
        <p className="text-gray-600 leading-tight">{description}</p>
      </div>
    </div>
  );
}

export default HighlightsSection;