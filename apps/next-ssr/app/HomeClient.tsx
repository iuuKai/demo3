'use client'

import { useState } from 'react'

type User = {
	id: number
	username: string
	nodeVersion: string
}

export default function HomeClient({ user }: { user: User }) {
	const [postRes, setPostRes] = useState<null | any>(null)

	const postTest = async () => {
		const res = await fetch('/next-ssr/api/user', {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify({ username: '张三', age: 25 })
		})
		const data = await res.json()
		setPostRes(data)
	}

	return (
		<div>
			<h1 className="mb-5">Next.js SSR 全栈项目</h1>
			<h3 className="mb-5">Node 版本：{user.nodeVersion}</h3>

			<div className="bg-white px-6 py-5 rounded-2.5 my-5 shadow-[0_1px_8px_rgba(0,0,0,0.05)]">
				<p className="mb-2">用户ID：{user.id}</p>
				<p className="mb-2">用户名：{user.username}</p>
			</div>

			<button
				onClick={postTest}
				className="bg-[#1874ff] text-white px-5.5 py-2.5 rounded-md text-[15px] cursor-pointer hover:bg-[#0d5ed8] transition-colors"
			>
				调用POST接口
			</button>

			{postRes && (
				<pre className="bg-[#1e1e1e] text-white p-4 rounded-2 mt-4 overflow-x-auto">
					{JSON.stringify(postRes, null, 2)}
				</pre>
			)}
		</div>
	)
}
