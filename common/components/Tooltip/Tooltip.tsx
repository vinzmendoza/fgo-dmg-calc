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
        <TooltipPrimitive.Content className="p-2 text-sm text-center rounded shadow bg-neutral-200 animate-fadeIn">
          {children}
          <TooltipPrimitive.Arrow className=" fill-neutral-200" />
        </TooltipPrimitive.Content>
      </TooltipPrimitive.Portal>
    </TooltipPrimitive.Root>
  </TooltipPrimitive.Provider>
);

export default Tooltip;
