package com.egg.comercio.model.entity;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
@Entity
@Table(name = "articulos")
public class Articulo {

    @Id
    @GeneratedValue(strategy = GenerationType.UUID)
    @Column(name = "id_articulo")
    private String idArticulo;

    @Column(name = "nro_articulo", unique = true, nullable = false)
    private Integer nroArticulo;

    @Column(name = "nombre_articulo")
    private String nombreArticulo;

    @Column(name = "descripcion_articulo")
    private String descripcionArticulo;

    @Lob
    @Column(columnDefinition = "LONGBLOB")
    private byte[] image;

    @ManyToOne(fetch = FetchType.LAZY, cascade = CascadeType.MERGE)
    @JoinColumn(name = "id_fabrica", nullable = true)
    @JsonIgnore
    private Fabrica fabrica;

}
