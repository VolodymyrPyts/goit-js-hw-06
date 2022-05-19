// Напиши скрипт который, при наборе текста в инпуте input#name - input(событие input),
//  подставляет его текущее значение в span#name - output.
// Если инпут пустой, в спане должна отображаться строка "Anonymous".

const refs = {
    areaInputName: document.querySelector("#name-input"),
    nameOutputField: document.querySelector("#name-output"),
}

refs.areaInputName.addEventListener("input", fieldOutput);
const outputEl = "Anonymous"

function fieldOutput(event) {
 
    if (refs.areaInputName !== "") {
        refs.areaInputName = event.currentTarget.value;
        console.log(refs.areaInputName)
        refs.nameOutputField.textContent = refs.areaInputName
        
    } else {
        refs.areaInputName = outputEl
        refs.nameOutputField.textContent = refs.areaInputName
    }
}