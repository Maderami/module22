let ulFlagList = document.getElementById('ulFlagList');
function drawFlags(countryFlag) {
    let li = document.createElement('li');
    let p = document.createElement('p');
    // Создаем элемент SVG
    if(countryFlag === "Russian Federation") {
        // Добавляем флаг России
        const svgRus = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
        svgRus.setAttribute('width', '180');
        svgRus.setAttribute('height', '120');
        const russianFlag = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
        russianFlag.setAttribute('width', '180');
        russianFlag.setAttribute('height', '120');
        russianFlag.setAttribute('viewBox', '0 0 180 120');
        russianFlag.setAttribute('xmlns', 'http://www.w3.org/2000/svg');

        // Добавляем прямоугольник белого цвета
        const whiteRRect = document.createElementNS('http://www.w3.org/2000/svg', 'rect');
        whiteRRect.setAttribute('x', '0');
        whiteRRect.setAttribute('y', '0');
        whiteRRect.setAttribute('width', '180');
        whiteRRect.setAttribute('height', '40');
        whiteRRect.setAttribute('fill', 'white');

        // Добавляем прямоугольник синего цвета
        const blueRRect = document.createElementNS('http://www.w3.org/2000/svg', 'rect');
        blueRRect.setAttribute('x', '0');
        blueRRect.setAttribute('y', '40');
        blueRRect.setAttribute('width', '180');
        blueRRect.setAttribute('height', '40');
        blueRRect.setAttribute('fill', 'blue');
        const redRRect = document.createElementNS('http://www.w3.org/2000/svg', 'rect');
        redRRect.setAttribute('x', '0');
        redRRect.setAttribute('y', '80');
        redRRect.setAttribute('width', '180');
        redRRect.setAttribute('height', '40');
        redRRect.setAttribute('fill', 'red');
        // Добавляем элементы в SVG
        russianFlag.appendChild(whiteRRect);
        russianFlag.appendChild(blueRRect);
        russianFlag.appendChild(redRRect);
        // Добавляем SVG с флагом России в основной SVG
        svgRus.appendChild(russianFlag);
        p.innerHTML = 'Флаг Российской Федерации';
        li.classList.add('col');
        li.classList.add('col-lg-3');
        li.style = 'display: inline;';
        li.appendChild(p);
        li.appendChild(svgRus);
        ulFlagList.appendChild(li);
    }else if(countryFlag === "France"){
        // Добавляем флаг Франции
        const svgFran = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
        svgFran.setAttribute('width', '180');
        svgFran.setAttribute('height', '120');
        const franceFlag = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
        franceFlag.setAttribute('width', '180');
        franceFlag.setAttribute('height', '120');
        franceFlag.setAttribute('viewBox', '0 0 180 120');
        franceFlag.setAttribute('xmlns', 'http://www.w3.org/2000/svg');
        // Добавляем прямоугольник синего цвета
        const blueFRect = document.createElementNS('http://www.w3.org/2000/svg', 'rect');
        blueFRect.setAttribute('x', '0');
        blueFRect.setAttribute('y', '0');
        blueFRect.setAttribute('width', '60');
        blueFRect.setAttribute('height', '120');
        blueFRect.setAttribute('fill', 'blue');
        // Добавляем прямоугольник белого цвета
        const whiteFRect = document.createElementNS('http://www.w3.org/2000/svg', 'rect');
        whiteFRect.setAttribute('x', '60');
        whiteFRect.setAttribute('y', '0');
        whiteFRect.setAttribute('width', '60');
        whiteFRect.setAttribute('height', '120');
        whiteFRect.setAttribute('fill', 'white');
        const redFRect = document.createElementNS('http://www.w3.org/2000/svg', 'rect');
        redFRect.setAttribute('x', '120');
        redFRect.setAttribute('y', '0');
        redFRect.setAttribute('width', '60');
        redFRect.setAttribute('height', '120');
        redFRect.setAttribute('fill', 'red');

        // Добавляем элементы в SVG
        franceFlag.appendChild(redFRect);
        franceFlag.appendChild(blueFRect);
        franceFlag.appendChild(whiteFRect);

        // Добавляем SVG с флагом Франции в основной SVG
        svgFran.appendChild(franceFlag);
        p.innerHTML = 'Флаг Франции';
        li.classList.add('col');
        li.classList.add('col-lg-3');
        li.style = 'display: inline;';
        li.appendChild(p);
        li.appendChild(svgFran);
        ulFlagList.appendChild(li);
    }else if(countryFlag === "Japanese"){
        // Добавляем флаг Японии
        const svgJap = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
        svgJap.setAttribute('width', '180');
        svgJap.setAttribute('height', '120');
        const japaneseFlag = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
        japaneseFlag.setAttribute('width', '180');
        japaneseFlag.setAttribute('height', '120');
        japaneseFlag.setAttribute('viewBox', '0 0 180 120');
        japaneseFlag.setAttribute('xmlns', 'http://www.w3.org/2000/svg');

        // Добавляем прямоугольник белого цвета
        const whiteJRect = document.createElementNS('http://www.w3.org/2000/svg', 'rect');
        whiteJRect.setAttribute('x', '0');
        whiteJRect.setAttribute('y', '0');
        whiteJRect.setAttribute('width', '180');
        whiteJRect.setAttribute('height', '120');
        whiteJRect.setAttribute('fill', 'white');
        const redJCirc = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
        redJCirc.setAttribute('cx', '90');
        redJCirc.setAttribute('cy', '60');
        redJCirc.setAttribute('r', '35');
        redJCirc.setAttribute('fill', 'red');

        // Добавляем элементы в SVG
        japaneseFlag.appendChild(whiteJRect);
        japaneseFlag.appendChild(redJCirc);


        // Добавляем SVG с флагом Японии в основной SVG
        svgJap.appendChild(japaneseFlag);
        p.innerHTML = 'Флаг Японии';
        li.classList.add('col');
        li.classList.add('col-lg-3');
        li.style = 'display: inline;';
        li.appendChild(p);
        li.appendChild(svgJap);
        ulFlagList.appendChild(li);
    }else if(countryFlag === "Finland"){
        // Добавляем флаг Финляндии
        const svgFin = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
        svgFin.setAttribute('width', '180');
        svgFin.setAttribute('height', '120');
        const finlandFlag = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
        finlandFlag.setAttribute('width', '180');
        finlandFlag.setAttribute('height', '120');
        finlandFlag.setAttribute('viewBox', '0 0 180 120');
        finlandFlag.setAttribute('xmlns', 'http://www.w3.org/2000/svg');

        // Добавляем прямоугольник белого цвета
        const whiteFinRect = document.createElementNS('http://www.w3.org/2000/svg', 'rect');
        whiteFinRect.setAttribute('x', '0');
        whiteFinRect.setAttribute('y', '0');
        whiteFinRect.setAttribute('width', '180');
        whiteFinRect.setAttribute('height', '120');
        whiteFinRect.setAttribute('fill', 'white');
        const blueHFinCirc = document.createElementNS('http://www.w3.org/2000/svg', 'rect');
        blueHFinCirc.setAttribute('x', '0');
        blueHFinCirc.setAttribute('y', '50');
        blueHFinCirc.setAttribute('width', '180');
        blueHFinCirc.setAttribute('height', '20');
        blueHFinCirc.setAttribute('fill', 'blue');
        const blueVFinCirc = document.createElementNS('http://www.w3.org/2000/svg', 'rect');
        blueVFinCirc.setAttribute('x', '50');
        blueVFinCirc.setAttribute('y', '0');
        blueVFinCirc.setAttribute('width', '20');
        blueVFinCirc.setAttribute('height', '120');
        blueVFinCirc.setAttribute('fill', 'blue');
        // Добавляем элементы в SVG
        finlandFlag.appendChild(whiteFinRect);
        finlandFlag.appendChild(blueHFinCirc);
        finlandFlag.appendChild(blueVFinCirc);

        // Добавляем SVG с флагом Финляндии в основной SVG
        svgFin.appendChild(finlandFlag);
        p.innerHTML = 'Флаг Финляндии';
        li.classList.add('col');
        li.classList.add('col-lg-3');
        li.style = 'display: inline;';
        li.appendChild(p);
        li.appendChild(svgFin);
        ulFlagList.appendChild(li);
    }else if(countryFlag === "Switzerland"){
        // Добавляем флаг Швейцарии
        const svgSwiz = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
        svgSwiz.setAttribute('width', '180');
        svgSwiz.setAttribute('height', '120');
        const switzerlandFlag = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
        switzerlandFlag.setAttribute('width', '180');
        switzerlandFlag.setAttribute('height', '120');
        switzerlandFlag.setAttribute('viewBox', '0 0 180 120');
        switzerlandFlag.setAttribute('xmlns', 'http://www.w3.org/2000/svg');

        // Добавляем прямоугольник белого цвета
        const redSwizRect = document.createElementNS('http://www.w3.org/2000/svg', 'rect');
        redSwizRect.setAttribute('x', '0');
        redSwizRect.setAttribute('y', '0');
        redSwizRect.setAttribute('width', '180');
        redSwizRect.setAttribute('height', '120');
        redSwizRect.setAttribute('fill', 'red');
        const whiteHSwizRect = document.createElementNS('http://www.w3.org/2000/svg', 'rect');
        whiteHSwizRect.setAttribute('x', '10');
        whiteHSwizRect.setAttribute('y', '40');
        whiteHSwizRect.setAttribute('width', '160');
        whiteHSwizRect.setAttribute('height', '35');
        whiteHSwizRect.setAttribute('fill', 'white');
        const whiteVFinRect = document.createElementNS('http://www.w3.org/2000/svg', 'rect');
        whiteVFinRect.setAttribute('x', '70');
        whiteVFinRect.setAttribute('y', '10');
        whiteVFinRect.setAttribute('width', '40');
        whiteVFinRect.setAttribute('height', '100');
        whiteVFinRect.setAttribute('fill', 'white');
        // Добавляем элементы в SVG
        switzerlandFlag.appendChild(redSwizRect);
        switzerlandFlag.appendChild(whiteHSwizRect);
        switzerlandFlag.appendChild(whiteVFinRect);

        // Добавляем SVG с флагом Швейцарии в основной SVG
        svgSwiz.appendChild(switzerlandFlag);
        p.innerHTML = 'Флаг Швейцарии';
        li.classList.add('col');
        li.classList.add('col-lg-3');
        li.style = 'display: inline;';
        li.appendChild(p);
        li.appendChild(svgSwiz);
        ulFlagList.appendChild(li);
    }
}
window.addEventListener('load',function (){
    drawFlags('Russian Federation');
    drawFlags('France');
    drawFlags('Japanese');
    drawFlags('Finland');
    drawFlags('Switzerland');
});
