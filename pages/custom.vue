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
					Start with one of the default package configurations or create your very own:
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
									<input type="checkbox" name="grid" v-model="elements.grid"> Grid
								</label>
								<!-- <a class="hover-show" href="#">?</a> -->
							</div>
							<div class="col-sm-4 hover-item">
								<label>
									<input type="checkbox" name="typography" v-model="elements.typo"> Typography
								</label>
								<!-- <a class="hover-show" href="#">?</a> -->
							</div>
							<div class="col-sm-4 hover-item">
								<label>
									<input type="checkbox" name="forms" v-model="elements.forms"> Forms
								</label>
								<!-- <a class="hover-show" href="#">?</a> -->
							</div>
						</div>

						<div class="row">
							<div class="col-sm-4 hover-item">
								<label>
									<input type="checkbox" name="tables" v-model="elements.tables"> Tables
								</label>
								<!-- <a class="hover-show" href="#">?</a> -->
							</div>
							<div class="col-sm-4 hover-item">
								<label>
									<input type="checkbox" name="lists" v-model="elements.lists"> Lists
								</label>
								<!-- <a class="hover-show" href="#">?</a> -->
							</div>
							<div class="col-sm-4 hover-item">
								<label>
									<input type="checkbox" name="labels" v-model="elements.labels"> Labels
								</label>
								<!-- <a class="hover-show" href="#">?</a> -->
							</div>
						</div>

						<div class="row">
							<div class="col-sm-4 hover-item">
								<label>
									<input type="checkbox" name="buttons" v-model="elements.buttons"> Buttons
								</label>
								<!-- <a class="hover-show" href="#">?</a> -->
							</div>
							<div class="col-sm-4 hover-item">
								<label>
									<input type="checkbox" name="misc" v-model="elements.misc"> Miscellaneous
								</label>
								<!-- <a class="hover-show" href="#">?</a> -->
							</div>
							<div class="col-sm-4 hover-item">
								<label>
									<input type="checkbox" name="utilities" v-model="elements.utils"> Utilities
								</label>
								<!-- <a class="hover-show" href="#">?</a> -->
							</div>
						</div>

						<div class="row">
							<div class="col-sm-4 hover-item">
								<label>
									<input type="checkbox" name="responsive-utilities" v-model="elements.resUtils"> Responsive Utilities
								</label>
								<!-- <a class="hover-show" href="#">?</a> -->
							</div>
							<div class="col-sm-4 hover-item">
								<label>
									<input type="checkbox" name="viewport" v-model="elements.viewport"> Viewport
								</label>
								<!-- <a class="hover-show" href="#">?</a> -->
							</div>
						</div>

						<hr>

						<div class="flex-row">
							<div class="col">
								<!-- <a class="mb-text-muted" href="#" @click.prevent="showAdvanced = ! showAdvanced">advanced options</a> -->
							</div>
							<div class="col">
								<button class="primary mb-pull-right" type="submit">Download</button>
								<button class="mb-no-border mb-transparent mb-text-muted mb-pull-right" type="reset">reset</button>
							</div>
						</div>
					</form>
				</div>
			</div>
		</section>
	</main>
</template>

<script>
	import axios from '~/plugins/axios'

	import BetaSection from '~/components/BetaSection.vue'

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

				axios.post('https://static.lucascarl.com/mockingbird/custom_download.php', data).then((response) => {
					console.info(response.data)
					this.downloadFile(response.data)
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
			},

			downloadFile(url) {
				let isChromeOrSafari = navigator.userAgent.toLowerCase().indexOf('chrome') !== -1 || navigator.userAgent.toLowerCase().indexOf('safari') !== -1

				// iOS devices do not support downloading. We have to inform user about this.
				if (/(iP)/g.test(navigator.userAgent)) {
					alert('Your device does not support files downloading. Please try again in desktop browser.')

					window.open(url, '_blank')
					return false
				}

				// If in Chrome or Safari - download via virtual link click
				if (isChromeOrSafari) {
					let link = document.createElement('a')
					link.href = url
					link.setAttribute('target', '_blank')

					if (link.download !== undefined) {
					let fileName = url.substring(url.lastIndexOf('/') + 1, url.length)
					link.download = fileName
				}

				if (document.createEvent) {
					let e = document.createEvent('MouseEvents')
					e.initEvent('click', true, true)
					link.dispatchEvent(e)

					return true
					}
				}

				// Force file download (whether supported by server).
				if (url.indexOf('?') === -1) {
					url += '?download'
				}

				window.open(url, '_blank')

				return true
			}
		}

	}
</script>
