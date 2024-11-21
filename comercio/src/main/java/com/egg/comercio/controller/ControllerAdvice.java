package com.egg.comercio.controller;

import com.egg.comercio.exception.BussinessException;
import com.egg.comercio.exception.RequestException;
import com.egg.comercio.exception.ResourceNotFoundException;
import com.egg.comercio.model.dto.ErrorDto;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RestControllerAdvice;

@RestControllerAdvice
public class ControllerAdvice {

    @ExceptionHandler(value = RequestException.class)
    public ResponseEntity<ErrorDto> requestExceptionHandler(RequestException ex) {
        ErrorDto error = ErrorDto.builder()
                .code(ex.getCode())
                .message(ex.getMessage())
                .build();
        return new ResponseEntity<>(error, HttpStatus.BAD_REQUEST);
    }

    @ExceptionHandler(value = BussinessException.class)
    public ResponseEntity<ErrorDto> bussinessExceptionHandler(BussinessException ex) {
        ErrorDto error = ErrorDto.builder()
                .code(ex.getCode())
                .message(ex.getMessage())
                .build();
        return new ResponseEntity<>(error, ex.getStatus());
    }

    @ExceptionHandler(value = ResourceNotFoundException.class)
    public ResponseEntity<ErrorDto> resourceNotFoundExceptionHandler(ResourceNotFoundException ex) {
        ErrorDto error = ErrorDto.builder()
                .code(ex.getCode())
                .message(ex.getMessage())
                .build();
        return new ResponseEntity<>(error, HttpStatus.NOT_FOUND);
    }
}
