function insertionSort(arr) {
    // Traverse le tableau à partir du premier élément
    for (const i = 1; i < arr.length; i++) {
      const current = arr[i];
      const j = i - 1;
      
      // Déplace les éléments de arr[0..i-1] qui sont plus grands que current
      // d'une position vers la droite pour faire de la place à l'insertion
      while (j >= 0 && arr[j] > current) {
        arr[j + 1] = arr[j];
        j--;
      }
      
      // Insère l'élément current à sa position correcte
      arr[j + 1] = current;
    }
    
    return arr;
  }
  
  const arr = [5, 6, 77, 88, 99, 1, 3, 4, 2, 0];
  console.log("Tableau avant tri :", arr);
  arr = insertionSort(arr);
  console.log("Tableau après tri :", arr);
  