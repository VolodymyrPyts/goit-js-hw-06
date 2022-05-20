// Напиши скрипт который, при наборе текста в инпуте input#name - input(событие input),
//  подставляет его текущее значение в span#name - output.
// Если инпут пустой, в спане должна отображаться строка "Anonymous".

const refs = {
    areaInputName: document.querySelector("#name-input"),
    nameOutputField: document.querySelector("#name-output"),
}

refs.areaInputName.addEventListener("input", onFieldOutput);
const outputEl = "Anonymous"

function onFieldOutput(event) {
    event.preventDefault();
    refs.areaInputName = event.currentTarget.value;
    console.log(refs.areaInputName)
    refs.nameOutputField.textContent = refs.areaInputName
    
    if (refs.areaInputName === "") {
        refs.areaInputName = outputEl
        refs.nameOutputField.textContent = refs.areaInputName
        
    }
}