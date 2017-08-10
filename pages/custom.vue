<template>
	<main>
		<section class="lighter">
			<div class="container">
				<h2>
					Customized Download
					<span>Get your custom CSS framework</span>
				</h2>
			</div>
		</section>

		<section>
			<div class="container">

				<p>
					Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
				</p>

				<div class="row mb-text-center">
			    <div class="col-xs-4">
			      <a class="card card-block bg-lightest" href="#" @click.prevent="preset('grid')">
			        Mockingbird Grid
			      </a>
			    </div>
			    <div class="col-xs-4">
			      <a class="card card-block bg-secondary" href="#" @click.prevent="preset('light')">
			        Mockingbird Light
			      </a>
			    </div>
			    <div class="col-xs-4">
			      <a class="card card-block bg-success" href="#" @click.prevent="preset('all')">
			        Mockingbird
			      </a>
			    </div>
			  </div>

				<div class="card card-block mb-outline">
					<form ref="customizer" @submit.prevent="submitForm" @reset.prevent="preset">

						<div class="row">
							<div class="col-sm-4 hover-item">
								<label>
									<input type="checkbox" v-model="elements.grid"> Grid
								</label>
								<a class="hover-show" href="">?</a>
							</div>
							<div class="col-sm-4 hover-item">
								<label>
									<input type="checkbox" v-model="elements.typo"> Typography
								</label>
								<a class="hover-show" href="">?</a>
							</div>
							<div class="col-sm-4 hover-item">
								<label>
									<input type="checkbox" v-model="elements.forms"> Forms
								</label>
								<a class="hover-show" href="">?</a>
							</div>
						</div>

						<div class="row">
							<div class="col-sm-4 hover-item">
								<label>
									<input type="checkbox" v-model="elements.tables"> Tables
								</label>
								<a class="hover-show" href="">?</a>
							</div>
							<div class="col-sm-4 hover-item">
								<label>
									<input type="checkbox" v-model="elements.lists"> Lists
								</label>
								<a class="hover-show" href="">?</a>
							</div>
							<div class="col-sm-4 hover-item">
								<label>
									<input type="checkbox" v-model="elements.labels"> Labels
								</label>
								<a class="hover-show" href="">?</a>
							</div>
						</div>

						<div class="row">
							<div class="col-sm-4 hover-item">
								<label>
									<input type="checkbox" v-model="elements.buttons"> Buttons
								</label>
								<a class="hover-show" href="">?</a>
							</div>
							<div class="col-sm-4 hover-item">
								<label>
									<input type="checkbox" v-model="elements.misc"> Miscellaneous
								</label>
								<a class="hover-show" href="">?</a>
							</div>
							<div class="col-sm-4 hover-item">
								<label>
									<input type="checkbox" v-model="elements.utils"> Utilities
								</label>
								<a class="hover-show" href="">?</a>
							</div>
						</div>

						<div class="row">
							<div class="col-sm-4 hover-item">
								<label>
									<input type="checkbox" v-model="elements.resUtils"> Responsive Utilities
								</label>
								<a class="hover-show" href="">?</a>
							</div>
							<div class="col-sm-4 hover-item">
								<label>
									<input type="checkbox" v-model="elements.viewport"> Viewport
								</label>
								<a class="hover-show" href="">?</a>
							</div>
						</div>

						<hr>

						<div v-if="showAdvanced">

							advanced

							<hr>
						</div>

						<div class="flex-row">
							<div class="col">
								<a class="mb-text-muted" href="#" @click.prevent="showAdvanced = ! showAdvanced">advanced options</a>
							</div>
							<div class="col">
								<button class="mb-primary mb-pull-right" type="submit">Download</button>
								<button class="mb-no-border mb-transparent mb-text-muted mb-pull-right" type="reset">reset</button>
							</div>
						</div>
					</form>
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
					'/custom_download.php',
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
