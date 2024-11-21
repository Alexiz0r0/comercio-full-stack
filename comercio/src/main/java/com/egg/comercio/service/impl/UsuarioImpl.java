package com.egg.comercio.service.impl;

import com.egg.comercio.exception.RequestException;
import com.egg.comercio.exception.ResourceNotFoundException;
import com.egg.comercio.model.dao.UsuarioRepository;
import com.egg.comercio.model.dto.UsuarioDto;
import com.egg.comercio.model.dto.UsuarioReq;
import com.egg.comercio.model.entity.ERol;
import com.egg.comercio.model.entity.RolEntity;
import com.egg.comercio.model.entity.Usuario;
import com.egg.comercio.service.IUsuario;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.HashSet;
import java.util.List;
import java.util.Set;
import java.util.stream.Collectors;

import static com.egg.comercio.model.entity.ERol.ADMIN;
import static com.egg.comercio.model.entity.ERol.USER;

@Service
@RequiredArgsConstructor
public class UsuarioImpl implements IUsuario {

    private final UsuarioRepository usuarioRepository;

    @Override
    public List<UsuarioDto> listAll() {
        List<Usuario> usuarios = (List<Usuario>) usuarioRepository.findAll();
        List<UsuarioDto> usuarioDtos = new ArrayList<>();
        for (Usuario usuario : usuarios) {
            usuarioDtos.add(generateUsuario(usuario));
        }
        return usuarioDtos;
    }

    @Override
    public UsuarioDto saveAdmin(UsuarioReq usuario) {
        Set<RolEntity> rol = new HashSet<>();
        RolEntity rolEntity = new RolEntity(ADMIN);
        rol.add(rolEntity);
        Usuario usuario1 = new Usuario();

        validateUserReq(usuario);

        usuario1.setNombre(usuario.getNombre());
        usuario1.setApellido(usuario.getApellido());
        usuario1.setUsername(usuario.getUsername());
        usuario1.setPassword(usuario.getPassword());
        usuario1.setImage(usuario.getImage());
        usuario1.setRoles(rol);
        return generateUsuario(usuarioRepository.save(usuario1));
    }

    @Override
    public UsuarioDto save(UsuarioReq usuario) {
        Set<RolEntity> rol = new HashSet<>();
        RolEntity rolEntity = new RolEntity(USER);
        rol.add(rolEntity);
        Usuario usuario1 = new Usuario();

        validateUserReq(usuario);

        usuario1.setNombre(usuario.getNombre());
        usuario1.setApellido(usuario.getApellido());
        usuario1.setUsername(usuario.getUsername());
        usuario1.setPassword(usuario.getPassword());
        usuario1.setImage(usuario.getImage());
        usuario1.setRoles(rol);
        return generateUsuario(usuarioRepository.save(usuario1));
    }

    @Override
    public UsuarioDto findById(String id) {
        Usuario usuario = usuarioRepository.findById(id).orElse(null);
        validateUserExist(usuario);
        return generateUsuario(usuario);
    }

    @Override
    public UsuarioDto edit(Usuario usuario) {
        Usuario usuario1 = usuarioRepository.findById(usuario.getIdUsuario()).orElse(null);
        validateUserExist(usuario1);
        return generateUsuario(usuarioRepository.save(usuario1));
    }

    @Override
    public void delete(String id) {
        Usuario usuario = usuarioRepository.findById(id).orElse(null);
        validateUserExist(usuario);
        usuarioRepository.delete(usuario);
    }

    public UsuarioDto generateUsuario(Usuario usuario) {
        Set<ERol> roles = usuario.getRoles().stream().map(RolEntity::getName).collect(Collectors.toSet());
        return UsuarioDto.builder()
                .id(usuario.getIdUsuario())
                .nombre(usuario.getNombre())
                .apellido(usuario.getApellido())
                .username(usuario.getUsername())
                .image(usuario.getImage())
                .role(roles)
                .build();
    }

    private void validateUserReq(UsuarioReq u) {
        if (u.getUsername().trim().equals("") || u.getUsername() == null) {
            throw new RequestException("Username es obligatorio", "2000");
        }
        if (u.getNombre().trim().equals("") || u.getNombre() == null) {
            throw new RequestException("Nombre es obligatorio", "2001");
        }
        if (u.getPassword().trim().equals("") || u.getPassword() == null) {
            throw new RequestException("Password es obligatorio", "2002");
        }
    }

    private void validateUserExist(Usuario usuario) {
        if (usuario == null) {
            throw new ResourceNotFoundException("El recurso no existe", "3000");
        }
    }
}
