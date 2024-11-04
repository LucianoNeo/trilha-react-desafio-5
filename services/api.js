import axios from 'axios';

export const api  = axios.create({
    baseURL: 'https://gcatqfekpsqoordijxfm.supabase.co/rest/v1',
    headers: {
        apikey: "",
        authorization: ""
    }
})