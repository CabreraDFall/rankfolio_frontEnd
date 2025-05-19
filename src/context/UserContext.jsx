import React, { createContext, useState, useEffect } from 'react';

export const UserContext = createContext(null);

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Aquí iría la lógica para obtener la información del usuario al iniciar la aplicación
    // Por ejemplo, desde una API o desde el almacenamiento local
    const fetchUser = async () => {
      try {
        // Simulación de una llamada a una API
        const userData = {
          nombre: 'John',
          apellido: 'Doe',
          email: 'john.doe@example.com'
        };
        setUser(userData);
      } catch (error) {
        console.error('Error fetching user:', error);
        setUser(null);
      } finally {
        setLoading(false);
      }
    };

    fetchUser();
  }, []);

  const value = { user, setUser, loading };

  return (
    <UserContext.Provider value={value}>
      {children}
    </UserContext.Provider>
  );
};
