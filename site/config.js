// HOA Atlas deployment configuration — GitHub Pages (static) deployment.
// This is the ONLY file to edit when changing where data/documents are hosted
// or how community proposals are submitted.
window.HOA_CONFIG = {
  // GeoJSON served from this same site (relative to index.html)
  DATA_URL: 'data/hoa_poly.geojson',

  // Static mode: document links come straight from feature properties.
  // (The Flask doc_api.py is a local-dev enhancement only; GitHub Pages
  // cannot run it. Set to 'http://localhost:5100' for local dev.)
  DOC_API_BASE: null,

  // Live submission service (future backend). When set, "Submit proposal"
  // POSTs JSON {kind, submitted_at, profile, payload} to this URL and the
  // demo notice turns off automatically.
  SUBMIT_API: null,

  // Fallback submission channel while there is no live backend:
  // "Submit proposal" opens a prefilled GitHub issue here.
  SUBMIT_ISSUE_URL: 'https://github.com/cheungted95/HOAatlas/issues/new'
};
