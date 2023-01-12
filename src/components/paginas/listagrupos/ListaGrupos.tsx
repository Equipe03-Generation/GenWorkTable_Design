import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom'
import {Card, CardActions, CardContent, Button, Typography,Grid } from '@material-ui/core';
import {Box} from '@mui/material';
import './ListaTema.css';
import {useNavigate} from 'react-router-dom';
import { busca } from '../../../services/Service';

function ListaGrupos() {
  const [temas, setTemas] = useState<Tema[]>([])
  let navigate = useNavigate();

  async function getTema(){
    await busca("/tema", setTemas)
  }


  useEffect(()=>{
    getTema()
  }, [temas.length]);

  return (
    <>
    <Grid container className= 'displayflextema'>
    {
      temas.map(tema =>(
      <Box m={2}>
        <Card variant="outlined" className='papeltemas caixalistatema'>
          <CardContent>
            <Typography color="textSecondary" gutterBottom>
              Tema
            </Typography>
            <Typography variant="h5" component="h2">
             {tema.assunto}
            </Typography>
          </CardContent>
          <CardActions>
            <Box display="flex" justifyContent="center" mb={1.5} >

              <Link to={`/formularioTema/${tema.id}`} className="text-decorator-none">
                <Box mx={1}>
                  <Button variant="contained" className="marginLeft botao" size='small'>
                    Atualizar
                  </Button>
                </Box>
              </Link>
              <Link to={`/deletarTema/${tema.id}`} className="text-decorator-none">
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
