const baseUrl = 'https://app.ftoyd.com/fronttemp-service';

export const fetchMatches = async () => {
    const res = await fetch(baseUrl + '/fronttemp');
    const data = await res.json();
    return data.ok ? data.data.matches : { error: true, errorDesc: 'failed fetch matches' };
};