<%@ page   contentType="application/json; charset=utf-8"     %>
<%
   String[] imageFiles = {
    "./images/img1.jpg", 
    "./images/img2.jpg", 
    "./images/img3.jpg", 
    "./images/img4.jpg", 
    "./images/img5.jpg"
   };

   StringBuffer json = new StringBuffer();

   json.append("{\"images\":[");
   for(int i=0; i<imageFiles.length;i++){
        json.append("\"").append(imageFiles[i]).append("\"");
        if(i<imageFiles.length-1) {
        json.append(",");
        }
   }
   json.append("]}");
   
   out.print(json.toString());
    
%>