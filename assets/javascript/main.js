// Originally  had set equal heights of columns (divs) inside of the .container
// Now it is modified  to set equal heights of .thumbnails inside of the .thumbnailContainer

function setEqualHeight(columns) {
    var tallestcolumn = 0;
    columns.each(
        function () {
            currentHeight = $(this).height();
            if (currentHeight > tallestcolumn) {
                tallestcolumn = currentHeight;
            }
        }
    );
    columns.height(tallestcolumn);
}
$(document).ready(function () {
    // setEqualHeight($(".container > div"));
    setEqualHeight($(".thumbnailContainer .thumbnail"));
});


//  Show #toTop button only after scrolling page dawn a little ( 150 px )
function showToTopButton() {
    $(window).scroll(function () {
        if ( ($(this).scrollTop() > 150) ) {
            $('#toTop').fadeIn();
        } else {
            $('#toTop').fadeOut();
        }
    });
}



// Highlight All Links To Current Page (from CSS - tricks)
//This function will add the class "active" to any links (even relative) that point to the current page

function setActiveLinks(){
       $("a").each(function(){
               if ($(this).attr("href") == window.location.pathname){
                       $(this).addClass("active");
               }
       });
};


$(document).ready(function () {
    setActiveLinks();
    
//  Activate fancybox to show images and galleries
    $(".fancybox").fancybox();

});





