import axios from "axios";

const sendEmail = async (email, subject, message) => {
  return axios({
    method: "post",
    url: "./api/send-mail.js",
    data: {
      email: email,
      subject: subject,
      message: message,
    },
  });
};

export default sendEmail;
