<template>
	<main>
		<section class="lighter">
			<div class="container">
				<h2>
					Download
					<span>Get a distribution of Mockingbird</span>
				</h2>
			</div>
		</section>

		<section>
			<div class="container">

				<h4>Installation</h4>

				<p>
					I recommend that you load Mockingbird into your project via npm:
				</p>

				<code>npm i mockingbird-sass --save-dev</code>

				<p>
					However, if you are not experienced and just want a framework for your website, simply paste the following link in to the <i>&lt;head&gt;&lt;/head&gt;</i> section of your site:
				</p>

				<code>&lt;link rel="stylesheet" href="https://unpkg.com/mb-sass@latest/mockingbird.css"&gt;</code>
			</div>
		</section>

		<section class="lighter">
			<div class="container">

				<h4>Recommended Downloads</h4>

				<a class="mb-right primary btn outline" href="https://unpkg.com/mb-sass@0.9.7/mockingbird.css" target="_blank" download>
					mockingbird.css
				</a>

				<a class="mb-right mb-text-primary" href="https://unpkg.com/mb-sass@0.9.7/mockingbird-light.css" target="_blank" download>
					mockingbird-light.css
				</a>

				<a class="mb-text-primary" href="https://unpkg.com/mb-sass@0.9.7/mockingbird-grid.css" target="_blank" download>
					mockingbird-grid.css
				</a>

			</div>
		</section>

		<section>
			<div class="container">

				<h4>Releases</h4>

				<div class="table-wrapper mb-no-border">
					<table class="mb-no-border">
						<thead>
							<tr>
								<th>mockingbird.css</th>
								<th>mockingbird-light.css</th>
								<th>mockingbird-grid.css</th>
								<th>changelog</th>
							</tr>
						</thead>
						<tbody>
							<tr>
								<td>
									<a href="https://unpkg.com/mb-sass@0.9.7/mockingbird.css" title="mockingbird.css v0.9.7" download>v0.9.7</a>
								</td>
								<td>
									<a href="https://unpkg.com/mb-sass@0.9.7/mockingbird-light.css"title="mockingbird-light.css v0.9.7" download>v0.9.7</a>
								</td>
								<td>
									<a href="https://unpkg.com/mb-sass@0.9.7/mockingbird-grid.css" title="mockingbird-grid.css v0.9.7" download>v0.9.7</a>
								</td>
								<td>
									<a href="https://github.com/lucas-carl/mockingbird/releases/tag/v0.9.7" target="_blank">release v0.9.7</a>
								</td>
							</tr>
							<tr>
								<td>
									<a href="https://unpkg.com/mb-sass@0.9.6/mockingbird.css" title="mockingbird.css v0.9.6" download>v0.9.6</a>
								</td>
								<td>
									<a href="https://unpkg.com/mb-sass@0.9.6/mockingbird-light.css"title="mockingbird-light.css v0.9.6" download>v0.9.6</a>
								</td>
								<td>
									<a href="https://unpkg.com/mb-sass@0.9.6/mockingbird-grid.css" title="mockingbird-grid.css v0.9.6" download>v0.9.6</a>
								</td>
								<td>
									<a href="https://github.com/lucas-carl/mockingbird/releases/tag/v0.9.6" target="_blank">release v0.9.6</a>
								</td>
							</tr>
							<tr>
								<td>
									<a href="https://unpkg.com/mb-sass@0.9.5/mockingbird.css" title="mockingbird.css v0.9.5" download>v0.9.5</a>
								</td>
								<td>
									<a href="https://unpkg.com/mb-sass@0.9.5/mockingbird-light.css"title="mockingbird-light.css v0.9.5" download>v0.9.5</a>
								</td>
								<td>
									<a href="https://unpkg.com/mb-sass@0.9.5/mockingbird-grid.css" title="mockingbird-grid.css v0.9.5" download>v0.9.5</a>
								</td>
								<td>
									<a href="https://github.com/lucas-carl/mockingbird/releases/tag/v0.9.5" target="_blank">release v0.9.5</a>
								</td>
							</tr>
							<tr>
								<td>
									<a href="https://unpkg.com/mb-sass@0.9.4-alpha/mockingbird.css"title="mockingbird.css v0.9.4-alpha" download>v0.9.4-alpha</a>
								</td>
								<td>
									<a href="https://unpkg.com/mb-sass@0.9.4-alpha/mockingbird-light.css" draggable=""title="mockingbird-light.css v0.9.4-alpha" download>v0.9.4-alpha</a>
								</td>
								<td>
									<a href="https://unpkg.com/mb-sass@0.9.4-alpha/mockingbird-grid.css" title="mockingbird-grid.css v0.9.4-alpha" download>v0.9.4-alpha</a>
								</td>
								<td>
									<a href="https://github.com/lucas-carl/mockingbird/releases/tag/v0.9.4-alpha" target="_blank">release v0.9.4-alpha</a>
								</td>
							</tr>
						</tbody>
					</table>
				</div>

			</div>
		</section>

		<beta-section></beta-section>
	</main>
</template>

<script>
	import axios from '~plugins/axios'

	import BetaSection from '~components/BetaSection.vue'

	export default {

		components: {
			BetaSection
		},

		data() {
			return {
				showAdvanced: false,
				elements: {
					grid: true,
					typo: true,
					forms: true,
					tables: true,
					buttons: true,
					utils: true,
					resUtils: true,
					viewport: true,
					lists: true,
					labels: true,
					misc: true
				},
				components: {
					cards: true,
					sections: true,
					navbar: true,
					arrowLink: true,
					inputGroup: true,
					alerts: true
				},
				advanced: {

				}
			}
		},

		methods: {
			submitForm() {
				let data = new FormData(this.$refs.customizer)
				data.append('content', 'test')

				axios.post(
					'https://static.lucascarl.com/mb-sass.php',
					data
				).then((response) => {
					console.info(response.data)
				})
			},

			preset(type) {
				switch (type) {
					case 'light':
						this.selectCollection([
							'elements.grid', 'elements.typo', 'elements.forms',
							'elements.tables', 'elements.buttons', 'elements.utils',
							'elements.resUtils', 'elements.viewport'
						])
						break
					case 'grid':
						this.selectCollection([
							'elements.grid', 'elements.resUtils', 'elements.viewport'
						])
						break
					default:
						this.selectCollection([this.elements, this.components])
				}
			},

			selectCollection(collection) {
				for (let el in this.elements) { this.elements[el] = false }
				for (let el in this.components) { this.components[el] = false }

				for (let i in collection) {
					let selection = collection[i]

					if (typeof selection === 'object') {
						for (let option in selection) {
							selection[option] = true
						}
					} else {
						let contents = selection.split('.')

						this[contents[0]][contents[1]] = true
					}
				}
			}
		}

	}
</script>
