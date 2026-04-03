const el = document.querySelector('.split');

function splitIntoChars(element) {
    const text = element.textContent;
    element.innerHTML = '';

    return [...text].map(ch => {
        const span = document.createElement('span');
        span.textContent = ch === ' ' ? '\u00A0' : ch;
        span.style.display = 'inline-block';
        element.appendChild(span);
        return span;
    });
}

const chars = splitIntoChars(el);

gsap.from(chars, {
    y: -60,
    opacity: 0,
    duration: 1.5,
    stagger: 0.04,
    ease: 'power3.out'
});