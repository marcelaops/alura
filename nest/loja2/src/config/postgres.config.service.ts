import { Injectable } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";
import { TypeOrmModuleOptions, TypeOrmOptionsFactory } from "@nestjs/typeorm";

@Injectable()
export class PostgresConfigService implements TypeOrmOptionsFactory{
  /* qd a classe é importada do app.modele ela chega aqui 'construida' nesse constructor */
  constructor(private configService: ConfigService) {}

  createTypeOrmOptions() : TypeOrmModuleOptions {
    /* infos po se comunicar ocm o banco */
    return {
      type: 'postgres', /* de acordo com o bd q vou usar */
      // as configuraçòes daqui vão estar no .env, que só vai estar na minha máquina
      host: this.configService.get<string>('DB_HOST'),
      port: this.configService.get<number>('DB_PORT'),
      username: this.configService.get<string>('DB_USERNAME'),
      password: this.configService.get<string>('DB_PASSWORD'),
      database: this.configService.get<string>('DB_NAME'),
      entities: [__dirname + '/../**/*.entity{.js,.ts}'],
      synchronize: true
      // por hora essas infos sao ficticias  
    }
  }

}