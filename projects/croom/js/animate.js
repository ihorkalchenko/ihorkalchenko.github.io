{
    const animate = document.querySelectorAll('.animate');

    const io = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.toggle('animated');
            }
        });
    });

    animate.forEach(elem => io.observe(elem));
}