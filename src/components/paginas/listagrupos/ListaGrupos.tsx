import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom'
import {Card, CardActions, CardContent, Button, Typography,Grid } from '@material-ui/core';
import {Box} from '@mui/material';
import './ListaTema.css';
import {useNavigate} from 'react-router-dom';
import { busca } from '../../../services/Service';
import Grupos from '../../../models/Grupos';

function ListaGrupos() {
  const [grupos, setGrupos] = useState<Grupos[]>([])
  let navigate = useNavigate();

  async function getGrupos(){
    await busca("/grupos", setGrupos)
  }


  useEffect(()=>{
    getGrupos()
  }, [grupos.length]);

  return (
    <>
    <Grid container className= 'displayflextema'>
    {
      grupos.map(grupos =>(
      <Box m={2}>
        <Card variant="outlined" className='papeltemas caixalistatema'>
          <CardContent>
            <Typography color="textSecondary" gutterBottom>
              Grupos
            </Typography>
            <Typography variant="h5" component="h2">
             {grupos.numeroGrupo}
            </Typography>
          </CardContent>
          <CardActions>
            <Box display="flex" justifyContent="center" mb={1.5} >

              <Link to={`/grupos/${grupos.id}`} className="text-decorator-none">
                <Box mx={1}>
                  <Button variant="contained" className="marginLeft botao" size='small'>
                    Atualizar
                  </Button>
                </Box>
              </Link>
              <Link to={`/grupos/${grupos.id}`} className="text-decorator-none">
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

export default ListaGrupos;
