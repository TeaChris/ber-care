'use client'

import { User } from 'next-auth'
import { FC } from 'react'
import {
  DropdownMenu,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from './ui/Dropdown-menu'
import UserAvatar from './UserAvatar'
import Link from 'next/link'
import { signOut } from 'next-auth/react'

interface UserAccountNavProps {
  user: Pick<User, 'name' | 'email' | 'image'>
}

const UserAccountNav: FC<UserAccountNavProps> = ({ user }) => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <UserAvatar
          className="h-8 w-8"
          user={{
            name: user.name || null,
            image: user.image || null,
          }}
        />
      </DropdownMenuTrigger>

      <DropdownMenuContent className="bg-white" align="end">
        <div className="flex items-center justify-start gap-2 p-2">
          <div className="flex flex-col space-y-1 leading-none">
            {user.name && <p className="font-medium">{user.name}</p>}
            {user.email && (
              <p className="w-[200px] truncate text-sm text-zinc-700">
                {user.email}
              </p>
            )}
          </div>
        </div>
        <DropdownMenuSeparator />

        {/* feeds */}
        <DropdownMenuItem asChild>
          <Link href="/">Scheduled Appointments</Link>
        </DropdownMenuItem>

        {/* community */}
        <DropdownMenuItem asChild>
          <Link href="/r/create">Messages</Link>
        </DropdownMenuItem>

        {/* settings */}
        <DropdownMenuItem asChild>
          <Link href="/settings">Settings</Link>
        </DropdownMenuItem>

        <DropdownMenuSeparator />

        {/* logout */}
        <DropdownMenuItem
          className="cursor-pointer"
          onSelect={(event: any) => {
            event.preventDefault()
            signOut({ callbackUrl: `${window.location.origin}/sign-in` })
          }}
        >
          Sign out
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
export default UserAccountNav
