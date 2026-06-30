// app/layout.tsx
import type { Metadata } from 'next'
import './globals.css'
import NavClient from './NavClient'

// metadata 正常导出（Server Component 允许）
export const metadata: Metadata = {
	title: 'Next.js SSR',
	description: 'Next.js SSR 全栈项目'
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang="zh-CN">
			<body className="bg-[#f7f8fa] min-h-screen m-0 p-0 box-border">
				<NavClient />
				<main className="max-w-225 px-10 pt-10 pb-0">{children}</main>
			</body>
		</html>
	)
}
