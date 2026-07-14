/**
 * Types + construction du contenu de la template `dental` (« Family Dental Care »).
 *
 * La template rend un `SiteContent` typé et possède sa DA / copie éditoriale dentaire
 * en défauts (Pencil). Clés SiteContent vides → fallback template.
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

const defaults = {
  tagline: 'Dentistry and Orthodontics',
  heroHeading: 'Local dentists who love to make you smile.',
  heroSubheading: 'Discover a level of dental care like no other',
  heroBadge: 'FAMILY DENTAL CARE',
  ctaPrimary: 'Book an Appointment',
  ctaSecondary: 'Browse our service',
  heroImage: '/images/image-import-7.png',
  features: [
    {
      icon: '/exports/DqRcy.png',
      title: 'Preventive Guidance',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit velit, sapien habitant integer sen.facilisis ex non nibh',
    },
    {
      icon: '/exports/dCWWe.png',
      title: 'Friendly Service',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit velit, sapien habitant integer sen.facilisis ex non nibh',
    },
    {
      icon: '/exports/wNoa7.png',
      title: 'Dental Technology',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit velit, sapien habitant integer sen.facilisis ex non nibh',
    },
  ] as DentalFeatureItem[],
  featuredEyebrow: 'WELCOME TO OUR FAMILY DENTAL CARE',
  featuredHeading: 'Creating beautiful smiles for all ages',
  featuredBody:
    'We are a family dental practice that has earned the trust of our patients through honesty, efficiency, and good communication.',
  featuredImages: [
    { src: '/images/image-import-1.jpg', offset: 'low' as const },
    { src: '/images/image-import-19.jpg', offset: 'high' as const },
    { src: '/images/image-import-1.png', offset: 'mid' as const },
    { src: '/images/image-import-9.jpg', offset: 'high' as const },
  ],
  stats: [
    { value: '20', label: 'Years Of Experience', inkDark: true },
    { value: '200', label: 'Satisfied Clients', inkDark: false },
    { value: '20', label: 'Certified Dentist', inkDark: false },
  ] as DentalStatItem[],
  servicesEyebrow: 'OUR SERVICES',
  servicesHeading: 'Quality dental services',
  servicesBody:
    'Our dentists provide a range of services to all ages and needs to keep their teeth and gums healthy for life',
  serviceCards: [
    {
      title: 'General Dentistry',
      image: '/images/image-import-11.jpg',
      description:
        'Our general dentistry services include a range of preventative and targeted treatments essential for maintaining healthy teeth and gums.',
      pills: [
        'Fillings',
        'Examination, scale & clean',
        "Children's dentistry",
        'Gum disease',
        'Root canal therapy',
        'Wisdom teeth',
        'Mouthguards',
      ],
    },
    {
      title: 'Dental Cosmetic',
      image: '/images/image-import-18.jpg',
      description:
        'We know the first thing people notice about you is your smile, We deliver incredible cosmetic results that will have you smiling with confidence.',
      pills: ['Teeth whitening', 'Crowns', 'Veneers', 'Implants', 'Invisalign'],
    },
    {
      title: 'Emergency Care',
      image: '/images/image-import-15.jpg',
      description:
        'We provides emergency dental services if you have knocked out a tooth or are experiencing a severe toothache, do not delay seeking medical treatment.',
      pills: ['Severe toothaches', 'Bleeding gums', 'Broken teeth', 'Sports trauma'],
    },
  ] as DentalServiceCard[],
  aboutHeading: 'Your smile is our pride',
  aboutParagraphs: [
    'We know the first thing people notice about you is smile, our expertise and experience, combined with technologies, We will ensure you have healthy, beautiful smiles',
    'Sed sollicitudin pellentesque urna, a suscipit metus imperdiet et. Curabitur consectetur auctor leo eu posuere. Fusce maximus purus ac enim tempor, eu consequat purus laoreet. Suspendisse elementum ligula vitae gravida aliquet.',
  ],
  aboutImage: '/images/image-import-14.jpg',
  aboutRows: [
    {
      eyebrow: 'ABOUT US',
      heading: 'Your smile is our pride',
      paragraphs: [
        'We know the first thing people notice about you is smile, our expertise and experience, combined with technologies, We will ensure you have healthy, beautiful smiles',
        'Sed sollicitudin pellentesque urna, a suscipit metus imperdiet et. Curabitur consectetur auctor leo eu posuere. Fusce maximus purus ac enim tempor, eu consequat purus laoreet. Suspendisse elementum ligula vitae gravida aliquet.',
      ],
      cta: 'Learn More',
      image: '/images/image-import-14.jpg',
      imageFirst: true,
    },
    {
      eyebrow: 'NEW PATIENTS',
      heading: 'We accept new patients',
      paragraphs: [
        'We are highly skilled in treating a wide range of dental concerns, and take pride in delivering outstanding patient care and exceptional results every time.',
        'Sed sollicitudin pellentesque urna, a suscipit metus imperdiet et. Curabitur consectetur auctor leo eu posuere. Fusce maximus purus ac enim tempor, eu consequat purus laoreet. Suspendisse elementum ligula vitae gravida aliquet.',
      ],
      cta: 'Learn More',
      image: '/images/image-import-9.png',
      imageFirst: false,
    },
  ] as DentalAboutRow[],
  team: {
    eyebrow: 'THE PROFESSIONAL BEHIND YOUR SMILE',
    heading: 'Meet your neighborhood dentists',
    body: "We are excited to be your neighborhood dentist and take care of your family's dental needs.",
    members: [
      {
        name: 'Maria',
        role: 'BDS ( GENERAL DENTIST)',
        bio: 'Quisque sed ex sed risus pellentesque pellentesque id nec purusestibulum',
        image: '/images/image-import-4.jpg',
      },
      {
        name: 'Darla',
        role: 'BDS ( GENERAL DENTIST)',
        bio: 'Quisque sed ex sed risus pellentesque pellentesque id nec purusestibulum',
        image: '/images/image-import-2.jpg',
      },
      {
        name: 'Josh',
        role: 'BDS ( GENERAL DENTIST)',
        bio: 'Quisque sed ex sed risus pellentesque pellentesque id nec purusestibulum',
        image: '/images/image-import.jpg',
      },
    ],
  },
  brand: {
    heading: 'We accept your insurance',
    logos: [
      '/images/image-import-4.png',
      '/images/image-import-8.png',
      '/images/image-import-5.png',
      '/images/image-import-2.png',
      '/images/image-import-2.png',
      '/images/image-import-4.png',
    ],
  },
  contactHeading: 'Book Appointment',
  contactSubheading:
    'Schedule your next dental appointment effortlessly, We will contact you to confirm your request or change the time or day if unavailable.',
  hours: 'Office Hour: 08:00am - 6:00pm',
} as const

/**
 * @param value Texte optionnel
 * @param fallback Défaut template
 */
function resolveText(value: string | undefined, fallback: string): string {
  return typeof value === 'string' && value.trim().length > 0 ? value : fallback
}

/**
 * Formate un téléphone pour l'affichage (fallback = valeur brute).
 * @param phone Numéro brut
 */
function formatPhoneDisplay(phone: string): string {
  const digits = phone.replace(/\D/g, '')
  if (digits.length === 10) {
    return digits.replace(/(\d{2})(?=\d)/g, '$1 ').trim()
  }
  return phone
}

/**
 * Construit le contenu de page prêt pour le rendu.
 * @param content Données variables du prospect (`SiteContent`)
 */
export function buildDentalContent(content: SiteContent): DentalPageContent {
  const palette = content.palette ?? {}
  const businessName = resolveText(content.businessName, 'Family Dental Care')
  const city = resolveText(content.city, '')
  const area = resolveText(content.area, city)
  const phone = resolveText(content.phone, '123 456 7890')
  const email = resolveText(content.email, 'contact@example.com')
  const address =
    [area || city, city && area !== city ? city : ''].filter(Boolean).join(', ') ||
    'Cooks Mill Rd, Halifax NS, Canada'

  const hoursFromContent =
    Array.isArray(content.openingHours) && content.openingHours.length > 0
      ? content.openingHours
          .map((row) => [row.day, row.hours].filter(Boolean).join(': '))
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
      cta: resolveText(content.ctaQuoteLabel, defaults.aboutRows[0].cta),
    },
    {
      ...defaults.aboutRows[1],
      image: galleryUrls[1] || galleryUrls[0] || defaults.aboutRows[1].image,
      cta: resolveText(content.ctaQuoteLabel, defaults.aboutRows[1].cta),
    },
  ]

  const teamMembers: DentalTeamMember[] =
    Array.isArray(content.reviews) && content.reviews.length >= 3
      ? content.reviews.slice(0, 3).map((review, index) => ({
          name: review.author || defaults.team.members[index]?.name || 'Dentist',
          role: defaults.team.members[index]?.role || 'BDS ( GENERAL DENTIST)',
          bio: review.text || defaults.team.members[index]?.bio || '',
          image:
            galleryUrls[index] ||
            defaults.team.members[index]?.image ||
            defaults.team.members[0].image,
        }))
      : [...defaults.team.members]

  const socialDefaults: DentalSocialLink[] = [
    { label: 'Facebook', src: '/exports/H9JZK.png', href: '#' },
    { label: 'Twitter', src: '/exports/c52F3x.png', href: '#' },
    { label: 'Instagram', src: '/exports/zPb6s.png', href: '#' },
    { label: 'LinkedIn', src: '/exports/ToOF0.png', href: '#' },
    { label: 'YouTube', src: '/exports/bS49m.png', href: '#' },
  ]

  const social: DentalSocialLink[] =
    Array.isArray(content.social) && content.social.length > 0
      ? content.social.map((item, index) => ({
          label: item.network || socialDefaults[index]?.label || 'Social',
          src: socialDefaults[index]?.src || socialDefaults[0].src,
          href: item.url || '#',
        }))
      : socialDefaults

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
    hours: hoursFromContent ? `Office Hour: ${hoursFromContent}` : defaults.hours,
    copyright: `© ${year} ${businessName}. All rights reserved.`,
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
      eyebrow: `WELCOME TO ${businessName.toUpperCase()}`,
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
    brand: { ...defaults.brand },
    cta: {
      heading: resolveText(content.contactHeading, defaults.contactHeading),
      subheading: defaults.contactSubheading,
      contacts: [
        {
          title: 'Give us a call',
          description: 'Lorem ipsum dolor sit amet  sit dignissim pellentesque',
          value: formatPhoneDisplay(phone),
          href: `tel:${phone.replace(/\s/g, '')}`,
          icon: '/exports/xUErL.png',
        },
        {
          title: 'Send us an email',
          description: 'Lorem ipsum dolor sit amet  sit dignissim pellentesque',
          value: email,
          href: `mailto:${email}`,
          icon: '/exports/v4v2w.png',
        },
        {
          title: 'Visit to clinic',
          description: 'Lorem ipsum dolor sit amet  sit dignissim pellentesque',
          value: address,
          href: '#',
          icon: '/exports/D9Q8eS.png',
        },
      ],
      form: {
        nameLabel: 'Name',
        namePlaceholder: 'Full Name',
        emailLabel: 'Email Address',
        emailPlaceholder: 'email@example.com',
        phoneLabel: 'Phone Number',
        phonePlaceholder: '(123) 456 7890',
        serviceLabel: 'Service',
        servicePlaceholder: 'Ex. Dental Implants',
        messageLabel: 'Message',
        messagePlaceholder: 'Please describe what service you are interested in',
        submit: 'Submit',
      },
    },
  }
}
