import got from 'got';
import Url from 'url';

const XINZHI_WEATHER_URL = 'https://api.seniverse.com/v3/weather/now.json';
const SERVICE_KEY = 'SRnAgtXK-axNPChUD';

const getWeatherInfo = async (url, params) => {
    try {
        const response = await got(url, {
            searchParams: params
        });

        return response;
    } catch (error) {
        console.log(error.response.body);
    }
};

export default function(req, res) {
    const { url } = req;
    console.log(url);

    const { location } = Url.parse(url);

    const result = getWeatherInfo(XINZHI_WEATHER_URL, {
        key: SERVICE_KEY,
        location,
        language: 'zh-Hans',
        unit: 'c'
    });

    console.log(result);
}
