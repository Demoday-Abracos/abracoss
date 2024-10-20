import React from 'react';

const MapSection = () => {
  return (
    <section className="map-section">
      <h2>Localização dos escritórios de imigração</h2>
      <div id="map">
        {/* Aqui você pode integrar o Google Maps ou outro serviço de mapa */}
        <p>Mapa com localizações aparecerá aqui</p>
      </div>
    </section>
  );
};

export default MapSection;