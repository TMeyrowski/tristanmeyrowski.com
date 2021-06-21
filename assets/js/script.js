document.getElementById('searchOpen').addEventListener('click', () => {
    document.getElementsByClassName('search-wrapper')[0].classList.add('open');
});

document.getElementById('searchClose').addEventListener('click', () => {
    document.getElementsByClassName('search-wrapper')[0].classList.remove('open');
});
