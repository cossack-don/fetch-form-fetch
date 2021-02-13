// https://jsonplaceholder.typicode.com/

new Vue({
    el: "#app",
    data: {
        message: "Привет, Vue!",
        m: "",
    },
    methods: {
        getInfo() {
            const con = async () => {

                // Обработка через async,await
                const response = await fetch("http://jsonplaceholder.typicode.com/posts/1");
                let user = await response.json();
                console.log(user.title)


                // ОБРАБОТКА ОБЫЧНОГО ЗАПРОСА ЧЕРЕЗ then
                // const a = fetch("http://jsonplaceholder.typicode.com/posts/1");
                // a.then(res => {
                //     return res.json()
                // }).then( (data) => {
                //     console.log(data.title)
                // });

            };
            con();
        },
    },
});

new Vue({
    el: "#app2",
    data: {
        message: "Привет, Vue2!",
    },
});


// Отправка формы fetch AJAX

document.addEventListener('DOMContentLoaded', () => {

    const ajaxSend = async (formData) => {
        const fetchResp = await fetch('https://jsonplaceholder.typicode.com/posts', {
            method: 'POST',
            body: formData
        });
        if (!fetchResp.ok) {
            throw new Error(`Ошибка по адресу ${url}, статус ошибки ${fetchResp.status}`);
        }
        return await fetchResp.text();
    };

    const forms = document.querySelectorAll('form');
    forms.forEach(form => {
        form.addEventListener('submit', function (e) {
            e.preventDefault();
            const formData = new FormData(this);

            ajaxSend(formData)
                .then((response) => {
                    console.log(response);
                    form.reset(); // очищаем поля формы 
                })
                .catch((err) => console.error(err,'33'))
        });
    });

});



// Отправка формы JSON формат


document.addEventListener('DOMContentLoaded', () => {

const ajaxSend = (formData) => {
    return fetch('https://jsonplaceholder.typicode.com/posts', { // файл-обработчик 
        method: 'POST',
        headers: {
            'Content-Type': 'application/json', // отправляемые данные 
        },
        body: JSON.stringify(formData)
    })
        .then(response => {
      alert('Сообщение отправлено')
      
//           очищение значений инпутов
      //   const nameValue = document.querySelector('.name-value');
      //   const telValue = document.querySelector('.tel-value');
      //   const emailValue = document.querySelector('.email-value');
      //   const textareaValue = document.querySelector('.textarea-value');
      // nameValue.value = '';
      // telValue.value = '';
      // emailValue.value = '';
      // textareaValue.value = ''
    })
        .catch(error => console.error(error))
};

const forms = document.getElementsByTagName('form');

for (let i = 0; i < forms.length; i++) {
    forms[i].addEventListener('submit', function (e) {
        e.preventDefault();

        let formData = new FormData(this);
        formData = Object.fromEntries(formData);
      
        console.log(formData)
        ajaxSend(formData)
      
      
            .then((response) => {
          
                // console.log(response);
                forms[0].reset(); // очищаем поля формы
            })
            .catch((err) => console.error(err))
    });
};

});