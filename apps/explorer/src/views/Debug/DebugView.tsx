import { Button, Card, Dialog, Flex, Heading } from "@radix-ui/themes"
import { useConnection } from "@solana/wallet-adapter-react"
import { decodeAta, getUserWsolAccount, unwrapSol } from "gamba-core-v2"
import { useAccount, useSendTransaction, useWalletAddress } from "gamba-react-v2"
import React, { PropsWithChildren } from "react"
import { useNavigate } from "react-router-dom"

import { ConfigDialog } from "@/GambaConfig"
import { useToast } from "@/hooks"
import MintDialogDevnet from "@/MintDialogDevnet"
import MintDialogLocalnet from "@/MintDialogLocalnet"

function ButtonWithDialog(props: PropsWithChildren & {label: string}) {
  return (
    <Dialog.Root>
      <Dialog.Trigger>
        <Button variant="soft">
          {props.label}
        </Button>
      </Dialog.Trigger>
      <Dialog.Content>
        {props.children}
      </Dialog.Content>
    </Dialog.Root>
  )
}

export default function DebugView() {
  const sendTx = useSendTransaction()
  const user = useWalletAddress()
  const { connection } = useConnection()
  const toast = useToast()
  const navigate = useNavigate()
  const wSolAccount = useAccount(getUserWsolAccount(user), decodeAta)

  const unwrap = async () => {
    await sendTx(unwrapSol(user))
    toast({ title: "Unwrapped", description: "Unwrapped WSOL" })
  }

  return (
    <Card style={{ maxWidth: "720px", margin: "0 auto" }} size="4">
      <Heading mb="4">
        Account Function
      </Heading>
      <Flex gap="2" direction="column">
        <Button variant="soft" onClick={() => navigate("/user")}>
          Claim Stuck Money
        </Button>
        {wSolAccount && (
          <Button variant="soft" onClick={unwrap}>
            Unwrap WSOL
          </Button>
        )}
        {window.location.origin.includes("localhost") && (
          <>
            {connection.rpcEndpoint.includes("http://127.0.0.1:8899") ? (
              <MintDialogLocalnet />
            ) : (
              <MintDialogDevnet />
            )}
          </>
        )}
      </Flex>
    </Card>
  )
}
