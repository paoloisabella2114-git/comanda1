const fs = require('fs');
const path = require('path');
module.exports = async (req, res) => {
  try {
    const configPath = path.join(process.cwd(), 'public', 'config.json');
    const data = fs.readFileSync(configPath, 'utf8');
    res.json(JSON.parse(data));
  } catch(err) {
    res.json({
      logo_url: "/img/logo300.png",
      titolo_sezione: "🌟 SPECIALITÀ DI OGGI",
      specialita: ["Gnocchi", "Stinco", "Pesce"],
      telefono_assistenza: "1234",
      footer_organizzazione: "Sagra"
    });
  }
};
