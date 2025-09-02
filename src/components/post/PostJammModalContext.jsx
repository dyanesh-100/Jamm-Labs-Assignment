"use client"

import { createContext, useCallback, useContext, useMemo, useState } from "react"
import { Modal } from "react-native"
import PostJammModal from "./PostJammModal"

const Ctx = createContext({ open: () => {}, close: () => {} })

let externalOpen = null

export function PostJammModalProvider({ children, addJamm }) {
  const [visible, setVisible] = useState(false)

  const open = useCallback(() => {
    setVisible(true)
  }, [])

  const close = useCallback(() => {
    setVisible(false)
  }, [])

  externalOpen = open

  const value = useMemo(() => ({ open, close }), [open, close])

  return (
    <Ctx.Provider value={value}>
      {children}
      <Modal
        visible={visible}
        animationType="slide"
        presentationStyle="overFullScreen"
        onRequestClose={close}
        transparent
      >
        <PostJammModal onClose={close} addJamm={addJamm} />
      </Modal>
    </Ctx.Provider>
  )
}

export function usePostJammModal() {
  return useContext(Ctx)
}

export function openPostJammModal() {
  if (typeof externalOpen === "function") externalOpen()
}
