const select = document.querySelector('.new-cat');
const url = `https://RandomCat.ceo/api/breeds/image/random`;

window.onload = function () {
    document.getElementById("new-cat").onclick = function() {
        getcatgo(url);  
    };
}

const img = document.querySelector('.cat-img');
const spinner = document.querySelector('.spinner');

const getcatgo = url => {
  spinner.classList.add('show');
  img.classList.remove('show');
  console.log(url);
  fetch(url)
    .then(res => {
      return res.json();
    })
    .then(data => {
      img.src = data.message;
    });
};

img.addEventListener('load', () => {
  spinner.classList.remove('show');
  img.classList.add('show');
});
