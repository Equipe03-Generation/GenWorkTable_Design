import React, { ChangeEvent, useEffect, useState } from 'react'
import { Container, Typography, TextField, Button, Select, InputLabel, MenuItem, FormControl, FormHelperText, Grid } from "@material-ui/core";
import { useNavigate, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import Grupos from '../../models/Grupos';
import Projetos from '../../models/Projetos';
import { busca, buscaId } from '../service/Service';

function CadastroGrupo() {
    let navigate = useNavigate();
    const { id } = useParams<{ id: string }>();
    
    const [grupos, setGrupos] = useState<Grupos>(
        {
            id: 0,
            numeroGrupo: '',
            maisInfos: '',
            turmaId: ''
           
        })
    const [projetos, setProjetos] = useState<Projetos>({
        id: 0,
        nomeProjeto: '',
        logoProjeto: '',
        linkProjeto: '',
        pitProjeto: '',
        grupoId: '',
        turmas: null
    })

    useEffect(() => { 
        setProjetos({
            ...projetos,
            grupos: grupos
        })
    }, [grupos])

    useEffect(() => {
        getGrupos()
        if (id !== undefined) {
            findByIdProjetos(id)
        }
    }, [id])

    async function getGrupos() {
        await busca("/grupo", setGrupos)
    }

    async function findByIdProjetos(id: string) {
        await buscaId(`Projetos/${id}`, setProjetos)
    }

    function updatedProjetos(e: ChangeEvent<HTMLInputElement>) {

        setProjetos({
            ...projetos,
            [e.target.name]: e.target.value,
            grupos: grupo
        })

    }

    async function onSubmit(e: ChangeEvent<HTMLFormElement>) {
        e.preventDefault()

        if (id !== undefined) {
            put(`/projetos`, projetos, setProjetos, {
               
            })
            toast.success('Postagem modificada com sucesso!', {
                position: "top-right",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: false,
                draggable: false,
                theme: "colored",
                progress: undefined,
            });
        } else {
            post(`/projetos`, projetos, setProjetos, {
                
            })
            toast.success('Postagem criada com sucesso!', {
                position: "top-right",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: false,
                draggable: false,
                theme: "colored",
                progress: undefined,
            });
        }
        back()

    }

    function back() {
        navigate('/home')
    }

    return (
        <Grid className='caixapostcad'>
        <Container maxWidth="sm" >
            <form onSubmit={onSubmit}>
                <Typography variant="h3" color="textSecondary" component="h1" align="center" >Cadastro de Postagem</Typography>
                <TextField value={projetos.nomeProjeto} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedProjetos(e)} id="nomeProjeto" label="nomeProjeto" variant="outlined" name="Nome Projeto" margin="normal" fullWidth />
                <TextField value={projetos.logoProjeto} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedProjetos(e)} id="logoProjeto" label="logoProjeto" name="Logo Projeto" variant="outlined" margin="normal" fullWidth />
                <TextField value={projetos.linkProjeto} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedProjetos(e)} id="linkProjeto" label="linkProjeto" name="Link Projeto" variant="outlined" margin="normal" fullWidth />
                <TextField value={projetos.pitProjeto} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedProjetos(e)} id="pitProjeto" label="pitProjeto" name="Pit Projeto" variant="outlined" margin="normal" fullWidth />
                <TextField value={projetos.grupoId} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedProjetos(e)} id="grupoId" label="grupoId" name="Grupo Id" variant="outlined" margin="normal" fullWidth />
                

                <FormControl >
                    <InputLabel id="demo-simple-select-helper-label">Tema </InputLabel>
                    <Select
                        labelId="demo-simple-select-helper-label"
                        id="demo-simple-select-helper"
                        onChange={(e) => buscaId(`/tema/${e.target.value}`, setGrupos, {
                           
                        })}>
                        {
                            grupos.map(grupo => (
                                <MenuItem value={grupo.id}>{grupo.turmas}</MenuItem>
                            ))
                        }
                    </Select>
                    <FormHelperText>Escolha um grupo para a projeto</FormHelperText>
                    <Button type="submit" variant="contained" className='botaopostagem'>
                        Finalizar
                    </Button>
                </FormControl>
            </form>
        </Container>
        </Grid>
    )
}
export default CadastroGrupo;