export default defineEventHandler(async event => {
	const body = await readBody(event)

	if (!body?.username) {
		return { code: 400, msg: '用户名不能为空' }
	}

	return {
		code: 200,
		msg: '创建用户成功',
		data: body
	}
})
