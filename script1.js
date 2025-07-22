const a=document.querySelector('.menu-icon');
const b=document.querySelector('.dropdown');
a.addEventListener('click',()=>{
    if(b.innerHTML.trim()===''){
    b.innerHTML=`<ul >
                    <li class="elements"><a href="../home.html" target="_blank">Home</a></li>
                <li class="elements"><a href="" target="_blank">Subjects</a></li>
                <li class="elements"><a href="" target="_blank">Upload</a></li>
                <li class="elements"><a href="" target="_blank">About</a></li>
                </ul>`
    }
    else{
        b.innerHTML='';
    }
})