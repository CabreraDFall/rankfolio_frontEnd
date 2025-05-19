import React, { useContext } from 'react';
import { UserContext } from '../../context/UserContext';
import "./profile.css"

const Profile = () => {
  const { user, loading } = useContext(UserContext);

  if (loading) {
    return <div>Cargando...</div>;
  }

  if (!user) {
    return <div>No hay información del usuario.</div>;
  }

  return (
    <div className='profileIcon' >
     
      <p> {user.nombre.substring(0, 1)}</p>
     
    </div>
  );
};

export default Profile
