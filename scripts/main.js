function filterSelection(category) {
    var items = document.getElementsByClassName('item');
    for (var i = 0; i < items.length; i++) {
        if (category == 'all' || items[i].classList.contains(category)) {
            items[i].style.display = 'block';
        } else {
            items[i].style.display = 'none';
        }
    }
}
