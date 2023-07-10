import Link from "next/link";
import { ComponentType } from "react";

interface LinkItem {
  label: string;
  href: string;
}

interface ContactItem {
  label: string;
  icon: React.ComponentType<any>;
}

interface FooterSectionProps {
  data: {
    title: string;
    items: (LinkItem | ContactItem)[];
  };
}

const FooterSection: React.FC<FooterSectionProps> = ({ data }) => {
  return (
    <div className="flex-1">
      <h4 className="font-medium mb-6">{data.title}</h4>
      <ul className="text-sm">
        {data.items.map((item, index) => (
          <li key={index} className="flex gap-3 items-center mb-6 text-gray-500">
            {("href" in item) ? (
              <Link href={item.href} className="hover:underline">
                {item.label}
              </Link>
            ) : (
              <>
                {item.icon && <IconContainer icon={item.icon} />}
                <span className="whitespace-nowrap">{item.label}</span>
              </>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

const IconContainer = ({ icon: IconComponent }: { icon: ComponentType<any> }) => {
  return (
    <div className="border border-gray-500 rounded-full bg-white">
      <div className="p-2">
        <IconComponent size={18} />
      </div>
    </div>
  );
};

export default FooterSection;