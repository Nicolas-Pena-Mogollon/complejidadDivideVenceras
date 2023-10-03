/**
 * Convierte una cadena de texto que contiene números separados por comas en un array de números.
 *
 * @param {string} string - La cadena de texto a convertir.
 * @returns {number[]} - Un array de números resultante.
 */
export function stringToNumberArray(string) {
    // Divide la cadena en partes usando la coma como delimitador
    const parts = string.split(',');
    // Mapea cada parte a un número después de eliminar los espacios alrededor
    return parts.map((part) => parseFloat(part.trim()));
}

/**
 * Implementa el algoritmo de Merge Sort para ordenar un array de números.
 *
 * @param {number[]} arr - El array de números a ser ordenado.
 * @returns {number[]} - El array ordenado.
 */
export function mergeSort(arr) {
    // Si el array tiene 1 elemento o menos, está ordenado por definición
    if (arr.length <= 1) {
        return arr;
    }

    // Encuentra el punto medio del array
    const middle = Math.floor(arr.length / 2);
    // Divide el array en dos mitades
    const left = arr.slice(0, middle);
    const right = arr.slice(middle);

    // Combina y ordena recursivamente las dos mitades
    return merge(mergeSort(left), mergeSort(right));
}

/**
 * Fusiona dos arrays ordenados en un solo array ordenado.
 *
 * @param {number[]} left - El primer array ordenado.
 * @param {number[]} right - El segundo array ordenado.
 * @returns {number[]} - El array combinado y ordenado.
 */
function merge(left, right) {
    let result = [];
    let leftIndex = 0;
    let rightIndex = 0;

    // Combina los elementos de left y right en el array resultante
    while (leftIndex < left.length && rightIndex < right.length) {
        if (left[leftIndex] < right[rightIndex]) {
            result.push(left[leftIndex]);
            leftIndex++;
        } else {
            result.push(right[rightIndex]);
            rightIndex++;
        }
    }

    // Añade los elementos restantes de left y right
    return result.concat(left.slice(leftIndex)).concat(right.slice(rightIndex));
}


/**
 * Implementa el algoritmo de búsqueda binaria en un array ordenado.
 *
 * @param {number[]} sortedArray - El array ordenado.
 * @param {number} target - El número objetivo a buscar.
 * @returns {number} - El índice del elemento si se encuentra, o -1 si no se encuentra.
 */
export function binarySearch(sortedArray, target) {
    let left = 0;
    let right = sortedArray.length - 1;

    // Realiza la búsqueda binaria
    while (left <= right) {
        const middle = Math.floor((left + right) / 2);

        if (sortedArray[middle] == target) {
            // Se encontró el elemento, devuelve el índice.
            return middle; 
        } else if (sortedArray[middle] < target) {
            left = middle + 1;
        } else {
            right = middle - 1;
        }
    }

    // El elemento no se encontró en el array.
    return -1; 
}

