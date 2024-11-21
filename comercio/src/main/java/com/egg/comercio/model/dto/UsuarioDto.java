package com.egg.comercio.model.dto;

import com.egg.comercio.model.entity.ERol;
import jakarta.persistence.Lob;
import lombok.*;

import java.util.Set;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class UsuarioDto {

    private String id;

    private String username;

    private String nombre;

    private String apellido;

    @Lob
    private byte[] image;

    private Set<ERol> role;
}
