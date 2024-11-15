     // Lấy phần tử bằng id
     var elementById = document.getElementById('myElement');
     console.log(elementById.textContent);

     // Lấy phần tử bằng class
     var elementsByClass = document.getElementsByClassName('myClass');
     console.log(elementsByClass[0].textContent);

     // Lấy phần tử bằng tag
     var paragraphs = document.getElementsByTagName('p');
     console.log(paragraphs[1].textContent);

     // Lấy phần tử bằng querySelector
     var firstParagraph = document.querySelector('p');
     console.log(firstParagraph.textContent);

     // Lấy tất cả phần tử bằng querySelectorAll
     var allParagraphs = document.querySelectorAll('p');
     allParagraphs.forEach(function(p) {
         console.log(p.textContent);
     });