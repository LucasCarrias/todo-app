$("ul").on("click", "li", function () {
    $(this).toggleClass('completed');
});

$("ul").on("click", ".deleteIcon", function (event) {
    $(this).parent().fadeOut(500, function(){
        $(this).remove();
    });
    event.stopPropagation();
});

$("input[type='text']").on("keypress", function (event) {
    if (event.which === 13){
        textContent = $(this).val();
        $(this).val("");

        $("ul").append("<li> <span class=\"deleteIcon\"><i class=\"far fa-trash-alt\"></i></span> "+ textContent +"</li>");
    }
});

$(".addIcon").on("click", function(){
    $("input[type='text']").fadeToggle(200);
});