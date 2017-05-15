$(document).ready(function(){
    var hello_world = '<div class="row text-center"><div class="col-xs-offset-4 col-xs-4 well well-sm"><p>Hello World</p></div></div>'
    var hello_cmm = '<div class="row text-center"><div class="bg-primary col-xs-offset-4 col-xs-4 alert alert-primary"><p>Hello Cover My Meds</p></div></div>'
    var append_me = $("#hello_container")

    for(var i = 0; i < 299; i++) {
        ((i+1)%5 === 0)? append_me.append(hello_cmm) : append_me.append(hello_world)
    }

});
