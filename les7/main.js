const trafficLight = document.getElementById('traffic-light');

const lightColors = ['red', 'yellow', 'green'];
const lights = lightColors.map((color) => {
  const light = document.createElement('div');
  light.classList.add('light', color);
  trafficLight.appendChild(light);
  return light;
});

trafficLight.style.cssText = `
  width: 170px;
  background: #1f2937;
  border-radius: 30px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
  box-shadow: 0 0 30px rgba(0,0,0,0.5);
`;

for (const light of lights) {
  light.style.cssText = `
    width: 100px;
    height: 100px;
    border-radius: 50%;
    background: #374151;
    box-shadow: inset 0 0 15px rgba(0,0,0,0.4);
    opacity: 0.35;
    transition: all 0.3s ease;
  `;
}

let activeIndex = 0;

function updateTrafficLight() {
  lights.forEach((light, index) => {
    const isActive = index === activeIndex;
    light.style.opacity = isActive ? '1' : '0.35';
    light.style.boxShadow = isActive
      ? `0 0 25px ${lightColors[index]}, inset 0 0 20px rgba(255,255,255,0.35)`
      : 'inset 0 0 15px rgba(0,0,0,0.4)';
    light.style.background = isActive ? lightColors[index] : '#374151';
  });

  activeIndex = (activeIndex + 1) % lights.length;
}

updateTrafficLight();
setInterval(updateTrafficLight, 1500);