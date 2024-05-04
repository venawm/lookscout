const config = {
  DB_URI:
    "mongodb+srv://samir:emcPQFpgdHpD83qn@cluster0.vpm56yj.mongodb.net/contact?retryWrites=true&w=majority",
  API:
    process.env.NODE_ENV === "production"
      ? "https://lookscout-rho.vercel.app/api"
      : "http://localhost:3000/api",
};
module.exports = config;
