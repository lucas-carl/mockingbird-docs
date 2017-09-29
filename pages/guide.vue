<template>
	<main>
		<section class="lighter">
			<div class="container">
				<h2>
					Guide
					<span>Getting started with Mockingbird</span>
				</h2>
			</div>
		</section>

		<beta-section></beta-section>

		<section class="mb-no-padding">
			<div class="container">

				<h4>Cheat Sheet</h4>

				<p>
					A complete reference to Mockingbird
				</p>

				<div class="row mb-text-center">
			    <div class="col-xs-4">
			      <a class="card card-block bg-lightest" href="#grid" @click.prevent="scrollTo('#grid')">
			        Mockingbird Grid
			      </a>
			    </div>
			    <div class="col-xs-4">
			      <a class="card card-block bg-secondary" href="#typo" @click.prevent="scrollTo('#typo')">
			        Mockingbird Light
			      </a>
			    </div>
			    <div class="col-xs-4">
			      <a class="card card-block bg-success" href="#components" @click.prevent="scrollTo('#cards')">
			        Mockingbird
			      </a>
			    </div>
			  </div>

				<h5>
					Explanation
					<hr>
				</h5>

				<p>
					a word preceded by a dot (e.g. <code>.container</code>) means that it is a HTML class. You would use it like <code>&lt;div class="<i>container</i>"&gt;&lt;/div&gt;</code>
				</p>

				<p>
					a word in curly brackets (e.g. <code>{size}</code>) correlates to a set of values. In this example it would be (<i>sm</i>, <i>md</i>, <i>lg</i>)
				</p>

			</div>
		</section>

		<section class="mb-no-padding">
			<div class="container">

				<h4 id="grid">
					Grid
				</h4>

				<div class="row">
					<div class="col-sm-6">
						<div class="card card-block">
							<h5 class="card-title">.container</h5>

							<p>
								content is centered & has a maximum width of 960px
							</p>
						</div>
					</div>
					<div class="col-sm-6">
						<div class="card card-block">
							<h5 class="card-title">.container-{size}</h5>

							<p>
								xs: 600px, sm: 720px, md: 960px, lg: 1200px
							</p>
						</div>
					</div>
				</div>

				<div class="row">
					<div class="col-sm-6">
						<div class="card card-block">
							<h5 class="card-title">.container-fluid</h5>

							<p>
								content stretches to full width of window
							</p>
						</div>
					</div>
					<div class="col-sm-6">
						<div class="card card-block">
							<h5 class="card-title">.row</h5>

							<p>
								wrapper for cols, has a clearfix on it
							</p>
						</div>
					</div>
				</div>

				<div class="row">
					<div class="col-sm-6">
						<div class="card card-block">
							<h5 class="card-title">.flex-row</h5>

							<p>
								a wrapper that displays as <i>flex</i>
							</p>
						</div>
					</div>
					<div class="col-sm-6">
						<div class="card card-block">
							<h5 class="card-title">.col</h5>

							<p>
								wrap content in columns, especially useful inside .flex-row ^^
							</p>
						</div>
					</div>
				</div>

				<div class="row">
					<div class="col-sm-6">
						<div class="card card-block">
							<h5 class="card-title">.col-{n}</h5>

							<p>
								wrap content with specified width (n: 1-12). The default grid consists of 12 columns
							</p>
						</div>
					</div>
					<div class="col-sm-6">
						<div class="card card-block">
							<h5 class="card-title">.col-{<a href="#breakpoints" @click.prevent="scrollTo('#breakpoints')">breakpoint</a>}-{n}</h5>

							<p>
								columns that break to full width at specified breakpoint
							</p>
						</div>
					</div>
				</div>

				<h4 id="res-utils">
					Responsive Utilities
				</h4>

				<div class="row">
					<div class="col-sm-6">
						<div class="card card-block">
							<h5 class="card-title">.mb-pull-left</h5>

							<p>
								pulls content to the left (float: left)
							</p>
						</div>
					</div>
					<div class="col-sm-6">
						<div class="card card-block">
							<h5 class="card-title">.mb-pull-right</h5>

							<p>
								pulls content to the right (float: right)
							</p>
						</div>
					</div>
				</div>

				<div class="row">
					<div class="col-sm-6">
						<div class="card card-block">
							<h5 class="card-title">.mb-clearfix</h5>

							<p>
								eliminates unwanted behavior of floats. <a href="http://learnlayout.com/clearfix.html" target="_blank">read more</a>
							</p>
						</div>
					</div>
					<div class="col-sm-6">
						<div class="card card-block">
							<h5 class="card-title">.mb-center</h5>

							<p>
								centers the element its used on
							</p>
						</div>
					</div>
				</div>

				<div class="row">
					<div class="col-sm-6">
						<div class="card card-block">
							<h5 class="card-title">.mb-flex-center</h5>

							<p>
								uses flexbox to center its children vertically & horizontally
							</p>
						</div>
					</div>
					<div class="col-sm-6">
						<div class="card card-block">
							<h5 class="card-title">.mb-fullwidth</h5>

							<p>
								like the name suggests, it stretches to full width of parent
							</p>
						</div>
					</div>
				</div>

				<div class="row">
					<div class="col-sm-6">
						<div class="card card-block">
							<h5 class="card-title">.mb-absolute</h5>

							<p>
								positions the element to <a href="https://css-tricks.com/absolute-positioning-inside-relative-positioning/" target="_blank">absolute</a>
							</p>
						</div>
					</div>
					<div class="col-sm-6">
						<div class="card card-block">
							<h5 class="card-title">.mb-fixed</h5>

							<p>
								positions the element to <a href="https://css-tricks.com/absolute-positioning-inside-relative-positioning/" target="_blank">fixed</a>
							</p>
						</div>
					</div>
				</div>

				<h4 id="modifiers">
					Utilities & Modifiers
				</h4>

				<div class="row">
					<div class="col-sm-6">
						<div class="card card-block">
							<h5 class="card-title">.mb-text-{<a href="#colors" @click.prevent="scrollTo('#colors')">color</a>}</h5>

							<p>
								changes the text color of the element
							</p>
						</div>
					</div>
					<div class="col-sm-6">
						<div class="card card-block">
							<h5 class="card-title">.mb-{<a href="#">size</a>}</h5>

							<p>
								can change size of an element, depending on if it supports it
							</p>
						</div>
					</div>
				</div>

				<div class="row">
					<div class="col-sm-6">
						<div class="card card-block">
							<h5 class="card-title">.mb-outline</h5>

							<p>
								changes the element's style to outlined
							</p>
						</div>
					</div>
					<div class="col-sm-6">
						<div class="card card-block">
							<h5 class="card-title">.mb-no-padding, .mb-no-margin, .mb-no-border</h5>

							<p>
								removes given attribute from element
							</p>
						</div>
					</div>
				</div>

				<div class="row">
					<div class="col-sm-6">
						<div class="card card-block">
							<h5 class="card-title">.mb-text-{<a href="#align" @click.prevent="scrollTo('#align')">align</a>}</h5>

							<p>
								aligns text to the specified value
							</p>
						</div>
					</div>
					<div class="col-sm-6">
						<div class="card card-block">
							<h5 class="card-title">.mb-text-wrap</h5>

							<p>
								forces a text to wrap inside its container
							</p>
						</div>
					</div>
				</div>

				<div class="row">
					<div class="col-sm-6">
						<div class="card card-block">
							<h5 class="card-title">.mb-text-overflow</h5>

							<p>
								overflowing text gets cut off with ellipsis
							</p>
						</div>
					</div>
					<div class="col-sm-6">
						<div class="card card-block">
							<h5 class="card-title">.mb-text-underline, .mb-text-through</h5>

							<p>
								styles the text with underline or line-through
							</p>
						</div>
					</div>
				</div>

				<div class="row">
					<div class="col-sm-6">
						<div class="card card-block">
							<h5 class="card-title">.mb-shadow, .mb-shadow-{type}</h5>

							<p>
								adds a box shadow to any element:
							</p>

							<button class="mb-shadow">Button w/ shadow</button>
						</div>
					</div>
					<div class="col-sm-6">
						<div class="card card-block">
							<h5 class="card-title">.mb-shadow-hover, .mb-shadow-{type}-hover</h5>

							<p>
								hides shadow when hovering over the element:
							</p>

							<button class="mb-shadow-hover">Button w/ shadow</button>
						</div>
					</div>
				</div>

				<div class="row">
					<div class="col-sm-6">
						<div class="card card-block">
							<h5 class="card-title">.mb-text-bold, .mb-text-bolder, .mb-text-normal</h5>

							<p>
								changes the thickness of the font
							</p>
						</div>
					</div>
					<div class="col-sm-6"></div>
				</div>

			</div>
		</section>

		<section class="secondary mb-no-padding">
			<div class="container">

				<h4 id="typo">
					Typography
				</h4>

				<div class="row">
					<div class="col-sm-6">
						<div class="card card-block bg-secondary">
							<h5 class="card-title">&lt;h1&gt;, &lt;h2&gt;, ... &lt;h6&gt;</h5>

							<p>
								default HTML headings, can contain subheadings in form of a &lt;span&gt; or .sub-heading
							</p>
						</div>
					</div>
					<div class="col-sm-6">
						<div class="card card-block bg-secondary">
							<h5 class="card-title">.small, &lt;small&gt;</h5>

							<p>
								makes <span class="small">smaller text</span> (default: 87.5% of body text)
							</p>
						</div>
					</div>
				</div>

				<div class="row">
					<div class="col-sm-6">
						<div class="card card-block bg-secondary">
							<h5 class="card-title">.strong, &lt;strong&gt;, &lt;b&gt;</h5>

							<p>
								makes <span class="strong">bold/strong</span> text
							</p>
						</div>
					</div>
					<div class="col-sm-6">
						<div class="card card-block bg-secondary">
							<h5 class="card-title">.mark, &lt;mark&gt;</h5>

							<p>
								<span class="mark">marks the text inside</span>
							</p>
						</div>
					</div>
				</div>

				<div class="row">
					<div class="col-sm-6">
						<div class="card card-block bg-secondary">
							<h5 class="card-title">&lt;code&gt;</h5>

							<p>
								highlights code inside a text:
							</p>

							<code>console.log('Hello World')</code>
						</div>
					</div>
					<div class="col-sm-6">
						<div class="card card-block bg-secondary">
							<h5 class="card-title">&lt;sup&gt;, &lt;sub&gt;</h5>

							<p>
								positions text <sup>above</sup> and <sub>below</sub>
							</p>
						</div>
					</div>
				</div>

				<div class="row">
					<div class="col-sm-6">
						<div class="card card-block bg-secondary">
							<h5 class="card-title">&lt;blockquote&gt;</h5>

							<p>
								<blockquote class="mb-no-margin">
									Imagination is more important than knowledge.
									– Albert Einstein
								</blockquote>
							</p>
						</div>
					</div>
					<div class="col-sm-6">
						<div class="card card-block bg-secondary">
							<h5 class="card-title">.font-fam-{type}</h5>

							<p>
								applies a font family on the text. types: serif, monospace
							</p>
						</div>
					</div>
				</div>

				<div class="row">
					<div class="col-sm-6">
						<div class="card card-block bg-secondary">
							<h5 class="card-title">.link-arrow</h5>

							<p>
								<a class="link-arrow" href="#">link with an arrow</a>
							</p>
						</div>
					</div>
					<div class="col-sm-6"></div>
				</div>

				<h4 id="form">
					Form elements
				</h4>

				<div class="row">
					<div class="col-sm-6">
						<div class="card card-block bg-secondary">
							<h5 class="card-title">.btn, &lt;button&gt;</h5>

							<p>
								creates a button that can have .mb-outline, .mb-{<a href="#colors" @click.prevent="scrollTo('#colors')">color</a>}, .link-arrow, and more classes.
							</p>

							<p>
								<button class="mb-sm mb-right mb-bottom">Button</button>
								<button class="primary mb-sm mb-right mb-bottom">Primary</button>
								<button class="primary mb-sm outline mb-right mb-bottom">Outline</button>
								<button class="primary mb-sm mb-right mb-bottom link-arrow">Arrow</button>
							</p>
						</div>
					</div>
					<div class="col-sm-6">
						<div class="card card-block bg-secondary">
							<h5 class="card-title">&lt;input&gt;, &lt;textarea&gt;, &lt;select&gt;</h5>

							<p>
								<div class="form-group">
									<input class="mb-sm" type="text" placeholder="text input">
								</div>
								<div class="form-group">
									<textarea class="mb-sm" rows="2" placeholder="textarea" style="max-height: 3rem"></textarea>
								</div>
								<div class="form-group">
									<select class="mb-sm">
										<option>option 1</option>
										<option>option 2</option>
									</select>
								</div>
							</p>
						</div>
					</div>
				</div>

				<div class="row">
					<div class="col-sm-6">
						<div class="card card-block bg-secondary">
							<h5 class="card-title">&lt;input type=radio&gt;, &lt;input type=checkbox&gt;</h5>

							<p>
								<label class="mb-right">
									<input type="radio">
									Radio button
								</label>
								<label>
									<input type="checkbox">
									Checkbox
								</label>
							</p>
						</div>
					</div>
				</div>

				<h4 id="tables">
					Tables
				</h4>

				<div class="row">
					<div class="col-sm-6">
						<div class="card card-block bg-secondary">
							<h5 class="card-title">&lt;table&gt;</h5>

							<p>
								if you want to know more about HTML tables, you can <a href="https://www.w3schools.com/html/html_tables.asp">read more here</a>.
								<br>
								Mockingbird adds some more features to tables.
							</p>
						</div>
					</div>
					<div class="col-sm-6">
						<div class="card card-block bg-secondary">
							<h5 class="card-title">.table-striped</h5>

							<p>
								creates a striped effect on the table, which helps with readability
							</p>
						</div>
					</div>
				</div>

				<div class="row">
					<div class="col-sm-6">
						<div class="card card-block bg-secondary">
							<h5 class="card-title">.table-hover</h5>

							<p>
								highlights the table row when you hover over it
							</p>
						</div>
					</div>
					<div class="col-sm-6">
						<div class="card card-block bg-secondary">
							<h5 class="card-title">.mb-sm</h5>

							<p>
								makes a smaller table
							</p>
						</div>
					</div>
				</div>

				<div class="row">
					<div class="col-sm-6">
						<div class="card card-block bg-secondary">
							<h5 class="card-title">.mb-no-border</h5>

							<p>
								removes all borders from the table
							</p>
						</div>
					</div>
					<div class="col-sm-6">
						<div class="card card-block bg-secondary">
							<h5 class="card-title">.mb-outline</h5>

							<p>
								draws a border on the outside of the table
							</p>
						</div>
					</div>
				</div>

				<div class="row">
					<div class="col-sm-6">
						<div class="card card-block bg-secondary">
							<h5 class="card-title">.{<a href="#colors" @click.prevent="scrollTo('#colors')">color</a>}</h5>

							<p>
								in combination with the above class, it can color the outside border of a table
							</p>
						</div>
					</div>
					<div class="col-sm-6"></div>
				</div>

			</div>
		</section>

		<section class="mb-no-padding">
			<div class="container">

				<h4 id="legend">
					Legend
				</h4>

				<div class="row">
					<div class="col-sm-6">
						<div class="card card-block" id="breakpoints">
							<h5 class="card-title">
								Breakpoints
							</h5>

							<p>
								xs: 480px, sm: 576px, md: 720px, lg: 960px, xl: 1200px
							</p>
						</div>

						<div class="card card-block" id="align">
							<h5 class="card-title">
								Text alignments
							</h5>

							<p>
								left, center, right, justify
							</p>
						</div>
					</div>
					<div class="col-sm-6">
						<div class="card card-block" id="colors">
							<h5 class="card-title">
								Default Colors
							</h5>

							<div>
								<span class="badge primary mb-right mb-bottom" title="#338bff">primary</span>
								<span class="badge secondary mb-right mb-bottom" title="#e9e9ee">secondary</span>
								<span class="badge default mb-bottom" title="#ffffff">default</span>
							</div>
							<div>
								<span class="badge success mb-right mb-bottomt" title="#2ee67d">success</span>
								<span class="badge warning mb-right mb-bottom" title="#ffd500">warning</span>
								<span class="badge danger mb-right mb-bottom" title="#f05030">danger</span>
								<span class="badge dark mb-bottom" title="#666677">dark</span>
							</div>
							<div>
								<span class="badge light mb-right" title="#e1e1e3">light</span>
								<span class="badge lighter mb-right" title="#f5f5f7">lighter</span>
								<span class="badge lightest" title="#fbfbfd">lightest</span>
							</div>
						</div>
					</div>
				</div>

			</div>
		</section>
	</main>
</template>

<script>
	import BetaSection from '~/components/BetaSection.vue'

	export default {

		components: {
			BetaSection
		},

		methods: {
			scrollTo(el) {
				let offset = document.querySelector(el).getBoundingClientRect().top - 64

				this.animateScroll(offset, 200)
			},
			animateScroll(y, duration) {
				let scroll = window.pageYOffset || document.body.scrollTop
				let int = (y - scroll) / duration * 10

				setTimeout(() => {
					window.scroll(0, scroll + int)

					if (duration === 0) {
						window.scroll(0, y + 1)
						return
					}

					this.animateScroll(y, duration - 10)
				}, 10)
			}
		}

	}
</script>
