{
    const gap = 91; // navbar height
    const navbar = document.querySelector('.navbar');
    const toggle = document.querySelector('.navbar-toggle');
    const collapse = document.querySelector('.navbar-collapse');
    const links = document.querySelectorAll('.navbar-list li a');
    const sections = document.querySelectorAll('section');

    ['DOMContentLoaded', 'scroll'].forEach(event => {
        document.addEventListener(event, function() {
            (pageYOffset > 0) 
                ? navbar.classList.add('navbar--sticked') 
                : navbar.classList.remove('navbar--sticked');

            // scrollspy
            sections.forEach(section => {
                let top  = section.getBoundingClientRect().top;
                let bottom  = section.getBoundingClientRect().bottom;
                
                if (top <= gap && bottom >= gap) {
                    let id = section.getAttribute('id');
                    let link = document.querySelector(`[href='#${id}']`);
                    
                    links.forEach(link => link.classList.remove('active'));
                    link.classList.add('active');
                }
            });
            
            // remove handled event
            this.removeEventListener(event, this);
        });
    });

    toggle.addEventListener('click', function() {
       this.classList.toggle('toggled');
       collapse.classList.toggle('collapsed');
       this.removeEventListener('click', this); 
    });

    links.forEach(link => {
        link.addEventListener('click', function(e) {
           e.preventDefault();
           let href = this.getAttribute('href');
           let section = document.querySelector(href);
           
           window.scrollTo({
               top: section.offsetTop - gap,
               behavior: 'smooth'
           });
           
           toggle.classList.remove('toggled');
           collapse.classList.remove('collapsed');
           links.forEach(link => link.classList.remove('active'));
           
           this.classList.add('active');
           this.removeEventListener('click', this);
        });
    });
}