import { BaseApi } from '../base'
import type { LoginRequest, LoginResponse } from './interfaces'

class AuthApi extends BaseApi {
    prefix: string
    /**
     *
     */
    constructor(url: string, timeout: number, headers: Record<string, string>, prefix: string) {
        super(url + prefix, timeout, headers)
        this.prefix = prefix
    }

    login(req: LoginRequest): any {
        this.axiosInstance.post('/login', req)
    }
}

export const authApi = new AuthApi('localhost:3000', 1000, {}, '')
