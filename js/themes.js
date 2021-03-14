console.log('Its working')

let theme = localStorage.getItem('theme')

if(theme == null){
	setTheme('main')
}else{
	setTheme(theme)
}

let themeDots = document.getElementsByClassName('theme-dot')


for (var i=0; themeDots.length > i; i++){
	themeDots[i].addEventListener('click', function(){
		let mode = this.dataset.mode
		console.log('Option clicked:', mode)
		setTheme(mode)
	})
}

function setTheme(mode){
	if(mode == 'main'){
		document.getElementById('theme-style').href = 'main.css'
	}

  if(mode == 'cyGirl'){
		document.getElementById('theme-style').href = 'cyGirl.css'
	}

	if(mode == 'rainbow'){
		document.getElementById('theme-style').href = 'rainbow.css'
	}

	if(mode == 'steampunk'){
		document.getElementById('theme-style').href = 'steampunk.css'
	}

	if(mode == 'sunset'){
		document.getElementById('theme-style').href = 'sunset.css'
	}

  if(mode == 'spartan'){
		document.getElementById('theme-style').href = 'spartan.css'
	}

  if(mode == 'bee'){
		document.getElementById('theme-style').href = 'bee.css'
	}

  if(mode == 'biohazard'){
		document.getElementById('theme-style').href = 'biohazard.css'
	}

  if(mode == 'vintage'){
		document.getElementById('theme-style').href = 'vintage.css'
	}

  if(mode == 'anarchy'){
		document.getElementById('theme-style').href = 'anarchy.css'
	}

  if(mode == 'mask'){
		document.getElementById('theme-style').href = 'mask.css'
	}

  if(mode == 'snake'){
		document.getElementById('theme-style').href = 'snake.css'
	}

  if(mode == 'coral'){
		document.getElementById('theme-style').href = 'coral.css'
	}

	if(mode == 'happy'){
		document.getElementById('theme-style').href = 'happy.css'
	}

	if(mode == 'berry'){
		document.getElementById('theme-style').href = 'berry.css'
	}

	if(mode == 'autumn'){
		document.getElementById('theme-style').href = 'autumn.css'
	}

	if(mode == 'midnight'){
		document.getElementById('theme-style').href = 'midnight.css'
	}

	if(mode == 'chocolateMint'){
		document.getElementById('theme-style').href = 'chocolateMint.css'
	}

	if(mode == 'zombie'){
		document.getElementById('theme-style').href = 'zombie.css'
	}

	if(mode == 'rainbow'){
		document.getElementById('theme-style').href = 'rainbow.css'
	}

	localStorage.setItem('theme', mode)
}