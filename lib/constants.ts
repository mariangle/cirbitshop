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
      title: "Fri Fragt",
      description: "Få dine varer leveret hurtigt og pålideligt til din adresse",
      icon: Truck
    },
    {
      title: "Sikker Betaling",
      description: "Shop trygt og uden bekymringer med vores sikkerhedsgaranti",
      icon: ShieldCheck
    },
    {
      title: "14 dages returret",
      description: "Returnér dit køb inden for 14 dage uden ekstra omkostninger",
      icon: PackageCheck
    }
  ];

export const INFORMATION_FOOTER = {
    title: 'INFORMATION',
    items: [
        {
            label: 'Finansering',
            href: '/'
        },
        {
            label: 'Handselsbetingelser',
            href: '/'
        },
        {
            label: 'Persondatapolitik',
            href: '/'
        },
        {
            label: 'Cookiepolitik',
            href: '/'
        },
        {
            label: 'Returpolitik',
            href: '/'
        },
    ]
}

export const CUSTOMERSERVICE_FOOTER = {
    title: 'KUNDESERVICE',
    items: [
        {
            label: 'Shop',
            href: '/'
        },
        {
            label: 'Kontrakt',
            href: '/'
        },
        {
            label: 'Cart',
            href: '/'
        },
        {
            label: 'Track din ordre',
            href: '/'
        },
        {
            label: 'Store locater',
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
