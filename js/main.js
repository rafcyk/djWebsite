const liElements = [...document.querySelectorAll('nav ul li')];
const wrapSite = document.querySelector('div.wrapSite');
const header = document.querySelector('header');
const sectionAboutMe = document.querySelector('section.aboutMe');
const sectionGallery = document.querySelector('section.gallery');
const sectionContact = document.querySelector('section.contact');
const sectionOpinions = document.querySelector('section.opinions');
const divGallery = document.querySelector('div.wrapPhotos');
let imgGallery = [];

for (let i = 1; i < 11; i++) {
    const img = document.createElement('img');
    img.src = `img/${i}.jpg`;

    const divPhoto = document.createElement('div');
    divPhoto.className = 'onePhoto';
    divPhoto.dataset.src = `img/${i}.jpg`;

    divPhoto.appendChild(img);
    divGallery.appendChild(divPhoto);

    imgGallery.push(img);
}

header.classList.add('appear');



liElements.forEach((element, index) => {



    element.addEventListener('click', () => {

        header.className = ' ';
        sectionAboutMe.className = 'aboutMe';
        sectionGallery.className = 'gallery';
        sectionContact.className = 'contact';
        sectionOpinions.className = 'opinions';

        switch (index) {

            //header nav
            case 0:
                header.classList.add('appear');
                break;

            case 1:
                sectionAboutMe.classList.add('appear');
                header.classList.add('disappear');
                break;

            case 2:
                sectionGallery.classList.add('appear');
                header.classList.add('disappear');
                break;

            case 3:
                sectionOpinions.classList.add('appear');
                header.classList.add('disappear');
                break;

            case 4:
                sectionContact.classList.add('appear');
                header.classList.add('disappear');
                break;

            //about me nav

            case 5:
                header.classList.add('appear');
                sectionAboutMe.classList.add('disappear');
                break;

            case 6:
                sectionAboutMe.classList.add('appear');
                break;

            case 7:
                sectionGallery.classList.add('appear');
                sectionAboutMe.classList.add('disappear');
                break;

            case 8:
                sectionOpinions.classList.add('appear');
                sectionAboutMe.classList.add('disappear');
                break;

            case 9:
                sectionContact.classList.add('appear');
                sectionAboutMe.classList.add('disappear');
                break;

            //gallery nav

            case 10:
                header.classList.add('appear');
                sectionGallery.classList.add('disappear');
                break;

            case 11:
                sectionAboutMe.classList.add('appear');
                sectionGallery.classList.add('disappear');
                break;

            case 12:
                sectionGallery.classList.add('appear');
                break;

            case 13:
                sectionOpinions.classList.add('appear');
                sectionGallery.classList.add('disappear');
                break;

            case 14:
                sectionContact.classList.add('appear');
                sectionGallery.classList.add('disappear');
                break;

            //opinions nav

            case 15:
                header.classList.add('appear')
                sectionOpinions.classList.add('disappear');
                break;

            case 16:
                sectionAboutMe.classList.add('appear');
                sectionOpinions.classList.add('disappear');
                break;

            case 17:
                sectionGallery.classList.add('appear');
                sectionOpinions.classList.add('disappear');
                break;

            case 18:
                sectionOpinions.classList.add('appear');

                break;

            case 19:
                sectionContact.classList.add('appear');
                sectionOpinions.classList.add('disappear');
                break;

            //contact nav

            case 20:
                header.classList.add('appear')
                sectionContact.classList.add('disappear');
                break;

            case 21:
                sectionAboutMe.classList.add('appear');
                sectionContact.classList.add('disappear');
                break;

            case 22:
                sectionGallery.classList.add('appear');
                sectionContact.classList.add('disappear');
                break;

            case 23:
                sectionOpinions.classList.add('appear');
                sectionContact.classList.add('disappear');
                break;

            case 24:
                sectionContact.classList.add('appear');
                break;

        }
    })

})

// $('.wrapPhotos').lightGallery({
//     selector: '.onePhoto'
// });

