package com.egg.comercio.model.dto;

import jakarta.persistence.Lob;
import lombok.*;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class ArticuloDto {

    private String idArticulo;
    private Integer nroArticulo;
    private String nombreArticulo;
    private String descripcionArticulo;
    @Lob
    private byte[] image;
    private String idFabrica;
    private String nombreFabrica;
}
