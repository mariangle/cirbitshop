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
  return (
    <div className="space-y-4">
      <h3 className="font-bold text-3xl">{title}</h3>
      {items.length === 0 && <NoResults />}
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {items.map((variant) => (
            <VariantCard variant={variant}/>
        ))}
      </div>
    </div>
   );
}
 
export default VariantList;