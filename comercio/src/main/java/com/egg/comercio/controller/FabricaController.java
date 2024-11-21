package com.egg.comercio.controller;

import com.egg.comercio.model.dto.FabricaReq;
import com.egg.comercio.model.entity.Fabrica;
import com.egg.comercio.service.IFabrica;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/fabricas")
@RequiredArgsConstructor
@CrossOrigin
public class FabricaController {

    private final IFabrica fabricaService;

    @GetMapping
    public List<Fabrica> showAllFactory() {
        return fabricaService.listAll();
    }

    @GetMapping("/{id}")
    public Fabrica showFactoryById(@PathVariable String id) {
        return fabricaService.findById(id);
    }

    @PutMapping
    public Fabrica editFactory(@RequestBody Fabrica fabrica) {
        return fabricaService.edit(fabrica);
    }

    @PostMapping
    public Fabrica saveFactory(@RequestBody FabricaReq fabricaReq) {
        return fabricaService.save(fabricaReq);
    }

    @DeleteMapping("/{id}")
    public void deleteFactory(@PathVariable String id) {
        fabricaService.delete(id);
    }
}
