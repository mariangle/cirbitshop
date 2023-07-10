import { HIGHLIGHTS } from "@/lib/constants";
import { LucideIcon } from "lucide-react";

const HighlightsSection = () => {
  return (
    <div className="bg-grey-light py-6 mb-4 border-y">
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
    <div className="p-2">
      <div className="flex items-center justify-center">
        <div className="p-1.5 rounded-full border-primary border-2 bg-white">
          <IconComponent size={20} className="text-primary"/>
        </div>
      </div>
      <div className="text-center">
        <h4 className="font-bold my-2 text-gray-800">{title}</h4>
        <p className="text-gray-600 text-sm leading-tight">{description}</p>
      </div>
    </div>
  );
}

export default HighlightsSection;