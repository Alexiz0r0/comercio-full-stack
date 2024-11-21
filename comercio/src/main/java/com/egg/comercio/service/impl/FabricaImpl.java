package com.egg.comercio.service.impl;

import com.egg.comercio.exception.RequestException;
import com.egg.comercio.exception.ResourceNotFoundException;
import com.egg.comercio.model.dao.FabricaRepository;
import com.egg.comercio.model.dto.FabricaReq;
import com.egg.comercio.model.entity.Fabrica;
import com.egg.comercio.service.IFabrica;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class FabricaImpl implements IFabrica {

    private final FabricaRepository fabricaRepository;

    @Override
    public List<Fabrica> listAll() {
        return (List<Fabrica>) fabricaRepository.findAll();
    }

    @Override
    public Fabrica save(FabricaReq fabrica) {
        validateFabricaReq(fabrica);
        Fabrica fabrica1 = new Fabrica();
        fabrica1.setNombreFabrica(fabrica.getNombreFabrica());
        return fabricaRepository.save(fabrica1);
    }

    @Override
    public Fabrica findById(String id) {
        Fabrica fabrica = fabricaRepository.findById(id).orElse(null);
        validateFabricaExist(fabrica);
        return fabrica;
    }

    @Override
    public void delete(String id) {
        Fabrica fabrica = fabricaRepository.findById(id).orElse(null);
        validateFabricaExist(fabrica);
        fabricaRepository.delete(fabrica);
    }

    @Override
    public Fabrica edit(Fabrica fabrica) {
        Fabrica fabrica1 = fabricaRepository.findById(fabrica.getIdFabrica()).orElse(null);
        validateFabricaExist(fabrica1);
        return fabricaRepository.save(fabrica);
    }

    private void validateFabricaExist(Fabrica fabrica) {
        if (fabrica == null) {
            throw new ResourceNotFoundException("El recurso no existe", "3001");
        }
    }

    private void validateFabricaReq(FabricaReq f) {
        if (f.getNombreFabrica().trim().equals("") || f.getNombreFabrica() == null) {
            throw new RequestException("Nombre es obligatorio", "3001");
        }
    }
}
