window.onload = function(){
    const getImage = document.getElementById("loadImage");
    getImage.onclick = function(){
    const xhr = new XMLHttpRequest();
    const url = "http://localhost:8000/imageProc.jsp";
    xhr.open("GET", url, true);
    xhr.onreadystatechange = function (){
        if (xhr.readyState === 4 && xhr.status === 200) {
            const container = document.getElementById("image_container");
            try{            
            const imageList = JSON.parse(xhr.responseText);
            imageArray = imageList.images;
            imageArray.forEach((image, idx)=>{
                const img = document.createElement("img");
                img.src = image;
                container.appendChild(img);
            });            
           }catch(error){
            container.textContent= error.message;
          }
        }
    } ;
    xhr.send();
}
};
 