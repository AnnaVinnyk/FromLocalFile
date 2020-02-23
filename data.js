let DATA,
    DATAjson,
    flagok = 0;

function readFile(object) {
    flagok++;
    var file = object.files[0];
    //console.log(file);
    let nameLength = file.name.length;
    if (file.name.indexOf('.json', file.name.length - 5) >= 0) {
        //чтение строки из файла JSON
        var reader = new FileReader()
        reader.onload = function () {
            //console.log('Вход в функцию загрузки содержимого файла\n' + String(reader.result));
            document.getElementById('out').innerHTML = reader.result;
            //document.getElementById('out').className = "file";

        }
        reader.readAsText(file);
    }
    else {
        //отсекает в имени файла часть с расширением
        let tempName = file.name.slice(0, file.name.lastIndexOf('.', file.name.length)) + '.json';
        alert('Выбранный файл ' + file.name + ' не соответсвует формату JSON!\nПопробуйте выбрать файл ещё раз (что-то в роде ' + tempName + ').\n');
        flagok = 0;
    };
    if (flagok == 1) {
        document.getElementById('remark').innerText = "Для повторного выбора файла JSON перезагрузите страницу";
        document.getElementById('load').className = 'button-temp top-zero';
        document.getElementById('load').innerText = "Загрузить данные файла в конструктор";
    }
    if (flagok == 2) {
        /*document.getElementById('remark').innerText = "Для повторного выбора файла JSON перезагрузите страницу";
        document.getElementById('load').className = 'button-temp top-zero';
        document.getElementById('load').innerText = "Загрузить данные файла в конструктор";*/
        DATAjson = document.getElementById('out').innerText;
        DATA = JSON.parse(DATAjson);
        DATAjson = JSON.stringify(DATA);
        console.log(DATAjson);
        /*let A = document.createElement('a');
        A.href = "data:text/plain;charset=utf-8,%EF%BB%BF' + encodeURIComponent(DATAjson) + '";
        A.download = "Clients.json";
        A.innerText = "Clients.json";
        document.getElementById('forma-1').appendChild(A);*/
        //фомирование формы конструктора
        for (let i = 0; i < DATA.length; i++) {
            let optn = document.createElement('option');
            optn.innerText = DATA[i].name;
            document.getElementById('name').appendChild(optn);
            let comp = document.createElement('option');
            comp.innerText = DATA[i].company;
            document.getElementById('company').appendChild(comp);
            let lbl = document.createElement('label');
            document.getElementById('review').appendChild(lbl);
            lbl.innerText = DATA[i].review;
            let rad = document.createElement('input');
            rad.type = 'radio';
            rad.name = 'monolog';
            if (i == 0) { rad.checked = true; }
            lbl.prepend(rad);
        }
        for (i = 0; i < PROF.length; i++) {
            optn = document.createElement('option');
            optn.innerText = PROF[i].position;
            document.getElementById('position').appendChild(optn);
        }
        document.getElementById('load').onclick = '';
        document.getElementById('save').className = 'visible';
    }
    //var text = 'как записать строку в файл ".txt" с помощью js?';
    //document.write('<a href="data:text/plain;charset=utf-8,%EF%BB%BF' + encodeURIComponent(text) + '" download="text.txt">text.txt</a>');
}

let PROF = [{ "position": "Recruitment Manager" }, { "position": "HR Manager" }, { "position": "HR Specialist" }, { "position": "Региональный директор" }];
//console.log(DATA);
function loadDATA() {
    DATAjson = document.getElementById('out').innerText;
    DATA = JSON.parse(DATAjson);
    //фомирование формы конструктора
    for (let i = 0; i < DATA.length; i++) {
        let optn = document.createElement('option');
        optn.innerText = DATA[i].name;
        document.getElementById('name').appendChild(optn);
        let comp = document.createElement('option');
        comp.innerText = DATA[i].company;
        document.getElementById('company').appendChild(comp);
        let lbl = document.createElement('label');
        document.getElementById('review').appendChild(lbl);
        lbl.innerText = DATA[i].review;
        let rad = document.createElement('input');
        rad.type = 'radio';
        rad.name = 'monolog';
        if (i == 0) { rad.checked = true; }
        lbl.prepend(rad);
    }
    for (i = 0; i < PROF.length; i++) {
        optn = document.createElement('option');
        optn.innerText = PROF[i].position;
        document.getElementById('position').appendChild(optn);
    }

}

/*let DATAjson = JSON.stringify(DATA, null, 4);*/

//функция для выбора и загрузки содержимого файла в текстовом виде
/*function readFile(object) {
    var file = object.files[0]
    var reader = new FileReader()
    reader.onload = function () {
        document.getElementById('out').innerHTML = reader.result
    }
    reader.readAsText(file)
}*/
