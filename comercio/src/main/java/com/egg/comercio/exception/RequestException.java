package com.egg.comercio.exception;

import lombok.*;

@Getter
@Setter
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class RequestException extends RuntimeException {

    private String code;

    public RequestException(String message, String code) {
        super(message);
        this.code = code;
    }
}
