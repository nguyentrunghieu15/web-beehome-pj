import axios from 'node_modules/axios/index.cjs'

export class BaseApi {
    url: string
    timeout: number
    headers: Record<string, string>
    readonly axiosInstance: axios.AxiosInstance
    /**
     *
     */
    constructor(url: string, timeout: number, headers: Record<string, string>) {
        this.url = url
        this.timeout = timeout
        this.headers = headers
        this.axiosInstance = axios.create({
            baseURL: url,
            timeout: timeout,
            headers: headers
        })
    }
}
