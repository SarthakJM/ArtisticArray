document.addEventListener("DOMContentLoaded", function () {
    const accessKey = 'jb1d__xaeH9AT5AtkOTh7YaV8KAUdVobFHxgcCSKooE';
    const count = 8; // Number of images you want to fetch
    const galleryItems = document.querySelectorAll('.gallery-item');

    fetch(`https://api.unsplash.com/photos/random?client_id=${accessKey}&count=${count}`)
        .then(response => response.json())
        .then(data => {
            galleryItems.forEach((item, index) => {
                item.src = data[index].urls.regular;
                item.alt = data[index].alt_description || 'Unsplash Image';
            });
        })
        .catch(error => {
            console.error('Error fetching images from Unsplash:', error);
        });
});

document.addEventListener("click", function (e) {
    if (e.target.classList.contains("gallery-item")) {
        const src = e.target.getAttribute("src");
        document.querySelector(".modal-img").src = src;
        const myModal = new bootstrap.Modal(document.getElementById('gallery-modal'));
        myModal.show();
    }
});

function changeMode() {
    var element = document.querySelector('.gallery');
    element.classList.toggle("dark-mode");

    var moonIcon = document.querySelector('.js-changemode-element .fa-solid.fa-moon');
    var sunIcon = document.querySelector('.js-changemode-element .fa-solid.fa-sun');
    
    if (moonIcon) {
        moonIcon.classList.remove('fa-moon');
        moonIcon.classList.add('fa-sun');
        moonIcon.style.color = '#f1c40f';
        document.querySelector('.js-refresh-element').style.color = '#f1c40f';
        document.querySelector('.js-refresh-element').style.border = '2px solid white';


    } else if (sunIcon) {
        sunIcon.classList.remove('fa-sun');
        sunIcon.classList.add('fa-moon');
        sunIcon.style.color = '#34495e';
        document.querySelector('.js-refresh-element').style.color = '#000';
        document.querySelector('.js-refresh-element').style.border = '2px solid black';

        
    }
};

function reload()
{
    const button = document.querySelector('.js-refresh-element');
    button.addEventListener ("click", () => {
        window.location.reload();

    })
}



