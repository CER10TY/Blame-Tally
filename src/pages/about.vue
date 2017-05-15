<template>
	<div align="center">
		<div class="container col-sm-5 mt-1">
			<h4>Hello there!</h4>
			<p>As you've no doubt already been on the landing page, you should have a slight idea of what this is about. The Blame Tally Management System (BTMS for short, although nobody says that) allows you, as a developer, to manage all sorts of (Blame) Tallies in a digital fashion (welcome to <em>2017</em>). The BTMS is built to be hosted LAN only.<p>
			<h5>How do I use this tool?</h5>
			<p>Usage is fairly straight forward via the GUI provided by the tool. You can add, remove or otherwise modify Tallies or Users depending on your preference. You may add or remove Users from Tallies as needed, as well as keep individual Tallies (called "Topics" in the back-end) on every User.</p>
			<p>In addition to using the front-end made available to you, you can edit the Tallies and/or Users directly in the stored JSON files. These can be found in <i class="fa fa-file-code-o"></i><span class="code">(root)/json/blame-tally.json</span> and <i class="fa fa-file-code-o"></i><span class="code">(root)/json/users.json</span> respectively.</p>
			<h5>How do I change things?</h5>
			<p>Changing things is also fairly easy. Fork the repo (link below), make your changes, build, host, and you're good to go. This tool uses Vue.js (with VueRouter and VueX) for the front-end, along with NodeJS and JSON (as storage) for the back-end. Webpack is (of course) used to build the front-end.</p>
		</div>
	</div>
</template>

<script>
	export default {};
</script>