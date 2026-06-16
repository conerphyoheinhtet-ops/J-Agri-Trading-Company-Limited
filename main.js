// Mobile Menu အတွက်
const mobileMenuToggle = document.getElementById('mobile-menu-toggle');
const mobileMenu = document.getElementById('mobile-menu');

// ခလုတ်နှိပ်ရင် Menu အဖွင့်အပိတ်လုပ်ရန်
mobileMenuToggle.addEventListener('click', () => {
    mobileMenu.classList.toggle('hidden');
});

// Scroll to Top Button အလုပ်လုပ်စေရန်
const scrollToTopBtn = document.getElementById('scrollToTopBtn');

// အောက်ဘက်ကို Pixel 300 လောက် ဆင်းသွားရင် ခလုတ်ကို ဖော်ပြရန်
window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
        scrollToTopBtn.classList.remove('opacity-0', 'invisible', 'translate-y-4');
        scrollToTopBtn.classList.add('opacity-100', 'visible', 'translate-y-0');
    } else {
        // အပေါ်ဆုံး ပြန်ရောက်သွားရင် ခလုတ်ကို ပြန်ဖျောက်ရန်
        scrollToTopBtn.classList.add('opacity-0', 'invisible', 'translate-y-4');
        scrollToTopBtn.classList.remove('opacity-100', 'visible', 'translate-y-0');
    }
});

// ခလုတ်ကို နှိပ်ရင် အပေါ်ဆုံးကို Smooth ဖြစ်ဖြစ် ပြန်တက်ရန်
scrollToTopBtn.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});