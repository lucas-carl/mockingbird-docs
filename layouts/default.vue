<template>
  <div class="app">
		<site-header></site-header>

    <nuxt/>

		<site-footer></site-footer>
  </div>
</template>

<script>
	import SiteHeader from '~/components/SiteHeader.vue'
	import SiteFooter from '~/components/SiteFooter.vue'

	export default {

		components: {
			SiteHeader,
			SiteFooter
		}

	}
</script>
