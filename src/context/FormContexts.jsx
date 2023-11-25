import { createContext, useState, useEffect } from "react";

const FormContext = createContext({});

const FormProvider = ({children}) => {
  const [userPlan, getUserPlan] = useState("")
  const [userSelection, getUserSelection] = useState(null)
  const [checked, setChecked] = useState(false)
  return (
	<FormContext.Provider value={{userPlan, getUserPlan, userSelection, getUserSelection, checked, setChecked}}>{children}</FormContext.Provider>
  )
}

export default FormProvider;