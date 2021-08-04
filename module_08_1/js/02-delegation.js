const refs = {
    tags: document.querySelector('.js-container'),
    addBtn: document.querySelector('.js-add-btn'),
}


refs.tags.addEventListener("click", onTagClick);

function onTagClick(event){
    if(event.target.nodeName !== "BUTTON"){
        console.log('Клікнули повз кнопку, виходимо!');
        return;
    }

    const currentActiveTab = event.currentTarget.querySelector('.active');

    if(currentActiveTab){
        console.log('Вже є активний таб!!!');
        currentActiveTab.classList.remove('active');
    }

    const nextActiveTab = event.target;
    nextActiveTab.classList.add('active');
}

// console.log(refs.tags.children.length);

const onAddBtnClick = function(){
    const btn = document.createElement('button');
    btn.type = "button";
    btn.textContent = `Кнопка ${refs.tags.children.length + 1}`;

    refs.tags.appendChild(btn);
}

refs.addBtn.addEventListener('click', onAddBtnClick);

