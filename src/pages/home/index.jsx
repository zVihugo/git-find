// eslint-disable-next-line no-unused-vars
import React from 'react'
import {useState} from 'react'
import {Header} from '../../componets/Header'
import background from "../../assets/background.png"
import ItemList from '../../componets/ItemList'
import './styles.css'


function App() {
  const [currentUser, setCurrentUser] = useState(null);
  const [user, setUser] = useState("");
  const [repos, setRepos] = useState(null);

  const handleGetData = async () => {
    const userData = await fetch(`https://api.github.com/users/${user}`);
    const newUserData = await userData.json();

    if(newUserData.name){
      const {avatar_url, name, bio, login} = newUserData;
      setCurrentUser({avatar_url, name, bio, login});
    }

    const reposData = await fetch(`https://api.github.com/users/${user}/repos`);
    const newReposData = await reposData.json();

    if(newReposData.length){
      setRepos(newReposData);
    }

  }

  return (
    <div className="App">
      <Header/>
      <div className="conteudo">
        <img src={background} className="background" alt="background-app"/>
        <div className="info">
          <div>
            <input type="text" 
                    name="usuario" 
                    placeholder="@username" 
                    value={user} 
                    onChange={event=> setUser(event.target.value)}/>
            <button onClick={handleGetData}>Search</button>
          </div>
          {currentUser ? ( <>
              <div className="perfil">
              <img src={currentUser.avatar_url} className="profile" />
              <div>
                <h3>
                    {currentUser.name}
                </h3>
                <span>{currentUser.login}</span>
                <p>{currentUser.bio}</p>
              </div>
            </div>
            <hr />
            </>
          ): null}
          {repos ? <div>
            <h4 className="repositorio">Repositórios</h4>
            {repos.map(repo => (
              <ItemList key={repo.id} title={repo.name} description={repo.description}/>
            ))}
            
          </div> : null}
        </div>
      </div>
    </div>
  )
}

export default App
