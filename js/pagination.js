export function initPagination() {
    const paginationItems = document.querySelectorAll('.pagination-right__item');

    paginationItems.forEach(item => {
        item.addEventListener('click', function (e) {
            e.preventDefault();

            // Видаляємо активний клас у всіх елементів
            paginationItems.forEach(item => {
                item.classList.remove('pagination-right__item--active');
            });

            // Додаємо активний клас до поточного елемента
            this.classList.add('pagination-right__item--active');

            const targetId = this.querySelector('a').getAttribute('href').substring(1);

            // Перевіряємо, чи це "start"
            if (targetId === "start") {
                window.scrollTo({
                    top: 0,
                    behavior: 'smooth'
                });
            } else {
                const targetElement = document.getElementById(targetId);

                if (targetElement) {
                    window.scrollTo({
                        top: targetElement.offsetTop - 50, // коригуємо для верхнього відступу
                        behavior: 'smooth'
                    });
                }
            }
        });
    });
}
