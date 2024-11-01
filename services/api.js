import axios from 'axios';

export const api  = axios.create({
    baseURL: 'https://gcatqfekpsqoordijxfm.supabase.co/rest/v1',
    headers: {
        apikey: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImdjYXRxZmVrcHNxb29yZGlqeGZtIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzA0ODM1OTAsImV4cCI6MjA0NjA1OTU5MH0.UAIZS5wwhPI5PGvENI-HA3lDxDZlAwnz2HsmjPF1Yg8",
        authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImdjYXRxZmVrcHNxb29yZGlqeGZtIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzA0ODM1OTAsImV4cCI6MjA0NjA1OTU5MH0.UAIZS5wwhPI5PGvENI-HA3lDxDZlAwnz2HsmjPF1Yg8"
    }
})