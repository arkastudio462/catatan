// Salin file ini menjadi config.js lalu isi dengan kredensial R2 kamu.
// Jangan commit config.js ke repository.
window.R2_CONFIG = {
  R2_ENDPOINT: 'https://f6453feed86a5c7f445539ff97894ddd.r2.cloudflarestorage.com',  // Endpoint S3 API dari Cloudflare R2
  R2_BUCKET: 'arkastudio',                              // Nama bucket R2
  R2_PUBLIC_URL: 'https://pub-561e6debd7134dfc98f4fa6ebed4901a.r2.dev',               // Public URL atau custom domain (kosongkan jika bucket tidak public)
  R2_ACCESS_KEY: '',                                      // Access Key ID dari R2 API Token
  R2_SECRET_KEY: ''                                       // Secret Access Key dari R2 API Token
};
