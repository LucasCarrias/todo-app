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

        $("ul").append("<li> <span class=\"deleteIcon\">X</span> "+ textContent +"</li>");
    }
});