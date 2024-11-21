package com.egg.comercio.controller;

import com.egg.comercio.model.dto.UsuarioDto;
import com.egg.comercio.model.dto.UsuarioReq;
import com.egg.comercio.model.entity.Usuario;
import com.egg.comercio.service.IUsuario;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/usuarios")
@RequiredArgsConstructor
@CrossOrigin
public class UsuarioController {

    private final IUsuario usuarioService;

    @GetMapping
    public List<UsuarioDto> showAllUsers() {
        return usuarioService.listAll();
    }

    @GetMapping("/{id}")
    public UsuarioDto findUserById(@PathVariable String id) {
        return usuarioService.findById(id);
    }

    @PutMapping
    public UsuarioDto editUser(@RequestBody Usuario usuario) {
        return usuarioService.edit(usuario);
    }

    @PostMapping
    public UsuarioDto saveUser(@RequestBody UsuarioReq usuarioReq) {
        return usuarioService.save(usuarioReq);
    }

    @PostMapping("/admin")
    public UsuarioDto saveAdmin(@RequestBody UsuarioReq usuarioReq) {
        return usuarioService.saveAdmin(usuarioReq);
    }

    @DeleteMapping("/{id}")
    public void deleteUserById(@PathVariable String id) {
         usuarioService.delete(id);
    }
}
