$(function() {

    // your code will go here
    
    jQuery.ajax({
        url: 'https://www.codeschool.com/users/Phinux.json',
        dataType: 'jsonp',
        success: function (response) {
            // handle response
            var arr = response.courses.completed;
            for (var i = 0; i < arr.length; i++) {
                console.log(arr[i].title);
                $('<div></div>',{
                    'class'    : 'course'
                }).appendTo('#badges')
                .append('<h3>'+ arr[i].title + '</h3>')
                .append($('<img>', {
                    'src'  : arr[i].badge,
                }))
                .append($('<a>Course</a>', {
                    'class' : 'btn btn-primary',
                    'href'  : arr[i].url,
                    'target': '_blank'                        
                }))
            }           
        }
    });
});
