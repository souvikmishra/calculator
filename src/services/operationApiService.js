import http from '../http-common';

class OperationApiService {
  calculateExpression(data) {
    console.log(data, 'this is data');
    return http.get('/api/operations', data);
  }
}

export default new OperationApiService();
