$(document).ready(function(){
        var orange = 'hsl(25, 97%, 53%)';
        var rating = "";
        $('button:not([type="submit"])').click(function thankYouCard(e)
            {
                $('star').click(function(){
                    $(this).css('background-color', orange);
                });
                $(this).css({
                    'background-color': orange,
                    'color': 'white'
                });
                $(this).siblings('button:not([type="submit"])').css({
                    'background-color': 'hsla(217, 12%, 63%, 0.1)',
                    'color': 'hsl(217, 12%, 63%)'
                });
                rating = $(this).text();
                console.log(rating);
                return rating;
            }
        );
        console.log(rating);
        $('button[type="submit"]').click(function()
            {
                console.log(rating);
                $('.card1').css('display', 'none');
                $('.card2').css('display', 'block').fadeIn("slow");
                // if (rating=""){
                //     alert("Do please give a rating!");
                // }else{
                    $('#userRating').text(rating);
                // }
                return false;
            }
        );
    }
);