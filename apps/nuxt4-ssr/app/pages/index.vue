<template>
	<div class="page-wrap">
		<div class="container">
			<h1>Nuxt4 SSR 全栈项目</h1>
			<h3>Node 版本：{{ user?.data.nodeVersion }}</h3>
			<div v-if="user" class="info-card">
				<p>用户ID：{{ user.data.id }}</p>
				<p>用户名：{{ user.data.username }}</p>
			</div>

			<button class="btn-test" @click="postTest">调用POST接口</button>
			<pre v-if="postRes" class="res-pre">{{ JSON.stringify(postRes, null, 2) }}</pre>
		</div>
	</div>
</template>

<script setup>
const { data: user } = await useAsyncData('userInfo', () => $fetch('/api/user?id=1'))

let postRes = ref(null)
const postTest = async () => {
	const res = await $fetch('/api/user', {
		method: 'POST',
		body: {
			username: '张三',
			age: 25
		}
	})
	postRes.value = res
}
</script>

<style scoped>
.page-wrap {
	min-height: 100vh;
	background-color: #f7f8fa;
}
.container {
	padding: 40px;
	max-width: 900px;
}
.info-card {
	background: #fff;
	padding: 20px 24px;
	border-radius: 10px;
	margin: 20px 0;
	box-shadow: 0 1px 8px rgba(0, 0, 0, 0.05);
}
.btn-test {
	padding: 10px 22px;
	background: #1874ff;
	color: #fff;
	border: none;
	border-radius: 6px;
	cursor: pointer;
	font-size: 15px;
}
.btn-test:hover {
	background: #0d5ed8;
}
.res-pre {
	background: #1e1e1e;
	color: #fff;
	padding: 16px;
	border-radius: 8px;
	margin-top: 16px;
	overflow-x: auto;
}
</style>
