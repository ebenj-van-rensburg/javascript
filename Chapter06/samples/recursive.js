function getRe(nr) {
    console.log(nr);
    if (nr > 0) {
        getRe(--nr);
    }
}

getRe(20);
