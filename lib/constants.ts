import { Mail, Phone, Clock } from "lucide-react"

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
