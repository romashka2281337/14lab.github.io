function changetext(div) {
    const newText = prompt("Введите новый текст:", div.textContent);
    if (newText !== null) div.textContent = newText;
  }
  
  function changeLi(li) {
    const newText = prompt("Введите новый текст для пункта:", li.textContent);
    if (newText !== null) li.textContent = newText;
  }
  
  function changeLanguage(div) {
    alert(`Вы выбрали язык: ${div.textContent}`);
  }
  
  function captureImage() {
    const element = document.getElementById("main");
    const options = {
      margin: [10, 10, 10, 10],
      filename: "resume.pdf",
      html2canvas: { scale: 2, useCORS: true },
      jsPDF: { unit: "mm", format: "a4", orientation: "portrait" }
    };
  
    html2pdf()
      .set(options)
      .from(element)
      .save()
      .catch((error) => {
        console.error("Ошибка при создании PDF:", error);
      });
  }
  
