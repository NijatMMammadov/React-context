import React from 'react'
import { useContext } from 'react'
import { FavoritesContext } from '../../context/FavoritesContext'

function Favorites() {

  let { favorites, setFavorites } = useContext(FavoritesContext)

  function handleDeleteWishlist(id) {
    let deleteWishlist = wishlist.filter(list => list._id != id)
    setWishlist(deleteWishlist)
  }
  return (
    <>
      
    </>
  )
}

export default Favorites