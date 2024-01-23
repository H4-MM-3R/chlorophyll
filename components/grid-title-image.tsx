import Image from "next/image";
import clsx from "clsx";
import { Button } from "./ui/button";
import { Expand, MinusIcon, PlusIcon, ShoppingCart } from "lucide-react";
import { Dialog, DialogContent, DialogTrigger } from "./ui/dialog";
import {
  Drawer,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "./ui/drawer";
import { fontPTSans } from "@/lib/fonts";
import { cn } from "@/lib/utils";

export function GridTileImage({
  isInteractive = true,
  active,
  ...props
}: {
  isInteractive?: boolean;
  active?: boolean;
} & React.ComponentProps<typeof Image>) {
  return (
    <div className="flex items-center aspect-square justify-center overflow-hidden rounded-ss-xl rounded-se-xl border bg-white dark:bg-black relative">
      {props.src ? (
        <div className="group">
          <Image
            className={clsx("relative object-contain bg-[#2c6f32] rounded-md", {
              "transition duration-300 ease-in": isInteractive,
            })}
            {...props}
          />

          <div className="absolute bottom-5 left-32 md:hidden">
            <Drawer>
              <DrawerTrigger asChild>
                <Button className="absolute px-6 bottom-20 right-0 rounded-full bg-white border shadow-md p-2 hover:scale-110 transition-transform duration-700">
                  <Expand size={20} className="text-black hover:text-white" />
                </Button>
              </DrawerTrigger>

              <DrawerContent>
                <div className="mx-auto w-full max-w-sm">
                  <DrawerHeader>
                    <DrawerTitle>Garden Plant</DrawerTitle>

                    <DrawerDescription>
                      <div className="aspect-square relative">
                        <Image
                          className="relative object-contain bg-[#2c6f32] rounded-md"
                          src="/display/threeLarge.png"
                          fill
                          alt={""}
                        />
                      </div>
                    </DrawerDescription>
                  </DrawerHeader>

                  <div className="p-4 pb-0">
                    <div className="flex items-center justify-center space-x-2">
                      <Button
                        variant="outline"
                        size="icon"
                        className="h-8 w-8 shrink-0 rounded-full"
                      >
                        <MinusIcon className="h-4 w-4" />
                        <span className="sr-only">Decrease</span>
                      </Button>
                      <div className="flex-1 text-center">
                        <div className="text-7xl font-bold tracking-tighter">
                          100
                        </div>
                        <div className="text-[0.70rem] uppercase text-muted-foreground">
                          Calories/day
                        </div>
                      </div>
                      <Button
                        variant="outline"
                        size="icon"
                        className="h-8 w-8 shrink-0 rounded-full"
                      >
                        <PlusIcon className="h-4 w-4" />
                        <span className="sr-only">Increase</span>
                      </Button>
                    </div>
                    <hr className="my-4 dark:text-white border-2 border-white" />
                  </div>
                  <DrawerFooter>
                    <Button variant="new">Contact</Button>
                  </DrawerFooter>
                </div>
              </DrawerContent>
            </Drawer>
          </div>

          <div className="absolute bottom-5 left-32 hidden md:block">
            <Dialog>
              <DialogTrigger asChild>
                <Button className="opacity-0 group-hover:opacity-100 absolute px-6 bottom-5 rounded-full flex items-center justify-center bg-white border shadow-md p-2 hover:scale-110 transition-transform duration-700">
                  {" "}
                  <Expand size={20} className="text-black hover:text-white" />
                </Button>
              </DialogTrigger>

              <DialogContent>
                <div className="grid grid-cols-1 items-start gap-x-6 gap-y-8 sm:grid-cols-12 lg:gap-x-8">
                  <div className="sm:col-span-4 lg:col-span-5 ">
                    <div className="aspect-square relative">
                      <Image
                        className="relative object-contain bg-[#2c6f32] rounded-md"
                        src="/display/threeLarge.png"
                        fill
                        alt={""}
                      />
                    </div>
                  </div>
                  <div className="sm:col-span-8 lg:col-span-7">
                    <div>
                      <h1 className="text-2xl sm:text-3xl sm:font-bold text-black">
                        Snake Plant 
                      </h1>
                        <h3 className={cn("text-md text-stone-700 font-semibold", fontPTSans.className)}>(Sansevieria Trifasciata)</h3>
                        <p className="mt-4 text-2xl text-black font-bold">₹924.99</p>
                        <p className="mt-4 text-2xl text-black font-bold">₹<span className={cn("text-md text-stone-700 font-black", fontPTSans.className)}>924.99</span></p>
                      <hr className="my-4" />
                      <p className="text-black py-4 text-sm">
                        This resilient indoor plant, also known as the Snake
                        Plant or Mother-in-law's Tongue, is a low-maintenance
                        air purifier. Its vertical, sword-shaped leaves make it
                        an ideal choice for corners or spaces with indirect
                        light, making it perfect for bedrooms or offices.
                      </p>
                      <div className="mt-10 flex items-center gap-x-3">
                        <Button className="flex items-center gap-x-2">
                          Add to Cart
                          <ShoppingCart />
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </DialogContent>
            </Dialog>
          </div>
        </div>
      ) : null}
    </div>
  );
}
