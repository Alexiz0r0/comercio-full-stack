package com.egg.comercio.service;

import com.egg.comercio.model.dto.ArticuloDto;
import com.egg.comercio.model.dto.ArticuloEditReq;
import com.egg.comercio.model.dto.ArticuloReq;
import com.egg.comercio.model.entity.Articulo;

import java.util.List;

public interface IArticulo {

    List<ArticuloDto> listAll();

    Articulo save(ArticuloReq articuloReq);

    Articulo findById(String id);

    Articulo edit(ArticuloEditReq articuloReq);

    void delete(String id);
}
