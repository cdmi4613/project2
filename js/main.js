window.addEventListener("load", function(){
	let x=0;

	const listData=[
		{
			title: "@The. Arte -",
			sub: "Worof<p>Out of World</p>",
			link: "",
		},
		{
			title: "@The. Arte -",
			sub: "Prinev<p>Text ever Since</p>",
			link: "",
		},
		{
			title: "@The. Arte -",
			sub: "Iyfive<p>The 1960s Since</p>",
			link: "",
		},
		{
			title: "@The. Arte -",
			sub: "Fetter<p>Pub the Lish</p>",
			link: "",
		},
		{
			title: "@The. Arte -",
			sub: "Evolve <br><p> Man variat Ions",
			link: "",
		}
	];

	function galleryMoving(){
		$(".main_slider ul li").removeClass("active");
		$(".main_slider ul li").eq(x).addClass("active");

		setTimeout(function(){
			$(".textbox ul li").addClass("active");
			$(".textbox ul li span").html(listData[x].title); // innerHTML="";
			$(".textbox ul li strong").html(listData[x].sub);
		}, 500);

		// console.log(listData[x].title, listData[x].sub);
	}

	galleryMoving();

	setInterval(function(){
		if(x < 4){
			x++;
		}
		else{
			x=0;
		}

		$(".textbox ul li").removeClass("active");

		galleryMoving();
	}, 5000);


let swiper=new Swiper(".mySwiper", {
slidesPerView: 3,
spaceBetween: 30,
// loop: true,
// loopedSlides: 1,
pagination: { 
	el: ".swiper-pagination",
	type: "fraction",
},

scrollbar: {
	el: '.swiper-scrollbar',
	draggable: true,
 hide:false
},

navigation: {
nextEl: ".swiper .controller ul li a.next",
prevEl: ".swiper .controller ul li a.prev",
},

// autoplay: {
// delay: 2000,
//    },
breakpoints: { 
	100:{
		slidesPerView: 1,
	},
	500:{
		slidesPerView: 1,
	},
	700:{
		slidesPerView: 2,
		spaceBetween: 20,
	},
	850:{
		slidesPerView: 3,
		spaceBetween: 30,
	},
	
	1170:{
		slidesPerView: 3,
	},
}

});

$("#tab").click(function(e){
	e.preventDefault();


	$("body").addClass("fixed");
	$("#mobile").addClass("active")
	$(".dim").addClass("active")
})

$("#subexit").click(function(e){
	e.preventDefault();

	$("body").removeClass("fixed");
	$("#mobile").removeClass("active")
	$(".dim").removeClass("active")
})

$(".dim").click(function(e){
	e.preventDefault();

	$("body").removeClass("fixed");
	$("#mobile").removeClass("active")
	$(".dim").removeClass("active")
})

$("#mobile > ul > li").click(function(e){
	e.preventDefault();

	if($(this).hasClass("active") == false){
	$("#mobile > ul > li").removeClass("active");
	$(this).addClass("active");
	$("#mobile ul ul").slideUp(300);
	$(this).children("ul").slideDown(300);
}
else{
	$(this).removeClass("active");
	$(this).children("ul").slideUp(300);
}
});



});
