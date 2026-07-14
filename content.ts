import type { SiteContent } from './app/types/SiteContent'

/**
 * Mock SiteContent — cabinet dentaire FR réaliste pour le playground / preview.
 * Simule ce que produirait enrichissement + build_site_content pour un prospect dentiste.
 */
export const mockSiteContent: SiteContent = {
  businessName: 'Cabinet Dentaire Dupont',
  subtitle: 'Soins dentaires pour toute la famille à Lyon — prévention, esthétique et urgences.',
  phone: '04 78 60 12 45',
  email: 'accueil@cabinet-dupont-lyon.fr',
  city: 'Lyon',
  area: 'Lyon 3e et Villeurbanne',
  about:
    'Le Cabinet Dentaire Dupont accompagne les familles lyonnaises depuis plus de vingt ans. Nous combinons écoute, technologies modernes et un parcours de soins clair pour préserver votre sourire au quotidien.',
  heroBadge: 'CABINET DENTAIRE DUPONT',
  heroPoints: ['Prévention & hygiène', 'Accueil bienveillant', 'Technologies modernes'],
  ctaCallLabel: 'Prendre rendez-vous',
  ctaQuoteLabel: 'Nos soins',
  trustItems: [
    { value: '20+', label: "Années d'expérience" },
    { value: '2500+', label: 'Patients suivis' },
    { value: '5', label: 'Praticiens' },
  ],
  servicesHeading: 'Nos soins dentaires',
  galleryHeading: 'Des sourires pour tous les âges',
  reviewsHeading: 'Votre équipe soignante',
  aboutHeading: 'Votre sourire, notre fierté',
  contactHeading: 'Prendre rendez-vous',
  heroImage:
    'https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&w=1400&q=80',
  aboutImage:
    'https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&w=1200&q=80',
  gallery: [
    {
      url: 'https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=800&q=80',
      alt: 'Famille en consultation',
    },
    {
      url: 'https://images.unsplash.com/photo-1609840114035-3c981b782dfe?auto=format&fit=crop&w=800&q=80',
      alt: 'Patient souriant',
    },
    {
      url: 'https://images.unsplash.com/photo-1598256989800-fe5f95da9787?auto=format&fit=crop&w=800&q=80',
      alt: 'Soin au fauteuil',
    },
    {
      url: 'https://images.unsplash.com/photo-1629909615184-74f495363b67?auto=format&fit=crop&w=800&q=80',
      alt: 'Équipe dentaire',
    },
  ],
  palette: {
    primary: '#b1040e',
    secondary: '#2e333e',
    accent: '#80060d',
  },
  services: [
    {
      title: 'Dentisterie générale',
      description:
        'Contrôles, détartrage, soins cariés et suivi préventif pour toute la famille, du plus jeune au plus âgé.',
    },
    {
      title: 'Esthétique du sourire',
      description:
        'Blanchiment, facettes, couronnes et aligners : des résultats naturels pour sourire en confiance.',
    },
    {
      title: 'Urgences dentaires',
      description:
        'Douleur, dent cassée ou abcès : contactez-nous rapidement, nous organisons un créneau prioritaire.',
    },
  ],
  reviews: [
    {
      author: 'Dr Sophie Dupont',
      rating: 5,
      text: 'Chirurgien-dentiste, spécialisée en soins familiaux et prévention.',
    },
    {
      author: 'Dr Marc Lefèvre',
      rating: 5,
      text: 'Omnipraticien, passionné par la dentisterie esthétique et les implants.',
    },
    {
      author: 'Dr Amina Benali',
      rating: 5,
      text: 'Spécialiste des soins pédiatriques et de l’accompagnement des plus jeunes.',
    },
  ],
  openingHours: [{ day: 'Lun–Ven', hours: '08:30 – 19:00' }],
  zones: ['Lyon 3e', 'Villeurbanne', 'Bron', 'Vaulx-en-Velin'],
  social: [
    { network: 'Facebook', url: 'https://facebook.com' },
    { network: 'Instagram', url: 'https://instagram.com' },
  ],
}
