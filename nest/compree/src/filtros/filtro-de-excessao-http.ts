import { ArgumentsHost, Catch, ExceptionFilter, HttpException, HttpStatus } from "@nestjs/common";
import { Request, Response } from "express";

@Catch() /* n colocando nada capturamos toooodos os erros da app */
export class FiltroDeExcecapHttp implements ExceptionFilter{
  catch(excecao: unknown, host: ArgumentsHost) {
    /* código q queremos q lance quando qualquer erro dentro da app aconteça. */
    console.log(excecao)

    const contexto = host.switchToHttp();
    const resposta = contexto.getResponse<Response>();
    /* como importei o Response do express a resposta vai ser igual a q já conehcemos do express. Podendo usar os métodos específicos */

    const requisicao = contexto.getRequest<Request>();

    const { status, body } =
      excecao instanceof HttpException ? {
          status: excecao.getStatus(),
          body: excecao.getResponse()
        } : {
          status: HttpStatus.INTERNAL_SERVER_ERROR,
          body: {
            statusCode: HttpStatus.INTERNAL_SERVER_ERROR,
            timestamp: new Date().toISOString(),
            path: requisicao.url,
          }
        }

    resposta.status(status).json(body);
  }
}