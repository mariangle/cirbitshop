import { 
    Mail, 
    Phone, 
    Clock, 
    Truck,
    PackageCheck,
    ShieldCheck,
} from "lucide-react"

export const HIGHLIGHTS = [
    {
      title: "Hurtig Levering",
      description: "Få dine varer leveret hurtigt og pålideligt til din adresse",
      icon: Truck
    },
    {
      title: "Sikker Betaling",
      description: "Shop trygt og uden bekymringer med vores sikkerhedsgaranti",
      icon: ShieldCheck
    },
    {
      title: "14 dages Returret",
      description: "Tag dig tid til at tænke over dit køb - du har 14 dage til at ombestemme dig",
      icon: PackageCheck
    }
  ];

export const INFORMATION_FOOTER = {
    title: 'INFORMATION',
    items: [
        {
            label: 'FINANSERING',
            href: '/'
        },
        {
            label: 'HANDELSBETINGELSER',
            href: '/'
        },
        {
            label: 'PERSONDATAPOLITIK',
            href: '/'
        },
        {
            label: 'COOKIEPOLITIK',
            href: '/'
        },
        {
            label: 'RETURPOLITIK',
            href: '/'
        },
    ]
}

export const CUSTOMERSERVICE_FOOTER = {
    title: 'KUNDESERVICE',
    items: [
        {
            label: 'SHOP',
            href: '/'
        },
        {
            label: 'KONTAKT',
            href: '/'
        },
        {
            label: 'CART',
            href: '/'
        },
        {
            label: 'TRACK DIN ORDRE',
            href: '/'
        },
        {
            label: 'STORE LOCATER',
            href: '/'
        },
    ]
}

export const CONTACT_FOOTER = {
    title: 'KONTAKT OS',
    items: [
        {
            label: 'cirbit@eksempel.dk',
            icon: Mail
        },
        {
            label: '+45 80 80 40 42',
            icon: Phone
        },
        {
            label: 'ÅBEN ALLE HVERDAGE',
            icon: Clock 
        }
    ]
}
