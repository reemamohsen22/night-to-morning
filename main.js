let stars = document.getElementById('stars');
let moon = document.getElementById('moon');
let Image= document.getElementById('Image');
let mountains = document.getElementById('mountains');
let Image1 = document.getElementById('Image1');
let boat = document.getElementById('boat');
let Reem = document.querySelector('.Reem');
window.onscroll= function(){
    let val =scrollY;
    stars.style.left =val + 'px';
    moon.style.top  =val * 4 +'px';
    Image.style.top  =val * 2 +'px';
    mountains.style.top  =val * 1.5 +'px';
    Image1.style.top  =val +'px';
    boat.style.top  =val +'px';
    boat.style.left  =val * 3 +'px';
    Reem.style.fontSize =val +'px';
    if(scrollY >= 67){
        Reem.style.fontSize =67 +'px';
        Reem.style.position = 'fixed';
        if(scrollY >= 401){
            Reem.style.display = 'none';
        }else{
            Reem.style.display = 'block';
        }
        if(scrollY >= 155){
            document.querySelector('.main').style.background = 'linear-gradient(#376281,#10001f)'
        }else{
            document.querySelector('.main').style.background = 'linear-gradient(#200016,#10001f)'
        }
    }
}
