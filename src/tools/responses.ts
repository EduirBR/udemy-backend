import { Response } from "express";
/**
 * class to manage responses from api
 */
class ApiResponse {
    /**
     * Response okay 200
     */
    static resOK(res: Response, message: string, data?: any) {
        data = {
            error: false,
            message: message,
            data: data,
        };
        res.send(data).status(200);
    }
    /**
     * Response created 201
     */
    static created(res: Response, message: string, data?: any) {
        data = {
            error: false,
            message: message,
            data: null,
        };
        res.send(data).status(201);
    }
    /**
     * Response generic error 400
     */
    static resError(res: Response, message: string, data?: any) {
        data = {
            error: true,
            message: message,
            data: null,
        };
        res.send(data).status(400);
    }
    /**
     * Response Not Found 404
     */
    static resNotFound(res: Response, message: string, data?: any) {
        data = {
            error: true,
            message: message,
            data: null,
        };
        res.status(404).send(data);
    }
}

export default ApiResponse;
