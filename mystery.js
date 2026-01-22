document.body.addEventListener("keypress", (ev) => {
			if (ev.key == "g"){
				let audio = new Audio("assets/mystery.wav");
				audio.play()
			}
		});