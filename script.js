document.addEventListener('DOMContentLoaded', () => {
    const addItemButton = document.getElementById('add-item');
    const itemsContainer = document.getElementById('items-container');
  
    // Добавление новых проектов/сертификатов
    addItemButton.addEventListener('click', () => {
      const newItem = document.createElement('div');
      newItem.className = 'project-item';
      newItem.innerHTML = `
        <h3>New Project/Certificate</h3>
        <p>Description of your project or certificate goes here.</p>
      `;
      itemsContainer.appendChild(newItem);
    });
  
    // Обработка формы контакта
    const contactForm = document.getElementById('contact-form');
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      alert('Message sent! Thank you for reaching out.');
      contactForm.reset();
    });
  });
      
