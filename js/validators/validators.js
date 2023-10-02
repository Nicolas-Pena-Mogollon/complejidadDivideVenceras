export function validateTextArea(textArea) {
    const content = textArea.value.replace(/\s+/g, '');
    if (textArea.validity['valueMissing']) {
        textArea.parentElement.classList.add("input__container__invalid");
        textArea.parentElement.querySelector(".input__message__error").innerHTML = "El campo debe ser llenado";
    } else if (!validateContent(content)) {
        textArea.parentElement.classList.add("input__container__invalid");
        textArea.parentElement.querySelector(".input__message__error").innerHTML = "Solo ingrese números separados por comas";
    } else {
        textArea.parentElement.classList.remove("input__container__invalid");
        textArea.parentElement.querySelector(".input__message__error").innerHTML = "";
        return true;
    }
    return false;
}

function validateContent(content) {
    const regex = /^(\d+(\.\d+)?,)*\d+(\.\d+)?$/;
    if (regex.test(content)) {
        return true;
    }
    return false;
}

export function validateNumberRepeated(array) {
    const viewedNumbers = new Set();
    var valid = true;
    for (const number of array) {
        if (viewedNumbers.has(number)) {
            valid = false;
        }
        viewedNumbers.add(number);
    }
    if (valid) {
        textArea.parentElement.classList.remove("input__container__invalid");
        textArea.parentElement.querySelector(".input__message__error").innerHTML = "";
    } else {
        textArea.parentElement.classList.add("input__container__invalid");
        textArea.parentElement.querySelector(".input__message__error").innerHTML = "No se permiten números repetidos en búsqueda binaria";
    }
    return valid;
}

export function irOrdered(array) {
    let isOrderedAscending = true;
    let isOrderedDescending = true;

    for (let i = 1; i < array.length; i++) {
        if (array[i] < array[i - 1]) {
            isOrderedAscending = false;
        }
        if (array[i] > array[i - 1]) {
            isOrderedDescending = false;
        }
    }
    if (isOrderedAscending || isOrderedDescending) {
        textArea.parentElement.classList.remove("input__container__invalid");
        textArea.parentElement.querySelector(".input__message__error").innerHTML = "";
    } else {
        textArea.parentElement.classList.add("input__container__invalid");
        textArea.parentElement.querySelector(".input__message__error").innerHTML = "El arreglo debe estar ordenado para búsqueda binaria";
    }
    return isOrderedAscending || isOrderedDescending;
}
