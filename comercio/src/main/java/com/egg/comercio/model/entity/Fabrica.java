package com.egg.comercio.model.entity;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.ArrayList;
import java.util.List;


@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
@Entity
@Table(name = "fabricas")
public class Fabrica {

    @Id
    @GeneratedValue(strategy = GenerationType.UUID)
    @Column(name = "id_fabrica")
    private String idFabrica;
    private String nombreFabrica;

    @OneToMany(mappedBy = "fabrica", cascade = CascadeType.REMOVE, orphanRemoval = true, fetch = FetchType.LAZY)
    @JsonIgnore
    private List<Articulo> articulos = new ArrayList<>();

}
