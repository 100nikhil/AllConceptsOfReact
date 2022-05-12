import axios from "axios";
import { Fragment, useEffect, useState } from "react";

const GitRepos = () => {

  const [repos, setRepos] = useState([]);
  const user = 'techiesyed';

  useEffect(() => {
    axios.get(`https://api.github.com/users/${user}/repos`).then((res)=>{
      setRepos(res.data);
    }).catch((err)=>{
      console.log(err);
    });
  },[]);

  return(
    <div className="text-center">
      <h6>Git Repos of user techiesyed</h6>
      {repos.map((r) => {
        return (
          <Fragment key={r.name}>
            <span>{r.name}</span><br/>
          </Fragment>
        );
      })}
    </div>
  )
}

export default GitRepos;