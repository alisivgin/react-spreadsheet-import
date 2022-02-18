import { ChakraProvider, CSSObject } from "@chakra-ui/react"
import { createContext } from "react"
import type { RsiProps } from "../types"

export const RsiContext = createContext({} as RsiProps)

type ProvidersProps = {
  children: React.ReactNode
  theme: CSSObject
  rsiValues: RsiProps
}

export const Providers = ({ children, theme, rsiValues }: ProvidersProps) => (
  <RsiContext.Provider value={rsiValues}>
    <ChakraProvider>
      {/* cssVarsRoot used to override RSI theme but not the rest of chakra theme */}
      <ChakraProvider cssVarsRoot="#chakra-modal-rsi" theme={theme}>
        {children}
      </ChakraProvider>
    </ChakraProvider>
  </RsiContext.Provider>
)