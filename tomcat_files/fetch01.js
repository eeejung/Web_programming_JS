window.onload = function() {

    const getImage = document.getElementById("loadImage");

    getImage.onclick = async function() {
        const container = document.getElementById("image_container");

        try {

            const response = await fetch("http://localhost:8000/imageProc.jsp");
            
            // fetch()함수가 반환한 객체 == Response 객체
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            
            const imageList = await response.json();  // 응답 body를 JSON으로 파싱 (Promise 객체 반환, 비동기함수라서)

            const imageArray = imageList.images;
            imageArray.forEach(image => {
                const img = document.createElement("img");
                img.src = image;
                container.appendChild(img);
            });

        } catch (error) {
            container.textContent = error.message;
        }
    }
    
};