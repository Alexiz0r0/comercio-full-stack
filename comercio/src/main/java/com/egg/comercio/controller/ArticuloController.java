package com.egg.comercio.controller;

import com.egg.comercio.model.dto.ArticuloDto;
import com.egg.comercio.model.dto.ArticuloEditReq;
import com.egg.comercio.model.dto.ArticuloReq;
import com.egg.comercio.model.entity.Articulo;
import com.egg.comercio.service.IArticulo;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/articulos")
@RequiredArgsConstructor
@CrossOrigin
public class ArticuloController {

    private final IArticulo articuloService;

    @PostMapping
    public Articulo saveArticulo(@RequestBody ArticuloReq articuloReq) {
        return articuloService.save(articuloReq);
    }

    @GetMapping
    public List<ArticuloDto> showAllArticulos() {
        return articuloService.listAll();
    }

    @GetMapping("/{id}")
    public Articulo findArticuloById(@PathVariable String id) {
        return articuloService.findById(id);
    }

    @PutMapping
    public Articulo editArticulo(@RequestBody ArticuloEditReq articuloEditReq) {
        return articuloService.edit(articuloEditReq);
    }

    @DeleteMapping("/{id}")
    public void deleteArticulo(@PathVariable String id) {
        articuloService.delete(id);
    }
}
