//Header
// Lắng nghe sự kiện cuộn
window.onscroll = function() {
    stickyHeader();
};

// Lấy thanh header
var header = document.getElementById("myHeader");

// Lấy khoảng cách từ đỉnh trang đến thanh header
var sticky = header.offsetTop;

// Thêm class "sticky" khi cuộn xuống đủ
function stickyHeader() {
    if (window.pageYOffset > sticky) {
        header.classList.add("sticky");
    } else {
        header.classList.remove("sticky");
    }
}

//Menu
const menu = document.querySelector(".navbar__links");
const menuButton = document.querySelector(".navbar__icons");
const overlay=document.querySelector("#overlay")

menuButton.addEventListener("click", ()=>{
    menu.classList.toggle("navbar__open");
    menuButton.classList.toggle("open");
    overlay.classList.toggle("show");
});

overlay.addEventListener('click', ()=>{
    menu.classList.toggle("navbar__open");
    menuButton.classList.toggle("open");
    overlay.classList.toggle("show");
})

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);

        if (targetElement) {
            const offset = 120; // Điều chỉnh offset tùy thuộc vào chiều cao của header
            const elementPosition = targetElement.offsetTop - offset;

            console.log("Target Element Top:", targetElement.offsetTop);
            console.log("Adjusted Element Position:", elementPosition);

            window.scrollTo({
                top: elementPosition,
                behavior: 'smooth'
            });
        }
    });
});


// document.addEventListener("DOMContentLoaded", function() {
//     // Lắng nghe sự kiện cuộn trang
//     window.addEventListener('scroll', function() {
//         // Lấy vị trí cuộn trang
//         var scrollPosition = window.scrollY;

//         // Lấy vị trí của phần nội dung
//         var contentPosition = document.getElementById('content').offsetTop;

//         // Kiểm tra nếu cuộn trang đến vị trí phần nội dung
//         if (scrollPosition >= contentPosition - 300) {
//             // Thêm lớp 'visible' để hiển thị phần nội dung
//             document.getElementById('content').classList.add('visible');
//         } else {
//             // Loại bỏ lớp 'visible' để ẩn phần nội dung
//             document.getElementById('content').classList.remove('visible');
//         }
//     });
// });
