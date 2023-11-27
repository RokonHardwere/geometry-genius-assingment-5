document.getElementById('btn-blog').addEventListener('click',function(){
    window.location.href = 'blog.html';
})
function getInputFieldValueById(inputFieldId){
    const inputField = document.getElementById(inputFieldId);
    const inputFieldValueString = inputField.value;
    const inputFieldValue = parseFloat(inputFieldValueString);
    if(inputFieldValue<0 || inputFieldValue === '' || isNaN(inputFieldValue)){
        alert('errors !!please input the valid numbers for calculation');
    }
        return inputFieldValue;
}
function setTextElementValueById(elementId,newValue){
    const textElement= document.getElementById(elementId);
    textElement.innerText= newValue;
}
// for triangle-----------------
const arr = []
document.getElementById('btn-tr-calculator').addEventListener('click',function(){
    const calculationContainer =document.getElementById('main-calculation-container');
    calculationContainer.innerHTML = '';
    const triangleLeft=getInputFieldValueById('tr-b');
    const triangleRight =getInputFieldValueById('tr-h');
    const area= 0.5 * triangleLeft * triangleRight ;
    arr.push(area);
    let html = '';
    for(let i=0;i<arr.length;i++){
        html = html + `
        <li class="my-3">
        <span>${i+1}.</span>
        <span>Triangle</span>
        <span id="tri-result-${arr.length}" class="ml-9">${arr[i]}</span>
        <span>cm<sup>2</sup></span>
        <button id="btn-m" class="ml-2 px-3 py-2 bg-blue-600 rounded-lg text-white">Convert to m<sup>2</sup></button>
        </li>
                    `
    }
    calculationContainer.innerHTML = html;
    setTextElementValueById('tri-ab',triangleLeft);
    setTextElementValueById('tri-ah',triangleRight);
})
document.getElementById('tri-color').addEventListener('mouseover',function(){
    const triangleColor = document.getElementById('tri-color');
    const aray = ['red','yellow','green'];
   for (let i = 0; i < aray.length; i++) {
       const index = i;
       const element = aray[index];
       triangleColor.style.backgroundColor = ''+ element;
       

}
    // triangleColor.style.backgroundColor = 'red';
})
document.getElementById('tri-color').addEventListener('mouseout',function(){
    const triangleColor = document.getElementById('tri-color');
    triangleColor.style.backgroundColor = '';
})
// for rectangle ---------------
document.getElementById('btn-rac-calculator').addEventListener('click',function(){
    const calculationContainer =document.getElementById('main-calculation-container');
    calculationContainer.innerHTML = '';
    const rectangleLeft=getInputFieldValueById('rac-b');
    const rectangleRight =getInputFieldValueById('rac-h');
    const area = rectangleLeft * rectangleRight;
    arr.push(area);
    let html = '';
    for(let i=0;i<arr.length;i++){
        html = html + `<li class="my-3"><span>${i+1}.</span><span>Rectangle</span><span id="ell-result-${arr.length}" class="ml-9">${arr[i]}</span><span>cm<sup>2</sup></span><button class="ml-2 px-3 py-2 bg-blue-600 rounded-lg text-white">Convert to m<sup>2</sup></button></li>`
    }
    calculationContainer.innerHTML = html;
    setTextElementValueById('rac-ab',rectangleLeft);
    setTextElementValueById('rac-ah',rectangleRight);
})
// for ellipse------------
// document.getElementById('btn-ell-calculator').addEventListener('click',function(){
//     arr.push('');
//     const ellipseLeft=getInputFieldValueById('ell-b');
//     const ellipseRight =getInputFieldValueById('ell-h');
//     const areaResult = 3.1416 * ellipseLeft * ellipseRight;
//     const area = areaResult.toFixed(2);
//     setTextElementValueById('ell-ah',ellipseRight);
//     setTextElementValueById('ell-ab',ellipseLeft);

//     const calculationContainer =document.getElementById('main-calculation-container');
//     const ol = document.createElement('ol');
//     ol.classList.add('flex','justify-around','items-center','mt-2');
//     const li = document.createElement('li');
//     li.classList.add('my-3');
//     const span0 =document.createElement('span');
//     span0.innerText = arr.length + '.';
//     const span1 = document.createElement('span');
//     // span1.classList.add('mx-9');
//     span1.innerText = 'Ellipse';
//     const span2 = document.createElement('span');
//     span2.setAttribute('id','ell-result');
//     span2.classList.add('ml-9')
//     const span3 = document.createElement('span');
//     span3.innerText = 'cm';
//     const sup = document.createElement('sup');
//     sup.innerText = '2';
//     const button = document.createElement('button');
//     button.classList.add('ml-2','px-3','py-2','bg-blue-600','rounded-lg','text-white');
//     button.innerText = 'Convert to m';
//     const btnSup = document.createElement('sup');
//     btnSup.innerText='2';
//     li.appendChild(span0);
//     li.appendChild(span1);
//     li.appendChild(span2);
//     li.appendChild(span3);
//     span3.appendChild(sup);
//     li.appendChild(button);
//     button.appendChild(btnSup);
//     ol.appendChild (li);
//     calculationContainer.appendChild(ol);

//     setTextElementValueById('ell-result',area);
// })
document.getElementById('btn-ell-calculator').addEventListener('click',function(){
    const calculationContainer =document.getElementById('main-calculation-container');
    calculationContainer.innerHTML = '';
    const ellipseLeft=getInputFieldValueById('ell-b');
    const ellipseRight =getInputFieldValueById('ell-h');
    const areaResult = 3.1416 * ellipseLeft * ellipseRight;
    const area = areaResult.toFixed(2);
    arr.push(area);
    let html = '';
    for(let i=0;i<arr.length;i++){
        html = html + `<li class="my-3"><span>${i+1}.</span><span>Ellipse</span><span id="ell-result-${arr.length}" class="ml-9">${arr[i]}</span><span>cm<sup>2</sup></span><button class="ml-2 px-3 py-2 bg-blue-600 rounded-lg text-white">Convert to m<sup>2</sup></button></li>`
    }
    calculationContainer.innerHTML = html
    setTextElementValueById('ell-ah',ellipseRight);
    setTextElementValueById('ell-ab',ellipseLeft);

})

