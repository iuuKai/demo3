export default defineEventHandler(async event => {
	const query = getQuery(event)
	const id = query.id || 1

	let nodeVersion = 'unknown'
	if (typeof process !== 'undefined') {
		nodeVersion = process.version || process.versions?.node || 'unknown'
	}

	return {
		code: 200,
		msg: '获取用户成功',
		data: {
			id,
			username: 'admin',
			nodeVersion
		}
	}
})
