import Profile from './profile/profile';




 function App(){

  const handleName=(name)=>{

    alert("hello "+name)


  }
  
  return (
    <div className="App">
      <Profile 
      fullName="Moustapha" 
      bio="web developper"
      profession="informaticien"
      annee="1"
      handleName={handleName("sadio")}

      
      ><img src="/sadio.jpg" alt="" srcset="" /></Profile>
    
    </div>
  );
}
 


export default App;
