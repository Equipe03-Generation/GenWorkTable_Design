import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom'
import {Card, CardActions, CardContent, Button, Typography,Grid } from '@material-ui/core';
import {Box} from '@mui/material';
import {useNavigate} from 'react-router-dom';
import { busca } from '../../../services/Service';
import Turmas from '../../../models/Turmas';

function ListaTurmas() {
  const [temas, setTurmas] = useState<Turmas[]>([])
  let navigate = useNavigate();

  async function getTurmas(){
    await busca("/turmas", setTurmas)
  }


  useEffect(()=>{
    getTurmas()
  }, [turmas.length]);

  return (
    <>
    <Grid container className= 'displayflextema'>
    {
      turmas.map(turmas =>(
      <Box m={2}>
        <Card variant="outlined" className='papeltemas caixalistatema'>
          <CardContent>
            <Typography color="textSecondary" gutterBottom>
              Tema
            </Typography>
            <Typography variant="h5" component="h2">
             {turmas.descricao}
            </Typography>
          </CardContent>
          <CardActions>
            <Box display="flex" justifyContent="center" mb={1.5} >

              <Link to={`/cadastrarturma/${turmas.id}`} className="text-decorator-none">
                <Box mx={1}>
                  <Button variant="contained" className="marginLeft botao" size='small'>
                    Atualizar
                  </Button>
                </Box>
              </Link>
              <Link to={`/deletarTurma/${turmas.id}`} className="text-decorator-none">
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

export default ListaTurmas;