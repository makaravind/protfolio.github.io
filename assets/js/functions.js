$(function() {
	smoothScroll(600);
    

    
     $("#project1").click(function(){
            $(".work-para").hide();
            $(".work-para").show("fold");
            $("#work-info").html("Created a <a href='http://www.toranameventproductions.com'>website</a> for event production company ,<a href='http://www.toranameventproductions.com' target='_blank'>Thoranam</a>. The project was completed in  4 months. It was a great learning curve because I was at my initial stages of web designing. It was also a great learning experience to negotiate the product , understand and adapt to requirements of end user.")
        });
    
     $("#project2").click(function(){
            $(".work-para").hide();
            $(".work-para").show("fold");
            $("#work-info").html("Logo was created for a    <strong>city</strong> wide design sprint powered by Google. I was also an organizer at the event, The Appening. I was delighted when a UI designer from Google appreciated my work. <a href='https://github.com/makaravind/protfolio-res'><h7>src</h7></a>");
        });
    
     $("#project3").click(function(){
            $(".work-para").hide();
            $(".work-para").show("fold");
            $("#work-info").html("I was introduced to new techniques to write a website that motivated me to build this portfolio.Website building was never this easy and pleasant.");
        });
    
     $("#project4").click(function(){
            $(".work-para").hide();
            $(".work-para").show("fold");
            $("#work-info").html("Working as an intern since 5 months. Am working as an UI/UX developer. The App will be launched in Google <a href = 'http://www.vhere.in' target='_blank'>playstore soon</a>..");
        });
    
    $("#project5").click(function(){
            $(".work-para").hide();
            $(".work-para").show("fold");
            $("#work-info").html("My first python powered .exe application .  This application extracts “Today’s Quote” from the <a href='www.eduro.com'><h7>website</h7></a> and displays it on the screen . Modules re , pyinstaller is used to extract required information . Internet connection exception is also handled very smoothly by this application. <a href='https://github.com/makaravind/protfolio-res'><h7>src</h7></a>")
        });
    
     $("#project6").click(function(){
            $(".work-para").hide();
            $(".work-para").show("fold");
            $("#work-info").html("I have designed awkward situations people face in general and made a 'awwkward' picture series . <a href='https://www.facebook.com/awwkwardsituations/?fref=ts'><i><h7>facebookpage</h7></i></a> <a href = 'https://drive.google.com/folderview?id=0B4JPtZtOdN9pSzdGRE96MnpPUmc&usp=sharing'><i>picturecolection</i></a>");
        });
    
     $("#project7").click(function(){
            $(".work-para").hide();
            $(".work-para").show("fold");
            $("#work-info").html("<i>Somemore action soon. ;)</i>");
        });
    
     $("#project8").click(function(){
            $(".work-para").hide();
            $(".work-para").show("fold");
            $("#work-info").html("<i>Somemore action soon. ;)</i>");
        });
    
    $(".icon-fb").click(function(){
            event.preventDefault();
            window.open("https://www.facebook.com/mak11195", "popupWindow", "width=600,height=600,scrollbars=yes");
    });
    
    $(".icon-g").click(function(){
            event.preventDefault();
            window.open("https://plus.google.com/u/0/105164813529532702571/posts", "popupWindow", "width=600,height=600,scrollbars=yes");
    });
    
    $(".icon-git").click(function(){
            event.preventDefault();
            window.open("https://github.com/makaravind", "popupWindow", "width=600,height=600,scrollbars=yes");
    });

});


function smoothScroll (duration) {
	$('a[href^="#"]').on('click', function(event) {

	    var target = $( $(this).attr('href') );

	    if( target.length ) {
	        event.preventDefault();
	        $('html, body').animate({
	            scrollTop: (target.offset().top)-30
	        }, duration);
	    }
	});
}

