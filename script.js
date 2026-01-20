// DOM جاهز
document.addEventListener('DOMContentLoaded', function() {
    
    // تبديل القائمة على الجوال
    const menuToggle = document.querySelector('.menu-toggle');
    const navMenu = document.querySelector('.nav-menu');
    
    if (menuToggle) {
        menuToggle.addEventListener('click', function() {
            navMenu.classList.toggle('active');
            menuToggle.innerHTML = navMenu.classList.contains('active') 
                ? '<i class="fas fa-times"></i>' 
                : '<i class="fas fa-bars"></i>';
        });
    }
    
    // إغلاق القائمة عند النقر على رابط
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            navMenu.classList.remove('active');
            menuToggle.innerHTML = '<i class="fas fa-bars"></i>';
        });
    });
    
    // للصفحات التي تحتوي على قسم القائمة
    const categoryBtns = document.querySelectorAll('.category-btn');
    const menuCategories = document.querySelectorAll('.menu-category');
    
    if (categoryBtns.length > 0) {
        // عرض القسم الأول عند تحميل الصفحة
        if (menuCategories.length > 0) {
            menuCategories[0].classList.add('active');
            categoryBtns[0].classList.add('active');
        }
        
        // إضافة حدث النقر على أزرار التصنيفات
        categoryBtns.forEach(btn => {
            btn.addEventListener('click', function() {
                const categoryId = this.getAttribute('data-category');
                
                // تحديث الأزرار النشطة
                categoryBtns.forEach(b => b.classList.remove('active'));
                this.classList.add('active');
                
                // إظهار القسم المحدد وإخفاء الآخرين
                menuCategories.forEach(category => {
                    if (category.id === categoryId) {
                        category.classList.add('active');
                    } else {
                        category.classList.remove('active');
                    }
                });
            });
        });
    }
    
    // إضافة تأثيرات عند التمرير
    window.addEventListener('scroll', function() {
        const navbar = document.querySelector('.navbar');
        
        if (window.scrollY > 100) {
            navbar.style.padding = '10px 0';
            navbar.style.boxShadow = '0 4px 10px rgba(0, 0, 0, 0.1)';
        } else {
            navbar.style.padding = '15px 0';
            navbar.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.1)';
        }
    });
    
    // تحسين تجربة المستخدم للصور
    const images = document.querySelectorAll('img');
    images.forEach(img => {
        img.addEventListener('load', function() {
            this.classList.add('loaded');
        });
    });
    
    // إضافة رسالة ترحيب
    console.log('مرحباً بكم في مطعم ومطبخ سعيد بنوب!');
});