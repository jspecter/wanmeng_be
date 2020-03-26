import got from 'got';
import Url from 'url';

const XINZHI_WEATHER_URL = 'https://api.seniverse.com/v3/weather/now.json';
const SERVICE_KEY = 'SRnAgtXK-axNPChUD';

const getWeatherInfo = async (url, params) => {
    const response = await got(url, {
        searchParams: params
    });

    return response;
};

export default function(req, res) {
    const { url } = req;
    const {
        query: { location }
    } = Url.parse(url, true);

    getWeatherInfo(XINZHI_WEATHER_URL, {
        key: SERVICE_KEY,
        location,
        language: 'zh-Hans',
        unit: 'c'
    })
        .then(result => {
            res.json(JSON.parse(result.body));
        })
        .catch(err => {
            console.log(err);
            res.json(err);
        });
}
