import { emails } from "./emails";
import { useState } from 'react';

function App() {
 const [emailList, setEmailList] = useState(emails);

 const setEmailReadStatus = (currId) => {
  setEmailList(emailList.map((email) => {
    if(currId === email.id) {
      email.status = 1
      }
      return email;
    }))
 }; 
 const setEmailNotReadStatus = (currId) => {
  setEmailList(emailList.map((email) => {
    if(currId === email.id) {
      email.status = 0
      }
      return email;
    }))
 };
 const setReadAllEmails = () => {
  setEmailList(emailList.map((email) => ({...email, status: 1})))
 }
 const setNotReadAllEmail = () => {
  setEmailList(emailList.map((email) => ({...email, status: 0})))
 }

return (
  <div>
    <button
      type="button"
      onClick={ () => setReadAllEmails() }
      >
      Marcar todas como lidas
    </button>
    <button
      type="button"
      onClick={ () => setNotReadAllEmail() }
      >
      Marcar todas como não lidas
    </button>
    {emails.map(({title, id, status}) => { 
      return (
        <div key={`${id} div`}>
        <h2 key={id} value={title}>{title}</h2>
        <button
          type="button"
          onClick={ () => setEmailReadStatus(id) }
          key={`${id} lida` }
        >Lida
        </button>
        <button
          type="button"
          key={`${id}não lida` }
          onClick={ () => setEmailNotReadStatus(id)}
        >
          Não lida  
        </button>
        </div>
    )})}
    </div>
  );
}

export default App;
