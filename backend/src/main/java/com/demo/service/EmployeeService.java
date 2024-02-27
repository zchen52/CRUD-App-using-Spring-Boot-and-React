package com.demo.service;

import java.util.List;

import com.demo.Entity.Employee;

public interface EmployeeService {
	public List<Employee> getEmployees();
	public Employee getEmployee(long id);
	public Employee saveOrUpdate (Employee employee);
	public void deleteEmployee(Employee employee);
}
