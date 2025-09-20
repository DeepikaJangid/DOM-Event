// hamburger menu
const menu = document.querySelector('#hamburger');
const menuList = document.querySelector('#menu-list');


menu.addEventListener(
    'click',
    () => {
        menuList.classList.toggle('menu-ul');
    }
)
// header toggle


const dateBox = document.querySelector('.date');

const timeBox = document.querySelector('.time')
let d = new Date();
let date = d.getDate();
let month = d.getMonth() + 1;
let year = d.getFullYear();

date = date < 10 ? '0' + date : date;
month = month < 10 ? '0' + month : month;


dateBox.innerHTML = `${date} - ${month} - ${year}`;

// date 

// time

setInterval(
    () => {
        let d = new Date();
        let hour = d.getHours();
        let sec = d.getSeconds();

        hour = hour < 10 ? '0' + hour : hour;

        sec = sec < 10 ? '0' + sec : sec;

        timeBox.innerHTML = `${hour}:${sec}`
    },
    1000
);
// date and time 


// carousel
let car = document.querySelector('.carousel');
let carousel = car.children
let temp = 0;



setInterval(
    () => {
        for (let img of carousel) {
            img.style.transform = `translateX(-${temp * 100}%)`
        }
        temp++;
        if (temp > 5) {
            temp = 0;
        }
    },
    3000
);

// accordian 
const accordTitle = document.querySelectorAll('.accord-title');
const accordContent = document.querySelectorAll('.accord-content');


for (let title of accordTitle) {
    title.addEventListener(
        'click',
        function () {
            var rotation = title.children[1];
            rotation.style.transform = 'rotate(180deg)';

            let content = title.nextElementSibling;
            var currentOpen = document.querySelector('.open');

            if (currentOpen != null) {
                currentOpen.classList.remove('open');
                currentOpen.style = '';
            }

            if (currentOpen == content) {
                rotation.style.transform = '';
                return;
            }

            content.classList.add('open');
            content.style.overflow = 'auto';
            content.style.height = content.scrollHeight + 'px';

            if (currentOpen == content) return;
            var prevIcon = rotation.previousElementSibling.parentNode.parentNode.previousElementSibling.children[0].children[1];
            prevIcon.style = '';
            console.log(prevIcon);
            // prevIcon.style = '';

        }
    )
}



