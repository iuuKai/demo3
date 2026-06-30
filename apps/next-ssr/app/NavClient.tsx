// app/NavClient.tsx
'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function NavClient() {
	const pathname = usePathname()

	return (
		<nav className="bg-white px-10 py-4 shadow-[0_1px_4px_rgba(0,0,0,0.08)] flex gap-6">
			<Link
				href="/"
				className={`text-4 py-1.5 border-b-2 transition-all ${
					pathname === '/'
						? 'text-[#1874ff] border-[#1874ff]'
						: 'text-[#666] border-transparent hover:text-[#1874ff]'
				}`}
			>
				首页
			</Link>
			<Link
				href="/about"
				className={`text-4 py-1.5 border-b-2 transition-all ${
					pathname === '/about'
						? 'text-[#1874ff] border-[#1874ff]'
						: 'text-[#666] border-transparent hover:text-[#1874ff]'
				}`}
			>
				关于
			</Link>
		</nav>
	)
}
