import styles from './my-style.module.css'; 

const Login = () => {
    return <div>
    <div className="row">
       <div className="col">
          <h1 className={styles.bigblue}>Login</h1>
       </div>
    </div>
    <div className="row">
       <div className="col">
          Enter User Name
       </div>
       <div className="col">
          <input type="text"/>
       </div>
    </div>
    <div className="row">
       <div className="col">
          Enter Password
       </div>
       <div className="col">
          <input type="text"/>
       </div>
    </div>

 <div className="row">
    <div className="col">
       <input type="button" className="btn btn-primary" value="login"/>
    </div>
 </div>
 </div>;
}

export default Login;