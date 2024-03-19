import Axios from './caller.service';

const AbsencesService = {
  getById: (id) => Axios.get(`/api/absences/personnel/${id}`).then(response => response.data),
  
  getByPersonnel: (cin) => Axios.get(`/api/absences/personnel/${cin}`).then(response => response.data),
  
  getByPersonnelAndMissingMonth: (cin, missingMonth) => Axios.get(`/api/absences/personnel/${cin}/${missingMonth}`).then(response => response.data),
  
  getByMissingDate: (missingDate) => Axios.get(`/api/absences/missingDate/${missingDate}`).then(response => response.data),
  
  getAll: (page, size) => Axios.get(`/api/absences?page=${page}&size=${size}`).then(response => response.data),
  
  create: (request) => Axios.post('/api/absences', request).then(response => response.data),
  
  update: (id, request) => Axios.put(`/api/absences/${id}`, request).then(response => response.data),
  
  delete: (id) => Axios.delete(`/api/absences/${id}`).then(response => response.data)
};

export default AbsencesService;
