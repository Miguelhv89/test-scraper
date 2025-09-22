// Función para agregar etiquetas html visuales
function addHtmlTags() {
    // Selecciona todos los elementos dentro del body excepto script y style
    const elements = document.body.querySelectorAll('*:not(script):not(style)');
    elements.forEach(el => {
        // Evita duplicar etiquetas
        if (el.classList.contains('html-tag')) return;
        // Solo agrega si el elemento está dentro del body y es visible
        const tagName = el.tagName.toLowerCase();
        // No agregar a body ni a html
        if (tagName === 'body' || tagName === 'html') return;
        // Crear la etiqueta visual
        const tagSpan = document.createElement('span');
        tagSpan.className = 'html-tag';
        tagSpan.textContent = `<${tagName}>`;
        // Posicionar la etiqueta
        // tagSpan.style.top = '-18px';
        // tagSpan.style.left = '-2px';
        // Si ya existe una etiqueta, no agregar otra
        // if (!el.querySelector('.html-tag')) {
        //     el.style.position = 'relative';
        //     el.insertAdjacentElement('afterbegin', tagSpan);
        // }
    });
}
addHtmlTags();