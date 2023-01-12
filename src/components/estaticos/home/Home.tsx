import React, { useEffect } from 'react';
import {Typography, Grid, Button} from '@material-ui/core';
import {Box} from '@mui/material';
import './Home.css';
import { Link } from 'react-router-dom'
import ModalProjeto from '../../modais/modalProjeto/ModalProjeto';
import ListaProjetos from '../../paginas/listaprojetos/ListaProjetos';

function Home() {
    return (
    
            <Grid container direction="row" justifyContent="center" alignItems="center" className='caixa'>
                <Grid alignItems="center" item xs={6}>
                    <Box paddingX={20} >
                        <Typography variant="h3" gutterBottom color="textPrimary" component="h3" align="center" className='titulo'>Seja bem-vindo(a)!</Typography>
                        <Typography variant="h5" gutterBottom color="textPrimary" component="h5" align="center" className='titulo'>Site com os PIs desenvolvidos na Generation!</Typography>
                    </Box>
                    <Box display="flex" justifyContent="center">
                        <Box marginRight={1}>
                            <ModalProjeto />
                        </Box>
                        <Link to="/posts" className="text-decorator-none">
                            <Button variant="outlined" className='botao'>Ver Projetos</Button>
                        </Link>
                    </Box>
                </Grid>
                <Grid item xs={6} >
                    <img src="https://brazil.generation.org/wp-content/uploads/2022/04/Cover-1.png" alt="" width="500px" height="500px" />
                </Grid>
                <Grid xs={12} className='Projetos'>
                    <ListaProjetos />
                </Grid>
            </Grid>
    );
}

export default Home;