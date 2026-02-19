"use client"

import * as React from "react"
import { Button } from "@workspace/ui/components/button"
import { ButtonGroup, ButtonGroupSeparator, ButtonGroupText } from "@workspace/ui/components/button-group"
import { Toggle } from "@workspace/ui/components/toggle"
import { ToggleGroup, ToggleGroupItem } from "@workspace/ui/components/toggle-group"
import { Input } from "@workspace/ui/components/input"
import { Textarea } from "@workspace/ui/components/textarea"
import { Checkbox } from "@workspace/ui/components/checkbox"
import { RadioGroup, RadioGroupItem } from "@workspace/ui/components/radio-group"
import { Switch } from "@workspace/ui/components/switch"
import { Slider } from "@workspace/ui/components/slider"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@workspace/ui/components/select"
import { NativeSelect } from "@workspace/ui/components/native-select"
import { Combobox, ComboboxContent, ComboboxInput, ComboboxItem, ComboboxList } from "@workspace/ui/components/combobox"
import { InputOTP, InputOTPGroup, InputOTPSlot } from "@workspace/ui/components/input-otp"
import { InputGroup, InputGroupAddon, InputGroupInput } from "@workspace/ui/components/input-group"
import { Calendar } from "@workspace/ui/components/calendar"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@workspace/ui/components/card"
import { Separator } from "@workspace/ui/components/separator"
import { ResizableHandle, ResizablePanel, ResizablePanelGroup } from "@workspace/ui/components/resizable"
import { AspectRatio } from "@workspace/ui/components/aspect-ratio"
import { ScrollArea } from "@workspace/ui/components/scroll-area"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@workspace/ui/components/tabs"
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@workspace/ui/components/breadcrumb"
import { Pagination, PaginationContent, PaginationItem, PaginationLink, PaginationNext, PaginationPrevious } from "@workspace/ui/components/pagination"
import { Alert, AlertDescription, AlertTitle } from "@workspace/ui/components/alert"
import { Progress } from "@workspace/ui/components/progress"
import { Skeleton } from "@workspace/ui/components/skeleton"
import { Spinner } from "@workspace/ui/components/spinner"
import { Empty, EmptyContent, EmptyDescription, EmptyHeader, EmptyTitle } from "@workspace/ui/components/empty"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@workspace/ui/components/dialog"
import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle, AlertDialogTrigger } from "@workspace/ui/components/alert-dialog"
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from "@workspace/ui/components/sheet"
import { Drawer, DrawerContent, DrawerDescription, DrawerHeader, DrawerTitle, DrawerTrigger } from "@workspace/ui/components/drawer"
import { Popover, PopoverContent, PopoverTrigger } from "@workspace/ui/components/popover"
import { HoverCard, HoverCardContent, HoverCardTrigger } from "@workspace/ui/components/hover-card"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "@workspace/ui/components/dropdown-menu"
import { ContextMenu, ContextMenuContent, ContextMenuItem, ContextMenuTrigger } from "@workspace/ui/components/context-menu"
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList } from "@workspace/ui/components/command"
import { Badge } from "@workspace/ui/components/badge"
import { Avatar, AvatarFallback } from "@workspace/ui/components/avatar"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@workspace/ui/components/table"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@workspace/ui/components/accordion"
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@workspace/ui/components/collapsible"
import { Label } from "@workspace/ui/components/label"
import { Kbd } from "@workspace/ui/components/kbd"
import { Item, ItemContent, ItemGroup, ItemTitle, ItemDescription } from "@workspace/ui/components/item"
import { Field, FieldDescription, FieldError, FieldLabel } from "@workspace/ui/components/field"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@workspace/ui/components/tooltip"
import { InfoIcon, BoldIcon, ItalicIcon, UnderlineIcon, SearchIcon } from "lucide-react"

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="space-y-4">
      <h2 className="text-xl font-semibold tracking-tight border-b pb-2">{title}</h2>
      <div className="flex flex-wrap gap-4 items-start">{children}</div>
    </section>
  )
}

export default function DesignPage() {
  const [date, setDate] = React.useState<Date | undefined>(new Date())
  const [progress, setProgress] = React.useState(60)

  return (
    <TooltipProvider>
      <div className="container mx-auto py-10 px-4 space-y-12 max-w-5xl">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Design System</h1>
          <p className="text-muted-foreground mt-1">All UI components at a glance.</p>
        </div>

        {/* Actions */}
        <Section title="Actions">
          <div className="flex flex-wrap gap-2">
            <Button>Default</Button>
            <Button variant="secondary">Secondary</Button>
            <Button variant="outline">Outline</Button>
            <Button variant="ghost">Ghost</Button>
            <Button variant="destructive">Destructive</Button>
            <Button size="sm">Small</Button>
            <Button size="lg">Large</Button>
            <Button disabled>Disabled</Button>
          </div>
          <div className="flex flex-wrap gap-2 items-center">
            <ButtonGroup>
              <Button variant="outline">Left</Button>
              <ButtonGroupSeparator />
              <Button variant="outline">Center</Button>
              <ButtonGroupSeparator />
              <Button variant="outline">Right</Button>
            </ButtonGroup>
            <ButtonGroup>
              <Button variant="outline">Save</Button>
              <ButtonGroupText>as</ButtonGroupText>
              <Button variant="outline">Draft</Button>
            </ButtonGroup>
          </div>
          <div className="flex flex-wrap gap-2 items-center">
            <Toggle aria-label="Bold">
              <BoldIcon className="size-4" />
            </Toggle>
            <Toggle aria-label="Italic">
              <ItalicIcon className="size-4" />
            </Toggle>
          </div>
          <ToggleGroup type="multiple" defaultValue={["bold"]}>
            <ToggleGroupItem value="bold" aria-label="Bold">
              <BoldIcon className="size-4" />
            </ToggleGroupItem>
            <ToggleGroupItem value="italic" aria-label="Italic">
              <ItalicIcon className="size-4" />
            </ToggleGroupItem>
            <ToggleGroupItem value="underline" aria-label="Underline">
              <UnderlineIcon className="size-4" />
            </ToggleGroupItem>
          </ToggleGroup>
        </Section>

        {/* Inputs */}
        <Section title="Inputs">
          <div className="w-full max-w-sm space-y-3">
            <Field>
              <FieldLabel>Name</FieldLabel>
              <Input placeholder="Your name" />
              <FieldDescription>This will be shown publicly.</FieldDescription>
            </Field>
            <Field>
              <FieldLabel>Bio</FieldLabel>
              <Textarea placeholder="Tell us about yourself" />
            </Field>
            <Field>
              <FieldLabel>Email (invalid)</FieldLabel>
              <Input type="email" placeholder="you@example.com" aria-invalid="true" />
              <FieldError>Please enter a valid email.</FieldError>
            </Field>
          </div>
          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <Checkbox id="terms" />
              <Label htmlFor="terms">Accept terms</Label>
            </div>
            <RadioGroup defaultValue="option-one">
              <div className="flex items-center gap-2">
                <RadioGroupItem value="option-one" id="option-one" />
                <Label htmlFor="option-one">Option One</Label>
              </div>
              <div className="flex items-center gap-2">
                <RadioGroupItem value="option-two" id="option-two" />
                <Label htmlFor="option-two">Option Two</Label>
              </div>
            </RadioGroup>
            <div className="flex items-center gap-2">
              <Switch id="airplane-mode" />
              <Label htmlFor="airplane-mode">Airplane Mode</Label>
            </div>
          </div>
          <div className="w-full max-w-xs space-y-3">
            <Slider defaultValue={[40]} max={100} step={1} />
            <Select>
              <SelectTrigger>
                <SelectValue placeholder="Select fruit" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="apple">Apple</SelectItem>
                <SelectItem value="banana">Banana</SelectItem>
                <SelectItem value="cherry">Cherry</SelectItem>
              </SelectContent>
            </Select>
            <NativeSelect>
              <option value="">Select...</option>
              <option value="a">Option A</option>
              <option value="b">Option B</option>
            </NativeSelect>
            <Combobox>
              <ComboboxInput placeholder="Search fruit..." />
              <ComboboxContent>
                <ComboboxList>
                  <ComboboxItem value="apple">Apple</ComboboxItem>
                  <ComboboxItem value="banana">Banana</ComboboxItem>
                  <ComboboxItem value="cherry">Cherry</ComboboxItem>
                </ComboboxList>
              </ComboboxContent>
            </Combobox>
            <InputOTP maxLength={6}>
              <InputOTPGroup>
                <InputOTPSlot index={0} />
                <InputOTPSlot index={1} />
                <InputOTPSlot index={2} />
                <InputOTPSlot index={3} />
                <InputOTPSlot index={4} />
                <InputOTPSlot index={5} />
              </InputOTPGroup>
            </InputOTP>
            <InputGroup>
              <InputGroupAddon>
                <SearchIcon className="size-4" />
              </InputGroupAddon>
              <InputGroupInput placeholder="Search..." />
            </InputGroup>
          </div>
          <Calendar mode="single" selected={date} onSelect={setDate} />
        </Section>

        {/* Layout */}
        <Section title="Layout">
          <Card className="w-72">
            <CardHeader>
              <CardTitle>Card Title</CardTitle>
              <CardDescription>Card description text.</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">Card content goes here.</p>
            </CardContent>
            <CardFooter>
              <Button size="sm">Action</Button>
            </CardFooter>
          </Card>
          <div className="space-y-2 w-48">
            <p className="text-sm">Before</p>
            <Separator />
            <p className="text-sm">After</p>
          </div>
          <div className="w-72 h-32">
            <ResizablePanelGroup direction="horizontal" className="rounded-lg border">
              <ResizablePanel defaultSize={50}>
                <div className="flex h-full items-center justify-center p-2 text-sm">Left</div>
              </ResizablePanel>
              <ResizableHandle />
              <ResizablePanel defaultSize={50}>
                <div className="flex h-full items-center justify-center p-2 text-sm">Right</div>
              </ResizablePanel>
            </ResizablePanelGroup>
          </div>
          <div className="w-48">
            <AspectRatio ratio={16 / 9} className="bg-muted rounded-lg flex items-center justify-center text-sm text-muted-foreground">
              16:9
            </AspectRatio>
          </div>
          <ScrollArea className="h-32 w-48 rounded-md border p-2">
            {Array.from({ length: 20 }).map((_, i) => (
              <p key={i} className="text-sm py-0.5">Item {i + 1}</p>
            ))}
          </ScrollArea>
        </Section>

        {/* Navigation */}
        <Section title="Navigation">
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink href="#">Home</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbLink href="#">Design</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbPage>System</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
          <Tabs defaultValue="tab1" className="w-64">
            <TabsList>
              <TabsTrigger value="tab1">Tab 1</TabsTrigger>
              <TabsTrigger value="tab2">Tab 2</TabsTrigger>
              <TabsTrigger value="tab3">Tab 3</TabsTrigger>
            </TabsList>
            <TabsContent value="tab1" className="text-sm pt-2">Content for Tab 1</TabsContent>
            <TabsContent value="tab2" className="text-sm pt-2">Content for Tab 2</TabsContent>
            <TabsContent value="tab3" className="text-sm pt-2">Content for Tab 3</TabsContent>
          </Tabs>
          <Pagination>
            <PaginationContent>
              <PaginationItem>
                <PaginationPrevious href="#" />
              </PaginationItem>
              <PaginationItem>
                <PaginationLink href="#">1</PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationLink href="#" isActive>2</PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationLink href="#">3</PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationNext href="#" />
              </PaginationItem>
            </PaginationContent>
          </Pagination>
        </Section>

        {/* Feedback */}
        <Section title="Feedback">
          <Alert className="max-w-sm">
            <InfoIcon className="size-4" />
            <AlertTitle>Heads up!</AlertTitle>
            <AlertDescription>You can change this in your settings.</AlertDescription>
          </Alert>
          <div className="w-48 space-y-2">
            <Progress value={progress} />
            <div className="flex gap-2">
              <Button size="sm" variant="outline" onClick={() => setProgress(Math.max(0, progress - 10))}>-</Button>
              <Button size="sm" variant="outline" onClick={() => setProgress(Math.min(100, progress + 10))}>+</Button>
            </div>
          </div>
          <div className="space-y-2">
            <Skeleton className="h-4 w-48" />
            <Skeleton className="h-4 w-36" />
            <Skeleton className="h-4 w-40" />
          </div>
          <div className="flex items-center gap-4">
            <Spinner />
            <Spinner className="size-6" />
            <Spinner className="size-8" />
          </div>
          <Empty className="w-64 border">
            <EmptyHeader>
              <EmptyTitle>No results</EmptyTitle>
            </EmptyHeader>
            <EmptyContent>
              <EmptyDescription>Try adjusting your search or filters.</EmptyDescription>
            </EmptyContent>
          </Empty>
        </Section>

        {/* Overlay */}
        <Section title="Overlay">
          <Dialog>
            <DialogTrigger asChild>
              <Button variant="outline">Open Dialog</Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Dialog Title</DialogTitle>
                <DialogDescription>This is a dialog description.</DialogDescription>
              </DialogHeader>
              <Button>Confirm</Button>
            </DialogContent>
          </Dialog>
          <AlertDialog>
            <AlertDialogTrigger asChild>
              <Button variant="outline">Alert Dialog</Button>
            </AlertDialogTrigger>
            <AlertDialogContent>
              <AlertDialogHeader>
                <AlertDialogTitle>Are you sure?</AlertDialogTitle>
                <AlertDialogDescription>This action cannot be undone.</AlertDialogDescription>
              </AlertDialogHeader>
              <AlertDialogFooter>
                <AlertDialogCancel>Cancel</AlertDialogCancel>
                <AlertDialogAction>Continue</AlertDialogAction>
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialog>
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="outline">Open Sheet</Button>
            </SheetTrigger>
            <SheetContent>
              <SheetHeader>
                <SheetTitle>Sheet Title</SheetTitle>
                <SheetDescription>Sheet description.</SheetDescription>
              </SheetHeader>
            </SheetContent>
          </Sheet>
          <Drawer>
            <DrawerTrigger asChild>
              <Button variant="outline">Open Drawer</Button>
            </DrawerTrigger>
            <DrawerContent>
              <DrawerHeader>
                <DrawerTitle>Drawer Title</DrawerTitle>
                <DrawerDescription>Drawer description.</DrawerDescription>
              </DrawerHeader>
              <div className="p-4" />
            </DrawerContent>
          </Drawer>
          <Popover>
            <PopoverTrigger asChild>
              <Button variant="outline">Open Popover</Button>
            </PopoverTrigger>
            <PopoverContent className="w-60">
              <p className="text-sm">Popover content goes here.</p>
            </PopoverContent>
          </Popover>
          <HoverCard>
            <HoverCardTrigger asChild>
              <Button variant="link">Hover Card</Button>
            </HoverCardTrigger>
            <HoverCardContent className="w-60">
              <p className="text-sm">Content shown on hover.</p>
            </HoverCardContent>
          </HoverCard>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline">Dropdown</Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuLabel>My Account</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Profile</DropdownMenuItem>
              <DropdownMenuItem>Settings</DropdownMenuItem>
              <DropdownMenuItem>Sign out</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
          <ContextMenu>
            <ContextMenuTrigger className="flex h-16 w-40 items-center justify-center rounded-md border border-dashed text-sm">
              Right-click here
            </ContextMenuTrigger>
            <ContextMenuContent>
              <ContextMenuItem>Copy</ContextMenuItem>
              <ContextMenuItem>Paste</ContextMenuItem>
              <ContextMenuItem>Delete</ContextMenuItem>
            </ContextMenuContent>
          </ContextMenu>
          <Command className="rounded-lg border shadow-md w-64">
            <CommandInput placeholder="Type a command..." />
            <CommandList>
              <CommandEmpty>No results found.</CommandEmpty>
              <CommandGroup heading="Suggestions">
                <CommandItem>Calendar</CommandItem>
                <CommandItem>Search</CommandItem>
                <CommandItem>Settings</CommandItem>
              </CommandGroup>
            </CommandList>
          </Command>
        </Section>

        {/* Display */}
        <Section title="Display">
          <div className="flex flex-wrap gap-2">
            <Badge>Default</Badge>
            <Badge variant="secondary">Secondary</Badge>
            <Badge variant="outline">Outline</Badge>
            <Badge variant="destructive">Destructive</Badge>
          </div>
          <div className="flex gap-2">
            <Avatar>
              <AvatarFallback>JD</AvatarFallback>
            </Avatar>
            <Avatar>
              <AvatarFallback>AB</AvatarFallback>
            </Avatar>
            <Avatar>
              <AvatarFallback>XY</AvatarFallback>
            </Avatar>
          </div>
          <Table className="w-80">
            <TableHeader>
              <TableRow>
                <TableHead>Name</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Amount</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell>Alice</TableCell>
                <TableCell><Badge variant="secondary">Active</Badge></TableCell>
                <TableCell>$250</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Bob</TableCell>
                <TableCell><Badge variant="outline">Pending</Badge></TableCell>
                <TableCell>$150</TableCell>
              </TableRow>
            </TableBody>
          </Table>
          <Accordion type="single" collapsible className="w-72">
            <AccordionItem value="item-1">
              <AccordionTrigger>Is it accessible?</AccordionTrigger>
              <AccordionContent>Yes. It uses Radix UI primitives.</AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger>Is it styled?</AccordionTrigger>
              <AccordionContent>Yes. Comes with Tailwind CSS styles.</AccordionContent>
            </AccordionItem>
          </Accordion>
          <Collapsible className="w-64 space-y-2">
            <CollapsibleTrigger asChild>
              <Button variant="ghost" size="sm">Toggle section</Button>
            </CollapsibleTrigger>
            <CollapsibleContent>
              <p className="text-sm text-muted-foreground px-2">Hidden content revealed on toggle.</p>
            </CollapsibleContent>
          </Collapsible>
        </Section>

        {/* Misc */}
        <Section title="Misc">
          <div className="flex items-center gap-2">
            <Label>Label</Label>
            <Input className="w-32" placeholder="Input" />
          </div>
          <div className="flex items-center gap-2">
            <Kbd>⌘</Kbd>
            <Kbd>K</Kbd>
            <span className="text-sm text-muted-foreground">Open command palette</span>
          </div>
          <ItemGroup className="w-72">
            <Item variant="outline">
              <ItemContent>
                <ItemTitle>First Item</ItemTitle>
                <ItemDescription>Description for the first item.</ItemDescription>
              </ItemContent>
            </Item>
            <Item variant="outline">
              <ItemContent>
                <ItemTitle>Second Item</ItemTitle>
                <ItemDescription>Description for the second item.</ItemDescription>
              </ItemContent>
            </Item>
          </ItemGroup>
          <Tooltip>
            <TooltipTrigger asChild>
              <Button variant="outline" size="sm">Hover me</Button>
            </TooltipTrigger>
            <TooltipContent>
              <p>Tooltip content</p>
            </TooltipContent>
          </Tooltip>
        </Section>
      </div>
    </TooltipProvider>
  )
}
