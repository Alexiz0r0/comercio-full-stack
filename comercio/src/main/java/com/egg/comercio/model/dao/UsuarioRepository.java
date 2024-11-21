package com.egg.comercio.model.dao;

import com.egg.comercio.model.entity.Usuario;
import org.springframework.data.repository.CrudRepository;

public interface UsuarioRepository extends CrudRepository<Usuario, String> {
}
