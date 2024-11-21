package com.egg.comercio.service;

import com.egg.comercio.model.dto.UsuarioDto;
import com.egg.comercio.model.dto.UsuarioReq;
import com.egg.comercio.model.entity.Usuario;


import java.util.List;

public interface IUsuario {

    List<UsuarioDto> listAll();

    UsuarioDto saveAdmin(UsuarioReq usuario);

    UsuarioDto save(UsuarioReq usuario);

    UsuarioDto findById(String id);

    UsuarioDto edit(Usuario usuario);

    void delete(String id);
}
