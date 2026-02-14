function openLightbox(img) {
    const lb = document.getElementById('lightbox');
    const lbImg = document.getElementById('lightbox-img');
    lb.style.display = 'flex';
    lbImg.src = img.src;
}

const simData = {
    iter_low: {
        title: "Pocas Iteraciones",
        desc: "El modelo apenas ha visto los datos unas pocas veces. No entiende la estructura de las palabras.",
        output: "j! k9s l-o... (Ruido aleatorio)"
    },
    iter_high: {
        title: "Muchas Iteraciones",
        desc: "El modelo ha encontrado patrones gramaticales y vocabulario específico.",
        output: "Dijo Sancho que la aventura era muy..."
    },
    vocab_small: {
        title: "Vocabulario Reducido",
        desc: "Al tener pocos caracteres únicos, el modelo intenta forzar palabras que no conoce.",
        output: "E l i n g e n i o s o h i d a l g o"
    }
};

function updateSim(type) {
    const data = simData[type];
    document.getElementById('sim-title').innerText = data.title;
    document.getElementById('sim-desc').innerText = data.desc;
    document.getElementById('sim-output').innerText = data.output;
}