import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';

import { ProdutoModule } from './produto/produto.module';
import { UsuarioModule } from './usuario/usuario.module';
import { PostgresConfigService } from './config/postgres.config.service';
import { PedidoModule } from './pedido/pedido.module';
import { APP_FILTER } from '@nestjs/core';
import { FiltroDeExcecaoGlobal } from './filtros/filtro-de-excecao-global';
import { CacheModule } from '@nestjs/cache-manager';
import { redisStore } from 'cache-manager-redis-yet';

@Module({
  imports: [
    UsuarioModule,
    ProdutoModule,
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    TypeOrmModule.forRootAsync({
      useClass: PostgresConfigService,
      inject: [PostgresConfigService],
    }),
    PedidoModule,
    CacheModule.registerAsync({
      useFactory: async () => ({
        store: await redisStore({ ttl: 10 * 1000 }),
      }),
      isGlobal: true,
    }),
    /* ttl: time to live, aó tá em 10 segundos,  não é ideal q esse ttl seja mto grande. Para os dados não ficarem desatualizados.
     */
  ],
  providers: [
    {
      provide: APP_FILTER,
      useClass: FiltroDeExcecaoGlobal,
    },
  ],
})
export class AppModule {}
