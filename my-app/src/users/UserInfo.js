


const UserInfo = ({id,username,name,email,city}) => {


    return ( 
        <>

       
   <tr>
    <td>{id}</td>
    <td>{name}</td>
    <td> {username}</td>
    <td>{email}</td>
    <td>{city}</td>
  </tr>
  
        </>
     );
}
 
export default UserInfo;