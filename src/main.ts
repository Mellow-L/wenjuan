import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { TransformInterceptor } from './transform/transform.interceptor';
import { HttpExceptionFilter } from './http-exception/http-exeption.filter';
async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.setGlobalPrefix('api'); //全局路由拦截

  app.useGlobalInterceptors(new TransformInterceptor()); //全局拦截器

  app.useGlobalFilters(new HttpExceptionFilter()); //全局过滤器

  app.enableCors(); //允许跨域

  await app.listen(process.env.PORT ?? 3005); //端口：3005
}
bootstrap();
