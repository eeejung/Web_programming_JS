<%@ page   contentType="text/xml; charset=utf-8"     %>
<%
    request.setCharacterEncoding("utf-8"); 
    response.setContentType("text/xml;charset=utf-8");

    String id = request.getParameter("userid");
    String pwd = request.getParameter("userpwd");

    String outString = "";
    int result = 0;

    if(id.equals("admin") && pwd.equals("1234")) {
        result = 1;    // 로그인 성공
    } else if(id.equals("admin")) {
        result = 0;    // 비밀번호 오류
    } else {
        result = 2;    // id 존재 X
    }

    if(result == 1) {
        outString  = "<response><result>" + result + "</result><id>" + id + "</id></response>";
    } else if(result == 0) {
        outString  = "<response><result>" + result + "</result><id>" + id + "</id></response>";
    } else {
        outString  = "<response><result>" + result + "</result><id>" + id + "</id></response>";
    }

    out.println(outString);

// http://127.0.0.1:8000/loginProc.jsp?userid=admin&userpwd=1234

%>
