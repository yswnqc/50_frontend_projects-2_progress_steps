const cards = document.querySelectorAll('.card');

cards.forEach(card => card.addEventListener('click', () => {
  cards.forEach(card => card.classList.remove('active'));
  card.classList.add('active');
}));

// fetch('https://cors-anywhere.herokuapp.com/http://m.wufazhuce.com/one')//会有cors问题！！这个网址限流，看看别的
//   .then(res => res.text())
//   .then(html => {
//     COOKIE = res.headers.get('set-cookie') || '';
//     TOKEN = html.match(/One.token = '([a-zA-Z0-9]{40})'/)?.[1] || '';
    
//     return fetch(`http://m.wufazhuce.com/one/ajaxlist/${page}?_token=${TOKEN}`, {
//       headers: { 'Cookie': COOKIE }
//     });
//   })
//   .then(res => res.json())
//   .then(data => console.log(data))
//   .catch(error => console.error(error));


//想把「ONE 一个」接入这个小项目，就可以每天，有图，有好句
//可以写个后端
//设成自动定时展示下一个card