document.body.addEventListener("keypress", (ev) => {
			if (ev.key == "g"){
				let audio = new Audio("/this/assets/mystery.wav");
				audio.play()
			}
		});