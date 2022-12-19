function ready() {
    fetch('https://api.genius.com/search?q=markul&access_token=LIHHEWawEhSdit4lnWGlyttS2giwdVWDGZLB-wbMpfEB86vGMjZjjXhz37zs-TLq')
        .then((response) => response.json())
        .then((data) => {
            setTimeout(function () {
                document.getElementById("preloader").classList.add("hidden")
                renderPosts(data["response"]["hits"])
            }, 2000);
        })
        .catch((error) => {
            document.getElementById("posts").innerHTML = '<div class="posts__error"> Something went wrong :( </div>'
            console.log(error)
        })
}

function renderPosts(data) {
    let posts = "";
    posts += '<div style="display: grid;\n' +
        '    grid-template-columns: 1fr 1fr;\n' +
        '    gap: 20px;\n' +
        '    grid-template-areas:\n' +
        '    "section section"\n' +
        '    "section section";""\n' +
        ' ">'
    data.forEach(item => {
        posts += '<section style="border-radius: 5px;\n' +
            '    border: 1px solid #000000;\n' +
            '    overflow: hidden;' +
            'background: #f8f8ff;">' +
            '<div style="display: flex; flex-direction: row;">'
            // + '<img src="' + item['result'].header_image_url + '" alt="?" style="' +
            // '    height: 100px;\n' +
            // '    width: 250px;\n' +
            // '    padding: 0.2em 0.4em 0.2em 0.2em;">'
            + '<div>' +
            '<div style="font-family: verdana;\n' +
            '    font-size: 0.925rem;\n' +
            '    font-weight: bold;\n' +
            '    color: #23204A;\n' +
            '    padding: 0.2em 0 0 0.5em;">' + item['result'].full_title + '</div>' +
            '<div style="\n' +
            '    font-family: verdana;\n' +
            '    font-size: 1rem;\n' +
            'padding: 0.2em 0 0 0.5em;'+
            '    color: black;">' +'<img src="../Img/views.png" height="25" width="25" style="padding: 0 0.25em 0.2em 0">'+ item['result']['stats'].pageviews + ' views</div>'
            + '</div>'
            + '</div>' +
            '<div style="background-image: url(' + item['result'].song_art_image_url + ');\n' +
            '    height: 150px;\n' +
            '    background-size: cover;\n' +
            '    background-position: center;\n' +
            '    box-sizing: border-box">' +
            '</div>'
            + '</section>'
    })
    posts += '</div>'
    document.getElementById("posts").innerHTML = posts
}

document.addEventListener("DOMContentLoaded", ready);