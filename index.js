const nameInput = document.getElementById("name-el")

    nameInput.addEventListener("keydown", function (event){
        if(event.key === "Enter"){
            const playerName = nameInput.value.trim()
            if(playerName != "")
            {
                sessionStorage.setItem("player_name",playerName)
                window.location.href = "game.html"
            }else{
                alert("Your name cant be empty spaces")
            }
        }
    })