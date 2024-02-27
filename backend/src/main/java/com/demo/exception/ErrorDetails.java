package com.demo.exception;

import java.util.Date;

public class ErrorDetails {
	private Date date;
	private String details;
	private String msg;
	
	public ErrorDetails(Date date, String details, String msg) {
		super();
		this.date = date;
		this.details = details;
		this.msg = msg;
	}

	public Date getDate() {
		return date;
	}

	public String getDetails() {
		return details;
	}

	public String getMsg() {
		return msg;
	}
	
}
