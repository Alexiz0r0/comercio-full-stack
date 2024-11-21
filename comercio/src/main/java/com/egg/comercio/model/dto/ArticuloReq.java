package com.egg.comercio.model.dto;

import jakarta.persistence.Lob;
import lombok.*;

@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
@Builder
public class ArticuloReq {

    private String nombreArticulo;

    private String descripcionArticulo;

    private String idFabrica;

    @Lob
    private byte[] image;
}
