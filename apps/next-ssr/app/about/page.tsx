import Image from 'next/image'
import demo from '@/public/demo.jpg'

export default function About() {
	return (
		<div>
			<h2>About 页面（SSR 渲染）</h2>
			<Image
				src={demo}
				alt="Demo 图片"
				width={1080}
				height={568}
				className="mt-5 rounded-lg"
				sizes="(max-width: 900px) 100vw, 900px"
				priority
			/>
		</div>
	)
}
