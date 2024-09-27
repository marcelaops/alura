import { ArgumentsHost, ExceptionFilter } from "@nestjs/common";
export declare class FiltroDeExcecapHttp implements ExceptionFilter {
    catch(excecao: unknown, host: ArgumentsHost): void;
}
