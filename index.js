// Menu: Toggle Button ------------------------------------------------
document.addEventListener("DOMContentLoaded", function () {
  // 모든 메뉴 버튼과 페이지를 자동으로 찾기
  const menus = document.querySelectorAll("[id^='menu']");
  const pages = document.querySelectorAll("[id^='page']");
  const main = document.getElementById("main");

  // 각 메뉴 버튼에 클릭 이벤트 추가
  menus.forEach((menu, index) => {
    menu.addEventListener("click", function () {
      // 현재 클릭한 페이지 요소
      const currentPage = pages[index];

      // 현재 페이지가 표시 중인지 확인
      const isVisible = currentPage.style.display === "block";

      // 모든 페이지에서 active 클래스 제거 + display: none 설정
      pages.forEach((page) => {
        page.classList.remove("active");
        page.style.display = "none";
        main.style.pointerEvents = "";
      });

      // 클릭한 페이지가 숨겨져 있었다면 표시하고 active 클래스 추가
      if (!isVisible) {
        currentPage.style.display = "block";
        currentPage.classList.add("active");
        main.style.pointerEvents = "none";
      }
    });
  });
});


// Menu: Button ------------------------------------------------
// document.addEventListener("DOMContentLoaded", function () {
//   // 모든 메뉴 버튼과 페이지를 자동으로 찾기
//   const menus = document.querySelectorAll("[id^='menu']");
//   const pages = document.querySelectorAll("[id^='page']");

//   // 각 메뉴 버튼에 클릭 이벤트 추가
//   menus.forEach((menu, index) => {
//     menu.addEventListener("click", function () {
//       // 모든 페이지에서 active 클래스 제거 + display: none 설정
//       pages.forEach((page) => {
//         page.classList.remove("active");
//         page.style.display = "none";
//       });

//       // 클릭한 버튼에 해당하는 페이지 표시 + active 클래스 추가
//       if (pages[index]) {
//         pages[index].style.display = "block";
//         pages[index].classList.add("active");
//       }
//     });
//   });
// });



// Menu Buttons ------------------------------------------------

// $('.menu-btn#row1').addClass('active');

// $(".menu-btn").click(function (e) {
//     e.preventDefault();

//     $('[class^=row]').not($('.'+this.id)).hide();

//     var btns = $(".menu-btn");
//     for(var i=0; i<btns.length; i++) {
//       var btn = btns.eq(i);
//       if(btn[0] !== $(this)[0]) {
//         btn.removeClass("active");
//         // $('.row1').addClass('show');
//       }
//     }

//     if($(this).hasClass("active")) {
//       $(this).removeClass("active");
//       // $('.row1').removeClass('show');
//     }
//     else {
//       $(this).addClass("active");
//       // $('.row1').removeClass('show');
//     }

//     $('.'+this.id).slideToggle(0);
// });


// function menuProjects() {
//   document.getElementById("main")[0].style.display = "none";
// }




// function scaleIframe() {
//   var iframe = document.getElementById('iframeScale');
//   var containerWidth = window.innerWidth; 
//   var containerHeight = window.innerHeight; 
//   var scaleWidth = containerWidth / 1180; 
//   var scaleHeight = containerHeight / 760; 
//   var scale = Math.min(scaleWidth, scaleHeight); 

//   // Not smaller than scale 1
//   if (scale < 1) {
//     scale = 1;
//   }

//   iframe.style.transform = `scale(${scale})`;
//   // iframe.style.width = `${1100 * scale}px`;
//   // iframe.style.height = `${730 * scale}px`;
// }

// window.addEventListener('resize', scaleIframe); 
// window.addEventListener('load', scaleIframe); 