{
    
    const tabs = document.querySelectorAll('.gallery-tab');
    const panes = document.querySelectorAll('.gallery-pane');
    const buttons = document.querySelectorAll('.gallery-more-btn'); 
    const resetClass = list => list.forEach(item => item.classList.remove('is-active'));

    // active first tab & pane
    tabs && tabs[0].classList.add('is-active');
    panes && panes[0].classList.add('is-active');

    tabs && tabs.forEach(tab => {
        tab.addEventListener('click', function(e) {
            let href = this.getAttribute('href').slice(1);
            let pane = document.querySelector(`[data-pane="${href}"]`);

            resetClass(tabs);
            resetClass(panes);
            pane.classList.add('is-active');
            this.classList.add('is-active');
            this.removeEventListener('click', this);
            
            e.preventDefault();
        });
    });

    buttons && buttons.forEach(button => {
        button.addEventListener('click', function() {
            let sibling = this.parentNode.previousElementSibling;
            sibling.classList.toggle('is-opened');
            
            this.classList.toggle('is-opened');
            this.textContent = this.classList.contains('is-opened') ? 'Show less' : 'Show more';
        });
    });

}