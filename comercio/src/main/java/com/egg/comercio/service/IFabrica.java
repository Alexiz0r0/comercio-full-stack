package com.egg.comercio.service;

import com.egg.comercio.model.dto.FabricaReq;
import com.egg.comercio.model.entity.Fabrica;

import java.util.List;

public interface IFabrica {

    List<Fabrica> listAll();

    Fabrica save(FabricaReq fabrica);

    Fabrica findById(String id);

    void delete(String id);

    Fabrica edit(Fabrica fabrica);
}

