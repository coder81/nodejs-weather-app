const request = require('request');

const forecast = (lat, lng, callback) => {
    const url = 'https://api.darksky.net/forecast/5afd553a1e949441e7645f4c0fbf994a/' + lat + ',' + lng + '?units=si';
    request({ url, json: true }, (error, { body }) => {
        if (error) {
            callback('Unable to connect to weather service.', undefined);
        } else if (body.error) {
            callback('Unable to find location. Try with another.', undefined);
        } else {
            callback(undefined, body.daily.data[0].summary + ' It is currently ' + body.currently.temperature + ' degress out. There is a ' + body.currently.precipProbability + '% chance of rain.');
        };
    });
};

module.exports = forecast;