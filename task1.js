     
     
     const [a1, b1, c1, a2, b2, c2] = [1, 3, 2, 9, 2, 7];
     let x = (c1 - b1 * ((a2 * c1 - c2 * a1) / (b1 * a2 + a1 * b2))) / a1;
     let y = (a2 * c1 - a1 * c2) / (b1 * a2 + a1 * b2);
     console.log('Ответ: x = ', x, ';', 'y = ', y, '.');
     
