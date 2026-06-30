<template>
	<div class="page-wrap">
		<div class="container">
			<h2>About 页面（SSR 渲染）</h2>
			<img src="/demo.jpg" alt="Demo图片" class="demo-img" />
		</div>
	</div>
</template>

<style scoped>
.page-wrap {
	min-height: 100vh;
	background-color: #f7f8fa;
}
.container {
	padding: 40px;
	max-width: 900px;
}
.demo-img {
	max-width: 100%;
	margin-top: 20px;
	border-radius: 8px;
}
</style>
