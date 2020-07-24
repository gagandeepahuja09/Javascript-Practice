document.querySelector('#categories').addEventListener('click', (e) => {
    console.log(e.target.innerHTML);
    if(e.target.tagName === 'LI') {
        window.location.href += "/" + e.target.innerHTML;
        // If we don't wanna do by text, we can also add ids
        // window.location.href += "/" + e.target.id;
    }
});
