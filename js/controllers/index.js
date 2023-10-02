import { validateTextArea, validateNumberRepeated, irOrdered } from "../validators/validators.js";
import { stringToNumberArray } from "../algorithms/tools.js";

const textarea = document.querySelector("#input__txtArea");
const binarySearch = document.querySelector("#binary__search");
const mergeSort = document.querySelector("#merge__sort");
const displayTextarea = document.querySelector("#display__txtArea");

textarea.addEventListener("blur", function (e) {
    e.preventDefault();
    validateTextArea(textarea);
});

binarySearch.addEventListener("click", function (e) {
    e.preventDefault();
    const textAreaContent = textarea.value.replace(/\s+/g, '');
    if (validateTextArea(textarea)) {
        const array = stringToNumberArray(textAreaContent);
        console.log(array);
        /*  validar si hay numeros repetidos, si está ordenado y realizar la búsqueda, los 
        métodos ya están hechos e importados*/
    }
});

mergeSort.addEventListener("click", function (e) {
    e.preventDefault();
    const textAreaContent = textarea.value.replace(/\s+/g, '');
    if (validateTextArea(textarea)) {
        const array = stringToNumberArray(textAreaContent);
        console.log(array);
        /* implementar el mergeSort*/
    }
});
