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

	if(mode == 'iWantMyMTV'){
		document.getElementById('theme-style').href = 'iWantMyMTV.css'
	}

	if(mode == 'brPastel'){
		document.getElementById('theme-style').href = 'brPastel.css'
	}

	if(mode == 'goEagles'){
		document.getElementById('theme-style').href = 'goEagles.css'
	}

  if(mode == 'mrAnderson'){
		document.getElementById('theme-style').href = 'mrAnderson.css'
	}

  if(mode == 'whimsyShire'){
		document.getElementById('theme-style').href = 'whimsyShire.css'
	}

  if(mode == 'houseStark'){
		document.getElementById('theme-style').href = 'houseStark.css'
	}

  if(mode == 'goOrange'){
		document.getElementById('theme-style').href = 'goOrange.css'
	}

  if(mode == 'waves'){
		document.getElementById('theme-style').href = 'waves.css'
	}

  if(mode == 'cherryLimeade'){
		document.getElementById('theme-style').href = 'cherryLimeade.css'
	}

  if(mode == 'subdued'){
		document.getElementById('theme-style').href = 'subdued.css'
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