package com.demo.controller;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.demo.Entity.Employee;
import com.demo.exception.ResourceNotFoundException;
import com.demo.service.EmployeeService;

import jakarta.validation.Valid;

@RestController
@CrossOrigin(origins = {"http://localhost:4200","http://localhost:3000"})
@RequestMapping("/")
public class EmployeeController {
	
	@Autowired
	private EmployeeService employeeService;
	
	@GetMapping("employees")
	public List<Employee> getEmployees(){
		return employeeService.getEmployees();
	}
	
	@GetMapping("employees/{id}")
	public ResponseEntity<Employee> getEmployee(@PathVariable(value="id") long id) 
	throws ResourceNotFoundException {
		Employee employee=employeeService.getEmployee(id);
		if(employee==null) {
			throw new ResourceNotFoundException("Employee id " + id +" not found!");
		}
		return new ResponseEntity<>(employee,HttpStatus.OK);
	}
	
	@PostMapping("employees")
	public Employee saveEmployee(@Valid @RequestBody Employee emp) {
		return employeeService.saveOrUpdate(emp);
	}
	
	@PutMapping("employees/{id}")
	public ResponseEntity<Employee> updateEmployee(@PathVariable("id") long id,@Valid @RequestBody Employee emp) 
	throws ResourceNotFoundException{
		Employee employee=employeeService.getEmployee(id);
		if(employee==null) {
			throw new ResourceNotFoundException("Employee id " + id +" not found!");
		}
		employee.setFirtname(emp.getFirtname());
		employee.setLastname(emp.getLastname());
		employee.setEmail(emp.getEmail());
		Employee updatedemployee=employeeService.saveOrUpdate(employee);
		return new ResponseEntity<>(updatedemployee,HttpStatus.OK);
	}
	
//	@DeleteMapping("employees/{id}")
//	public ResponseEntity<Employee> deleteEmployee(@PathVariable("id") long id) 
//	throws ResourceNotFoundException{
//		
//		Employee employee = employeeService.getEmployee(id);
//		if(employee==null) {
//			throw new ResourceNotFoundException("Employee id " + id +" not found!");
//		}
//		employeeService.deleteEmployee(employee);
//		return new ResponseEntity<>(employee,HttpStatus.NO_CONTENT);
//	}
	
	@DeleteMapping("employees/{id}")
	public Map<String, Boolean> deleteEmployee(@PathVariable("id") long id) 
	throws ResourceNotFoundException{
		
		Employee employee = employeeService.getEmployee(id);
		if(employee==null) {
			throw new ResourceNotFoundException("Employee id " + id +" not found!");
		}
		employeeService.deleteEmployee(employee);
		Map<String, Boolean> response = new HashMap<>();
        response.put("deleted", Boolean.TRUE);
		return response;
	}
	
	
}
