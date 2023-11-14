import axios from 'axios';

const UNIT_API_BASE_URL = 'https://portfolio-zezula.website'//'https://markuvtest.website''http://localhost:8081'

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

