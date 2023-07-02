import { Nav, nav } from '../../data'
import Link from 'next/link'

import { CiSearch } from 'react-icons/ci'
import { Button, buttonVariants } from '@/components/ui/button'
import { getAuthSession } from '@/lib/auth'
import UserAccountNav from './UserAccountNav'

const Navbar = async () => {
  const session = await getAuthSession()
  return (
    <nav className="w-full h-14 bg-blue-900 grid place-items-center fixed top-0 left-0 z-50">
      <div className="w-md lg:w-lg mx-auto h-full flex items-center justify-between">
        <ul className="flex items-center gap-12">
          {nav.map((item: Nav) => {
            const { id, name, href } = item
            return (
              <li key={id}>
                <Link
                  href={href}
                  className="text-xs capitalize text-white font-medium font-mont"
                >
                  {name}
                </Link>
              </li>
            )
          })}
        </ul>

        {/*  */}
        <div className="flex items-center gap-6 max-w-fit px-4">
          <CiSearch size={25} className="text-white" />
          <Link
            href="/appointment"
            className={buttonVariants({ variant: 'outline' })}
          >
            Appointment
          </Link>
          {/* profile */}
          {session?.user ? (
            <UserAccountNav user={session.user} />
          ) : (
            <Link href="/sign-in" className={buttonVariants()}>
              sign in
            </Link>
          )}
        </div>
      </div>
    </nav>
  )
}

export default Navbar
