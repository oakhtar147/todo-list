let $lis = $("li");
const $deleteBtns = $("span");
const $inputTodo = $("input");
const $ul = $("ul");
const $inputToggle = $(".fa-angle-double-up");

$ul.on("click", "li", function(){
    // This will toggle between done or not done for each todo if an li is clicked within a ul.
    $(this).toggleClass("done");
});

$ul.on("click", "span", function(event){
    $(this).parent().slideUp(500, function(){  // the fadeOut method will activate for the whole li
        $(this).remove();                   
    });
    event.stopPropagation(); // prevent bubbling events in parent elements
});

$inputTodo.on("keypress", function(event){
    if (event.which === 13){
        let newLi = $("<li></li>").html("<span><i class='fa fa-minus-circle' aria-hidden='true'></i></span> " + $(this).val());
        $ul.append(newLi);
        $(this).val(""); 
    };
});

$inputToggle.on("click", function(){
    $inputTodo.slideToggle(1000, "swing", function(){
        $inputToggle.toggleClass("fa-angle-double-up fa-angle-double-down");
        });    
});
