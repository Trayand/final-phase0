var timer = null
var t = 0
var angka = 0
//
var muss = new Audio('sad.mp3'); 
//
var btn = document.getElementById('startButton')
var btnPause = document.getElementById('pauseButton')
var hasil = document.getElementById('hasilTimer')

// cek
function hitung(t) {

	var jam = document.getElementsByClassName('inputNum')[0].value
	if(!jam){
		jam = 0
	}else{
		t += (Number(jam)*60*60)
	}
	var menit = document.getElementsByClassName('inputNum')[1].value
	if(!menit){
		menit = 0
	}else{
		t+= (Number(menit)*60)
	}
	var detik = document.getElementsByClassName('inputNum')[2].value
	if(!detik){
		detik = 0
	}else{
		t+= Number(detik)
	}
	console.log(t);
	// var btn = document.getElementById('startButton')
	// var btnPause = document.getElementById('pauseButton')
	if(t>0){
		var lenyap = document.getElementsByClassName('inputNum')
		for(i=0;i<lenyap.length;i++){
			lenyap[i].style.visibility = 'hidden'
		}
		btn.disabled = true
		btnPause.disabled = false
		// var hasil = document.getElementById('hasilTimer')
		timer = setInterval(function(){
			if(t>0){
				if(t>=3600){
					var hour = Math.floor(t/3600)
					var cek = t%3600
					var minute = Math.floor(cek/60)
					var second = cek%60
					hasil.innerHTML = hour + '<span> h </span>' + minute + '<span> m </span>' + second + '<span> s</span>'
				}else if(t>=60){
					var minute = Math.floor(t/60)
					var second = t%60
					hasil.innerHTML = minute + '<span> m </span>' + second + '<span> s</span>'
				}else{
					hasil.innerHTML = t + '<span> s</span>'
				}
				t--
				angka++
			}else{
				muss.play()
				hasil.innerHTML = 'Timer is Over'
				alert("YOUR TIME HAS COME!!!")
				btn.disabled = false
				clearInterval(timer)
			}
		}, 1000);
	}else{
		alert('Please Input Number')
	}
	
}

var count = 0
// let temp = t
var myVar;
function myFunction() {
	console.log(t);
	console.log(angka);
	count++
	if(count%2!==0){
		myVar = clearInterval(timer)
		// var btnPause = document.getElementById('pauseButton')
		// btnPause.disabled = true
		document.getElementById('pauseButton').innerText = 'Resume'
	}else{
		document.getElementById('pauseButton').innerText = 'Pause'
		hitung(t-angka)
	}
}

function reset(){
	myVar = clearInterval(timer)
	// sound.pause();
	// sound.currentTime = 0;
	hasil.innerHTML = 'Click Start for timer'
	btn.disabled = false
	timer = null
	btnPause.disabled= true
	document.getElementById('pauseButton').innerText = 'Pause'
	count = 0
	angka = 0
	t = 0
	var lenyap = document.getElementsByClassName('inputNum')
	for(i=0;i<lenyap.length;i++){
		lenyap[i].style.visibility = 'visible'
		lenyap[i].value = 'blank'
	}
}

function changeCSS(cssFile, cssLinkIndex) {

    var oldlink = document.getElementsByTagName("link").item(cssLinkIndex);

    var newlink = document.createElement("link");
    newlink.setAttribute("rel", "stylesheet");
    newlink.setAttribute("type", "text/css");
    newlink.setAttribute("href", cssFile);

    document.getElementsByTagName("head").item(0).replaceChild(newlink, oldlink);
}