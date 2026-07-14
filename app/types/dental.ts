/**
 * Types + construction du contenu de la template `dental`.
 *
 * Copie éditoriale FR (cible France). Clés SiteContent vides → fallback template.
 * Pas de lorem / pas de logos d’assurance factices / réseaux sociaux seulement si fournis.
 */
import type { SiteContent } from './SiteContent'

export interface DentalTheme {
  primary: string
  secondary: string
  accent: string
}

export const dentalDefaultTheme: DentalTheme = {
  primary: '#b1040e',
  secondary: '#2e333e',
  accent: '#80060d',
}

export interface DentalFeatureItem {
  icon: string
  title: string
  text: string
}

export interface DentalStatItem {
  value: string
  label: string
  inkDark: boolean
}

export interface DentalGalleryImage {
  src: string
  offset: 'low' | 'high' | 'mid'
}

export interface DentalServiceCard {
  title: string
  image: string
  description: string
  pills: string[]
}

export interface DentalAboutRow {
  eyebrow: string
  heading: string
  paragraphs: string[]
  cta: string
  ctaHref: string
  image: string
  imageFirst: boolean
}

export interface DentalTeamMember {
  name: string
  role: string
  bio: string
  image: string
}

export interface DentalContactItem {
  title: string
  description: string
  value: string
  href: string
  icon: string
}

export interface DentalSocialLink {
  label: string
  src: string
  href: string
}

export interface DentalPageContent {
  theme: DentalTheme
  businessName: string
  tagline: string
  phone: string
  phoneDisplay: string
  email: string
  address: string
  hours: string
  copyright: string
  social: DentalSocialLink[]
  hero: {
    eyebrow: string
    heading: string
    subheading: string
    ctaPrimary: string
    ctaSecondary: string
    image: string
    squiggle: string
    features: DentalFeatureItem[]
  }
  featured: {
    eyebrow: string
    heading: string
    body: string
    line: string
    images: DentalGalleryImage[]
    stats: DentalStatItem[]
  }
  services: {
    eyebrow: string
    heading: string
    body: string
    cards: DentalServiceCard[]
  }
  aboutRows: DentalAboutRow[]
  team: {
    eyebrow: string
    heading: string
    body: string
    members: DentalTeamMember[]
  }
  brand: {
    heading: string
    logos: string[]
  }
  cta: {
    heading: string
    subheading: string
    mailtoEmail: string
    contacts: DentalContactItem[]
    form: {
      nameLabel: string
      namePlaceholder: string
      emailLabel: string
      emailPlaceholder: string
      phoneLabel: string
      phonePlaceholder: string
      serviceLabel: string
      servicePlaceholder: string
      messageLabel: string
      messagePlaceholder: string
      submit: string
      subject: string
    }
  }
}

const FEATURE_ICONS = ['/exports/DqRcy.png', '/exports/dCWWe.png', '/exports/wNoa7.png'] as const
const GALLERY_OFFSETS: Array<'low' | 'high' | 'mid'> = ['low', 'high', 'mid', 'high']
const SERVICE_FALLBACK_IMAGES = [
  '/images/image-import-11.jpg',
  '/images/image-import-18.jpg',
  '/images/image-import-15.jpg',
] as const

const SOCIAL_ICON_BY_NETWORK: Record<string, string> = {
  facebook: '/exports/H9JZK.png',
  twitter: '/exports/c52F3x.png',
  x: '/exports/c52F3x.png',
  instagram: '/exports/zPb6s.png',
  linkedin: '/exports/ToOF0.png',
  youtube: '/exports/bS49m.png',
}

const defaults = {
  tagline: 'Dentisterie et orthodontie',
  heroHeading: 'Des dentistes de proximité qui aiment vous faire sourire.',
  heroSubheading: 'Découvrez une prise en charge dentaire attentive et moderne.',
  heroBadge: 'CABINET DENTAIRE',
  ctaPrimary: 'Prendre rendez-vous',
  ctaSecondary: 'Voir nos soins',
  heroImage: '/images/image-import-7.png',
  features: [
    {
      icon: '/exports/DqRcy.png',
      title: 'Prévention',
      text: 'Contrôles réguliers, conseils d’hygiène et suivi personnalisé pour éviter les soins lourds.',
    },
    {
      icon: '/exports/dCWWe.png',
      title: 'Accueil bienveillant',
      text: 'Une équipe à l’écoute, des explications claires et un rythme adapté à chaque patient.',
    },
    {
      icon: '/exports/wNoa7.png',
      title: 'Technologies modernes',
      text: 'Matériel à jour pour des diagnostics précis et des soins plus confortables.',
    },
  ] as DentalFeatureItem[],
  featuredHeading: 'Des sourires pour tous les âges',
  featuredBody:
    'Cabinet familial de confiance : transparence, efficacité et une communication claire à chaque étape du parcours de soins.',
  featuredImages: [
    { src: '/images/image-import-1.jpg', offset: 'low' as const },
    { src: '/images/image-import-19.jpg', offset: 'high' as const },
    { src: '/images/image-import-1.png', offset: 'mid' as const },
    { src: '/images/image-import-9.jpg', offset: 'high' as const },
  ],
  stats: [
    { value: '20', label: "Ans d'expérience", inkDark: true },
    { value: '2000', label: 'Patients suivis', inkDark: false },
    { value: '5', label: 'Praticiens', inkDark: false },
  ] as DentalStatItem[],
  servicesEyebrow: 'NOS SOINS',
  servicesHeading: 'Des soins dentaires de qualité',
  servicesBody:
    'Nous accompagnons petits et grands pour des dents et des gencives saines, tout au long de la vie.',
  serviceCards: [
    {
      title: 'Dentisterie générale',
      image: '/images/image-import-11.jpg',
      description: 'Contrôles, détartrage, soins cariés et suivi préventif pour toute la famille.',
      pills: [
        'Obturations',
        'Détartrage & contrôle',
        'Soins enfants',
        'Parodontologie',
        'Traitement de canal',
        'Dents de sagesse',
        'Gouttières',
      ],
    },
    {
      title: 'Esthétique du sourire',
      image: '/images/image-import-18.jpg',
      description:
        'Blanchiment, facettes, couronnes et aligneurs : des résultats naturels pour sourire en confiance.',
      pills: ['Blanchiment', 'Couronnes', 'Facettes', 'Implants', 'Aligneurs'],
    },
    {
      title: 'Urgences dentaires',
      image: '/images/image-import-15.jpg',
      description:
        'Douleur, dent cassée ou abcès : contactez-nous rapidement, nous organisons un créneau prioritaire.',
      pills: ['Douleurs sévères', 'Saignements', 'Dent cassée', 'Traumatismes'],
    },
  ] as DentalServiceCard[],
  aboutHeading: 'Votre sourire, notre fierté',
  aboutParagraphs: [
    'Expertise, expérience et technologies modernes : nous veillons à des sourires sains et durables.',
    'Chaque plan de soins est expliqué simplement, avec des options adaptées à vos besoins et à votre budget.',
  ],
  aboutImage: '/images/image-import-14.jpg',
  aboutRows: [
    {
      eyebrow: 'À PROPOS',
      heading: 'Votre sourire, notre fierté',
      paragraphs: [
        'Expertise, expérience et technologies modernes : nous veillons à des sourires sains et durables.',
        'Chaque plan de soins est expliqué simplement, avec des options adaptées à vos besoins et à votre budget.',
      ],
      cta: 'Nos soins',
      ctaHref: '#services',
      image: '/images/image-import-14.jpg',
      imageFirst: true,
    },
    {
      eyebrow: 'NOUVEAUX PATIENTS',
      heading: 'Nous accueillons les nouveaux patients',
      paragraphs: [
        'Bilan complet, écoute et plan de traitement clair : nous vous accompagnons dès la première visite.',
        'Que ce soit pour un suivi familial ou une urgence, notre équipe s’organise pour vous recevoir rapidement.',
      ],
      cta: 'Nos soins',
      ctaHref: '#services',
      image: '/images/image-import-9.png',
      imageFirst: false,
    },
  ] as DentalAboutRow[],
  team: {
    eyebrow: 'LES PROFESSIONNELS DERRIÈRE VOTRE SOURIRE',
    heading: 'Votre équipe soignante',
    body: 'Des praticiens de proximité, engagés pour la santé bucco-dentaire de toute la famille.',
    members: [
      {
        name: 'Dr Sophie Martin',
        role: 'CHIRURGIEN-DENTISTE',
        bio: 'Soins familiaux, prévention et accompagnement au long cours.',
        image: '/images/image-import-4.jpg',
      },
      {
        name: 'Dr Marc Lefèvre',
        role: 'CHIRURGIEN-DENTISTE',
        bio: 'Esthétique du sourire, couronnes et réhabilitation implantaire.',
        image: '/images/image-import-2.jpg',
      },
      {
        name: 'Dr Amina Benali',
        role: 'CHIRURGIEN-DENTISTE',
        bio: 'Soins pédiatriques et premier contact en douceur pour les enfants.',
        image: '/images/image-import.jpg',
      },
    ],
  },
  brandHeading: 'Nous acceptons votre mutuelle',
  contactHeading: 'Prendre rendez-vous',
  contactSubheading:
    'Indiquez vos disponibilités : nous vous recontactons pour confirmer le créneau ou proposer un autre horaire.',
  hours: 'Horaires : 08:30 – 19:00',
} as const

/**
 * @param value Texte optionnel
 * @param fallback Défaut template
 * @returns Texte à afficher
 */
function resolveText(value: string | undefined, fallback: string): string {
  return typeof value === 'string' && value.trim().length > 0 ? value : fallback
}

/**
 * Formate un téléphone FR pour l'affichage.
 * @param phone Numéro brut
 * @returns Téléphone formaté
 */
function formatPhoneDisplay(phone: string): string {
  const digits = phone.replace(/\D/g, '')
  if (digits.length === 10) {
    return digits.replace(/(\d{2})(?=\d)/g, '$1 ').trim()
  }
  return phone
}

/**
 * @param network Nom du réseau social
 * @returns Chemin icône connue ou vide
 */
function socialIconFor(network: string): string {
  const key = network.trim().toLowerCase()
  return SOCIAL_ICON_BY_NETWORK[key] ?? ''
}

/**
 * Construit le contenu de page prêt pour le rendu.
 * @param content Données variables du prospect (`SiteContent`)
 * @returns Contenu typé Dental
 */
export function buildDentalContent(content: SiteContent): DentalPageContent {
  const palette = content.palette ?? {}
  const businessName = resolveText(content.businessName, 'Cabinet Dentaire')
  const city = resolveText(content.city, '')
  const area = resolveText(content.area, city)
  const phone = resolveText(content.phone, '01 00 00 00 00')
  const email = resolveText(content.email, 'contact@cabinet-dentaire.fr')
  const address =
    [area || city, city && area !== city ? city : ''].filter(Boolean).join(', ') || 'France'

  const hoursFromContent =
    Array.isArray(content.openingHours) && content.openingHours.length > 0
      ? content.openingHours
          .map((row) => [row.day, row.hours].filter(Boolean).join(' : '))
          .filter((row) => row.length > 0)
          .slice(0, 1)[0]
      : undefined

  const trustFromContent: DentalStatItem[] = Array.isArray(content.trustItems)
    ? content.trustItems
        .map((item, index): DentalStatItem => ({
          value: (item.value ?? '').replace(/\+$/, ''),
          label: item.label ?? '',
          inkDark: index === 0,
        }))
        .filter((item) => item.value.length > 0 || item.label.length > 0)
        .slice(0, 3)
    : []

  const heroPoints = Array.isArray(content.heroPoints)
    ? content.heroPoints.filter((point) => typeof point === 'string' && point.trim().length > 0)
    : []

  const features: DentalFeatureItem[] =
    heroPoints.length > 0
      ? heroPoints.slice(0, 3).map((title, index) => ({
          icon: FEATURE_ICONS[index] ?? FEATURE_ICONS[0],
          title,
          text: defaults.features[index]?.text ?? defaults.features[0].text,
        }))
      : [...defaults.features]

  const galleryUrls = Array.isArray(content.gallery)
    ? content.gallery.map((item) => item.url ?? '').filter((url) => url.length > 0)
    : []

  const featuredImages: DentalGalleryImage[] =
    galleryUrls.length > 0
      ? galleryUrls.slice(0, 4).map((src, index) => ({
          src,
          offset: GALLERY_OFFSETS[index] ?? 'mid',
        }))
      : [...defaults.featuredImages]

  const servicesRaw =
    Array.isArray(content.services) && content.services.length > 0
      ? content.services
          .map((service) => ({
            title: service.title ?? '',
            description: service.description ?? '',
          }))
          .filter((service) => service.title.length > 0)
      : defaults.serviceCards.map((card) => ({
          title: card.title,
          description: card.description,
        }))

  const serviceCards: DentalServiceCard[] = servicesRaw.slice(0, 3).map((service, index) => {
    const fallback = defaults.serviceCards[index] ?? defaults.serviceCards[0]
    const imageFromGallery = galleryUrls[index] || galleryUrls[0] || ''
    return {
      title: service.title,
      description: service.description || fallback.description,
      image:
        imageFromGallery ||
        content.heroImage ||
        content.aboutImage ||
        fallback.image ||
        SERVICE_FALLBACK_IMAGES[index] ||
        SERVICE_FALLBACK_IMAGES[0],
      pills: fallback.pills,
    }
  })

  const aboutText = resolveText(content.about, defaults.aboutParagraphs[0])
  const aboutRows: DentalAboutRow[] = [
    {
      ...defaults.aboutRows[0],
      heading: resolveText(content.aboutHeading, defaults.aboutHeading),
      paragraphs: [aboutText, defaults.aboutParagraphs[1]],
      image: resolveText(content.aboutImage, defaults.aboutImage),
      cta: 'Nos soins',
      ctaHref: '#services',
    },
    {
      ...defaults.aboutRows[1],
      image: galleryUrls[1] || galleryUrls[0] || defaults.aboutRows[1].image,
      cta: 'Nos soins',
      ctaHref: '#services',
    },
  ]

  const teamMembers: DentalTeamMember[] =
    Array.isArray(content.reviews) && content.reviews.length >= 3
      ? content.reviews.slice(0, 3).map((review, index) => ({
          name: review.author || defaults.team.members[index]?.name || 'Praticien',
          role: defaults.team.members[index]?.role || 'CHIRURGIEN-DENTISTE',
          bio: review.text || defaults.team.members[index]?.bio || '',
          image:
            galleryUrls[index] ||
            defaults.team.members[index]?.image ||
            defaults.team.members[0].image,
        }))
      : [...defaults.team.members]

  // Pas de logos mutuelle dans SiteContent → section masquée tant qu’aucune donnée réelle.
  const brandLogos: string[] = []

  const social: DentalSocialLink[] =
    Array.isArray(content.social) && content.social.length > 0
      ? content.social
          .map((item) => {
            const label = (item.network || '').trim()
            const href = (item.url || '').trim()
            const src = socialIconFor(label)
            return { label, href, src }
          })
          .filter(
            (item) =>
              item.label.length > 0 &&
              item.href.length > 0 &&
              item.href !== '#' &&
              item.src.length > 0,
          )
      : []

  const year = new Date().getFullYear()

  return {
    theme: {
      primary: palette.primary || dentalDefaultTheme.primary,
      secondary: palette.secondary || dentalDefaultTheme.secondary,
      accent: palette.accent || dentalDefaultTheme.accent,
    },
    businessName,
    tagline: defaults.tagline,
    phone,
    phoneDisplay: formatPhoneDisplay(phone),
    email,
    address,
    hours: hoursFromContent ? `Horaires : ${hoursFromContent}` : defaults.hours,
    copyright: `© ${year} ${businessName}. Tous droits réservés.`,
    social,
    hero: {
      eyebrow: resolveText(content.heroBadge, businessName.toUpperCase()),
      heading: defaults.heroHeading,
      subheading: resolveText(content.subtitle, defaults.heroSubheading),
      ctaPrimary: resolveText(content.ctaCallLabel, defaults.ctaPrimary),
      ctaSecondary: resolveText(content.ctaQuoteLabel, defaults.ctaSecondary),
      image: resolveText(content.heroImage, defaults.heroImage),
      squiggle: '/exports/cc1mi.png',
      features,
    },
    featured: {
      eyebrow: `BIENVENUE CHEZ ${businessName.toUpperCase()}`,
      heading: resolveText(content.galleryHeading, defaults.featuredHeading),
      body: resolveText(content.about, defaults.featuredBody),
      line: '/exports/W25rs.png',
      images: featuredImages,
      stats: trustFromContent.length > 0 ? trustFromContent : [...defaults.stats],
    },
    services: {
      eyebrow: defaults.servicesEyebrow,
      heading: resolveText(content.servicesHeading, defaults.servicesHeading),
      body: defaults.servicesBody,
      cards: serviceCards.length > 0 ? serviceCards : [...defaults.serviceCards],
    },
    aboutRows,
    team: {
      ...defaults.team,
      heading: resolveText(content.reviewsHeading, defaults.team.heading),
      members: teamMembers,
    },
    brand: {
      heading: defaults.brandHeading,
      logos: brandLogos,
    },
    cta: {
      heading: resolveText(content.contactHeading, defaults.contactHeading),
      subheading: defaults.contactSubheading,
      mailtoEmail: email,
      contacts: [
        {
          title: 'Appelez-nous',
          description: 'Un créneau urgent ou une question ? Notre secrétariat vous répond.',
          value: formatPhoneDisplay(phone),
          href: `tel:${phone.replace(/\s/g, '')}`,
          icon: '/exports/xUErL.png',
        },
        {
          title: 'Écrivez-nous',
          description: 'Décrivez votre besoin : nous revenons vers vous rapidement.',
          value: email,
          href: `mailto:${email}`,
          icon: '/exports/v4v2w.png',
        },
        {
          title: 'Venez au cabinet',
          description: 'Un accueil simple et clair, proche de chez vous.',
          value: address,
          href: '#',
          icon: '/exports/D9Q8eS.png',
        },
      ],
      form: {
        nameLabel: 'Nom',
        namePlaceholder: 'Prénom Nom',
        emailLabel: 'Adresse e-mail',
        emailPlaceholder: 'email@exemple.fr',
        phoneLabel: 'Téléphone',
        phonePlaceholder: '06 12 34 56 78',
        serviceLabel: 'Soin souhaité',
        servicePlaceholder: 'Ex. Contrôle, blanchiment…',
        messageLabel: 'Message',
        messagePlaceholder: 'Décrivez votre besoin ou vos disponibilités',
        submit: 'Envoyer',
        subject: `Demande de rendez-vous — ${businessName}`,
      },
    },
  }
}
