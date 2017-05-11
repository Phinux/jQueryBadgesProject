$(function() {

    // your code will go here
    
    jQuery.ajax({
        url: 'https://www.codeschool.com/users/Phinux',
        dataType: 'jsonp',
        success: function (response) {
            // handle response
            var arr = response.courses.completed;
            for(var i=0; i < arr.lenght; i++){
                $('<div>Appended item</div>',{
                    'class'    : 'course'
                }).appendTo('#badges')
                .append('<h3>title</h3>')
                .append($('<img/>', {
                    'scr'  : arr,
                }))
                .apppend($('<a/>', {
                    'class' : 'btn btn-primary',
                    'href'  : 'courses url property',
                    'target': '_blank'                        
                }))
            }           
        }
    });
});
