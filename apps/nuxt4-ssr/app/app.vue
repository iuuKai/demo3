<template>
	<div class="layout-wrap">
		<nav class="global-nav">
			<NuxtLink to="/" class="nav-link" :class="{ active: route.path === '/' }">首页</NuxtLink>
			<NuxtLink to="/about" class="nav-link" :class="{ active: route.path === '/about' }">
				关于
			</NuxtLink>
		</nav>

		<main class="page-content">
			<NuxtPage />
		</main>
	</div>
</template>

<script setup>
const route = useRoute()
</script>

<style>
* {
	margin: 0;
	padding: 0;
	box-sizing: border-box;
	font-family: system-ui, sans-serif;
}
body {
	background-color: #f7f8fa;
}
.layout-wrap {
	min-height: 100vh;
}
.global-nav {
	background: #ffffff;
	padding: 16px 40px;
	box-shadow: 0 1px 4px rgba(0, 0, 0, 0.08);
	display: flex;
	gap: 24px;
}
.nav-link {
	font-size: 16px;
	color: #666;
	text-decoration: none;
	padding: 6px 0;
	border-bottom: 2px solid transparent;
	transition: all 0.2s;
}
.nav-link:hover {
	color: #1874ff;
}
.nav-link.active {
	color: #1874ff;
	border-bottom-color: #1874ff;
}
.page-content {
	padding: 40px;
	max-width: 900px;
}
</style>
