{
    const subscribe = document.querySelector('.subscribe');
    const form = document.querySelector('.subscribe form');
    const input = document.querySelector('.subscribe input');

    input.addEventListener('focus', function() {
        form.classList.add('active');
        this.removeEventListener('focus', this); 
    });

    input.addEventListener('blur', function() {
        form.classList.remove('active');
        this.removeEventListener('blur', this); 
    });

    form.addEventListener('submit', function(event) {
        event.preventDefault();
        success(subscribe);
        
        function success(parent) {
            const p = document.createElement('p');
            p.textContent = "You've been subscribed. Thank you!"
            
            form.remove();
            parent.append(p);
        }
    });
}