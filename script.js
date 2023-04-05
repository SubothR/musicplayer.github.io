function Song() {
    var player = document.getElementById('play');


    player.style.display = 'flex';
    player.innerHTML = `<img src="Starboy.jpg" width="100" style="border-radius:1vh;">
    <div class="title">
    <h5>Party Monster</h5>
    <p>The Weeknd</p>
    </div>  
    <audio controls autoplay>
        <source src="Party Monster.mp3" type="audio/mpeg"> 
    </audio>
   
    `
}