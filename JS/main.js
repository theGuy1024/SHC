function loadHome(){
	var landingDiv = document.getElementById("landingText");
	
	window.addEventListener('scroll', function(){	
		var scrolledval = window.scrollY + 140;
		landingDiv.style.top = scrolledval * 0.6 + 'px';
	})

	/* elements fade in */
	setTimeout(function(){$('#top').fadeIn(2000);}, 1000);
	setTimeout(function(){$('#middle').fadeIn(3000);}, 2200);
	setTimeout(function(){$('#bottom').fadeIn(3000);}, 4000);
	setTimeout(function(){$('#bottomLine').fadeIn(3000);}, 4500);
	setTimeout(function(){$('#topLine').fadeIn(3000);}, 4500);
	setTimeout(function(){$('#applyScroll').fadeIn(3000);}, 4500);
	
	

	/* setting number of years established */
	const d = new Date();
	let year = (d.getFullYear()) - 1960;
	$('#amountYears').html(year);
}

function loadAboutUs(){
	var missionImg = document.getElementById("missionImg");
	slideSpeed = 0.15;
	
	window.addEventListener('scroll', function(){	
		var scrolledval = window.scrollY - 100;
		missionImg.style.top = scrolledval * slideSpeed + 'px';
		visionImg.style.top = (scrolledval * slideSpeed) - 135 + 'px';
		valueImg.style.top = (scrolledval * slideSpeed) - 290 + 'px';
	})
}
	
$(document).ready(function(){
	/* GENERIC - Opening Mobile Nav bar */
	$("#collapseBtn").on('click', ()=>{
		$('#mobileNav').fadeOut();
	});

	$("#expandBtn").on('click', ()=>{
		$('#mobileNav').fadeIn();
	});

	/* ACADEMICS - open schedule, based on form level */
	$('#1stForm').on('click', ()=>{
		$('#schedule').hide();
		$('#schedule').fadeIn("slow");
		document.getElementById("schedule").scrollTo(0,0)
		$('#schedule').css("height", "421px")
	});
	$('#2ndForm').on('click', ()=>{
		$('#schedule').hide();
		$('#schedule').fadeIn("slow");
		document.getElementById("schedule").scrollTo(0,428)
		$('#schedule').css("height", "250px")
	});
	$('#3rdForm').on('click', ()=>{
		$('#schedule').hide();
		$('#schedule').fadeIn("slow");
		document.getElementById("schedule").scrollTo(0,679)
		$('#schedule').css("height", "217px")
	});
	$('#4thForm').on('click', ()=>{
		$('#schedule').hide();
		$('#schedule').fadeIn("slow");
		document.getElementById("schedule").scrollTo(0,896)
		$('#schedule').css("height", "290px")
	});
});