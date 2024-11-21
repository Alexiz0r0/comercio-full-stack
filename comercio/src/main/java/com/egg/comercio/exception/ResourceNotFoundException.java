package com.egg.comercio.exception;

import lombok.*;

@Getter
@Setter
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class ResourceNotFoundException extends RuntimeException{
    private String code;

    public ResourceNotFoundException(String message, String code) {
        super(message);
        this.code = code;
    }
}
