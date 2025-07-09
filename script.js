document.getElementById('formulario').addEventListener('submit', function(e) {
  e.preventDefault();
  const distancia = parseFloat(document.getElementById('distancia').value);
  const rendimiento = parseFloat(document.getElementById('rendimiento').value);
  const combustible = document.getElementById('combustible').value;

  const factorGasolina = 2.3;
  const factorDiesel = 2.6;
  const factor = combustible === 'diesel' ? factorDiesel : factorGasolina;

  const litros = distancia / rendimiento;
  const co2 = litros * factor;

  let nivel, mensaje, emoji;

  if (co2 < 3) {
    nivel = 'Baja';
    mensaje = '🌿 Tu transporte es eficiente con el medio ambiente, continúa así.';
    emoji = '🟢';
  } else if (co2 < 8) {
    nivel = 'Media';
    mensaje = '🌍 Tu medio de transporte genera cambios en el medio ambiente. Puedes intercalar usar bicicleta y transporte público.';
    emoji = '🟡';
  } else {
    nivel = 'Alta';
    mensaje = '🔥 Tu impacto genera cambios significativos en el medio ambiente. Se recomienda buscar medios alternativos de transporte y sustituir el uso del automóvil.';
    emoji = '🔴';
  }

  document.getElementById('resultado').innerHTML = `
    <p><strong>CO₂ emitido:</strong> ${co2.toFixed(2)} kg</p>
    <p><strong>Nivel de huella:</strong> ${emoji} <span>${nivel}</span></p>
    <div class="mensaje"><em>${mensaje}</em></div>
  `;
});
