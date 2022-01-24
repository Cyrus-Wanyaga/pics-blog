$(document).ready(function () {
    console.log("----- UNSPLASH API -----");
    const access_key = "c5oJ3H8Y6DKEhheOKom4_vHBhp3RFxjM1bfDTfhuEO0";
    const base_url = 'https://api.unsplash.com/';
    const swiffy_slider = document.querySelector(".swiffy-slider .slider-container");

    const auth_key = (access_key) => {
        async function authenticate(url = '', data = {}){

        }

        authenticate('', {}).then(data => {
            console.log(data);
        });
    }

    const get_pictures = (e) => {
        async function load_pics(url = ''){
            const response = await fetch(url, {
                method: 'GET',
                mode: 'cors',
                credentials: 'omit',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept-Version': 'v1',
                    'Authorization': 'Client-ID ' + access_key
                },
                redirect: 'follow',
                referrerPolicy: 'no-referrer',
            });
            return response.json();
        }

        load_pics(base_url + 'photos?page=1&per_page=10').then(data => {
            console.log(data);
            let counter = 1;
            data.forEach(function (el){
                draw(el, counter);
                counter++;
            });
        });

        const draw = (el, counter) => {
            const imageCounter = "'image-" + counter + "'";
            const imageDiv = document.createElement("div");
            imageDiv.classList.add("image-div");
            imageDiv.setAttribute("data-attr", "image-" + counter);
            const image = document.createElement("img");
            image.classList.add("the-image");
            image.src = el.urls.regular;
            image.loading = "lazy";
            const overlay = document.createElement("div");
            overlay.classList.add("image-overlay");
            const title = document.createElement("h4");
            title.appendChild(document.createTextNode(el.description));
            const paragraph = document.createElement("p");
            paragraph.classList.add("image-paragraph");
            paragraph.appendChild(document.createTextNode("By " + el.user.first_name + " " + el.user.last_name));
            const text = document.createElement("p");
            text.classList.add("image-paragraph");
            text.appendChild(document.createTextNode(el.user.bio));
            const hr = document.createElement("hr");
            const prompt_text = document.createElement("h6");
            prompt_text.appendChild(document.createTextNode("Statistics"));
            const icon = document.createElement("i");
            icon.classList.add("material-icons");
            icon.classList.add("icon-up");
            icon.setAttribute('onclick', "close_text(" + imageCounter + ")");
            icon.appendChild(document.createTextNode("expand_less"));
            overlay.append(title, paragraph, text, hr, prompt_text, icon);
            const imageText = document.createElement("div");
            imageText.classList.add("image-text");
            const imageTextH4 = document.createElement("h4");
            imageTextH4.appendChild(document.createTextNode(el.description));
            let counterText = '';
            if(counter < 10)
                counterText = '0' + counter;
            else
                counterText = counter;
            const counterParagraph = document.createElement("p");
            counterParagraph.appendChild(document.createTextNode(counterText));
            imageText.append(imageTextH4, counterParagraph);
            const buttonDiv = document.createElement("div");
            buttonDiv.classList.add("button-class");
            const button = document.createElement("button");
            button.classList.add("read-more");
            button.innerHTML = 'Read More';
            button.setAttribute("onclick", "display_text(" + imageCounter + ")");
            buttonDiv.appendChild(button);
            imageDiv.append(image, overlay, imageText, buttonDiv);
            swiffy_slider.appendChild(imageDiv);
        }
    }

    get_pictures();
});