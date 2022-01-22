//login.ts
import axios from '@/service/axios'
import { IResponse, ILogin } from './types'

/**
 * @description: 用户登录案例
 * @params {ILogin} params
 * @return {Promise}
 */
export const login = (params: ILogin): Promise<IResponse> => {
  return axios.post('user/login', params).then(res => res.data)
}

export const photo = () => {
  return axios.get('pb?p=6')
}
