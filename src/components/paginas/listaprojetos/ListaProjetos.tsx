import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom'
import {Card, CardActions, CardContent, Button, Typography,Grid } from '@material-ui/core';
import {Box} from '@mui/material';
import {useNavigate} from 'react-router-dom';
import { busca } from '../../../services/Service';
import Projetos from '../../../models/Projetos';

function ListaProjetos() {
  const [projetos, setProjetos] = useState<Projetos[]>([])
  let navigate = useNavigate();

  async function getProjetos(){
    await busca("/projetos", setProjetos)
  };


  useEffect(()=>{
    getProjetos()
  }, [projetos.length]);

  return (
    <>
    <Grid container className= 'displayflextema'>
    {
      projetos.map(projetos =>(
      <Box m={2}>
        <Card variant="outlined" className='papeltemas caixalistatema'>
          <CardContent>
            <Typography color="textSecondary" gutterBottom>
              Tema
            </Typography>
            <Typography variant="h5" component="h2">
             {projetos.nomeProjeto}
            </Typography>
          </CardContent>
          <CardActions>
            <Box display="flex" justifyContent="center" mb={1.5} >

              <Link to={`/cadastrarprojeto/${projetos.id}`} className="text-decorator-none">
                <Box mx={1}>
                  <Button variant="contained" className="marginLeft botao" size='small'>
                    Atualizar
                  </Button>
                </Box>
              </Link>
              <Link to={`/deletarProjeto/${projetos.id}`} className="text-decorator-none">
                <Box mx={1}>
                  <Button variant="contained" size='small' color="secondary">
                    Deletar
                  </Button>
                </Box>
              </Link>
            </Box>
          </CardActions>
        </Card>
      </Box>
      ))
      }
    </Grid>
    </>
  );

}

export default ListaProjetos;
