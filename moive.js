let btn = document.querySelector('button');
let inp = document.querySelector('input'); // Select the input field

btn.addEventListener('click', () => {
    let searchText = inp.value; // Get the search text

    fetch(`https://api.tvmaze.com/search/shows?q=${searchText}`)
        .then((res) => res.json())
        .then((data) => {
            let div = document.querySelector('div');
            div.innerHTML = ''; // Clear previous results

            for (let moiveData of data) {
                console.log(moiveData, "hehehe");

                // Check if image exists
                if (moiveData.show.image) {
                    let img = document.createElement('img');
                    let h2 = document.createElement('h2');

                    img.setAttribute('src', moiveData.show.image.medium);
                    h2.innerText = moiveData.show.name;

                    div.append(img, h2);
                }
            }
        })
        .catch((err) => {
            console.error('Error fetching data:', err);
        });
});
