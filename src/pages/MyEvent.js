export interface FavouriteProps {
    id: string
  }
  
  export const Favourite = ({
    id,
  }: FavouriteProps): JSX.Element | null => {
    const [storageItem, setStorageItem] = useLocalStorage(
      'DFX-favourites',
      JSON.stringify([]),
    )
    const storagedArray = useRef(JSON.parse(storageItem))
    const isFavourited = storagedArray.current.includes(id)
  
    const handleToggleFavourite = (): void => {
      if (!isFavourited) {
        storagedArray.current.push(id)
        setStorageItem(JSON.stringify(storagedArray.current))
      } else {
       const indexFavouritedId = storagedArray.current.indexOf(id)
        storagedArray.current.splice(indexFavouritedId, 1)
        setStorageItem(JSON.stringify(storagedArray.current))
      }
    }
    return (
      <IconButton
        onClick={handleToggleFavourite}
      >
        {isFavourited ? (
          'Add here your full heart icon'
        ) : (
          'Add here your empty heart icon'
        )}
      </IconButton>
    )
  }