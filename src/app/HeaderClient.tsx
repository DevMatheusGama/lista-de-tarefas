/*'use client'

import { usePathname } from 'next/navigation'

export default function HeaderClient() {
    const pathname = usePathname()
    const noHeaderRoutes = ['/', '/register']
    const showHeader = !noHeaderRoutes.includes(pathname)
    return showHeader ? <Header /> : null
}*/