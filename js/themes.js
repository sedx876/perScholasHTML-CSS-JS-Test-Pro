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

	localStorage.setItem('theme', mode)
}