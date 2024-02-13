const hamburgerBtn = document.querySelector('#hamburger-btn')
const closeBtn = document.querySelector('#close-btn')
const sideBarBg = document.querySelector('#side-bar-bg')
const sideBar = document.querySelector('#side-bar')

hamburgerBtn.addEventListener('click', toggleSideBar)
closeBtn.addEventListener('click', toggleSideBar)

function toggleSideBar () {
    if (sideBarBg.dataset.status === "hidden") {
        sideBarBg.classList.toggle('hidden')
        setTimeout(() => {
            sideBar.classList.toggle('-right-full')
            sideBar.classList.toggle('right-0')   
        });
        sideBarBg.dataset.status = "visible"
    } else if (sideBarBg.dataset.status === "visible") {
        sideBar.classList.toggle('right-0')
        setTimeout(() => {
            sideBar.classList.toggle('-right-full')
        });
        sideBarBg.classList.toggle('hidden')
        sideBarBg.dataset.status = "hidden"
    }
}