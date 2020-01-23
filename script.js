const carusel = {};
carusel.el = {};
carusel.el.container = document.querySelector(".car_wrapper");
carusel.el.left = document.querySelector(".left");
carusel.el.right = document.querySelector(".right");
carusel.el.pathStore = ['./shop/bag.png', './shop/bagTwo.png', './shop/bicycle.png', './shop/bigWhil.png', './shop/room.png', './shop/sedel.png', './shop/whil.png', './shop/whils.png'];
carusel.el.currentImg = [];
carusel.el.state = 5;
carusel.el.FirstItem = 0;
carusel.el.LastItem = carusel.el.state;
carusel.met = {};
carusel.met.makeCurImg = function(store, curImg, first, last) {
    if (first > last) {
        for (let i = first; i < store.length; i++) {
            curImg.push(store[i]);
        }
        for (let i = 0; i < last; i++) {
            curImg.push(store[i]);
        }
    } else {
        for (let i = first; i < last; i++) {
            curImg.push(store[i]);
        }
    }
}
carusel.met.clearHTML = function(container) {
    if (container.length != 0) {
        while (container.length > 0) {
            container.pop();
        }
    }
}
carusel.met.makeMurkUp = function(container, curImg) {
    let markup = "";
    for (let i = 0; i < curImg.length; i++) {
        markup += `<div class="car_item"><img src="${curImg[i]}" class="car_img"></div>`;
    }
    container.innerHTML = markup;
}
carusel.met.moveLeft = function(container) {
    if (carusel.el.FirstItem === 0) {
        carusel.el.FirstItem = container.length;
    }
    if (carusel.el.LastItem === 0) {
        carusel.el.LastItem = container.length;
    }
    carusel.el.FirstItem--;
    carusel.el.LastItem--;
}
carusel.met.moveRight = function(container) {
    carusel.el.FirstItem++;
    carusel.el.LastItem++;
    if (carusel.el.FirstItem === container.length) {
        carusel.el.FirstItem = 0;
    }
    if (carusel.el.LastItem === container.length) {
        carusel.el.LastItem = 0;
    }
}
carusel.met.makeCurImg(carusel.el.pathStore, carusel.el.currentImg, carusel.el.FirstItem, carusel.el.LastItem);
carusel.met.makeMurkUp(carusel.el.container, carusel.el.currentImg);
carusel.el.left.addEventListener('click', () => {
    carusel.met.clearHTML(carusel.el.currentImg)
    carusel.met.moveLeft(carusel.el.pathStore);
    carusel.met.makeCurImg(carusel.el.pathStore, carusel.el.currentImg, carusel.el.FirstItem, carusel.el.LastItem);
    carusel.met.makeMurkUp(carusel.el.container, carusel.el.currentImg);
})
carusel.el.right.addEventListener('click', () => {
    carusel.met.clearHTML(carusel.el.currentImg)
    carusel.met.moveRight(carusel.el.pathStore);
    carusel.met.makeCurImg(carusel.el.pathStore, carusel.el.currentImg, carusel.el.FirstItem, carusel.el.LastItem);
    carusel.met.makeMurkUp(carusel.el.container, carusel.el.currentImg);
})