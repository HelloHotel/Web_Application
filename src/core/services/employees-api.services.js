import http from "./http-common"

class EmployeesApiService {
    getAll(){
        return http.get("/employees");
    }

    getById(id){
        return http.get(`/employees/${id}`);

    }
    create(data){
        return http.post("/employees", data);
    }
    update(id, data){
        return http.put(`/employees/${id}`, data);
    }
    delete(id){
        return http.delete(`/employees/${id}`);
    }
    findByTitle(title){
        return http.get( `/employees?title=${title}`);
    }
}

export default new EmployeesApiService();