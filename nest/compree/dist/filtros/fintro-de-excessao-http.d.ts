import { ArgumentsHost, ExceptionFilter, HttpException } from "@nestjs/common";
export declare class FiltroDeExcecapHttp implements ExceptionFilter {
    catch(excecao: HttpException, host: ArgumentsHost): void;
}
