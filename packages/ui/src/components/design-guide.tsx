"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@workspace/ui/components/accordion";
import {
  Alert,
  AlertDescription,
  AlertTitle,
} from "@workspace/ui/components/alert";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@workspace/ui/components/alert-dialog";
import { AspectRatio } from "@workspace/ui/components/aspect-ratio";
import { Avatar, AvatarFallback } from "@workspace/ui/components/avatar";
import { Badge } from "@workspace/ui/components/badge";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@workspace/ui/components/breadcrumb";
import { Button } from "@workspace/ui/components/button";
import {
  ButtonGroup,
  ButtonGroupSeparator,
  ButtonGroupText,
} from "@workspace/ui/components/button-group";
import { Calendar } from "@workspace/ui/components/calendar";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@workspace/ui/components/card";
import { Checkbox } from "@workspace/ui/components/checkbox";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@workspace/ui/components/collapsible";
import {
  Combobox,
  ComboboxContent,
  ComboboxInput,
  ComboboxItem,
  ComboboxList,
} from "@workspace/ui/components/combobox";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@workspace/ui/components/command";
import {
  ContextMenu,
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuTrigger,
} from "@workspace/ui/components/context-menu";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@workspace/ui/components/dialog";
import {
  Drawer,
  DrawerContent,
  DrawerDescription,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@workspace/ui/components/drawer";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@workspace/ui/components/dropdown-menu";
import {
  Empty,
  EmptyContent,
  EmptyDescription,
  EmptyHeader,
  EmptyTitle,
} from "@workspace/ui/components/empty";
import {
  Field,
  FieldDescription,
  FieldError,
  FieldLabel,
} from "@workspace/ui/components/field";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@workspace/ui/components/hover-card";
import { Input } from "@workspace/ui/components/input";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from "@workspace/ui/components/input-group";
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
} from "@workspace/ui/components/input-otp";
import {
  Item,
  ItemContent,
  ItemDescription,
  ItemGroup,
  ItemTitle,
} from "@workspace/ui/components/item";
import { Kbd } from "@workspace/ui/components/kbd";
import { Label } from "@workspace/ui/components/label";
import { NativeSelect } from "@workspace/ui/components/native-select";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@workspace/ui/components/pagination";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@workspace/ui/components/popover";
import { Progress } from "@workspace/ui/components/progress";
import {
  RadioGroup,
  RadioGroupItem,
} from "@workspace/ui/components/radio-group";
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@workspace/ui/components/resizable";
import { ScrollArea } from "@workspace/ui/components/scroll-area";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@workspace/ui/components/select";
import { Separator } from "@workspace/ui/components/separator";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@workspace/ui/components/sheet";
import { Skeleton } from "@workspace/ui/components/skeleton";
import { Slider } from "@workspace/ui/components/slider";
import { Spinner } from "@workspace/ui/components/spinner";
import { Switch } from "@workspace/ui/components/switch";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@workspace/ui/components/table";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@workspace/ui/components/tabs";
import { Textarea } from "@workspace/ui/components/textarea";
import { Toggle } from "@workspace/ui/components/toggle";
import {
  ToggleGroup,
  ToggleGroupItem,
} from "@workspace/ui/components/toggle-group";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@workspace/ui/components/tooltip";
import { cn } from "@workspace/ui/lib/utils";
import {
  BoldIcon,
  ChevronDownIcon,
  InfoIcon,
  ItalicIcon,
  SearchIcon,
  UnderlineIcon,
} from "lucide-react";
import * as React from "react";

const NAV_ITEMS = [
  { id: "buttons", label: "Buttons" },
  { id: "inputs", label: "Inputs" },
  { id: "layout", label: "Layout" },
  { id: "navigation", label: "Navigation" },
  { id: "feedback", label: "Feedback" },
  { id: "overlays", label: "Overlays" },
  { id: "display", label: "Display" },
  { id: "utility", label: "Utility" },
];

function ComponentCard({
  name,
  preview,
  usage,
  className,
}: {
  name: string;
  preview: React.ReactNode;
  usage: string;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "flex flex-col overflow-hidden rounded-xl border bg-background",
        className,
      )}
    >
      <div className="border-b px-4 py-3">
        <h3 className="text-sm font-medium">{name}</h3>
      </div>
      <div className="flex flex-1 items-center justify-center p-6 bg-muted/20 min-h-36">
        {preview}
      </div>
      <Accordion className="border-t">
        <AccordionItem value="code" className="border-none">
          <AccordionTrigger className="px-4 py-2.5 text-xs text-muted-foreground hover:no-underline [&>svg]:size-3.5">
            View code
          </AccordionTrigger>
          <AccordionContent>
            <pre className="mx-4 mb-3 overflow-x-auto rounded-lg bg-muted px-3 py-3 text-xs font-mono leading-relaxed">
              <code>{usage}</code>
            </pre>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
}

function ComponentSection({
  id,
  title,
  children,
}: {
  id: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section id={id} className="scroll-mt-4 space-y-4">
      <h2 className="text-lg font-semibold tracking-tight text-balance">
        {title}
      </h2>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {children}
      </div>
    </section>
  );
}

export function DesignGuide() {
  const [date, setDate] = React.useState<Date | undefined>(new Date());
  const [progress, setProgress] = React.useState(60);

  return (
    <TooltipProvider>
      <div className="mx-auto max-w-5xl space-y-12 px-4 py-10">
        <header>
          <h1 className="text-3xl font-bold tracking-tight text-balance">
            Design System
          </h1>
          <p className="mt-2 text-muted-foreground">
            All UI components. Expand any card to see usage code.
          </p>
        </header>

        <nav aria-label="Jump to section">
          <ul className="m-0 flex list-none flex-wrap gap-2 p-0">
            {NAV_ITEMS.map(({ id, label }) => (
              <li key={id}>
                <a
                  href={`#${id}`}
                  className="rounded-full border px-3 py-1 text-sm font-medium transition-colors hover:bg-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* ── BUTTONS & ACTIONS ── */}
        <ComponentSection id="buttons" title="Buttons & Actions">
          <ComponentCard
            name="Button"
            className="sm:col-span-2"
            preview={
              <div className="flex flex-wrap justify-center gap-2">
                <Button>Default</Button>
                <Button variant="secondary">Secondary</Button>
                <Button variant="outline">Outline</Button>
                <Button variant="ghost">Ghost</Button>
                <Button variant="destructive">Destructive</Button>
                <Button size="sm">Small</Button>
                <Button size="lg">Large</Button>
                <Button disabled>Disabled</Button>
              </div>
            }
            usage={`<Button>Default</Button>
<Button variant="secondary">Secondary</Button>
<Button variant="outline">Outline</Button>
<Button variant="ghost">Ghost</Button>
<Button variant="destructive">Destructive</Button>
<Button size="sm">Small</Button>
<Button size="lg">Large</Button>
<Button disabled>Disabled</Button>`}
          />
          <ComponentCard
            name="ButtonGroup"
            preview={
              <div className="flex flex-col items-center gap-3">
                <ButtonGroup>
                  <Button variant="outline">Cut</Button>
                  <ButtonGroupSeparator />
                  <Button variant="outline">Copy</Button>
                  <ButtonGroupSeparator />
                  <Button variant="outline">Paste</Button>
                </ButtonGroup>
                <ButtonGroup>
                  <Button variant="outline">Save</Button>
                  <ButtonGroupText>as</ButtonGroupText>
                  <Button variant="outline">Draft</Button>
                </ButtonGroup>
              </div>
            }
            usage={`<ButtonGroup>
  <Button variant="outline">Cut</Button>
  <ButtonGroupSeparator />
  <Button variant="outline">Copy</Button>
  <ButtonGroupSeparator />
  <Button variant="outline">Paste</Button>
</ButtonGroup>`}
          />
          <ComponentCard
            name="Toggle"
            preview={
              <div className="flex gap-2">
                <Toggle aria-label="Toggle bold">
                  <BoldIcon className="size-4" />
                </Toggle>
                <Toggle aria-label="Toggle italic">
                  <ItalicIcon className="size-4" />
                </Toggle>
                <Toggle aria-label="Toggle underline">
                  <UnderlineIcon className="size-4" />
                </Toggle>
              </div>
            }
            usage={`<Toggle aria-label="Toggle bold">
  <BoldIcon className="size-4" />
</Toggle>`}
          />
          <ComponentCard
            name="ToggleGroup"
            preview={
              <ToggleGroup defaultValue={["bold"]}>
                <ToggleGroupItem value="bold" aria-label="Toggle bold">
                  <BoldIcon className="size-4" />
                </ToggleGroupItem>
                <ToggleGroupItem value="italic" aria-label="Toggle italic">
                  <ItalicIcon className="size-4" />
                </ToggleGroupItem>
                <ToggleGroupItem
                  value="underline"
                  aria-label="Toggle underline"
                >
                  <UnderlineIcon className="size-4" />
                </ToggleGroupItem>
              </ToggleGroup>
            }
            usage={`<ToggleGroup type="multiple" defaultValue={["bold"]}>
  <ToggleGroupItem value="bold" aria-label="Toggle bold">
    <BoldIcon className="size-4" />
  </ToggleGroupItem>
  <ToggleGroupItem value="italic" aria-label="Toggle italic">
    <ItalicIcon className="size-4" />
  </ToggleGroupItem>
</ToggleGroup>`}
          />
        </ComponentSection>

        {/* ── INPUTS ── */}
        <ComponentSection id="inputs" title="Inputs">
          <ComponentCard
            name="Input & Field"
            className="sm:col-span-2"
            preview={
              <div className="w-full max-w-sm space-y-3">
                <Field>
                  <FieldLabel htmlFor="dg-name">Name</FieldLabel>
                  <Input
                    id="dg-name"
                    placeholder="Your name"
                    autoComplete="name"
                  />
                  <FieldDescription>
                    Shown publicly on your profile.
                  </FieldDescription>
                </Field>
                <Field>
                  <FieldLabel htmlFor="dg-email">Email</FieldLabel>
                  <Input
                    id="dg-email"
                    type="email"
                    placeholder="you@example.com"
                    aria-invalid="true"
                    autoComplete="email"
                    spellCheck={false}
                  />
                  <FieldError>Please enter a valid email.</FieldError>
                </Field>
              </div>
            }
            usage={`<Field>
  <FieldLabel htmlFor="name">Name</FieldLabel>
  <Input id="name" placeholder="Your name" autoComplete="name" />
  <FieldDescription>Shown on your profile.</FieldDescription>
</Field>

<Field>
  <FieldLabel htmlFor="email">Email</FieldLabel>
  <Input id="email" type="email" aria-invalid="true" autoComplete="email" />
  <FieldError>Please enter a valid email.</FieldError>
</Field>`}
          />
          <ComponentCard
            name="Textarea"
            preview={
              <div className="w-full max-w-xs">
                <Field>
                  <FieldLabel htmlFor="dg-bio">Bio</FieldLabel>
                  <Textarea
                    id="dg-bio"
                    placeholder="Tell us about yourself…"
                    rows={3}
                  />
                </Field>
              </div>
            }
            usage={`<Field>
  <FieldLabel htmlFor="bio">Bio</FieldLabel>
  <Textarea
    id="bio"
    placeholder="Tell us about yourself…"
    rows={3}
  />
</Field>`}
          />
          <ComponentCard
            name="Checkbox"
            preview={
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <Checkbox id="dg-terms" defaultChecked />
                  <Label htmlFor="dg-terms">Accept terms</Label>
                </div>
                <div className="flex items-center gap-2">
                  <Checkbox id="dg-newsletter" />
                  <Label htmlFor="dg-newsletter">Subscribe to newsletter</Label>
                </div>
              </div>
            }
            usage={`<div className="flex items-center gap-2">
  <Checkbox id="terms" defaultChecked />
  <Label htmlFor="terms">Accept terms</Label>
</div>`}
          />
          <ComponentCard
            name="RadioGroup"
            preview={
              <RadioGroup defaultValue="option-one">
                <div className="flex items-center gap-2">
                  <RadioGroupItem value="option-one" id="dg-opt-1" />
                  <Label htmlFor="dg-opt-1">Option One</Label>
                </div>
                <div className="flex items-center gap-2">
                  <RadioGroupItem value="option-two" id="dg-opt-2" />
                  <Label htmlFor="dg-opt-2">Option Two</Label>
                </div>
                <div className="flex items-center gap-2">
                  <RadioGroupItem value="option-three" id="dg-opt-3" />
                  <Label htmlFor="dg-opt-3">Option Three</Label>
                </div>
              </RadioGroup>
            }
            usage={`<RadioGroup defaultValue="option-one">
  <div className="flex items-center gap-2">
    <RadioGroupItem value="option-one" id="opt-1" />
    <Label htmlFor="opt-1">Option One</Label>
  </div>
  <div className="flex items-center gap-2">
    <RadioGroupItem value="option-two" id="opt-2" />
    <Label htmlFor="opt-2">Option Two</Label>
  </div>
</RadioGroup>`}
          />
          <ComponentCard
            name="Switch"
            preview={
              <div className="space-y-3">
                <div className="flex items-center gap-2">
                  <Switch id="dg-airplane" defaultChecked />
                  <Label htmlFor="dg-airplane">Airplane mode</Label>
                </div>
                <div className="flex items-center gap-2">
                  <Switch id="dg-notifs" />
                  <Label htmlFor="dg-notifs">Notifications</Label>
                </div>
              </div>
            }
            usage={`<div className="flex items-center gap-2">
  <Switch id="airplane" defaultChecked />
  <Label htmlFor="airplane">Airplane mode</Label>
</div>`}
          />
          <ComponentCard
            name="Slider"
            preview={
              <div className="w-full max-w-xs space-y-4">
                <Slider
                  defaultValue={[40]}
                  max={100}
                  step={1}
                  aria-label="Volume"
                />
                <Slider
                  defaultValue={[20, 70]}
                  max={100}
                  step={1}
                  aria-label="Range"
                />
              </div>
            }
            usage={`{/* Single value */}
<Slider defaultValue={[40]} max={100} step={1} aria-label="Volume" />

{/* Range */}
<Slider defaultValue={[20, 70]} max={100} step={1} aria-label="Range" />`}
          />
          <ComponentCard
            name="Select"
            preview={
              <div className="w-full max-w-xs">
                <Select>
                  <SelectTrigger aria-label="Select a fruit">
                    <SelectValue placeholder="Select a fruit" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="apple">Apple</SelectItem>
                    <SelectItem value="banana">Banana</SelectItem>
                    <SelectItem value="cherry">Cherry</SelectItem>
                    <SelectItem value="durian" disabled>
                      Durian (unavailable)
                    </SelectItem>
                  </SelectContent>
                </Select>
              </div>
            }
            usage={`<Select>
  <SelectTrigger aria-label="Select a fruit">
    <SelectValue placeholder="Select a fruit" />
  </SelectTrigger>
  <SelectContent>
    <SelectItem value="apple">Apple</SelectItem>
    <SelectItem value="banana">Banana</SelectItem>
    <SelectItem value="durian" disabled>Durian</SelectItem>
  </SelectContent>
</Select>`}
          />
          <ComponentCard
            name="NativeSelect"
            preview={
              <div className="w-full max-w-xs">
                <NativeSelect aria-label="Select framework">
                  <option value="">Choose framework…</option>
                  <option value="next">Next.js</option>
                  <option value="remix">Remix</option>
                  <option value="astro">Astro</option>
                </NativeSelect>
              </div>
            }
            usage={`<NativeSelect aria-label="Select framework">
  <option value="">Choose framework…</option>
  <option value="next">Next.js</option>
  <option value="remix">Remix</option>
</NativeSelect>`}
          />
          <ComponentCard
            name="Combobox"
            preview={
              <div className="w-full max-w-xs">
                <Combobox>
                  <ComboboxInput placeholder="Search fruit…" />
                  <ComboboxContent>
                    <ComboboxList>
                      <ComboboxItem value="apple">Apple</ComboboxItem>
                      <ComboboxItem value="banana">Banana</ComboboxItem>
                      <ComboboxItem value="cherry">Cherry</ComboboxItem>
                    </ComboboxList>
                  </ComboboxContent>
                </Combobox>
              </div>
            }
            usage={`<Combobox>
  <ComboboxInput placeholder="Search fruit…" />
  <ComboboxContent>
    <ComboboxList>
      <ComboboxItem value="apple">Apple</ComboboxItem>
      <ComboboxItem value="banana">Banana</ComboboxItem>
    </ComboboxList>
  </ComboboxContent>
</Combobox>`}
          />
          <ComponentCard
            name="InputOTP"
            preview={
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
            }
            usage={`<InputOTP maxLength={6}>
  <InputOTPGroup>
    <InputOTPSlot index={0} />
    <InputOTPSlot index={1} />
    <InputOTPSlot index={2} />
    <InputOTPSlot index={3} />
    <InputOTPSlot index={4} />
    <InputOTPSlot index={5} />
  </InputOTPGroup>
</InputOTP>`}
          />
          <ComponentCard
            name="InputGroup"
            preview={
              <div className="w-full max-w-xs">
                <InputGroup>
                  <InputGroupAddon>
                    <SearchIcon className="size-4" />
                  </InputGroupAddon>
                  <InputGroupInput placeholder="Search…" />
                </InputGroup>
              </div>
            }
            usage={`<InputGroup>
  <InputGroupAddon>
    <SearchIcon className="size-4" />
  </InputGroupAddon>
  <InputGroupInput placeholder="Search…" />
</InputGroup>`}
          />
          <ComponentCard
            name="Calendar"
            preview={
              <Calendar mode="single" selected={date} onSelect={setDate} />
            }
            usage={`const [date, setDate] = React.useState<Date | undefined>()

<Calendar
  mode="single"
  selected={date}
  onSelect={setDate}
/>`}
          />
        </ComponentSection>

        {/* ── LAYOUT ── */}
        <ComponentSection id="layout" title="Layout">
          <ComponentCard
            name="Card"
            preview={
              <Card className="w-full max-w-xs">
                <CardHeader>
                  <CardTitle>Project Alpha</CardTitle>
                  <CardDescription>Launched 12 Jan 2025</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    All systems are green.
                  </p>
                </CardContent>
                <CardFooter>
                  <Button size="sm">View details</Button>
                </CardFooter>
              </Card>
            }
            usage={`<Card>
  <CardHeader>
    <CardTitle>Project Alpha</CardTitle>
    <CardDescription>Launched 12 Jan 2025</CardDescription>
  </CardHeader>
  <CardContent>
    <p>All systems are green.</p>
  </CardContent>
  <CardFooter>
    <Button size="sm">View details</Button>
  </CardFooter>
</Card>`}
          />
          <ComponentCard
            name="Separator"
            preview={
              <div className="w-full max-w-xs space-y-3">
                <p className="text-sm">Above the line</p>
                <Separator />
                <p className="text-sm">Below the line</p>
                <div className="flex items-center gap-3 pt-1">
                  <span className="text-sm">Left</span>
                  <Separator orientation="vertical" className="h-4" />
                  <span className="text-sm">Right</span>
                </div>
              </div>
            }
            usage={`{/* Horizontal */}
<Separator />

{/* Vertical */}
<Separator orientation="vertical" className="h-4" />`}
          />
          <ComponentCard
            name="Resizable"
            preview={
              <div className="h-32 w-full max-w-xs overflow-hidden rounded-lg border">
                <ResizablePanelGroup orientation="horizontal">
                  <ResizablePanel defaultSize={50}>
                    <div className="flex h-full items-center justify-center text-sm text-muted-foreground">
                      Left
                    </div>
                  </ResizablePanel>
                  <ResizableHandle />
                  <ResizablePanel defaultSize={50}>
                    <div className="flex h-full items-center justify-center text-sm text-muted-foreground">
                      Right
                    </div>
                  </ResizablePanel>
                </ResizablePanelGroup>
              </div>
            }
            usage={`<ResizablePanelGroup direction="horizontal">
  <ResizablePanel defaultSize={50}>
    Left panel
  </ResizablePanel>
  <ResizableHandle />
  <ResizablePanel defaultSize={50}>
    Right panel
  </ResizablePanel>
</ResizablePanelGroup>`}
          />
          <ComponentCard
            name="AspectRatio"
            preview={
              <div className="w-48">
                <AspectRatio
                  ratio={16 / 9}
                  className="flex items-center justify-center rounded-lg bg-muted text-sm text-muted-foreground"
                >
                  16 / 9
                </AspectRatio>
              </div>
            }
            usage={`<AspectRatio ratio={16 / 9} className="bg-muted rounded-lg">
  {/* content fills the ratio */}
</AspectRatio>`}
          />
          <ComponentCard
            name="ScrollArea"
            preview={
              <ScrollArea className="h-40 w-48 rounded-md border p-3">
                {Array.from({ length: 15 }, (_, i) => (
                  <p key={i} className="py-0.5 text-sm">
                    List item {i + 1}
                  </p>
                ))}
              </ScrollArea>
            }
            usage={`<ScrollArea className="h-40 rounded-md border p-3">
  {items.map((item) => (
    <p key={item.id}>{item.name}</p>
  ))}
</ScrollArea>`}
          />
        </ComponentSection>

        {/* ── NAVIGATION ── */}
        <ComponentSection id="navigation" title="Navigation">
          <ComponentCard
            name="Tabs"
            preview={
              <Tabs defaultValue="account" className="w-full max-w-xs">
                <TabsList className="w-full">
                  <TabsTrigger value="account" className="flex-1">
                    Account
                  </TabsTrigger>
                  <TabsTrigger value="settings" className="flex-1">
                    Settings
                  </TabsTrigger>
                  <TabsTrigger value="billing" className="flex-1">
                    Billing
                  </TabsTrigger>
                </TabsList>
                <TabsContent
                  value="account"
                  className="pt-3 text-sm text-muted-foreground"
                >
                  Account settings
                </TabsContent>
                <TabsContent
                  value="settings"
                  className="pt-3 text-sm text-muted-foreground"
                >
                  General settings
                </TabsContent>
                <TabsContent
                  value="billing"
                  className="pt-3 text-sm text-muted-foreground"
                >
                  Billing information
                </TabsContent>
              </Tabs>
            }
            usage={`<Tabs defaultValue="account">
  <TabsList>
    <TabsTrigger value="account">Account</TabsTrigger>
    <TabsTrigger value="settings">Settings</TabsTrigger>
  </TabsList>
  <TabsContent value="account">…</TabsContent>
  <TabsContent value="settings">…</TabsContent>
</Tabs>`}
          />
          <ComponentCard
            name="Breadcrumb"
            preview={
              <Breadcrumb>
                <BreadcrumbList>
                  <BreadcrumbItem>
                    <BreadcrumbLink href="#">Home</BreadcrumbLink>
                  </BreadcrumbItem>
                  <BreadcrumbSeparator />
                  <BreadcrumbItem>
                    <BreadcrumbLink href="#">Components</BreadcrumbLink>
                  </BreadcrumbItem>
                  <BreadcrumbSeparator />
                  <BreadcrumbItem>
                    <BreadcrumbPage>Breadcrumb</BreadcrumbPage>
                  </BreadcrumbItem>
                </BreadcrumbList>
              </Breadcrumb>
            }
            usage={`<Breadcrumb>
  <BreadcrumbList>
    <BreadcrumbItem>
      <BreadcrumbLink href="/">Home</BreadcrumbLink>
    </BreadcrumbItem>
    <BreadcrumbSeparator />
    <BreadcrumbItem>
      <BreadcrumbPage>Current page</BreadcrumbPage>
    </BreadcrumbItem>
  </BreadcrumbList>
</Breadcrumb>`}
          />
          <ComponentCard
            name="Pagination"
            preview={
              <Pagination>
                <PaginationContent>
                  <PaginationItem>
                    <PaginationPrevious href="#" />
                  </PaginationItem>
                  <PaginationItem>
                    <PaginationLink href="#">1</PaginationLink>
                  </PaginationItem>
                  <PaginationItem>
                    <PaginationLink href="#" isActive>
                      2
                    </PaginationLink>
                  </PaginationItem>
                  <PaginationItem>
                    <PaginationLink href="#">3</PaginationLink>
                  </PaginationItem>
                  <PaginationItem>
                    <PaginationNext href="#" />
                  </PaginationItem>
                </PaginationContent>
              </Pagination>
            }
            usage={`<Pagination>
  <PaginationContent>
    <PaginationItem>
      <PaginationPrevious href="/page/1" />
    </PaginationItem>
    <PaginationItem>
      <PaginationLink href="/page/2" isActive>2</PaginationLink>
    </PaginationItem>
    <PaginationItem>
      <PaginationNext href="/page/3" />
    </PaginationItem>
  </PaginationContent>
</Pagination>`}
          />
        </ComponentSection>

        {/* ── FEEDBACK ── */}
        <ComponentSection id="feedback" title="Feedback">
          <ComponentCard
            name="Alert"
            preview={
              <Alert className="w-full max-w-xs">
                <InfoIcon className="size-4" />
                <AlertTitle>Heads up!</AlertTitle>
                <AlertDescription>
                  You can update your settings any time.
                </AlertDescription>
              </Alert>
            }
            usage={`<Alert>
  <InfoIcon className="size-4" />
  <AlertTitle>Heads up!</AlertTitle>
  <AlertDescription>
    You can update your settings any time.
  </AlertDescription>
</Alert>`}
          />
          <ComponentCard
            name="Progress"
            preview={
              <div className="w-full max-w-xs space-y-3">
                <Progress
                  value={progress}
                  aria-label={`${progress}% complete`}
                />
                <div className="flex items-center justify-between">
                  <span className="text-sm text-muted-foreground">
                    {progress}%
                  </span>
                  <div className="flex gap-2">
                    <Button
                      size="sm"
                      variant="outline"
                      aria-label="Decrease progress"
                      onClick={() => setProgress((p) => Math.max(0, p - 10))}
                    >
                      −
                    </Button>
                    <Button
                      size="sm"
                      variant="outline"
                      aria-label="Increase progress"
                      onClick={() => setProgress((p) => Math.min(100, p + 10))}
                    >
                      +
                    </Button>
                  </div>
                </div>
              </div>
            }
            usage={`<Progress value={60} aria-label="60% complete" />`}
          />
          <ComponentCard
            name="Skeleton"
            preview={
              <div className="w-full max-w-xs space-y-3">
                <div className="flex items-center gap-3">
                  <Skeleton className="size-10 rounded-full" />
                  <div className="space-y-1.5">
                    <Skeleton className="h-3.5 w-28" />
                    <Skeleton className="h-3 w-20" />
                  </div>
                </div>
                <Skeleton className="h-20 w-full rounded-lg" />
              </div>
            }
            usage={`{/* Avatar + text skeleton */}
<div className="flex items-center gap-3">
  <Skeleton className="size-10 rounded-full" />
  <div className="space-y-1.5">
    <Skeleton className="h-3.5 w-28" />
    <Skeleton className="h-3 w-20" />
  </div>
</div>
<Skeleton className="h-20 w-full rounded-lg" />`}
          />
          <ComponentCard
            name="Spinner"
            preview={
              <div className="flex items-center gap-6">
                <Spinner className="size-4" />
                <Spinner className="size-6" />
                <Spinner className="size-8" />
              </div>
            }
            usage={`<Spinner />
<Spinner className="size-6" />
<Spinner className="size-8" />`}
          />
          <ComponentCard
            name="Empty"
            className="sm:col-span-2 lg:col-span-2"
            preview={
              <Empty className="w-full max-w-xs rounded-xl border">
                <EmptyHeader>
                  <EmptyTitle>No results found</EmptyTitle>
                </EmptyHeader>
                <EmptyContent>
                  <EmptyDescription>
                    Try adjusting your search or filters.
                  </EmptyDescription>
                  <Button size="sm" variant="outline">
                    Clear filters
                  </Button>
                </EmptyContent>
              </Empty>
            }
            usage={`<Empty>
  <EmptyHeader>
    <EmptyTitle>No results found</EmptyTitle>
  </EmptyHeader>
  <EmptyContent>
    <EmptyDescription>
      Try adjusting your search or filters.
    </EmptyDescription>
    <Button size="sm" variant="outline">Clear filters</Button>
  </EmptyContent>
</Empty>`}
          />
        </ComponentSection>

        {/* ── OVERLAYS ── */}
        <ComponentSection id="overlays" title="Overlays">
          <ComponentCard
            name="Dialog"
            preview={
              <Dialog>
                <DialogTrigger render={<Button variant="outline" />}>
                  Open dialog
                </DialogTrigger>
                <DialogContent>
                  <DialogHeader>
                    <DialogTitle>Edit profile</DialogTitle>
                    <DialogDescription>
                      Make changes to your profile here.
                    </DialogDescription>
                  </DialogHeader>
                  <Field>
                    <FieldLabel htmlFor="dg-dialog-name">Name</FieldLabel>
                    <Input
                      id="dg-dialog-name"
                      defaultValue="John Doe"
                      autoComplete="name"
                    />
                  </Field>
                  <div className="flex justify-end gap-2 pt-2">
                    <Button variant="outline">Cancel</Button>
                    <Button>Save changes</Button>
                  </div>
                </DialogContent>
              </Dialog>
            }
            usage={`<Dialog>
  <DialogTrigger asChild>
    <Button variant="outline">Open dialog</Button>
  </DialogTrigger>
  <DialogContent>
    <DialogHeader>
      <DialogTitle>Edit profile</DialogTitle>
      <DialogDescription>…</DialogDescription>
    </DialogHeader>
    {/* content */}
  </DialogContent>
</Dialog>`}
          />
          <ComponentCard
            name="AlertDialog"
            preview={
              <AlertDialog>
                <AlertDialogTrigger render={<Button variant="destructive" />}>
                  Delete account
                </AlertDialogTrigger>
                <AlertDialogContent>
                  <AlertDialogHeader>
                    <AlertDialogTitle>
                      Are you absolutely sure?
                    </AlertDialogTitle>
                    <AlertDialogDescription>
                      This action cannot be undone.
                    </AlertDialogDescription>
                  </AlertDialogHeader>
                  <AlertDialogFooter>
                    <AlertDialogCancel>Cancel</AlertDialogCancel>
                    <AlertDialogAction>Continue</AlertDialogAction>
                  </AlertDialogFooter>
                </AlertDialogContent>
              </AlertDialog>
            }
            usage={`<AlertDialog>
  <AlertDialogTrigger asChild>
    <Button variant="destructive">Delete</Button>
  </AlertDialogTrigger>
  <AlertDialogContent>
    <AlertDialogHeader>
      <AlertDialogTitle>Are you sure?</AlertDialogTitle>
      <AlertDialogDescription>
        This action cannot be undone.
      </AlertDialogDescription>
    </AlertDialogHeader>
    <AlertDialogFooter>
      <AlertDialogCancel>Cancel</AlertDialogCancel>
      <AlertDialogAction>Continue</AlertDialogAction>
    </AlertDialogFooter>
  </AlertDialogContent>
</AlertDialog>`}
          />
          <ComponentCard
            name="Sheet"
            preview={
              <Sheet>
                <SheetTrigger render={<Button variant="outline" />}>
                  Open sheet
                </SheetTrigger>
                <SheetContent>
                  <SheetHeader>
                    <SheetTitle>Edit settings</SheetTitle>
                    <SheetDescription>
                      Adjust your preferences here.
                    </SheetDescription>
                  </SheetHeader>
                </SheetContent>
              </Sheet>
            }
            usage={`<Sheet>
  <SheetTrigger asChild>
    <Button variant="outline">Open sheet</Button>
  </SheetTrigger>
  <SheetContent>
    <SheetHeader>
      <SheetTitle>Edit settings</SheetTitle>
      <SheetDescription>…</SheetDescription>
    </SheetHeader>
    {/* content */}
  </SheetContent>
</Sheet>`}
          />
          <ComponentCard
            name="Drawer"
            preview={
              <Drawer>
                <DrawerTrigger asChild>
                  <Button variant="outline">Open drawer</Button>
                </DrawerTrigger>
                <DrawerContent>
                  <DrawerHeader>
                    <DrawerTitle>Move goal</DrawerTitle>
                    <DrawerDescription>
                      Set your daily activity goal.
                    </DrawerDescription>
                  </DrawerHeader>
                  <div className="p-4" />
                </DrawerContent>
              </Drawer>
            }
            usage={`<Drawer>
  <DrawerTrigger asChild>
    <Button variant="outline">Open drawer</Button>
  </DrawerTrigger>
  <DrawerContent>
    <DrawerHeader>
      <DrawerTitle>Title</DrawerTitle>
      <DrawerDescription>Description</DrawerDescription>
    </DrawerHeader>
    {/* content */}
  </DrawerContent>
</Drawer>`}
          />
          <ComponentCard
            name="Popover"
            preview={
              <Popover>
                <PopoverTrigger render={<Button variant="outline" />}>
                  Open popover
                </PopoverTrigger>
                <PopoverContent className="w-64">
                  <p className="text-sm font-medium">Dimensions</p>
                  <p className="mt-1 text-xs text-muted-foreground">
                    Set the dimensions for the layer.
                  </p>
                </PopoverContent>
              </Popover>
            }
            usage={`<Popover>
  <PopoverTrigger asChild>
    <Button variant="outline">Open popover</Button>
  </PopoverTrigger>
  <PopoverContent className="w-64">
    <p className="text-sm">Content here</p>
  </PopoverContent>
</Popover>`}
          />
          <ComponentCard
            name="HoverCard"
            preview={
              <HoverCard>
                <HoverCardTrigger render={<Button variant="link" />}>
                  @nextjs
                </HoverCardTrigger>
                <HoverCardContent className="w-64">
                  <h4 className="text-sm font-semibold">@nextjs</h4>
                  <p className="mt-1 text-xs text-muted-foreground">
                    The React framework — created and maintained by Vercel.
                  </p>
                </HoverCardContent>
              </HoverCard>
            }
            usage={`<HoverCard>
  <HoverCardTrigger asChild>
    <Button variant="link">@nextjs</Button>
  </HoverCardTrigger>
  <HoverCardContent className="w-64">
    <h4 className="text-sm font-semibold">@nextjs</h4>
    <p className="text-xs text-muted-foreground">…</p>
  </HoverCardContent>
</HoverCard>`}
          />
          <ComponentCard
            name="DropdownMenu"
            preview={
              <DropdownMenu>
                <DropdownMenuTrigger render={<Button variant="outline" />}>
                  Open menu
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                  <DropdownMenuLabel>My Account</DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem>Profile</DropdownMenuItem>
                  <DropdownMenuItem>Settings</DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem className="text-destructive">
                    Sign out
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            }
            usage={`<DropdownMenu>
  <DropdownMenuTrigger asChild>
    <Button variant="outline">Open menu</Button>
  </DropdownMenuTrigger>
  <DropdownMenuContent>
    <DropdownMenuLabel>My Account</DropdownMenuLabel>
    <DropdownMenuSeparator />
    <DropdownMenuItem>Profile</DropdownMenuItem>
    <DropdownMenuItem>Settings</DropdownMenuItem>
  </DropdownMenuContent>
</DropdownMenu>`}
          />
          <ComponentCard
            name="ContextMenu"
            preview={
              <ContextMenu>
                <ContextMenuTrigger className="flex h-20 w-40 items-center justify-center rounded-lg border border-dashed text-sm text-muted-foreground">
                  Right-click here
                </ContextMenuTrigger>
                <ContextMenuContent>
                  <ContextMenuItem>Copy</ContextMenuItem>
                  <ContextMenuItem>Paste</ContextMenuItem>
                  <ContextMenuItem className="text-destructive">
                    Delete
                  </ContextMenuItem>
                </ContextMenuContent>
              </ContextMenu>
            }
            usage={`<ContextMenu>
  <ContextMenuTrigger className="…">
    Right-click here
  </ContextMenuTrigger>
  <ContextMenuContent>
    <ContextMenuItem>Copy</ContextMenuItem>
    <ContextMenuItem>Paste</ContextMenuItem>
  </ContextMenuContent>
</ContextMenu>`}
          />
          <ComponentCard
            name="Command"
            preview={
              <Command className="w-full max-w-xs rounded-lg border shadow-sm">
                <CommandInput placeholder="Type a command…" />
                <CommandList>
                  <CommandEmpty>No results found.</CommandEmpty>
                  <CommandGroup heading="Suggestions">
                    <CommandItem>Calendar</CommandItem>
                    <CommandItem>Search</CommandItem>
                    <CommandItem>Settings</CommandItem>
                  </CommandGroup>
                </CommandList>
              </Command>
            }
            usage={`<Command className="rounded-lg border">
  <CommandInput placeholder="Type a command…" />
  <CommandList>
    <CommandEmpty>No results found.</CommandEmpty>
    <CommandGroup heading="Suggestions">
      <CommandItem>Calendar</CommandItem>
      <CommandItem>Search</CommandItem>
    </CommandGroup>
  </CommandList>
</Command>`}
          />
        </ComponentSection>

        {/* ── DISPLAY ── */}
        <ComponentSection id="display" title="Display">
          <ComponentCard
            name="Badge"
            preview={
              <div className="flex flex-wrap justify-center gap-2">
                <Badge>Default</Badge>
                <Badge variant="secondary">Secondary</Badge>
                <Badge variant="outline">Outline</Badge>
                <Badge variant="destructive">Destructive</Badge>
              </div>
            }
            usage={`<Badge>Default</Badge>
<Badge variant="secondary">Secondary</Badge>
<Badge variant="outline">Outline</Badge>
<Badge variant="destructive">Destructive</Badge>`}
          />
          <ComponentCard
            name="Avatar"
            preview={
              <div className="flex items-center gap-3">
                <Avatar className="size-12">
                  <AvatarFallback>JD</AvatarFallback>
                </Avatar>
                <Avatar className="size-9">
                  <AvatarFallback>AB</AvatarFallback>
                </Avatar>
                <Avatar className="size-6">
                  <AvatarFallback>XY</AvatarFallback>
                </Avatar>
              </div>
            }
            usage={`<Avatar>
  {/* Image takes priority over fallback */}
  <AvatarImage src="/avatar.png" alt="John Doe" />
  <AvatarFallback>JD</AvatarFallback>
</Avatar>`}
          />
          <ComponentCard
            name="Table"
            className="sm:col-span-2"
            preview={
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Name</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead className="text-right">Amount</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow>
                    <TableCell className="font-medium">Alice</TableCell>
                    <TableCell>
                      <Badge variant="secondary">Active</Badge>
                    </TableCell>
                    <TableCell className="text-right">$250.00</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">Bob</TableCell>
                    <TableCell>
                      <Badge variant="outline">Pending</Badge>
                    </TableCell>
                    <TableCell className="text-right">$150.00</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            }
            usage={`<Table>
  <TableHeader>
    <TableRow>
      <TableHead>Name</TableHead>
      <TableHead>Status</TableHead>
      <TableHead className="text-right">Amount</TableHead>
    </TableRow>
  </TableHeader>
  <TableBody>
    <TableRow>
      <TableCell>Alice</TableCell>
      <TableCell><Badge>Active</Badge></TableCell>
      <TableCell className="text-right">$250.00</TableCell>
    </TableRow>
  </TableBody>
</Table>`}
          />
          <ComponentCard
            name="Accordion"
            preview={
              <Accordion className="w-full max-w-xs">
                <AccordionItem value="a1">
                  <AccordionTrigger>Is it accessible?</AccordionTrigger>
                  <AccordionContent>
                    Yes. Built on Radix UI primitives.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="a2">
                  <AccordionTrigger>Is it styled?</AccordionTrigger>
                  <AccordionContent>
                    Yes. Styled with Tailwind CSS.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="a3">
                  <AccordionTrigger>Is it animated?</AccordionTrigger>
                  <AccordionContent>
                    Yes. Smooth open/close transitions.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            }
            usage={`<Accordion type="single" collapsible>
  <AccordionItem value="item-1">
    <AccordionTrigger>Is it accessible?</AccordionTrigger>
    <AccordionContent>
      Yes. Built on Radix UI primitives.
    </AccordionContent>
  </AccordionItem>
</Accordion>`}
          />
          <ComponentCard
            name="Collapsible"
            preview={
              <Collapsible className="w-full max-w-xs space-y-2">
                <div className="flex items-center justify-between">
                  <h4 className="text-sm font-medium">Starred repos</h4>
                  <CollapsibleTrigger
                    render={
                      <Button
                        variant="ghost"
                        size="sm"
                        aria-label="Toggle starred repos"
                      />
                    }
                  >
                    <ChevronDownIcon className="size-4" />
                  </CollapsibleTrigger>
                </div>
                <div className="rounded-md border px-4 py-2.5 text-sm">
                  @vercel/next.js
                </div>
                <CollapsibleContent className="space-y-2">
                  <div className="rounded-md border px-4 py-2.5 text-sm">
                    @shadcn/ui
                  </div>
                  <div className="rounded-md border px-4 py-2.5 text-sm">
                    @radix-ui/react
                  </div>
                </CollapsibleContent>
              </Collapsible>
            }
            usage={`<Collapsible>
  <CollapsibleTrigger asChild>
    <Button variant="ghost" size="sm" aria-label="Toggle">
      <ChevronDownIcon className="size-4" />
    </Button>
  </CollapsibleTrigger>
  <div>Always visible content</div>
  <CollapsibleContent>
    Hidden until toggled
  </CollapsibleContent>
</Collapsible>`}
          />
        </ComponentSection>

        {/* ── UTILITY ── */}
        <ComponentSection id="utility" title="Utility">
          <ComponentCard
            name="Label"
            preview={
              <div className="flex flex-col gap-1.5">
                <Label htmlFor="dg-label-demo">Email address</Label>
                <Input
                  id="dg-label-demo"
                  type="email"
                  placeholder="you@example.com"
                  autoComplete="email"
                  spellCheck={false}
                  className="max-w-xs"
                />
              </div>
            }
            usage={`<Label htmlFor="email">Email address</Label>
<Input
  id="email"
  type="email"
  placeholder="you@example.com"
  autoComplete="email"
/>`}
          />
          <ComponentCard
            name="Kbd"
            preview={
              <div className="space-y-3">
                <div className="flex items-center gap-1.5">
                  <Kbd>⌘</Kbd>
                  <span className="text-xs text-muted-foreground">+</span>
                  <Kbd>K</Kbd>
                  <span className="ml-2 text-sm text-muted-foreground">
                    Command palette
                  </span>
                </div>
                <div className="flex items-center gap-1.5">
                  <Kbd>⌘</Kbd>
                  <span className="text-xs text-muted-foreground">+</span>
                  <Kbd>S</Kbd>
                  <span className="ml-2 text-sm text-muted-foreground">
                    Save
                  </span>
                </div>
              </div>
            }
            usage={`<div className="flex items-center gap-1.5">
  <Kbd>⌘</Kbd>
  <span>+</span>
  <Kbd>K</Kbd>
  <span>Open command palette</span>
</div>`}
          />
          <ComponentCard
            name="Item"
            preview={
              <ItemGroup className="w-full max-w-xs">
                <Item variant="outline">
                  <ItemContent>
                    <ItemTitle>First item</ItemTitle>
                    <ItemDescription>
                      A brief description of the first item.
                    </ItemDescription>
                  </ItemContent>
                </Item>
                <Item variant="outline">
                  <ItemContent>
                    <ItemTitle>Second item</ItemTitle>
                    <ItemDescription>
                      A brief description of the second item.
                    </ItemDescription>
                  </ItemContent>
                </Item>
              </ItemGroup>
            }
            usage={`<ItemGroup>
  <Item variant="outline">
    <ItemContent>
      <ItemTitle>First item</ItemTitle>
      <ItemDescription>
        A brief description.
      </ItemDescription>
    </ItemContent>
  </Item>
</ItemGroup>`}
          />
          <ComponentCard
            name="Tooltip"
            preview={
              <div className="flex flex-wrap gap-4">
                <Tooltip>
                  <TooltipTrigger
                    render={<Button variant="outline" size="sm" />}
                  >
                    Hover me
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>This is a tooltip</p>
                  </TooltipContent>
                </Tooltip>
                <Tooltip>
                  <TooltipTrigger
                    render={
                      <Button
                        variant="ghost"
                        size="icon"
                        aria-label="More information"
                      />
                    }
                  >
                    <InfoIcon className="size-4" />
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Icon tooltips too</p>
                  </TooltipContent>
                </Tooltip>
              </div>
            }
            usage={`// Wrap your app with <TooltipProvider>
<Tooltip>
  <TooltipTrigger asChild>
    <Button variant="outline">Hover me</Button>
  </TooltipTrigger>
  <TooltipContent>
    <p>This is a tooltip</p>
  </TooltipContent>
</Tooltip>`}
          />
        </ComponentSection>
      </div>
    </TooltipProvider>
  );
}
