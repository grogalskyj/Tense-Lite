
// import org.springframework.security.web.authentication.AbstractAuthenticationProcessingFilter;
// import javax.servlet.http.HttpServletRequest;
// import javax.servlet.http.HttpServletResponse;
// import org.springframework.security.oauth2.server.resource.authentication.JwtAuthenticationToken;
// import org.springframework.security.core.Authentication;
// import org.springframework.security.oauth2.jwt.Jwt.Builder;
// import org.springframework.security.oauth2.jwt.Jwt;


// class JwtAuthenticationFilter(val http : HttpServletRequest) : AbstractAuthenticationProcessingFilter("/**")



// {


//     override fun requiresAuthentication(request : HttpServletRequest, response : HttpServletResponse, ) : Boolean{

//         return true;

//     }


//     override fun attemptAuthentication (request : HttpServletRequest, response: HttpServletResponse) : Authentication {

//         var header = request.getHeader("Authorization")
//         if (header == null || !header.startsWith("Bearer ")){
//             print("Wreck it Ralph")
//         }
//         var authToken = (Jwt.withTokenValue(header.substring(7))).build()
//         var authRequest = JwtAuthenticationToken(authToken)
//         var authy = getAuthenticationManager().authenticate(authRequest)
//         print(authy)
//         return authy


//     }

// }