import http from '../http-common';

class OperationApiService {
  getExpressionResult(data) {
    return http.post('/api/operations', data);
  }
}

export default new OperationApiService();
