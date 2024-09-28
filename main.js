const faqAnswers = document.querySelectorAll('.item > p');
const faqItems = document.querySelectorAll('.item');
const faqQuest = document.querySelectorAll('.item .faq-quest');

for (let i = 0; i <= faqQuest.length; i++) {
  faqQuest[i].addEventListener("click", () => {

    faqQuest[i].classList.toggle('active');

    if (faqQuest[i].classList.contains('active')) {

      faqAnswers[i].style.maxHeight = `${faqAnswers[i].scrollHeight}px`;
      faqItems[i].style.gridGap = '1.5rem';
    
    } else {
      
      faqAnswers[i].style.maxHeight = 0;
      faqItems[i].style.gridGap = 0;
    
    }
  })
  
  if (faqQuest[i].classList.contains('active')) {

    faqAnswers[i].style.maxHeight = `${faqAnswers[i].scrollHeight}px`;
    faqItems[i].style.gridGap = '1.5rem';
  
  } else {
    
    faqAnswers[i].style.maxHeight = 0;
    faqItems[i].style.gridGap = 0;
  
  }
}