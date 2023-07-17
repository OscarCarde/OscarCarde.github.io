document.addEventListener('DOMContentLoaded', () => {
    document.querySelector("#cv").addEventListener('click', ()=>openModal());
    document.querySelector(".close").addEventListener('click', () =>closeModal());
    window.addEventListener('click', event => {
        const modal = document.getElementById('pdfModal');
        if (event.target === modal) {
          closeModal();
        }
      });
})

function openModal() {
    const resume_url = "oscarsresume.pdf";
    const modal = document.getElementById('pdfModal');
    const pdfIframe = document.getElementById('pdfIframe');
    pdfIframe.src = resume_url;
    modal.style.display = 'block';
  }

function closeModal() {
    const modal = document.getElementById('pdfModal');
    modal.style.display = 'none';
    // Optionally, you can also clear the iframe content to stop the PDF from loading
    const pdfIframe = document.getElementById('pdfIframe');
    pdfIframe.src = '';
  }