import { createContext, useContext, ParentComponent } from 'solid-js'
import { createStore } from 'solid-js/store'
import type { Map } from '../MapGL'

export const MapContext = createContext([{ map: null }])

export const useMapContext = () => useContext(MapContext)

export const MapProvider: ParentComponent<{
  map?: Map
}> = (props) => {
  return (
    <MapContext.Provider value={[{ map: props.map }]}>{props.children}</MapContext.Provider>
  )
}
