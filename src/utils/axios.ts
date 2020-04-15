import axios,{AxiosRequestConfig,AxiosResponse,AxiosPromise} from 'axios';

// 封装请求
const instance =  (request: AxiosRequestConfig): AxiosPromise => {
  return axios(request)
}
export default instance;