import React from 'react';
import { useParams } from 'react-router-dom';
import { data } from '../module-data'; 
import PersonProfile from '../components/PersonProfile'; 

function Lab2() {
  const { id } = useParams(); // Pobieranie ID z URL

  if (!id) return <p>Brak identyfikatora osoby.</p>;

  // Funkcja wyszukująca osobę po ID
  const osoba = data.find(person => person.id === parseInt(id)); // Znajduje osobę na podstawie ID

  if (!osoba) return <p>Nie znaleziono osoby o tym identyfikatorze.</p>;

  return (
    <div className="container">
      <h1 className="text-center my-4">Profil Osoby</h1>
      <PersonProfile person={osoba} /> {/* Wyświetlanie profilu znalezionej osoby */}
    </div>
  );
}

export default Lab2;
