"use client"

import { useState, useCallback, useEffect } from "react"
import { useSession } from "next-auth/react"
import AddressForm from "@/components/AddressForm"
import AllocationResult from "@/components/AllocationResult"
import { Button } from "@/components/ui/button"
import { checkAllocationForAddress } from "@/lib/allocation"
import { AnimatedGrid } from "@/components/AnimatedGrid"
import { AuthSection } from "@/components/AuthSection"
import { ANIMATION_STYLES } from "@/lib/constants"
import { AnimatedBanner } from "@/components/AnimatedBanner"

const BANNER_IMAGES = [
  '/images/eth_global.png',
  '/images/eth_global.png',
  '/images/eth_global.png',
  '/images/eth_global.png',
  '/images/eth_global.png',
  '/images/eth_global.png',
  '/images/eth_global.png',
  '/images/eth_global.png',
]

export default function ClientPage() {
  const { data: session } = useSession()
  const [allocation, setAllocation] = useState<string | null>(null)
  const [xAccountAddress, setXAccountAddress] = useState<string | undefined>(undefined)

  const checkAllocation = useCallback(async (address: string) => {
    try {
      const result = await checkAllocationForAddress(address)
      setAllocation(result)
    } catch (error) {
      console.error('アロケーションチェックエラー:', error)
      setAllocation(null)
    }
  }, [])

  const checkXAccountAllocation = useCallback(async () => {
    if (xAccountAddress) {
      await checkAllocation(xAccountAddress)
    }
  }, [xAccountAddress, checkAllocation])

  // Xアカウントのアドレスを取得するダミー関数
  const fetchXAccountAddress = useCallback(async () => {
    const dummyAddress = `0x${Array(40)
      .fill(0)
      .map(() => Math.floor(Math.random() * 16).toString(16))
      .join("")}`
    setXAccountAddress(dummyAddress)
  }, [])

  useEffect(() => {
    if (session) {
      fetchXAccountAddress()
    } else {
      setXAccountAddress(undefined)
    }
  }, [session, fetchXAccountAddress])

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4 relative">
      <style>{ANIMATION_STYLES}</style>
      
      <AnimatedBanner position="top" images={BANNER_IMAGES} />
      
      <h1 className="text-3xl font-bold mb-4 relative z-10 mt-2">Token Allocation Checker</h1>
      <div className="w-full max-w-2xl relative z-10">
        <AllocationResult allocation={allocation} />
        <AddressForm onSubmit={checkAllocation} xAccountAddress={xAccountAddress} />
        
        {xAccountAddress && (
          <Button onClick={checkXAccountAllocation} className="mt-4 w-full">
            Check X Account Allocation
          </Button>
        )}
        
        <div className="mt-4">
          <AuthSection />
        </div>
      </div>

      <AnimatedBanner position="bottom" images={BANNER_IMAGES} />
    </div>
  )
} 