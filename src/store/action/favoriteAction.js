import Swal from 'sweetalert2'
// const MySwal = withReactContent(Swal)

export function set_favorites(favorites) {

    return {
      type: "SET_FAVORITES",
      payload: favorites
    }; 
  }

export function set_error(errorStatus) {

    return {
        type: "SET_ERROR",
        payload: errorStatus
    }; 
}

export function add_favorites(newFavorites) {
  return (dispatch, getState) => {
    let currentFavorites = getState().favoriteReducer.favorites
    let status = true
    dispatch(set_error(false))
    
    if(currentFavorites.length === 0) {
      status = true
    }
    else{
      currentFavorites.forEach(favorite => {
        if (newFavorites.id === favorite.id) {
          status = false
          dispatch(set_error(true))
        }
      })
    }
    
    console.log('status', status);
    if(status === true) {
      Swal.fire(
        'Success!',
        'Add To Your Favorite Cards',
        'success'
      )
      currentFavorites = currentFavorites.concat(newFavorites)
      return dispatch(set_favorites(currentFavorites))
    }  else {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Something went wrong!',
      })
    }
  }
}
