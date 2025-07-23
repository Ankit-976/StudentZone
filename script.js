function dropDown(elementId){
    const d=document.getElementById(elementId);
    if(d.classList.contains('hidden')){
        d.classList.remove('hidden');
        d.classList.add('visible');
    }
    else{
        d.classList.add('hidden');
        d.classList.remove('visible');
    }
} 