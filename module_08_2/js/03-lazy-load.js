/*
 * Ленивая загрузка изображений (концепция)
 * - нативная поддержка
 * - событие загрузки изображения
 */

const images = document.querySelectorAll('.feed img');

// console.log(images);

const onEntry = (entries, observer) => {
    entries.forEach(entry => {
        if(entry.isIntersecting) {
            // console.log(entry.target);
            const image = entry.target;
            image.classList.add('appear');

            observer.unobserve(image);
        }
    });
};

const options = {
    rootMargin: '500px',
}

const io = new IntersectionObserver(onEntry, options);

images.forEach(image => io.observe(image));

