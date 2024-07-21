import { IStatusCodeMessage } from "../interfaces/request";

const statusCodeMessage: IStatusCodeMessage = {
    200: 'OK',
    400: 'Requisição Inválida',
    401: 'Não Autorizado',
    403: 'Proibido',
    404: 'Não Encontrado',
    500: 'Erro Interno do Servidor'
}

export {
    statusCodeMessage,
}