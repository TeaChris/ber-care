export interface Nav {
  id: number
  href: string
  name: string
}

export const nav: Nav[] = [
  {
    id: 1,
    href: '/home',
    name: 'home',
  },
  {
    id: 2,
    href: '/about',
    name: 'about',
  },
  {
    id: 3,
    href: '/services',
    name: 'services',
  },
  {
    id: 4,
    href: '/doctors',
    name: 'doctors',
  },
  {
    id: 5,
    href: '/news',
    name: 'news',
  },
  {
    id: 6,
    href: '/contact',
    name: 'contact',
  },
]
