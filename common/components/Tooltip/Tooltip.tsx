import * as TooltipPrimitive from "@radix-ui/react-tooltip";
import { InfoCircledIcon } from "@radix-ui/react-icons";

type ComponentProps = {
  children: string | JSX.Element;
};

const Tooltip = ({ children }: ComponentProps) => (
  <TooltipPrimitive.Provider delayDuration={300}>
    <TooltipPrimitive.Root>
      <TooltipPrimitive.Trigger asChild className="">
        <button type="button" className="focus:outline-none">
          <InfoCircledIcon />
        </button>
      </TooltipPrimitive.Trigger>
      <TooltipPrimitive.Portal>
        <TooltipPrimitive.Content className="p-2 text-sm text-center rounded shadow-lg bg-zinc-300 animate-fadeIn dark:bg-zinc-700">
          {children}
          <TooltipPrimitive.Arrow className="fill-zinc-300 dark:fill-zinc-700" />
        </TooltipPrimitive.Content>
      </TooltipPrimitive.Portal>
    </TooltipPrimitive.Root>
  </TooltipPrimitive.Provider>
);

export default Tooltip;
