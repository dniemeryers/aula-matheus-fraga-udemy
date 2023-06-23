//import Nome from './components/Nome'
import { useState, useEffect } from 'react'
import { v4 as uuidv4 } from 'uuid';


function App() {
  /*const [aluno, setAluno] = useState('sujeito programador')

  const [nome, setNome] = useState('')
  const [email, setEmail] = useState('')
  const [idade, setIdade] = useState('')

  const [user, setUser] = useState({})*/

  const [input, setInput] = useState('')
  const [tarefas, setTarefas] = useState([])



 /* function handeleChangeName(nome){
    setAluno(nome);    
  }

  function handleRegister(e){
    e.preventDefault();
    
    alert('registrado')
    setUser({
      nome:nome,
      idade:idade,
      email:email
    })
  }*/

  const novaTarefa = {
    id: uuidv4(), // Atribuindo um ID único à nova tarefa
    nome: input
  };

   useEffect(()=>{
    const tarefasStorage = localStorage.getItem('@tarefa');
    
    if(tarefasStorage){
      setTarefas(JSON.parse(tarefasStorage))
    }

  },[]);

  useEffect(()=>{
    localStorage.setItem('@tarefa', JSON.stringify(tarefas))
  },[tarefas]);

  function handleLister(e){
    e.preventDefault();

    setTarefas([...tarefas, novaTarefa]);
    setInput('');

  }

  const excluir = (id) => {
    const novaLista = tarefas.filter(tarefa => tarefa.id !== id);
    setTarefas(novaLista);
  };

  return (
  <div>
  {/* <h1>Olá {aluno}</h1>
    <h1>componente App</h1>
    <Nome aluno="lucas" idade={30} />
    <button onClick={()=> handeleChangeName('lucas Oliveira')}>Mudar Nome</button>
    
  

  <h1>Cadastrar Formulario</h1>

  <form onSubmit={handleRegister}>
    <label>Nome</label><br/>
    <input 
    placeholder='digite seu nome'
    value={nome}
    onChange={(e)=>setNome(e.target.value)}
    ></input><br/>

    <label>Email</label><br/>
    <input placeholder='digite seu Email'
    value={email}
    onChange={(e)=>setEmail(e.target.value)}
    ></input><br/>

    <label>Idade</label><br/>
    <input 
    placeholder='digite sua Idade'
    value={idade}
    onChange={(e)=>setIdade(e.target.value)}
    ></input><br/>

    <button type='submit'>Registrar</button>
  </form>
  <br/><br/>

  <span>Bem vindo:{user.nome}</span><br/>
  <span>Idade:{user.idade}</span><br/>
  <span>Email:{user.email}</span><br/>
  <br/><br/>

  <h1>Lista de tarefas</h1>*/}

  <form onSubmit={handleLister}>
  <label>Idade</label><br/>
    <input 
    placeholder='digite sua Idade'
    value={input}
    onChange={(e)=>setInput(e.target.value)}
    ></input><br/>

    <button type='submit'>Listar</button>

  </form>
  <br/><br/>

  <ul>
    {tarefas.map(tarefa => (
      <li key={tarefa.id}>{tarefa.nome}<button onClick={() => excluir(tarefa.id)}>x</button></li>
    ))}
  </ul>




  </div>
  );
}

export default App;
