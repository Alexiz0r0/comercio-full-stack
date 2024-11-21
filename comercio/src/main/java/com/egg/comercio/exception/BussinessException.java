package com.egg.comercio.exception;

import lombok.*;
import org.springframework.http.HttpStatus;

@Getter
@Setter
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class BussinessException extends RuntimeException{

    private String code;
    private HttpStatus status;

    public BussinessException(String message, String code, HttpStatus status) {
        super(message);
        this.code = code;
        this.status = status;
    }
}
