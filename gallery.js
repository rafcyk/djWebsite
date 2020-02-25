{/* <i class="fas fa-times"></i> */ }


imgGallery.forEach(img => {
    img.addEventListener('click', () => {





        const divContainerPhoto = document.createElement('div');
        divContainerPhoto.className = 'show';

        sectionGallery.appendChild(divContainerPhoto);

        const closeIcon = document.createElement('i');
        closeIcon.className = 'fas fa-times';
        divContainerPhoto.appendChild(closeIcon);

        img.id = 'active';



        closeIcon.addEventListener('click', (e) => {
            img.id = '';
            closeIcon.remove();
            divContainerPhoto.remove();
        })
    })
})