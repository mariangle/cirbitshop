import Link from "next/link";

interface LinkItem {
    label: string;
    href: string;
}
  
interface ContactItem {
    label: string;
    icon: React.ElementType;
}

interface FooterSectionProps {
    data: {
      title: string;
      items: LinkItem[] | ContactItem[];
    };
}

const FooterSection: React.FC<FooterSectionProps> = ({ data }) => {
    return (
      <div className="flex-1">
        <h4 className="font-medium mb-6">
            {data.title}
        </h4>
        <ul className="text-sm">
          {data.items.map((link) => (
            <li key={link.label} className="flex gap-2 items-center mb-4">
              {('href' in link) ? (
                <Link 
                    href={link.href} 
                    className="hover:underline">
                    {link.label}
                </Link>
              ) : (
                <>
                  {link.icon && <link.icon />}
                  {link.label}
                </>
              )}
            </li>
          ))}
        </ul>
      </div>
    );
  };
  
  export default FooterSection;