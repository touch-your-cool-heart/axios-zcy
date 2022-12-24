import instance from './axios';

interface ConfigType {
    method: string;
    url: string;
}
export const $http = async (config: ConfigType, params = {}, options = {}) => {
    const { method, url } = config;
    const requestItem = {
        method: method as 'get' | 'post',
        url,
        [getRequestParamsKey(method)]: params,
        ...options
    };
    try {
        const res = await instance(requestItem);
        return res;
    } catch (error) {
        console.log(error);
    }
};

const getRequestParamsKey = (method: string) => {
    return method === 'get' ? 'params' : 'data';
}