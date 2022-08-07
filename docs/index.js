const section = document.querySelector('section');

section.style.display = 'none';

const Main = document.querySelector('main');

const DropDown1 = document.getElementById('dd1-first');

const DropDown2 = document.getElementById('dd1-second');

const DropDownArrow1 = document.getElementById('dd-arrow1');

const DropDownArrow2 = document.getElementById('dd-arrow2');

let Menu = document.getElementById('mobile')

let showMenu = document.getElementById('menu');

let hideMenu = document.getElementById('cancel-btn');

const upArrow = './src/icon-arrow-up.svg';

const downArrow = './src/icon-arrow-down.svg';

DropDownArrow1.addEventListener('click', ()=>{

    if(DropDown1.style.display === 'none'){

        DropDown1.style.display = 'flex';

        DropDownArrow1.setAttribute('src',upArrow);
    }
    else{

        DropDownArrow1.setAttribute('src',downArrow);

        DropDown1.style.display = 'none';

    }

})

DropDownArrow2.addEventListener('click', ()=>{

    if(DropDown2.style.display === 'none'){

        DropDown2.style.display = 'flex';

        DropDownArrow2.setAttribute('src',upArrow);
    }
    else{

        DropDownArrow2.setAttribute('src',downArrow);

        DropDown2.style.display = 'none';

    }

})

Menu.style.right = '-64%';

showMenu.onclick = ()=>{

    if(Menu.style.right === '-64%'){

        Menu.style.right = '0%';

        section.style.display = 'block';
       
    }

};
 
hideMenu.onclick = ()=>{

    if(Menu.style.right === '0%'){

        Menu.style.right = '-64%';

        section.style.display = 'none';
        
    }

}

let mainUl = document.querySelector('.mobile-M-ul'); 

let subLi = document.querySelectorAll('.M-ul-li-new')

let MDropDownArrow1 = document.getElementById('mobile-dd1');

let MDropDownArrow2 = document.getElementById('mobile-dd2');

let firstDropDown = document.getElementById('sub-ul1');

let secondDropDown = document.getElementById('sub-ul2');

firstDropDown.style.display = 'none';

secondDropDown.style.display = 'none';

function addAClass(){

    for(var i = 0; i < subLi.length; i++){

        subLi[i].classList.replace('M-ul-li-new','M-ul-li');

    }

}

function removeAClass(){

    for(var i = 0; i < subLi.length; i++){

        subLi[i].classList.replace('M-ul-li','M-ul-li-new');

    }
} 

console.log(MDropDownArrow1)

MDropDownArrow1.onclick = ()=>{

    if(firstDropDown.style.display === 'none'){

        MDropDownArrow1.setAttribute('src',upArrow);

        mainUl.classList.replace('mobile-M-ul','M-ul');

        addAClass();

        firstDropDown.style.display = 'flex';

    }
    else if(firstDropDown.style.display === 'flex' && secondDropDown.style.display === 'flex'){

        MDropDownArrow1.setAttribute('src',downArrow);

        mainUl.classList.replace('mobile-M-ul','M-ul');

        addAClass();

        firstDropDown.style.display = 'none';
    }
    else{

        MDropDownArrow1.setAttribute('src',downArrow);

        mainUl.classList.replace('M-ul','mobile-M-ul');

        removeAClass();

        firstDropDown.style.display = 'none';

    }

}

MDropDownArrow2.onclick = ()=>{

    if(secondDropDown.style.display === 'none'){

        MDropDownArrow2.setAttribute('src',upArrow);

        mainUl.classList.replace('mobile-M-ul','M-ul');

        addAClass();

        secondDropDown.style.display = 'flex';

    }
    else if(secondDropDown.style.display === 'flex' && firstDropDown.style.display === 'flex'){

        MDropDownArrow2.setAttribute('src',downArrow);

        mainUl.classList.replace('mobile-M-ul','M-ul');

        addAClass();

        secondDropDown.style.display = 'none';

    }else{

        MDropDownArrow2.setAttribute('src',downArrow);

        MDropDownArrow2.setAttribute('src',downArrow);

        mainUl.classList.replace('M-ul','mobile-M-ul');

        removeAClass();

        secondDropDown.style.display = 'none';

    }

}