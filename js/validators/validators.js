/**
   * Valida el contenido de un área de texto.
   * @param {HTMLTextAreaElement} textArea - Elemento de área de texto a validar.
   * @returns {boolean} - Devuelve `true` si la validación es exitosa, de lo contrario, `false`.
   */
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

  /**
   * Valida si el contenido cumple con el formato de números separados por comas.
   * @private
   * @param {string} content - Contenido a validar.
   * @returns {boolean} - Devuelve `true` si el contenido cumple con el formato, de lo contrario, `false`.
   */
function validateContent(content) {
    const regex = /^(\d+(\.\d+)?,)*\d+(\.\d+)?$/;
    if (regex.test(content)) {
        return true;
    }
    return false;
}

/**
   * Valida si hay números repetidos en un array.
   * @param {number[]} array - Array de números a validar.
   * @param {Element} textArea - Es elemento padre.
   * @returns {boolean} - Devuelve `true` si no hay números repetidos, de lo contrario, `false`.
   */
export function validateNumberRepeated(array, textArea) {
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



/**
   * Verifica si un array está ordenado de forma ascendente o descendente.
   * @param {number[]} array - Array de números a verificar.
   * @param {Element} textArea - Es elemento padre.
   * @returns {boolean} - Devuelve `true` si el array está ordenado, de lo contrario, `false`.
   */
export function isOrdered(array, textArea) {
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

 /**
   * Valida si el valor de entrada es un número.
   * @param {HTMLInputElement} input - Elemento de entrada a validar.
   * @returns {boolean} - Devuelve `true` si el valor de entrada es un número, de lo contrario, `false`.
   */
export function isNumber(input) {
    const numberRegex = /^-?\d+(\.\d+)?$/;
    if (numberRegex.test(input.value)) {
        input.parentElement.classList.remove("input__container__invalid");
        input.parentElement.querySelector(".input__message__error").innerHTML = "";
        return true;
    } else {
        input.parentElement.classList.add("input__container__invalid");
        input.parentElement.querySelector(".input__message__error").innerHTML = "El valor ingresado no es un número";
        return false;
    }
}