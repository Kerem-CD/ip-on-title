fetch("https://api.ipify.org/?format=text")
    .then(response => response.text())
    .then(out=>{
        document.title=out
    })
