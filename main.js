
//Services Worker
if('serviceWorker' in navigator){
    console.log('Puedes usar los serivesworker en tu navegor');
   navigator.serviceWorker.register('./sw.js')
                                    .then(res => console.log('serviceworke Cargado correstamente',res))
                                    .catch(err => console.log('Serviceworker no se ha podido registrar',err));
   
}
    else{
        console.log('No puedes usar los serivesworker en tu navegor');
        }



$(document).ready(function(){
 
    $("#menu a").click(function(e){
        e.preventDefault();
    
     console.log($('#mail-footer').offset().top);

    $("html, boby").animate({
    scrolltop: $($(this).attr('href')).offset().top
    });

        return false;
    });
})