// package com.jahnelgroup.tenselite.security
// import org.springframework.context.annotation.Configuration
// import org.springframework.web.servlet.config.annotation.CorsRegistry
// import org.springframework.web.servlet.config.annotation.WebMvcConfigurer
// import org.springframework.web.filter.CorsFilter
// import org.springframework.context.annotation.Bean

// @Configuration
// class WebMvcConfig : WebMvcConfigurer {


//     @Bean
//     override fun addCorsMappings(registry: CorsRegistry) {

//         registry.addMapping("/**")
//                 .allowedOrigins("*")
//                 .allowedMethods("HEAD", "GET", "POST", "PUT", "PATCH", "DELETE")
//                 .allowedHeaders("*")
//                 .allowCredentials(true)
//                 .maxAge(3600)

//     }

// }