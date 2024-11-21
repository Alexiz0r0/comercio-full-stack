package com.egg.comercio.model.dto;

import jakarta.persistence.Lob;
import lombok.*;

@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
@Builder
public class UsuarioReq {

    private String username;

    private String password;

    private String nombre;

    private String apellido;

    @Lob
    private byte[] image;
}
