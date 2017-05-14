<template>
	<div class="row">
		<div class="container col-sm-5 mt-4 ml-4" align="left">
			<h4>Hello there!</h4>
			<p>As you've no doubt already been on the landing page of this tool, you probably already know what this is about. This nifty little tool is an <strong>offline</strong> Tally Management tool, effectively allowing you to manage your Blame Tallies (or any other kind of Tally) with handy JSON files and a neat GUI.</p>
			<h5>What are Blame Tallies?</h5>
			<p><a href="https://en.wikipedia.org/wiki/Tally_marks" alt="Wiki Article">This</a> is an article about Tally Marks on Wikipedia. That should explain things pretty well. You're a developer anyway, you should know this stuff.</p>
			<h5>How do I use this tool?</h5>
			<p>It's pretty straight forward. I mean, look at the GUI. I didn't even make the usual mess, so you should really be able to figure this stuff out on your own.</p>
			<p>If you're too lazy to do that, here's a rundown:
				<ul>
					<li>Add a Tally, selecting the type and other content as specified</li>
					<li>Modify the Tally by clicking the right button. A new window opens up.</li>
					<li>Remove the Tally altogether because you're unhappy. Contemplate life.</li>
				</ul>
			Alternatively, you can easily modify all Tallies as well as Users in the respective JSON files stored in the back end.</p>	
		</div>
		<div class="container col-sm-5 mt-4 mr-4" align="right">
			<h5>What is this written in?</h5>
			<p>The front-end is written entirely (well, almost) with Vue.js, using multiple components wherever possible. This allows for completely modular development, switching out stuff as needed, as well as making my life a thousand times easier if something happens to break.</p>
			<p>The back-end is written in NodeJS, and I use JSON for storage. The reason I use JSON for storage (and not a big, clunky database) is because it's not a big, clunky database, this tool is offline, and using a big, clunky database is a pain. Only drawback is, now everybody can easily modify their tallies if they're smart enough.</p>
			<h5>Missed anything?</h5>
			<p>The usual stuff: If you want to change something, you can fork the repository and edit things to your heart's content. If you feel like screaming at me, shoot me an e-mail. Also, connect with me on LinkedIn. I heard that's <em>super important</em> in today's age. Other than that, have fun and blame your friends for everything.</p>
		</div>
	</div>
</template>

<script>
	export default {};
</script>