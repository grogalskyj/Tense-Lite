// import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity
// import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter
// import org.springframework.security.config.annotation.web.builders.HttpSecurity
// import org.springframework.web.cors.CorsConfiguration
// import org.springframework.context.annotation.Bean
// import org.springframework.web.cors.CorsConfigurationSource
// import org.springframework.web.cors.UrlBasedCorsConfigurationSource
// import org.springframework.context.annotation.Configuration





// @Configuration
// @EnableWebSecurity
// class WebSecurity : WebSecurityConfigurerAdapter(){

//     @Throws(Exception ::class)
//     override fun configure(http : HttpSecurity){
//         http.cors().and().csrf().disable().headers().disable()


//     }


//     // @Bean
//     // fun corsConfigurationSource() : CorsConfigurationSource{
//     //     var configuration : CorsConfiguration = CorsConfiguration()
//     //     configuration.setAllowedOrigins(mutableListOf("*"))
//     //     configuration.setAllowedMethods(mutableListOf("HEAD", "GET", "POST","PUT","DELETE", "PATCH", "OPTIONS"));
//     //     configuration.setAllowCredentials(true)
//     //     configuration.setAllowedHeaders(mutableListOf("Authorization, content-type"))
//     //     var source : UrlBasedCorsConfigurationSource = UrlBasedCorsConfigurationSource()
//     //     source.registerCorsConfiguration("/**", configuration)
//     //     return source
//     // }

// }