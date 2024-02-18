const pizza = document.getElementById('pizza');
const numSlices = 56;
const sliceAngle = 360 / numSlices;
const radius = 200;
const centerX = 250; // Tùy chỉnh tâm x
const centerY = 250; // Tùy chỉnh tâm y

for (let i = 0; i < numSlices; i++) {
  const angle = sliceAngle * i;
  const slice = document.createElement('div');
  slice.classList.add('pizza-slice');
  slice.style.transform = `rotate(${angle}deg)`;
  slice.style.left = `${centerX}px`;
  slice.style.top = `${centerY}px`;
  pizza.appendChild(slice);
}