{
    const lists = document.querySelectorAll('.gallery-list');

    const fillList = (parent, data) => {
        for (let i = 0; i < 9; i++) {
            const num = Math.floor(Math.random() * (6 - 0) + 0);
            
            const item = document.createElement('div');
            item.className = 'gallery-item';
            
            const img = document.createElement('img');
            img.src = data[num].url;
            img.alt = '';

            item.append(img);
            parent.append(item);
        }
    };

    fetch('/api/items.json')
        .then(res => res.json())
        .then(data => lists.forEach(list => fillList(list, data)))
        .catch(err => console.log(err));
}