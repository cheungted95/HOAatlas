// HOA Atlas deployment configuration — GitHub Pages (static) deployment.
// This is the ONLY file to edit when changing where data/documents are hosted.
window.HOA_CONFIG = {
  // GeoJSON served from this same site (relative to index.html)
  DATA_URL: 'data/hoa_poly.geojson',
  // Static mode: document links come straight from feature properties.
  // (The Flask doc_api.py is a local-dev enhancement only; GitHub Pages
  // cannot run it. Set to 'http://localhost:5100' for local dev.)
  DOC_API_BASE: null
};
