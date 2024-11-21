package com.egg.comercio.service.impl;

import com.egg.comercio.exception.RequestException;
import com.egg.comercio.exception.ResourceNotFoundException;
import com.egg.comercio.model.dao.ArticuloRepository;
import com.egg.comercio.model.dao.FabricaRepository;
import com.egg.comercio.model.dto.ArticuloDto;
import com.egg.comercio.model.dto.ArticuloEditReq;
import com.egg.comercio.model.dto.ArticuloReq;
import com.egg.comercio.model.entity.Articulo;
import com.egg.comercio.model.entity.Fabrica;
import com.egg.comercio.service.IArticulo;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
@RequiredArgsConstructor
public class ArticuloImpl implements IArticulo {

    private final ArticuloRepository articuloRepository;
    private final FabricaRepository fabricaRepository;

    @Override
    public List<ArticuloDto> listAll() {
        List<Articulo> articulos = (List<Articulo>) articuloRepository.findAll();
        List<ArticuloDto> articuloDtos = new ArrayList<>();
        for (Articulo articulo: articulos) {
            articuloDtos.add(generateArticulo(articulo));
        }
        return articuloDtos;
    }

    @Override
    public Articulo save(ArticuloReq articuloReq) {

        validateArticuloReq(articuloReq);

        Fabrica fabrica = fabricaRepository.findById(articuloReq.getIdFabrica()).orElse(null);

        validateFabricaExist(fabrica);

        Integer lastNroArticulo = articuloRepository.findMaxNroArticulo();
        int nextNroArticulo = (lastNroArticulo == null) ? 1 : lastNroArticulo + 1;
        Articulo articulo = new Articulo();
        articulo.setNroArticulo(nextNroArticulo);
        articulo.setNombreArticulo(articuloReq.getNombreArticulo());
        articulo.setDescripcionArticulo(articuloReq.getDescripcionArticulo());
        articulo.setImage(articuloReq.getImage());
        articulo.setFabrica(fabrica);
        return articuloRepository.save(articulo);
    }

    @Override
    public Articulo findById(String id) {
        Articulo articulo = articuloRepository.findById(id).orElse(null);
        validateArticuloExist(articulo);
        return articulo;
    }

    @Override
    public Articulo edit(ArticuloEditReq articuloReq) {
        validateArticuloEditReq(articuloReq);
        Articulo articulo = articuloRepository.findById(articuloReq.getIdArticulo()).orElse(null);
        validateArticuloExist(articulo);
        Fabrica fabrica = fabricaRepository.findById(articuloReq.getIdFabrica()).orElse(null);
        validateFabricaExist(fabrica);
        articulo.setNombreArticulo(articuloReq.getNombreArticulo());
        articulo.setDescripcionArticulo(articuloReq.getDescripcionArticulo());
        articulo.setImage(articuloReq.getImage());
        articulo.setFabrica(fabrica);
        return articuloRepository.save(articulo);
    }

    @Override
    public void delete(String id) {
        Articulo articulo = articuloRepository.findById(id).orElse(null);
        validateArticuloExist(articulo);
        articuloRepository.delete(articulo);
    }

    private void validateFabricaExist(Fabrica fabrica) {
        if (fabrica == null) {
            throw new ResourceNotFoundException("El recurso (Fabrica) no existe", "3001");
        }
    }

    private void validateArticuloExist(Articulo articulo) {
        if (articulo == null) {
            throw new ResourceNotFoundException("El recurso (Articulo) no existe", "3001");
        }
    }

    private void validateArticuloReq(ArticuloReq a) {
        if (a.getNombreArticulo().trim().equals("") || a.getNombreArticulo() == null) {
            throw new RequestException("Nombre del articulo es obligatorio", "4000");
        }
    }

    private void validateArticuloEditReq(ArticuloEditReq a) {
        if (a.getNombreArticulo().trim().equals("") || a.getNombreArticulo() == null) {
            throw new RequestException("Nombre del articulo es obligatorio", "4000");
        }
    }

    public ArticuloDto generateArticulo(Articulo articulo) {
        return ArticuloDto.builder()
                .idArticulo(articulo.getIdArticulo())
                .nroArticulo(articulo.getNroArticulo())
                .nombreArticulo(articulo.getNombreArticulo())
                .descripcionArticulo(articulo.getDescripcionArticulo())
                .image(articulo.getImage())
                .idFabrica(articulo.getFabrica().getIdFabrica())
                .nombreFabrica(articulo.getFabrica().getNombreFabrica())
                .build();
    }
}
