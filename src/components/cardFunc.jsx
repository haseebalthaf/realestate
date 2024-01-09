import React, { useState } from "react";
import { useFavorites } from "./favFunc";
import { useModal } from "./modalFunc";
import Properties from "./properties.json";
import "../style/browse.css";

function Cards() {
  const { favorites, addToFavorites, removeFromFavorites, clearFavorites } =
    useFavorites();
  const { isModalOpen, openModal, closeModal, selectedProperty } = useModal();

  return (
    // Main container for cards
    <div className="cardsContainer">
      {/* Browse Section */}
      <div className="browseContainer">
        <h1 className="propTitle">Browse Properties</h1>
        {Properties.properties.map((property) => (
          <div className="propertyContainer" key={property.id}>
            <img
              className="propPic"
              src={property.picture}
              alt={`Property ${property.id}`}
            />
            <h2 className="propLoc">{property.location}</h2>
            <div className="infoContainer">
              <p>Type: {property.type}</p>
              <p>Price: £{property.price}</p>
            </div>
            <button
              className="favBtn"
              onClick={() => addToFavorites(property)}
              type="button"
            >
              <img
                className="Btn-img"
                src="../icons/add.png"
                alt="Favorite Button"
              />
            </button>
            <button
              className="link"
              type="button"
              onClick={() => openModal(property)}
            >
              <img className="Btn-img" src="../icons/link.png" alt="Link" />
            </button>
          </div>
        ))}
      </div>
      {/* Favorites Section */}
      {favorites.length > 0 && (
        <div className="favoriteContainer">
          <h1 className="propTitle">Favorites</h1>
          {favorites.map((favorite) => (
            <div className="propertyContainer" key={favorite.id}>
              <img
                className="propPic"
                src={favorite.picture}
                alt={`Property ${favorite.id}`}
              />
              <h2 className="propLoc">{favorite.location}</h2>
              <div className="infoContainer">
                <p>Type: {favorite.type}</p>
                <p>Price: £{favorite.price}</p>
              </div>
              <button
                className="removeFavBtn"
                onClick={() => removeFromFavorites(favorite.id)}
                type="button"
              >
                <img
                  className="Btn-img"
                  src="../icons/remove.png"
                  alt="Remove from Favorite Button"
                />
              </button>
            </div>
          ))}
          <div className="clearList">
            <ul>
              {favorites.map((favorite) => (
                <li key={favorite.id}></li>
              ))}
            </ul>
            {favorites.length > 0 && (
              <button className="clearList-btn" onClick={clearFavorites}>
                <img
                  className="Btn-img"
                  src="../icons/delete.png"
                  alt="Clear List"
                />
              </button>
            )}
          </div>
        </div>
      )}
      {isModalOpen && (
        <div className="modalContainer">
          <div className="modalContent">
            <p>This is the modal content for property {selectedProperty.id}.</p>
            <button onClick={closeModal}>Close Modal</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Cards;