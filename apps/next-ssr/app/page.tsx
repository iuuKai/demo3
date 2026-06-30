import HomeClient from './HomeClient'

async function getServerData() {
	const res = await fetch('https://jsonplaceholder.typicode.com/users/1')
	const user = await res.json()
	const nodeVersion = process.version || 'unknown'

	return {
		id: user.id,
		username: user.name,
		nodeVersion,
		mode: 'SSR'
	}
}

export default async function Home() {
	const user = await getServerData()
	return <HomeClient user={user} />
}
