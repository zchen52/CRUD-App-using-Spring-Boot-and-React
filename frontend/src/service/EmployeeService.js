import axios from "axios";

const BASE_URL = "http://localhost:8080/springboot-crud-rest/employees";

export const getEmployees = ()=>{
    return axios.get(BASE_URL);
};

export const getEmployee = (id)=>{
    return axios.get(BASE_URL+'/'+id);
}

export const saveEmployee = (emp)=>{
    return axios.post(BASE_URL,emp)
}

export const updateEmployee = (emp,id)=>{
    return axios.put(BASE_URL+'/'+id,emp);
}

export const deleteEmployee = (id)=>{
    return axios.delete(BASE_URL+'/'+id);
}