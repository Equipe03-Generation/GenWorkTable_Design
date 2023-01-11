import Projetos from './Projetos'

interface Turmas{
descricao: string;
isAtivo: string;
projetos?: Projetos| null
}
export default Turmas;