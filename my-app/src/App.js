import UserInfo from './users/UserInfo';
import axios from 'axios';
import { useEffect,useState } from 'react';
import './users/userInfo.css'
function App() {
  const [user,setUser]= useState([])
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://jsonplaceholder.typicode.com/users');
        setUser(response.data);
      } catch (error) {
        console.log(error);
      }
    };
  
    fetchData();
  }, []);
  console.log(user,'user111111')

  if (user.length === 0) {
    return <div>Loading...</div>;
  }
  
  return (
    <>
    <table>
  <thead>
    <th>id</th>
    <th>name</th>
    <th>username</th>
    <th>email</th>
    <th>city</th>
   
  </thead>
  <tbody>
  {user?.map((item) => (
        <UserInfo
        key={item?.id}
          id={item?.id}
          name={item?.name}
          username={item?.username}
          email={item?.email}
          city={item?.address.city}
        />  
      ))}

  </tbody>
      
      </table>
    </>
  );
  
  

  
  // {user?.map((item) => {
  //   return (
      
  //     <UserInfo
  //       id={item?.id}
  //       name={item?.name}
  //       username={item?.username}
  //       email={item?.email}
  //       city={item?.city}
  //     />  
  //   );
  // })}
  
}

export default App;
