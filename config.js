// HOA Atlas deployment configuration
// This is the ONLY file you edit when changing where data/documents are hosted
// or how community proposals are submitted.
//
// Local development (this folder, served e.g. via `python -m http.server`):
window.HOA_CONFIG = {
  DATA_URL: 'hoa_poly.geojson',

  // Set to 'http://localhost:5100' when running doc_api.py locally; null = static document links
  DOC_API_BASE: null,

  // Live submission service (future backend). When set, "Submit proposal"
  // POSTs JSON {kind, submitted_at, profile, payload} to this URL.
  SUBMIT_API: null,

  // Fallback submission channel while there is no live backend:
  // "Submit proposal" opens a prefilled GitHub issue here.
  SUBMIT_ISSUE_URL: 'https://github.com/cheungted95/HOAatlas/issues/new',

  // Show the "edits are not saved to the shared map" notice.
  // Omit to default to: on when SUBMIT_API is null, off otherwise.
  DEMO_MODE: true
};
