package com.egg.comercio.model.dao;

import com.egg.comercio.model.entity.Articulo;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;

public interface ArticuloRepository extends CrudRepository<Articulo, String> {

    @Query("SELECT MAX(a.nroArticulo) FROM Articulo a")
    Integer findMaxNroArticulo();
}
