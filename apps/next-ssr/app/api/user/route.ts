import { NextResponse } from 'next/server'

export async function GET(request: Request) {
	const { searchParams } = new URL(request.url)
	const id = searchParams.get('id') || '1'

	return NextResponse.json({
		code: 200,
		msg: '获取用户成功',
		data: {
			id,
			username: 'admin',
			nodeVersion: process.version || 'unknown'
		}
	})
}

export async function POST(request: Request) {
	const body = await request.json()

	if (!body?.username) {
		return NextResponse.json({ code: 400, msg: '用户名不能为空' }, { status: 400 })
	}

	return NextResponse.json({
		code: 200,
		msg: '创建用户成功',
		data: body
	})
}
