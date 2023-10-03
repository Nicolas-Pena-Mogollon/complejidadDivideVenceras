// Importación de funciones
import { validateTextArea, isNumber, validateNumberRepeated, isOrdered } from "../validators/validators.js";
import { stringToNumberArray, mergeSort, binarySearch } from "../algorithms/tools.js";

// Obtención de elementos HTML mediante su ID
const textarea = document.querySelector("#input__txtArea");
const binarySearchItem = document.querySelector("#binary__search");
const mergeSortItem = document.querySelector("#merge__sort");
const displayTextarea = document.querySelector("#display__txtArea");
const numberInput = document.querySelector("#number_value");

// Evento que se dispara con interacción en el text area
textarea.addEventListener("blur", function (e) {
    e.preventDefault();
    //valida contenido del textarea
    validateTextArea(textarea);
});

// Evento que se dispara al hacer clic en el botón "Binary Search"
binarySearchItem.addEventListener("click", function (e) {
    e.preventDefault();
    // Obtener el contenido del text area y eliminar espacios en blanco
    const textAreaContent = textarea.value.replace(/\s+/g, '');
    // Validar el contenido del área de texto y que el número de entrada sea válido
    if (validateTextArea(textarea) && isNumber(numberInput)) {
        const array = stringToNumberArray(textAreaContent);

        
        if (validateNumberRepeated(array, textarea) && isOrdered(array, textarea)){
            displayTextarea.value = "";
            const targetNumber = parseFloat(numberInput.value);
            const resultBin = binarySearch(array, targetNumber);

            if (resultBin !== -1) {
                displayTextarea.value = `El número ${targetNumber} fue encontrado en la posición ${resultBin + 1}.`;


            } else {
                displayTextarea.value = `El número ${targetNumber} no fue encontrado en el array.`;
            }


        }
        
        /*  validar si hay numeros repetidos, si está ordenado y realizar la búsqueda, los 
        métodos ya están hechos e importados*/
    }
});

// Evento que se dispara al hacer clic en el botón "Merge Sort"
mergeSortItem.addEventListener("click", function (e) {
    e.preventDefault();
    // Obtener el contenido del área de texto y eliminar espacios en blanco
    const textAreaContent = textarea.value.replace(/\s+/g, '');
    // Validar el contenido del área de texto
    if (validateTextArea(textarea)) {
        displayTextarea.value = "";
        const array = stringToNumberArray(textAreaContent);
        const resultArray = mergeSort(array);
        displayTextarea.value = resultArray;
        /* implementar el mergeSort*/
    }
});
