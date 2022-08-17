//package com.jahnelgroup.tenselite.tenselite.ServiceInterceptorAppConfig;
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.context.annotation.Configuration;
//import org.springframework.web.servlet.config.annotation.InterceptorRegistry;
//import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;
//import com.jahnelgroup.tenselite.tenselite.Interceptors.Interceptor;
//
//
//@Configuration
//class ServiceInterceptorAppConfig( servinterceptor : Interceptor ) : WebMvcConfigurer  {
//    val interceptor = servinterceptor;
//
//
//    override fun addInterceptors(registry: InterceptorRegistry){
//        registry.addInterceptor(interceptor).addPathPatterns("/**");
//
//
//    }
//
//}