import axios from 'axios';

const UNIT_API_BASE_URL = 'https://zezula-aws-portfolio.com'//'https://markuvtest.website''http://localhost:8081''https://zezula-aws-portfolio.com''https://portfolio-zezula.website'

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

