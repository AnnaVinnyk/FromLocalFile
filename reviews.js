function WhatSay() {
    //инициирует нехватающие данные (фото клиента по имени клиента, логотип компании по названию компании)
    let nameInfo = document.getElementById("name").value;
    let photosInfo = null;
    let companyInfo = document.getElementById("company").value;
    let logosInfo = null;
    let positionInfo = document.getElementById("position").value;
    let flag = 0;

    for (let i = 0; i < DATA.length; i++) {
        if (flag == 2) break;
        if (DATA[i].name === nameInfo) {
            photosInfo = DATA[i].photos;
            flag++;
        }
        if (DATA[i].company === companyInfo) {
            logosInfo = DATA[i].logos;
            flag++;
        }
    }

    //восстанавливает монолог клиента по выбранному элементу radiobutton
    let clientReview = document.getElementsByName("monolog");
    let reviewInfo = null;

    for (let i = 0; i < DATA.length; i++) {
        if (clientReview[i].type == "radio" && clientReview[i].checked) {
            reviewInfo = DATA[i].review; break;
        }
    }

    //удаляет старую карточку с отзывом и создаёт новую
    document.getElementById('reviews').remove();
    let div = document.createElement('div');
    div.id = 'reviews';
    document.getElementById('reforma').appendChild(div);
    //создаёт пустой блок-карточку с отзывом клиента
    let div0 = document.createElement('div');
    div0.setAttribute('class', "blocks-item");
    document.getElementById('reviews').appendChild(div0);
    let div00 = document.createElement('div');
    div0.appendChild(div00);
    //голубая полоса с именем клиента
    div = document.createElement('div');
    div.setAttribute('class', "sub1-blocks-item");
    div.textContent = nameInfo;
    div00.appendChild(div);
    //создаёт пустое содержимое карточки
    let div1 = document.createElement('div');
    div1.setAttribute('class', "sub2-blocks-item");
    div00.appendChild(div1);
    //фото клиента
    let div2 = document.createElement('div');
    div2.setAttribute('class', "div-clients");
    div1.appendChild(div2);
    let img1 = document.createElement('img');
    img1.setAttribute('src', photosInfo);
    img1.setAttribute('alt', nameInfo);
    img1.setAttribute('class', "clients");
    div2.appendChild(img1);
    //голубая надпись под фото
    let div3 = document.createElement('div');
    div3.setAttribute('class', "blue-on-white");
    div1.appendChild(div3);
    let div4 = document.createElement('div');
    div4.setAttribute('class', "organization");
    div4.textContent = companyInfo;
    div3.appendChild(div4);
    let div5 = document.createElement('div');
    div5.setAttribute('class', "profession");
    div5.textContent = positionInfo;
    div3.appendChild(div5);
    //отзыв клиента (здесь ещё надо доработать вставку нужного текста!!!)
    let div6 = document.createElement('div');
    div6.setAttribute('class', "review");
    div6.textContent = reviewInfo;
    div1.appendChild(div6);
    //логотип компании
    let div7 = document.createElement('div');
    div7.setAttribute('class', "div-logos");
    div0.appendChild(div7);
    let img2 = document.createElement('img');
    img2.setAttribute('src', logosInfo);
    img2.setAttribute('alt', companyInfo);
    img2.setAttribute('class', "logos");
    div7.appendChild(img2);
}

