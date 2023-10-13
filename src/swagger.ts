import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { MiddlewareConsumer } from "@nestjs/common";

export const setupSwagger = (app, consumer: MiddlewareConsumer) => {
  const config = new DocumentBuilder()
    .setTitle('TaxiKrim API')
    .setDescription('TaxiKrim API DOC')
    .setVersion('1.0')
    .addBearerAuth()
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);
};
