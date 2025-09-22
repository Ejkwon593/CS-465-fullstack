const fs = require('fs');
const path = require('path');

module.exports.travel = function(req, res) {
  const tripsFilePath = path.join(__dirname, '../../trips.json');

  fs.readFile(tripsFilePath, 'utf8', (err, data) => {
    if (err) {
      console.error("Error reading trips.json:", err);
      return res.status(500).send("Error loading trips");
    }

    const trips = JSON.parse(data);
    res.render('travel', {
      title: 'Travel Packages',
      trips: trips
    });
  });
};
