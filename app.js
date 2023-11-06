const markAllAsRead = document.querySelector('.mark-as_read')
const container = document.querySelector('.container')
const notifications = container.querySelectorAll('.notification')
const notificationsArray = Array.from(notifications)
const numberOfNotification = document.querySelector('.number')



const read = () => {
    notificationsArray.forEach((element) => {
        element.classList.add('background-diffrence', 'reset')
        numberOfNotification.innerText = 0;
    })
}



markAllAsRead.addEventListener('click', read)