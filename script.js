let waterLevel = 0;

const counterDisplay = document.getElementById('waterCounter');
const btnDrink = document.getElementById('btnDrink');
const btnReset = document.getElementById('btnReset');
const dropFx = document.getElementById('dropFx');

// Ação de som simulação + aumentar contador
btnDrink.addEventListener('click', () => {
  if (waterLevel < 100) {
    waterLevel += 20;
    counterDisplay.textContent = `${waterLevel}%`;
    triggerDropAnimation();
  }
  
  if (waterLevel === 100) {
    counterDisplay.style.color = '#00ffcc';
    alert('✨ HIDRATAÇÃO MÁXIMA! VERY Y2K! 💦✨');
  }
});

// Ação de resetar
btnReset.addEventListener('click', () => {
  waterLevel = 0;
  counterDisplay.textContent = '0%';
  counterDisplay.style.color = 'var(--yellow-kidcore)';
});

// Animação dinâmica de gota caindo na tela
function triggerDropAnimation() {
  dropFx.style.left = `${Math.random() * 80 + 10}%`;
  dropFx.classList.remove('drop-animate');
  
  // Força o reflow para reiniciar a animação CSS
  void dropFx.offsetWidth; 
  
  dropFx.classList.add('drop-animate');
}
