import Container from "@/components/ui/container";

import { HIGHLIGHTS } from "@/lib/constants";
import { LucideIcon } from "lucide-react";

const HighlightsSection = () => {
  return (
    <div className="bg-grey-light py-8 mb-8">
      <Container>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-4 my-8'>
          {HIGHLIGHTS.map((highlight, index) => (
              <Highlight data={highlight} key={index} />
          ))}
        </div>
      </Container>
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
    <div className='flex items-center gap-4'>
      <div className="p-1.5 rounded-full border-gray-300 border-2">
          <IconComponent size={20} className="text-gray-400"/>
      </div>
      <div>
        <h4 className="font-bold mb-1 text-gray-700">{title}</h4>
        <p className="text-gray-500 leading-tight">{description}</p>
      </div>
    </div>
  );
}

export default HighlightsSection;