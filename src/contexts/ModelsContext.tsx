import { createContext, ReactNode, RefObject, useCallback, useContext, useEffect, useRef, useState } from "react";

export type CarModel = {
  modelName: string;
  overlayNode: ReactNode;
  sectionRef: RefObject<HTMLElement>;
}

export type ModelsContextData = {
  wrapperRef: RefObject<HTMLDivElement>;
  registeredModels: CarModel[];
  registerModel: (model: CarModel) => void;
  unregisterModel: (modelName: string) => void;
  getModelByName: (modelName: string) => CarModel | null;
}

type ModelsContextProviderProps = {
  children: ReactNode;
}

export const ModelsContext = createContext({} as ModelsContextData);


export function ModelsContextProvider({ children }: ModelsContextProviderProps) {
  const wrapperRef = useRef<HTMLDivElement>(null);

  const [ registeredModels, setRegisteredModels ] = useState<CarModel[]>([])

  const registerModel = useCallback((model: CarModel) => {
    setRegisteredModels(state => [...state, model])
  }, [])

  const unregisterModel = useCallback((modelName: string) => {
    setRegisteredModels(state => 
      state.filter(model => model.modelName !== modelName)
    )
  }, [])

  const getModelByName = useCallback(
    (modelName: string) => {
      return registeredModels.find(item => item.modelName === modelName) || null
  }, [registeredModels])

  return (
    <ModelsContext.Provider value={{
      wrapperRef,
      registeredModels,
      registerModel,
      unregisterModel,
      getModelByName
    }}>
      {children}
    </ModelsContext.Provider>
  )
}

export const useModels = () => {
  return useContext(ModelsContext);
}