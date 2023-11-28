import axios from 'axios';

const UNIT_API_BASE_URL = 'https://internal-HttpsToHttp-1857323988.eu-north-1.elb.amazonaws.com'//'http://16.170.86.11'//'https://markuvtest.website''http://localhost:8081''https://portfolio-zezula.website'

class EmailService{
    sendEmail(emailData){
        return axios.post(`${UNIT_API_BASE_URL}/sendMail`,emailData);
    }
    sendCV(emailName) {
        const formData = new URLSearchParams();
        formData.append('emailName', emailName);
    
        return axios.post(`${UNIT_API_BASE_URL}/cv`, formData.toString(), {
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
          },
        });
    }
}

export default new EmailService()

