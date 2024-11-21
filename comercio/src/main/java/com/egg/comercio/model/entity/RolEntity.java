package com.egg.comercio.model.entity;

import jakarta.persistence.*;
import lombok.*;

@Entity
@Table(name = "roles")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class RolEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @MapKeyEnumerated(EnumType.STRING)
    private ERol name;

    public RolEntity(ERol name) {
        this.name = name;
    }
}
