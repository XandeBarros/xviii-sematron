import './assets/css/reset.css';
import './assets/css/style.css';
import './assets/css/star.css';
import './assets/css/slider.css';
import './assets/css/mobile.css';
import './assets/css/webkit.css';

const swal = require('sweetalert');
const emailjs = require('emailjs-com');

emailjs.init(user_dPup4hUzCgRmyFRB2PjF5);

const success = () => {
  swal({
    title: 'Tudo certo!',
    text: 'Email enviado com sucesso!',
    icon: 'success',
    button: 'ok'
  });
};

const error = () => {
  swal({
    title: 'Ooops...',
    text: 'Algo deu errado ;( Tente novamente daqui a pouco',
    icon: 'error',
    button: 'ok'
  });
};

// Slider Automático 

if (window.screen.width > 992) {
  let counter = 1;
  
  const ONEMINUTE = 60 * 1000;
  
  setInterval(() => {
    document.querySelector('#radio' + counter).checked = true;
    counter++;
    if(counter > 9) {
      counter = 1;
    }
  }, ONEMINUTE);
}

// Send Email

(function() {
  const name = document.querySelector('#name');
  const email = document.querySelector('#email');
  const message = document.querySelector('#message');
  const submit = document.querySelector('#submit');

  submit.addEventListener('click', e => {
    console.log(name, email, message);
    e.preventDefault();

    emailjs.send(service_yhprk5s, template_1nr8dk4,{
      from_name: name.value,
      to_name: email.value,
      message: message.value,
    }).then(() => {
      success();
    }).catch((err) => {
      error();
    });
  });
})();
