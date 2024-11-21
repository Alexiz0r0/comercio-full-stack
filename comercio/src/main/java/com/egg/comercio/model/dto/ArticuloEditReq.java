package com.egg.comercio.model.dto;

import jakarta.persistence.Lob;
import lombok.*;

@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
@Builder
public class ArticuloEditReq {

    private String idArticulo;

    private String nombreArticulo;

    private String descripcionArticulo;

    private String idFabrica;

    @Lob
    private byte[] image;
}
