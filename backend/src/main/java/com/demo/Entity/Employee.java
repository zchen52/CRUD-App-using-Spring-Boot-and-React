package com.demo.Entity;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name="employees")
public class Employee {
	@Id
	@GeneratedValue
	private long id;
	@Column(name="first_name",nullable = false)
	private String firstname;
	@Column(name="last_name",nullable = false)
	private String lastname;
	@Column(name="email",nullable = false)
	private String emailaddress;
	
	public Employee() {
		super();
	}
	
	public Employee(String firstname, String lastname, String email) {
		super();
		this.firstname = firstname;
		this.lastname = lastname;
		this.emailaddress = email;
	}



	public long getId() {
		return id;
	}

	public void setId(long id) {
		this.id = id;
	}

	public String getFirtname() {
		return firstname;
	}

	public void setFirtname(String firstname) {
		this.firstname = firstname;
	}

	public String getLastname() {
		return lastname;
	}

	public void setLastname(String lastname) {
		this.lastname = lastname;
	}

	public String getEmail() {
		return emailaddress;
	}

	public void setEmail(String email) {
		this.emailaddress = email;
	}

	@Override
	public String toString() {
		return "Employee [id=" + id + ", firstname=" + firstname + ", lastname=" + lastname + ", emailaddress=" + emailaddress + "]";
	}
}
