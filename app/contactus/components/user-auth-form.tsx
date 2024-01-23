"use client"

import * as React from "react"

import { cn } from "@/lib/utils"
import { Icons } from "@/components/icons"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"

interface UserAuthFormProps extends React.HTMLAttributes<HTMLDivElement> {}

export function UserAuthForm({ className, ...props }: UserAuthFormProps) {
  const [isLoading, setIsLoading] = React.useState<boolean>(false)

  async function onSubmit(event: React.SyntheticEvent) {
    event.preventDefault()
    setIsLoading(true)

    setTimeout(() => {
      setIsLoading(false)
    }, 3000)
  }

  return (
    <div className={cn("grid gap-4", className)} {...props}>
      <form onSubmit={onSubmit}>
        <div className="grid gap-4">
          <div>
            <Label className="sr-only" htmlFor="email">
             Name
            </Label>
            <Input
              id="name"
              placeholder="Bhupender Verma"
              type="name"
              autoCapitalize="none"
              autoCorrect="off"
              disabled={isLoading}
            />
            <Label className="sr-only">
              Email
            </Label>
            <Input
              id="email"
              placeholder="bhupendra@example.com"
              type="email"
              autoCapitalize="none"
              autoComplete="email"
              autoCorrect="off"
              disabled={isLoading}
            />
            <Label className="sr-only">
              Contact Number
            </Label>
            <Input
              id="number"
              placeholder="9876543210"
              type="number"
              autoCapitalize="none"
              autoCorrect="off"
              disabled={isLoading}
            />
            <Label className="sr-only">
              Message
            </Label>
            <Textarea id="message" placeholder="Message" disabled={isLoading} />

          </div>
          <Button disabled={isLoading}>
            {isLoading && (
              <Icons.spinner className="mr-2 h-4 w-4 animate-spin" />
            )}
            Submit
          </Button>
        </div>
      </form>
    </div>
  )
}


