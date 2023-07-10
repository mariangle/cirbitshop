import NoResults from "@/components/ui/no-results";
import VariantCard from "./variant-card";

import { Variant } from "@/common.types";

interface VariantListProps {
  title: string;
  items: Variant[]
}

const VariantList: React.FC<VariantListProps> = ({
  title,
  items
}) => {
  
  const slicedItems = items.slice(0, 4);

  return (
    <div className="space-y-4">
      <h3 className="font-bold text-xl">{title}</h3>
      {slicedItems.length === 0 && <NoResults />}
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
        {slicedItems.map((variant) => (
            <VariantCard variant={variant} key={variant.id}/>
        ))}
      </div>
    </div>
   );
}
 
export default VariantList;