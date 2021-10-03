
/* ---------------------------Toggle navbar başlangıç-------------------------------------*/
const navToggler = document.querySelector(".nav-toggler");
navToggler.addEventListener("click", () => {
    hideSection();
    toggleNavbar();
    document.body.classList.add("scroll-none");
})
//  Aktif olan section'u fade-out ile animasyonlu olarak gizliyoruz.
function hideSection() {
    document.querySelector("section.active").classList.toggle("fade-out");
}
// Menümüzü getiriyoruz.
function toggleNavbar() {
    document.querySelector(".header").classList.toggle("active");
}
/* ---------------------------Toggle navbar bitiş-------------------------------------*/
/*---------------------------------------------- SECTION AKTİFLEŞTİRME BAŞLANGIÇ----------------------------------------------*/
document.addEventListener("click", (e) => {
    // Tıklanılan objenin bir linki yani hashi var ise ve link-item class'ına sahip ise işlem yap.
    if (e.target.classList.contains("link-item") && e.target.hash !== "" || e.target.classList.contains("home-link","fa-home")) {
        // Overlay aktif etme
        document.querySelector(".overlay").classList.add("active");
        var link = e.target.hash;
        //  Tıklanılan elaman bir menü elemanı mı ona bakıyoruz.
        if (e.target.classList.contains("nav-item")) {
            // Navbar içinden bir linke tıklanılmış ise navbarı deaktive ediyoruz.
            toggleNavbar();
        }
        // Eğer link girilmemiş ise doğal olarak anasayfa linkine yönlendiriyoruz.
        if(link == null)
            link = "#anasayfa";

        // SettimeOut kullanmamızın nedeni pencere scroll'unu yukarı çekerken milisaniyelerde zamanı ihtiyacı oluşu.
        setTimeout(()=>{
            window.scrollTo(0,0);
        },1)
        setTimeout(() => {
            document.querySelector("section.active").classList.remove("active", "fade-out");
            document.querySelector(link).classList.add("active");
            document.body.classList.remove("scroll-none");
            // Scrollu en yukarıya alıyoruz.
            // Overlay kaldırıyoruz.
            document.querySelector(".overlay").classList.remove("active");
        }, 500);
    }
})
/*---------------------- SECTION AKTİFLEŞTİRME  BİTİŞ ----------------------------------------------*/
/* -------------------- Hakkımızda başlangıç ------------------- */

const tabsContainer = document.querySelector(".about-tabs");

//  Tab butonlarının click eventini yakalama
tabsContainer.addEventListener('click', (e) => {
    if (e.target.classList.contains("tab-item") && !e.target.classList.contains("active")) {
        tabsContainer.querySelector(".active").classList.remove("active");
        e.target.classList.add("active");

        //  Tabları güncelleme
        const dataTarget = e.target.dataset.target;
        document.querySelector(".tab-content.active").classList.remove("active");
        document.querySelector(dataTarget).classList.add("active");
    }
})
/* -------------------- Hakkımızda bitiş ------------------- */




/* -------------------- Porfolyo alanı başlangıç -----------*/
const portfolyoPopup = document.querySelector(".portfolio-popup");
document.addEventListener('click', function (e) {
    // Görsele veya butona tıklanırsa açılacak.
    if (e.target.classList.contains("view-project-btn") || e.target.classList.contains("portfolio-img")) {
        portfolyoToggle();
        // BURAYA AJAX İLE VERİLERİ  DİNAMİK ÇEKEN BİR FONKSİYON EKLENEBİLİR
    }
})
// Popup açma fonksiyonu
function portfolyoToggle() {
    console.log(portfolyoPopup.style);
    portfolyoPopup.classList.toggle("open");
    // Divin scrollunu en üste alıp sıfırlama
    portfolyoPopup.scrollTop = 0;
    document.body.classList.toggle("scroll-none");
}
// Popup kapatma
document.querySelector(".pp-header .btn-close").addEventListener('click', function () { portfolyoToggle() });
// Popup harici bir yere tıklanırsa kapatma
document.addEventListener("click", (e) => {
    const popup = document.querySelector(".pp-content");
    let tiklanilan = e.target;

    do {
        if (tiklanilan == popup) {
            return;
        }
        // Bir üst düğüme bakıyoruz (Alt düğümlerimizden birisi ise yukarı çıkarak bizi bulacak).
        tiklanilan = tiklanilan.parentNode;
    } while (tiklanilan);

    // Eğer hiçbirini bulamaz ise burası devreye girecek
    // Popup alanının dışına tıklanıldığını ve bu alanın açma butonu veya görseli olmadığını  anladığımız anda kapatıyoruz.
    if (!e.target.classList.contains("view-project-btn") && !e.target.classList.contains("portfolio-img")) {
        portfolyoPopup.classList.remove("open");
        // Meünlerimizin bulunduğu header alanı aktif değil ise body'nin scrolunu aktifleştiriyoruz.
        if(!document.querySelector(".header").classList.contains("active"))
             document.body.classList.remove("scroll-none");
    }

});

/* ------------------------------------- Porfolyo alanı bitiş -----------------------------------------------*/
