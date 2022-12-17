const toggle = document.querySelector('.toggle');

toggle.addEventListener('click', () => {
  const categories = document.querySelector('.categories');

  if (categories.style.display === 'none' || categories.style.display === '') {
    categories.style.display = 'flex';
  }
  else {
    categories.style.display = 'none';
  }

  const icon = toggle.querySelector('i');

  if (icon.className === 'uil uil-bars') {
    icon.className = 'uil uil-times';
  } else {
    icon.className = 'uil uil-bars';
  }
})

const faqs = document.querySelectorAll('.faq');

faqs.forEach (faq => {
  faq.addEventListener('click', () => {
    faq.classList.toggle('open');

    const icon = faq.querySelector('.faq__icon i');

    if (icon.className === 'uil uil-plus') {
      icon.className = 'uil uil-minus';
    } else {
      icon.className = 'uil uil-plus'
    }
  })
})